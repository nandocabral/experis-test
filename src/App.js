import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Default";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import CartDetail from "./pages/CartDetail";
import Error404 from "./pages/Error404";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product-detail/:id" element={<ProductDetail />} />
          <Route path="cart-detail" element={<CartDetail />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
