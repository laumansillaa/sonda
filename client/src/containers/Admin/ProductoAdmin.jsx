import style from "./styles/panelProd.module.css";
import { GrAddCircle } from "react-icons/gr";
import add from "./assets/add.svg";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterProd, getProds } from "../../../actions";
import { CardProd } from "./cards/cardProd";
import { Link } from "react-router-dom";
import { Footer } from "../../components";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

export const PanelProducto = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.prod);

  useEffect(() => {
    dispatch(getProds());
  }, []);

  const handleFilterProds = (e) => {
    dispatch(filterProd(e.target.value))
  }

  return (
    <>
      <main className="min-h-[calc(100vh-80px)] bg-gray-300 pt-24  flex flex-col items-center">
        <div className={style.contTitleProd}>
          <div className={style.box}>
            <Link to="/admin" className={style.icon}>
              <BsFillArrowLeftCircleFill
                size={30}
              />
            </Link>
            <h1 className="text-center text-6xl text-white text-transparent bg-clip-text bg-gradient-to-t from-cyan-900 to-cyan-300 font-semibold">
              Productos
            </h1>
          </div>
          <div className={style.contBtnAction}>
            <select className={style.btnFilter}
              onChange={(e) => handleFilterProds(e)}
            >
              <option disabled selected >Filtrar</option>
              <option value='todo'> Todo </option>
              <option value='fitok'  >Fitok</option>
              <option value='emerson' >Emerson</option>
            </select>
            <Link
              to="/admin/prods/create"
              className="flex items-center justify-center gap-4 bg-gradient-to-r text-white from-cyan-500 to-cyan-900 border border-solid border-white w-32 h-11 
                        rounded-md font-medium"
            >
              Agregar <GrAddCircle className="text-white" />
            </Link>
          </div>
        </div>
        <div className={style.contCards}>
          {state
            ? state.map((item, index) => {
                return <CardProd item={item} key={index} />;
              })
            : null}
        </div>
      </main>
      <Footer />
    </>
  );
};
