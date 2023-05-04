import { Link, useNavigate } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { AiOutlineFileImage } from "react-icons/ai";
import { CircularProgress } from "@mui/material";
import style from "./styles/createCurso.module.css";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { Footer } from "../../../components";
import { useDispatch } from "react-redux";
import { createCurso, getAdmin } from "../../../../actions";
const {VITE_CLOUDINARY_API_KEY, VITE_CLOUD_NAME} = import.meta.env

export const CreateCurso = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadError, setUploadError] = useState(false);
  const [input, setInput] = useState({
    title: "",
    descripcion: "",
    fecha: "",
    horario: "",
    mainImage: "",
  });

  const [isAdmin, setIsAdmin] = useState(false)
  console.log('is Admin', isAdmin)
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    dispatch(getAdmin(user)).then((response) => {
      console.log('response', response)
      if (response.status === 200) {
        setIsAdmin(true)
      }
    })
  },[])

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeImg = async (e) => {
    setLoading(true);
    setUploadSuccess(false);
    setUploadError(false);
    const data = new FormData();
    data.append("file", e.target.files[0]);
    data.append("upload_preset", "sondafiles");
    data.append("api_key", VITE_CLOUDINARY_API_KEY);
    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${VITE_CLOUD_NAME}/upload`,
        {
          method: "POST",
          body: data,
        }
      );
      if (res) {
        if (res.status === 200) {
          //   console.log("Imagen cargada con exito");
          const file = await res.json();
          setInput({
            ...input,
            mainImage: file.secure_url,
          });
          setLoading(false);
          setUploadSuccess(true);
        } else {
          setLoading(false);
          setUploadError(true);
          //   console.log("Error al cargar la imagen");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const sweetAlertConfirm = () => {
    return Swal.fire({
      title: "Producto creado con éxito",
      showCancelButton: true,
      confirmButtonText: "Continuar",
      icon: "success",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/admin/curso')
      }
    });
  };

  const sweetError = () => {
    return Swal.fire({
      title: "Atención",
      text: "Asegurese de haber completado todos los campos, y haber cargado la imágen requerida.",
      icon: "error",
      confirmButtonText: "Continuar",
    });
  };

  const sweetErrorInternal = () => {
    return Swal.fire({
      title: "Atención",
      text: "Se produjo un error interno al crear el curso. Asegurese de tener una conexión estable a internet, o vuelva a intentarlo.",
      icon: "error",
      confirmButtonText: "Continuar",
    });
  };
// console.log('Input', input)
  const handleSubmit = () => {
    if (
      !input.title ||
      !input.descripcion ||
      !input.fecha ||
      !input.horario ||
      !input.mainImage
    ) {
      sweetError()
    } else {
      dispatch(createCurso(input)).then((response) => {
        sweetAlertConfirm()
      }).catch((error) => {
        sweetErrorInternal()
      })
    }
  };

  return (
    <>
      <main className="min-h-[calc(100vh-80px)] bg-gray-300 pt-24  flex flex-col items-center">
        <div className={style.contTitle}>
          <Link to="/admin" className={style.title}>
            <BsFillArrowLeftCircleFill
              size={30}
            />
          </Link>
          <h1 className="text-center text-6xl text-white text-transparent bg-clip-text bg-gradient-to-t from-cyan-900 to-cyan-300 font-semibold">
            Cursos
          </h1>
        </div>
        {
          isAdmin && (
            <div className={style.contGeneral}>
              <div className={style.contSubtitle}>
                <h1>Complete todos los campos para crear un nuevo item</h1>
              </div>
              <div className={style.contForm}>
                <div className={style.contTwoProd}>
                  <input
                    type="text"
                    name="title"
                    placeholder="Nombre"
                    className={style.inputUrl}
                    onChange={(e) => handleChange(e)}
                  />
                  <textarea
                    placeholder="Descripcion..."
                    name="descripcion"
                    rows="6"
                    cols="50"
                    className={style.textareaProd}
                    onChange={(e) => handleChange(e)}
                  />
                  <input
                    type="text"
                    name="fecha"
                    placeholder="Fecha"
                    className={style.inputUrl}
                    onChange={(e) => handleChange(e)}
                  />
                  <input
                    type="text"
                    name="horario"
                    placeholder="Horario"
                    className={style.inputUrl}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className={style.contOneProd}>
                  <label htmlFor="create-curso-img" className={style.contSelectImg}>
                    <h3 className={style.titleInput}>Seleccione una imágen</h3>
                    {!loading && !uploadSuccess && !uploadError && (
                      <AiOutlineFileImage size={22} />
                    )}
                    {loading && <CircularProgress size={22} />}
                    {uploadSuccess ? (
                      <CheckCircleIcon size={22} sx={{ color: "green" }} />
                    ) : null}
                    {uploadError ? (
                      <ErrorIcon size={22} sx={{ color: "red" }} />
                    ) : null}

                    <input
                      type="file"
                      name="img"
                      accept=".jepg, .png, .jpg"
                      id="create-curso-img"
                      className={style.inputFile}
                      onChange={(e) => handleChangeImg(e)}
                    />
                  </label>
                </div>
              </div>
              <button className={style.btnConfirm} onClick={handleSubmit}>
                Confirmar
              </button>
            </div>
          )
        }
      </main>
      <Footer />
    </>
  );
};
