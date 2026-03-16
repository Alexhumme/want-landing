import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/home/Home";
import Soluciones from "../views/soluciones/Soluciones";
import Navbar from "../components/layout/navbar/Navbar";
import Footer from "../components/layout/footer/Footer";

function AppRouter() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/soluciones" element={<Soluciones />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default AppRouter;
