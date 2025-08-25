// src/App.jsx
import Footer from "./components/Footer";
import Header from "./components/Header";
import Brand from "./sections/Brand";
import Cta from "./sections/Cta";
import Hero from "./sections/Hero";
import Ingredients from "./sections/Ingredients";
import Products from "./sections/Products";
import Reviews from "./sections/Reviews";
import "./styles/main.scss";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <section id="hero"><Hero /></section>
        <section id="brand"><Brand /></section>
        <section id="products"><Products /></section>
        <section id="ingredients"><Ingredients /></section>
        <section id="reviews"><Reviews /></section>
        <section id="contact"><Cta /></section>
      </main>
      <Footer />
    </>
  );
}
