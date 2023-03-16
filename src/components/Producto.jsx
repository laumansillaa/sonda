import { Link } from 'react-router-dom';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const Producto = ({ nombre, img, id, categoria }) => {
	return (
		<div className="shadow-xl w-56 md:w-60 lg:w-80 h-96 border-2 border-gray-800 rounded-lg bg-white flex flex-col">
			<img
				src={img}
				alt={nombre}
				className="h-36 w-full aspect-square object-contain flex-1"
			/>
			<div className="p-5 flex flex-col">
				<h3 className="text-2xl font-semibold text-center">{nombre}</h3>
				<p className="text-lg font-semibold text-center">
					Categoria: {categoria}
				</p>
				<Link
					to={`/detalle/${id}`}
					className="mt-5 bg-gradient-to-r text-white from-cyan-500 to-cyan-900 px-4 py-2 rounded-lg hover:opacity-90 transition-all ease-in-out flex-1 text-center flex items-center justify-center space-x-2"
				>
					<span>Conocer mas</span>
					<BsFillArrowRightCircleFill size={20} />
				</Link>
			</div>
		</div>
	);
};

export default Producto;
