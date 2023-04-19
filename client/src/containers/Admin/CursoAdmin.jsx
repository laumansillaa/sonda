import style from "./styles/panelCurso.module.css";
import { GrAddCircle } from "react-icons/gr";
import add from "./assets/add.svg";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCursos, getProds } from "../../../actions";
import { CardProd } from "./cards/cardProd";
import { Link } from "react-router-dom";
import { Footer } from "../../components";
import { CardCurso } from "./cards/cardCurso";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

export const PanelCurso = () => {
  const dispatch = useDispatch();
  const cursoState = useSelector((state) => state.curso);
  console.log("State", cursoState);
  useEffect(() => {
    dispatch(getCursos());
  }, []);

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
              Cursos
            </h1>
          </div>
          <div className={style.contBtnAction}>
            <Link
              to="/admin/curso/create"
              className="flex items-center justify-center gap-4 bg-gradient-to-r text-white from-cyan-500 to-cyan-900 border border-solid border-white w-32 h-11 
                        rounded-md font-medium"
            >
              Agregar <GrAddCircle className="text-white" />
            </Link>
          </div>
        </div>
        <div className={style.contCards}>
          {cursoState?.length >= 1
            ? cursoState.map((curso, index) => {
                return <CardCurso curso={curso} key={index} />;
              })
            : null}
          {/* {state && <h1>Hola</h1>} */}
        </div>
      </main>
      <Footer />
    </>
  );
};
