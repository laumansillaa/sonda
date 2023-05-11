import style from "./style/cardCurso.module.css";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { deleteCurso, getCursos } from "../../../actions";

export const CardCurso = ({ curso }) => {
  const dispatch = useDispatch()
  const handleDeleteProd = () => {
    sweetAlertConfirm();
  };

  const sweetAlertConfirm = () => {
    return Swal.fire({
      title: "¿Seguro quieres eliminar este producto?",
      showCancelButton: true,
      confirmButtonText: "Eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteCurso(curso.id)).then((response) => {
          console.log(response)
          if (response.status === 200) {
            dispatch(getCursos())
          }
        })
      }
    });
  };

  
  return (
    <div className={style.contCardCurso}>
      <div className={style.contImg}>
        <img src={curso.mainImage} alt="img" className={style.imgCurso} />
      </div>
      <div className={style.info} >
        <div className={style.contTitle}>
            <h3 className={style.titleCard}>{curso.title}</h3>
        </div>
        <div className={style.contInfo}>
            <h3>
            <label className={style.fecha}>Fecha: </label>
            {curso.fecha}
            </h3>
            <h3>
            <label className={style.fecha}>Horario: </label>
            {curso.horario}
            </h3>
        </div>
        <div className={style.contDescription}>
            <h3>{curso.descripcion}</h3>
        </div>
      </div>
      <div className={style.contBtn}>
        <button className={style.btnCard} onClick={() => handleDeleteProd()}>
          <AiFillDelete />
        </button>
        <Link
          to={`/admin/curso/update/${curso.id}`}
          className={style.btnCardEdit}
        >
          <AiFillEdit />
        </Link>
      </div>
    </div>
  );
};
