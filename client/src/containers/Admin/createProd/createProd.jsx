import { useState } from "react";
import { SelectProv } from "./selectProv";
import style from "./styles/createProd.module.css";
import { SelectCategoria } from "./selectCategoria";
import { AiOutlineFileImage } from "react-icons/ai";
import { CircularProgress } from "@mui/material";
// import { CheckCircleIcon, ErrorIcon } from '@mui/icons-material'
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import { useDispatch } from "react-redux";
import { createProd } from "../../../../actions";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { Footer } from "../../../components";

export const CreateProd = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    nombre: "",
    descripcion: "",
    catalogo: "",
    categoria: "",
    prov: "",
    img: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const [loading, setLoading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadError, setUploadError] = useState(false);

  // console.log("INPUT", input);

  const handleChangeImg = async (e) => {
    setLoading(true);
    setUploadSuccess(false);
    setUploadError(false);
    const data = new FormData();
    data.append("file", e.target.files[0]);
    data.append("upload_preset", "sondafiles");
    data.append("api_key", "779976812987324");
    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dczvbrmbv/upload",
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
      title: "Producto creado con éxito",
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
      dispatch(createProd(input)).then((response) => {
        console.log("response", response);
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
            Volver al panel
          </Link>
          <h1 className="text-center text-6xl text-white text-transparent bg-clip-text bg-gradient-to-t from-cyan-900 to-cyan-300 font-semibold">
            Productos
          </h1>
        </div>
        <div>
          <div className={style.contSubtitle}>
            <h1>Complete todos los campos para crear un nuevo item</h1>
          </div>
          <div className={style.contForm}>
            <div className={style.contTwoProd}>
              <input
                type="text"
                name="nombre"
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
                name="catalogo"
                placeholder="URL al catálogo"
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
              Confirmar
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
