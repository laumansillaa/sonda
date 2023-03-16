import React, { createContext, useContext, useEffect, useState } from 'react';
import productos from '../data/productos';

const ProductsContext = createContext();

export const ProductsContextProvider = ({ children }) => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		setProducts(productos);
	}, []);

	const data = { products, setProducts };

	return (
		<ProductsContext.Provider value={data}>{children}</ProductsContext.Provider>
	);
};

export const useProductsContext = () => {
	const data = useContext(ProductsContext);
	if (data) {
		return data;
	} else {
		throw new Error(
			'La llamada a useProductsContext debe estar dentro del scope del componente'
		);
	}
};
