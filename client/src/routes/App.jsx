import { Route, Routes } from "react-router-dom";
import {
  DetalleProducto,
  Header,
  ProductosProveedor,
  ScrollToTop,
} from "../components";
import {
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

function App() {
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
        <Route exact path="/admin" element={<PanelAdmin />} />
        <Route exact path="/admin/prods" element={<PanelProducto />} />
        <Route exact path="/admin/prods/create" element={<CreateProd />} />
        <Route exact path="/admin/prods/update/:id" element={<UpdateProd />} />
        <Route exact path="/admin/curso" element={<PanelCurso />} />
        <Route exact path="/admin/curso/create" element={<CreateCurso />} />
        <Route exact path="/admin/curso/update/:id" element={<UpdateCurso />} />
      </Routes>
    </ProductsContextProvider>
  );
}

export default App;
