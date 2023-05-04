import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
// import { useProductsContext } from '../context/ProductsContext';
import Footer from './Footer';
import { useDispatch, useSelector } from 'react-redux';
import { getProdsId } from '../../actions';

const DetalleProducto = () => {
	const { itemId } = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch()
	// const { products } = useProductsContext();
	const stateDetail = useSelector((state) => state.detail)
	console.log('stateDetailt', stateDetail)
	// const itemToShow = products.find(
	// 	(producto) => producto.id === parseInt(itemId)
	// );

	// const { nombre, descripcion, img, catalogo } = itemToShow;

	useEffect(() => {
		dispatch(getProdsId(itemId))
	},[])

	return (
		<>
			<section className="min-h-[calc(100vh-80px)] container mx-auto px-5 lg:px-0 py-3 pt-24 pb-24">
				<BsFillArrowLeftCircleFill
					size={32}
					className="cursor-pointer text-cyan-900 "
					onClick={() => navigate(-1)}
				/>
				{
					stateDetail && (
						<>
							<h2 className="text-4xl font-bold mt-5">{stateDetail.nombre}</h2>
							<div className="flex flex-col lg:flex-row justify-center items-center space-y-6">
								<img
									src={stateDetail.img}
									alt={"nombre"}
									className="w-96 aspect-square object-contain"
								/>
								<p className="leading-7 font-semibold text-center lg:w-3/5">
									{stateDetail.descripcion}
								</p>
							</div>
							<div className="self-start mt-5">
								<h3 className="text-2xl font-semibold pb-5">Hoja de Datos:</h3>
								<p className="font-semibold">
									Haz click{' '}
									<a
										href={stateDetail.catalogo}
										className="text-cyan-600 font-bold"
										target="_BLANK"
									>
										Aqui
									</a>{' '}
									para obtener mas informacion acerca de {stateDetail.nombre}
								</p>
							</div>
						</>
					)
				}
			</section>
			<Footer />
		</>
	);
};

export default DetalleProducto;
