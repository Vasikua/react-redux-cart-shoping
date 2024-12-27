import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import { Header } from "./Header/Header";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}
