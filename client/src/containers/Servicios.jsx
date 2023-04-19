import Footer from "../components/Footer";
import { MdEmail } from "react-icons/md";
import { CheckIcon } from "../assets/check";

const Servicios = () => {
  return (
    <>
      <main className="min-h-[calc(100vh-80px)] pt-24 pb-32 bg-gray-300">
        <h1 className="text-center text-6xl text-white py-10 text-transparent bg-clip-text bg-gradient-to-t from-cyan-900 to-cyan-300 font-semibold">
          Servicios
        </h1>
        <section className="text-gray-700">
          <div className="container px-5 mx-auto pb-10 lg:pb-0">
            <div className="text-center mb-10">
              <h1 className="sm:text-3xl text-2xl font-bold text-center title-font text-gray-900 mb-4">
                Sonda SRL ofrece una variada gama de servicios:
              </h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                En todos ellos lo que motiva nuestros esfuerzos es brindar un
                servicio de excelencia, dando una respuesta certera y sincera
                para la mejor resolución del problema.
              </p>
            </div>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                  <CheckIcon/>
                  <span className="title-font font-medium">
                    Mantenimiento preventivo y correctivo de equipos
                    cromatográficos.
                  </span>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                  <CheckIcon/>
                  <span className="title-font font-medium">
                    Configuración de computadores de caudal Emerson.
                  </span>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                  <CheckIcon/>
                  <span className="title-font font-medium">
                    Servicio de cero Flow de caudalímetro ultrasónicos Daniel.
                  </span>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                  <CheckIcon/>
                  <span className="title-font font-medium">
                    Puesta en marcha, mantenimiento de ultrasónico Daniel.
                  </span>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                  <CheckIcon/>
                  <span className="title-font font-medium">
                    Integración de gabinetes.
                  </span>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                  <CheckIcon/>
                  <span className="title-font font-medium">
                    Desarrollo de ingeniería de gabinetes y tramos de medición.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer>
        <a
          href="mailto:juandisanto@sondasrl.com.ar"
          target="_BLANK"
          className="flex items-center space-x-2"
        >
          <MdEmail size={30} />
          <span>juandisanto@sondasrl.com.ar</span>
        </a>
      </Footer>
    </>
  );
};

export default Servicios;
