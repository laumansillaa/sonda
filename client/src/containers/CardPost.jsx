import { BsCalendar3 } from "react-icons/bs";
import { MdOutlineWatchLater } from "react-icons/md";

export const CardPost = ({ curso }) => {
  return (
    <div
      className="w-3/5 min-h-[350px] flex border border-solid border-black 
        rounded-lg sm-max:flex-col sm-max:w-11/12 hover:shadow-3xl  "
    >
      <div className="w-3/6 flex flex-col gap-2.5 sm-max:w-full">
        <div className="flex pl-3 pr-3 pb-0.5 flex-col rounded-l-lg border-2 border-b border-solid gap-2">
          <h1 className="font-bold text-2xl font-roboto pt-3">{curso.title}</h1>
          <div className="flex gap-6 pb-2">
            <div className="flex items-center gap-2">
              <BsCalendar3 />
              <h3 className="font-semibold text-base ">{curso.fecha}</h3>
            </div>
            <div className="flex items-center gap-2">
              <MdOutlineWatchLater />
              <h3 className="font-semibold">{`Horario: ${curso.horario}`}</h3>
            </div>
          </div>
        </div>
        <div className="pb-3 pl-3 pr-3">
          <h3 className="font-roboto font-normal">{curso.descripcion}</h3>
        </div>
      </div>
      <div className="w-3/6 sm-max:w-full">
        <img
          src={curso.mainImage}
          className="object-cover h-full rounded-r-lg sm-max:rounded-b-lg sm-max:rounded-r-none"
        />
      </div>
    </div>
  );
};
