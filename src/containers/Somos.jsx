import Footer from "../components/Footer";
import { MdEmail } from "react-icons/md";

const Somos = () => {
  return (
    <>
      <main className="min-h-[calc(100vh-80px)] bg-gray-300 pt-24 pb-36">
        <h1 className="text-center text-6xl text-white py-10 text-transparent bg-clip-text bg-gradient-to-t from-cyan-900 to-cyan-300 font-semibold">
          Quienes Somos
        </h1>

        <div className="flex flex-wrap items-center gap-14">
          <p className="text-white font-semibold leading-7 text-lg w-4/5 lg:w-2/5 mx-auto text-center bg-gradient-to-r from-cyan-500 to-cyan-900 p-10 rounded-xl">
            Sonda S.R.L. se fundo en el 2008 con una misión clara: “Brindar
            servicios de excelencia a la industria del gas y petróleo”, desde
            ese momento fuimos creciendo, teniendo como horizonte la
            satisfacción de nuestros clientes.
          </p>
          <img
            src="/decisions.svg"
            alt="decisions"
            className="w-96 aspect-square mx-auto"
          />
        </div>

        <div className="flex flex-wrap items-center gap-14">
          <p className="text-white font-semibold leading-7 text-lg w-4/5 lg:w-2/5 mx-auto text-center bg-gradient-to-r from-cyan-500 to-cyan-900 p-10 rounded-xl lg:order-2">
            Desde su fundación Sonda ha mostrado un crecimiento sostenible tanto
            en cuotas de mercado como en estructura, en el 2014 logramos ser
            nombrados representante de Emerson Argentina para la prestación de
            servicio de mantenimiento de equipos cromatográficos. En el 2016
            fuimos autorizados por Emerson para vender repuestos y los equipos
            cromatográficos, responsabilidad que hemos asumido y demostrado
            estar a la altura de las circunstancias.
          </p>
          <img
            src="/business.svg"
            alt="business"
            className="w-96 aspect-square mx-auto lg:order-1"
          />
        </div>

        <div className="flex flex-wrap items-center gap-14">
          <p className="text-white font-semibold leading-7 text-lg w-4/5 lg:w-2/5 mx-auto text-center bg-gradient-to-r from-cyan-500 to-cyan-900 p-10 rounded-xl">
            Actualmente SONDA S.R.L. cuanta con clientes de envergadura como
            son: Total Austral con contratos de mantenimiento para los
            yacimientos de: Tierra del Fuego y Neuquén, Pan American Energy,
            CGC, Metrogas, e YPF.
          </p>
          <img
            src="/collaboration.svg"
            alt="collaboration"
            className="w-96 aspect-square mx-auto"
          />
        </div>

        <div className="flex flex-wrap items-center gap-14">
          <p className="text-white font-semibold leading-7 text-lg w-4/5 lg:w-2/5 mx-auto text-center bg-gradient-to-r from-cyan-500 to-cyan-900 p-10 rounded-xl lg:order-2">
            En el año 2021 nos propusimos dos grandes objetivos para el 2026:
            primero, encontrar una nueva rama de negocios que sea compatible con
            el mercado que nosotros conocemos y, segundo ampliar nuestra oferta
            de servicios incorporando la elaboración de gabinetes. Lo dos
            primeros pasos que ya fueron dados; hemos adquirido un espacio
            propio que nos permitirá tener un taller preparado para la
            elaboración de gabinetes, y un laboratorio electrónico mejor
            equipado. Y hemos logrado ser nombrados por FITOK como
            distribuidores oficiales para el 2023.
          </p>
          <img
            src="/tasks.svg"
            alt="tasks"
            className="w-96 aspect-square mx-auto lg:order-1"
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Somos;
