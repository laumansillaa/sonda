import {
  Navigate,
  Route,
  Routes,
  redirect,
  useNavigate,
} from "react-router-dom";
import {
  DetalleProducto,
  Header,
  ProductosProveedor,
  ScrollToTop,
} from "../components";
import {
  Admin,
  Capacitaciones,
  Contacto,
  Inicio,
  Productos,
  Servicios,
  Somos,
} from "../containers";
import { ListadoCursos } from "../containers/ListadoCursos";
import { ProductsContextProvider } from "../context/ProductsContext";
import { PanelAdmin } from "../containers/Admin/PanelAdmin";
import { PanelProducto } from "../containers/Admin/ProductoAdmin";
import { CreateProd } from "../containers/Admin/createProd/createProd";
import { UpdateProd } from "../containers/Admin/update/updateProd";
import { PanelCurso } from "../containers/Admin/CursoAdmin";
import { CreateCurso } from "../containers/Admin/createCurso/createCurso";
import { UpdateCurso } from "../containers/Admin/update/updateCurso";
import AdminLogin from "../containers/Admin/AdminLogin";
import { useEffect, useState } from "react";
import { ErrorPage } from "../containers/Admin/Error";

function App() {
  const session = localStorage.getItem("session") || null;
  const [userLogged, setUserLogged] = useState(false);

  const chekUserLoged = () => {
    if (localStorage.getItem("session")) {
      setUserLogged(true);
    }
  };
  
  useEffect(() => {
    chekUserLoged();
  }, [session]);

  console.log("userLoger", userLogged);

  return (
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
        <Route
          exact
          path="/cursos-y-capacitaciones"
          element={<Capacitaciones />}
        />
        <Route exact path="/cursos-listado" element={<ListadoCursos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route exact path="/login" element={<AdminLogin />} />

        {/* <Route path="/admin" element={<PanelAdmin />} /> */}
		{
			session ? 
			<>
				<Route
				exact path="/admin"
				element={<PanelAdmin />}
				/>
		
				<Route exact path="/admin/prods" element={<PanelProducto />} />
				<Route exact path="/admin/prods/create" element={<CreateProd />} />
				<Route exact path="/admin/prods/update/:id" element={<UpdateProd />} />
				<Route exact path="/admin/curso" element={<PanelCurso />} />
				<Route exact path="/admin/curso/create" element={<CreateCurso />} />
				<Route exact path="/admin/curso/update/:id" element={<UpdateCurso />} />
			</>
			: null
		}

        {/* <Route path="/" element={<>{userLogged ? <Inicio /> : redirect('/login')}</>} /> */}
      </Routes>
    </ProductsContextProvider>
  );
}

export default App;
