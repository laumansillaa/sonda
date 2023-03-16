import Footer from "../components/Footer";
import emerson from "../assets/emerson.png";
const Inicio = () => {
  return (
    <>
      <main className="min-h-[calc(100vh-80px)] bg-hero-pattern bg-no-repeat bg-cover bg-center hero pt-24 pb-24 flex justify-center flex-col ">
        <h1 className="text-center text-6xl lg:text-8xl pt-5 font-bold text-cyan-700 sonda">
          SONDA SRL
        </h1>

        <section className="text-white mt-20 container mx-auto w-max gap-56 flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0">
          <div className="flex flex-col items-center space-y-5 lg:space-y-0 lg:pt-5 ">
            <h2 className="text-xl lg:text-2xl font-bold sponsors lg:pb-2">
              Representantes oficiales de:
            </h2>
            <div className=" w-72 bg-white rounded-xl bg-opacity-40">
              <img
                src={emerson}
                alt="Emerson"
                className="w-64 aspect-square lg:w-72 mx-auto object-contain shadow-md px-2 lg:px-4"
              />
              <a href="/productos/emerson" target="_blank">
                <button className="w-full h-8 bg-gradient-to-r text-white from-cyan-500 to-cyan-900 rounded-b-xl">
                  Ver más
                </button>
              </a>
            </div>
          </div>

          <div className="space-y-5 lg:space-y-0 lg:pt-5 pb-10 lg:pb-0">
            <h2 className="text-xl text-center lg:text-2xl font-bold sponsors lg:pb-2">
              Distribuidor oficial de:
            </h2>
            <div className="bg-white rounded-xl bg-opacity-40">
              <img
                src="/fitok.png"
                alt="Fitok"
                className="w-64 aspect-square lg:w-72 mx-auto object-contain shadow-md px-2 lg:px-4"
              />
              <a href="/productos/fitok" target="_blank">
                <button className="w-full h-8 bg-gradient-to-r text-white from-cyan-500 to-cyan-900 rounded-b-xl">
                  Ver más
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Inicio;
