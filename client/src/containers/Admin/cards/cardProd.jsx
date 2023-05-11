import style from "./style/cardProd.module.css";
import imagen from "../../../assets/emerson.png";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { deleteProds, getProds } from "../../../actions";

export const CardProd = ({ item }) => {
  const dispatch = useDispatch();

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
        dispatch(deleteProds(item.id)).then((response) => {
          if (response.status === 200) {
            dispatch(getProds());
          }
        });
      }
    });
  };

  return (
    <div className={style.contCard}>
      <div className={style.contImg}>
        <img src={item.img} alt={"img-prod"} className={style.imgCard} />
      </div>
      <div className={style.contInfo}>
        <div className={style.contTitle}>
          <h3 className={style.titleCard}>{item.nombre}</h3>
        </div>
        <div className={style.contDescripcion}>
          <h3 className={style.descripcionCard}>{item.descripcion}</h3>
        </div>
        <div className={style.contProv}>
          <h3 className={style.prov}>
            <label>Categoria: </label>
            {item.categoria}
          </h3>
          <h3 className={style.prov}>
            <label className="">Proveedor:</label> {item.prov}
          </h3>
        </div>
        <a href={item.catalogo} target="_blank" className={style.contCatalogo}>
          Ir al catálogo
        </a>
      </div>
      <div className={style.contBtn}>
        <button className={style.btnCard} onClick={() => handleDeleteProd()}>
          <AiFillDelete />
        </button>
        <Link to={`/admin/prods/update/${item.id}`} className={style.btnCardEdit}  >
          <AiFillEdit />
        </Link>
      </div>
    </div>
  );
};

// white-space: nowrap;
// overflow:hidden !important;
// text-overflow: ellipsis;