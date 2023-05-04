import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdmin, getProdsId, updateProd } from "../../../../actions";
import { Link, useParams } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import ErrorIcon from "@mui/icons-material/Error";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { CircularProgress } from "@mui/material";
import { AiOutlineFileImage } from "react-icons/ai";
import style from "./styles/updateProd.module.css";
import { SelectCategoria } from "../createProd/selectCategoria";
import { SelectProv } from "../createProd/selectProv";
import { Footer } from "../../../components";
import Swal from "sweetalert2";
const {VITE_CLOUDINARY_API_KEY, VITE_CLOUD_NAME} = import.meta.env

export const UpdateProd = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const item = useSelector((state) => state.detail);
  const [loading, setLoading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadError, setUploadError] = useState(false);
  const [input, setInput] = useState({
    nombre: "",
    descripcion: "",
    catalogo: "",
    categoria: "",
    prov: "",
    img: "",
  });

  const [isAdmin, setIsAdmin] = useState(false)
  console.log('is Admin', isAdmin)
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    dispatch(getAdmin(user)).then((response) => {
      console.log('response', response)
      if (response.status === 200 && response.data.length) {
        setIsAdmin(true)
      }
    })
  },[])
  // console.log('form', input)
  const completeForm = () => {
    if (item) {
      setInput({
        nombre: item.nombre || "",
        descripcion: item.descripcion || "",
        catalogo: item.catalogo || "",
        categoria: item.categoria || "",
        prov: item.prov || "",
        img: item.img || "",
      });
      if (item.img) {
        setUploadSuccess(true);
      }
    }
  };

  useEffect(() => {
    completeForm();
  }, [item]);

  // console.log('Params', params)
  useEffect(() => {
    dispatch(getProdsId(params.id))
  }, []);

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
          console.log("Imagen cargada con exito");
          const file = await res.json();
          setInput({
            ...input,
            img: file.secure_url,
          });
          setLoading(false);
          setUploadSuccess(true);
        } else {
          setLoading(false);
          setUploadError(true);
          console.log("Error al cargar la imagen");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const sweetAlertConfirm = () => {
    return Swal.fire({
      title: "Producto actualizado con éxito",
      showCancelButton: true,
      confirmButtonText: "Continuar",
      icon: "success",
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

  const handleSubmit = () => {
    if (
      input.nombre &&
      input.descripcion &&
      input.catalogo &&
      input.categoria &&
      input.prov &&
      input.img
    ) {
      dispatch(updateProd(input, params.id)).then((response) => {
        sweetAlertConfirm();
      });
    } else {
      sweetError();
    }
  };

  return (
    <>
      <main className="min-h-[calc(100vh-80px)] bg-gray-300 pt-24  flex flex-col items-center">
        <div className={style.contTitle}>
          <Link to="/admin" className={style.title}>
            <BsFillArrowLeftCircleFill
              size={24}
              className="cursor-pointer text-cyan-900 "
            />
          </Link>
          <h1 className="text-center text-6xl text-white text-transparent bg-clip-text bg-gradient-to-t from-cyan-900 to-cyan-300 font-semibold">
            Productos
          </h1>
        </div>
        {
          isAdmin ? (
            <div className={style.contGral}>
              <div className={style.contSubtitle}>
                <h1>
                  Recuerde completar todos los campos para actualizar el producto.
                </h1>
              </div>
              <div className={style.contForm}>
                <div className={style.contTwoProd}>
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    value={input.nombre}
                    className={style.inputUrl}
                    onChange={(e) => handleChange(e)}
                  />
                  <textarea
                    placeholder="Descripcion..."
                    name="descripcion"
                    rows="6"
                    cols="50"
                    value={input.descripcion}
                    className={style.textareaProd}
                    onChange={(e) => handleChange(e)}
                  />
                  <input
                    type="text"
                    name="catalogo"
                    placeholder="URL al catálogo"
                    value={input.catalogo}
                    className={style.inputUrl}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className={style.contOneProd}>
                  <SelectCategoria setInput={setInput} input={input} />
                  <SelectProv setInput={setInput} input={input} />
                  <label htmlFor="select-img" className={style.contSelectImg}>
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
                      id="select-img"
                      className={style.inputFile}
                      onChange={(e) => handleChangeImg(e)}
                    />
                  </label>
                </div>
              </div>
              <div className={style.contBtn}>
                <button className={style.btnConfirm} onClick={handleSubmit}>
                  Actualizar
                </button>
              </div>
            </div>
          ): <h1 style={{fontSize:'20px'}}>Pagina no disponible</h1>
        }
      </main>
      <Footer />
    </>
  );
};
