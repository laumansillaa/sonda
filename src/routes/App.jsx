import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {
	DetalleProducto,
	Header,
	ProductosProveedor,
	ScrollToTop,
} from '../components'
import {
	Admin,
	Capacitaciones,
	Contacto,
	Inicio,
	Productos,
	Servicios,
	Somos,
} from '../containers'
import { ProductsContextProvider } from '../context/ProductsContext'

function App() {
	return (
		<BrowserRouter>
			<ProductsContextProvider>
				<Header />
				<ScrollToTop />
				<Routes>
					<Route path="/" element={<Inicio />} />
					<Route path="/productos" element={<Productos />} />
					<Route path="/productos/:prov" element={<ProductosProveedor />} />
					<Route path="/detalle/:itemId" element={<DetalleProducto />} />
					<Route path="/somos" element={<Somos />} />
					<Route path="/servicios" element={<Servicios />} />
					<Route path="/cursos-y-capacitaciones" element={<Capacitaciones />} />
					<Route path="/contacto" element={<Contacto />} />
					<Route path="/admin" element={<Admin />} />
				</Routes>
			</ProductsContextProvider>
		</BrowserRouter>
	)
}

export default App
