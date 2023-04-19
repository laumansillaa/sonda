import { Footer } from "../components";
import cursos from "../data/cursos";
import { CardPost } from "./CardPost";

export const ListadoCursos = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center pb-16 bg-gray-300">
        <div className="pt-24  text-center text-6xl text-white py-10 text-transparent bg-clip-text bg-gradient-to-t from-cyan-900 to-cyan-300 font-semibold">
          <h1>Cursos disponibles</h1>
        </div>
        <div className="text-gray-700 flex flex-col items-center gap-4 h-20 text-black sm-max:h-auto sm-max:text-center sm-max:w-11/12 ">
          <h2 className="font-semibold title-font text-2xl">
            {"Para inscribirte en nuestros cursos "}
            <a
              href="mailto:rociomenu@sondasrl.com.ar"
              className="font-semibold text-[#334155] underline decoration-2 decoration-sky-500 hover:decoration-sky-400 "
            >
              {"contáctanos"}
            </a>
          </h2>
          <h3 className="text-semibold text-xl">
            No te piedas nuestras capacitaciones. Proyecta aún mas tu carrera.
          </h3>
        </div>
        <div className="flex flex-col items-center gap-8 mt-6">
          {cursos.map((curso, index) => {
            return <CardPost curso={curso} key={index} />;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};
