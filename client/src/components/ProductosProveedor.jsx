import { useProductsContext } from '../context/ProductsContext';
import { useNavigate, useParams } from 'react-router-dom';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import Producto from './Producto';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import { Paginado } from './Paginado';

const ProductosProveedor = () => {
	const [productsToShow, setProductsToShow] = useState([]);
	console.log('Product To Show', productsToShow)
	const { products } = useProductsContext();
	const { prov } = useParams();

	const [currentPage, setCurrentPage] = useState(1)
	const [productsPerPage, setProductsPerPage] = useState(8)
	const indexOfLastProduct = currentPage * productsPerPage
	const indexOfFirstProduct = indexOfLastProduct - productsPerPage
	const currentProduct = productsToShow.slice(indexOfFirstProduct, indexOfLastProduct)

	const paginado = (pagNumber) => {
		setCurrentPage(pagNumber)
	}

	useEffect(() => {
		setProductsToShow(products.filter((product) => product.prov === prov));
	}, [products]);

	const navigate = useNavigate();

	// console.log(productsToShow);

	return (
		<>
			<main className="min-h-[calc(100vh-80px)] bg-gray-300 pt-24 pb-24" id='prod-top'>
				<BsFillArrowLeftCircleFill
					size={48}
					className="cursor-pointer text-cyan-900 ml-5"
					onClick={() => navigate(-1)}
				/>
				<img
					src={prov === 'emerson' ? '/emerson.png' : '/fitok.png'}
					alt="emerson"
					className="mx-auto"
				/>
				<div className="flex flex-wrap gap-20 container mx-auto justify-center py-10">
					{currentProduct.length > 0 ? (
						currentProduct.map((producto) => (
							<Producto key={producto.id} {...producto} />
						))
					) : (
						<h2 className="text-3xl text-black">En desarrollo...</h2>
					)}
				</div>
				<Paginado 
					productsPerPage={productsPerPage}
					allProducts={productsToShow.length}
					paginado={paginado}
				/>
			</main>
			<Footer />
		</>
	);
};

export default ProductosProveedor;
