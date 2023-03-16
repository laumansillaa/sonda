import { Link } from "react-router-dom";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import Footer from "../components/Footer";

const Productos = () => {
  return (
    <>
      <main className="min-h-[calc(100vh-80px)] bg-gray-300 pt-24">
        <h1 className="text-center text-6xl text-white py-10 text-transparent bg-clip-text bg-gradient-to-t from-cyan-900 to-cyan-300 font-semibold">
          Nuestros Productos
        </h1>

        <div className="flex flex-col lg:flex-row items-center justify-around space-y-20 lg:space-y-0 lg:mt-20 pb-20 lg:pb-0">
          <div className="flex flex-col items-center space-y-5">
            <img
              src="/emerson.png"
              alt="emerson"
              className="w-80 lg:w-96 h-32 aspect-square object-contain"
            />
            <Link
              to="/productos/emerson"
              className="mt-5 w-64 bg-gradient-to-r text-white from-cyan-500 to-cyan-900 px-4 py-2 rounded-lg hover:opacity-90 transition-all ease-in-out flex-1 text-center flex items-center justify-center space-x-2"
            >
              <span>Ver Productos</span>
              <BsFillArrowRightCircleFill size={20} />
            </Link>
          </div>

          <div className="flex flex-col items-center space-y-5">
            <img
              src="/fitok.png"
              alt="fitok"
              className="w-80 lg:w-96 h-32 aspect-square object-contain"
            />
            <Link
              to="/productos/fitok"
              className="mt-5 w-64 bg-gradient-to-r text-white from-cyan-500 to-cyan-900 px-4 py-2 rounded-lg hover:opacity-90 transition-all ease-in-out flex-1 text-center flex items-center justify-center space-x-2"
            >
              <span>Ver Productos</span>
              <BsFillArrowRightCircleFill size={20} />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Productos;
