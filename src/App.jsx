import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ProductDetails from "./pages/ProductDetails";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/product/:productId" element={<ProductDetails />} />
    </Routes>
  );
}
