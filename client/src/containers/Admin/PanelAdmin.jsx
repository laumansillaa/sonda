import { Link } from "react-router-dom";
import style from "./styles/panel.module.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import bookImg from './assets/book.svg'
import boxImg from './assets/box.svg'
import { Footer } from "../../components";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getAdmin } from "../../actions";

export const PanelAdmin = () => {

  const dispatch = useDispatch()
  const [isAdmin, setIsAdmin] = useState(false)
  console.log('is Admin', isAdmin)
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    console.log('USER', user)
    dispatch(getAdmin(user)).then((response) => {
      console.log('response', response)
      if (response.status === 200 && response.data.length) {
        setIsAdmin(true)
      }
    })
  },[])

  return (
    <>
      <main className="min-h-[calc(100vh-80px)] bg-gray-300 pt-24  flex flex-col items-center">
        <h1 className="text-center text-6xl text-white py-10 text-transparent bg-clip-text bg-gradient-to-t from-cyan-900 to-cyan-300 font-semibold">
          Panel Admin
        </h1>
        <div className={style.contItems}>
          {
            isAdmin ? (
              <>
                <div className="flex flex-col items-center gap-8">
                    <img src={boxImg} alt='boxImg' className="h-28"/>
                    <Link
                        to="/admin/prods"
                        className="mt-5 w-64 bg-gradient-to-r text-white from-cyan-500 to-cyan-900 px-4 py-2 rounded-lg hover:opacity-90 transition-all ease-in-out flex-1 text-center flex items-center justify-center space-x-2"
                    >
                        <span>Productos</span>
                        <BsFillArrowRightCircleFill size={20} />
                    </Link>
                </div>
                <div className="flex flex-col items-center gap-8">
                    <img src={bookImg} alt='bookImg' className="h-28" />
                    <Link
                        to="/admin/curso"
                        className="mt-5 w-64 bg-gradient-to-r text-white from-cyan-500 to-cyan-900 px-4 py-2 rounded-lg hover:opacity-90 transition-all ease-in-out flex-1 text-center flex items-center justify-center space-x-2"
                    >
                        <span>Cursos</span>
                        <BsFillArrowRightCircleFill size={20} />
                    </Link>
                </div>
              </>
            ) : <h1 style={{fontSize:'20px'}}>Pagina no disponible</h1>
          }
        </div>
      </main>
      <Footer/>
    </>
  );
};
