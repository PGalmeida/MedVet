// src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import "./Home.css";

const images = [
    "/carousel/slide1.jpg",
  "/carousel/slide2.jpg",
  "/carousel/slide3.jpg",
];

function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // troca a cada 3 segundos
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home-container">
      <h1>PetShop Franca</h1>
      <p>
        Bem-vindo à PetShop — encontre serviços, produtos e promoções para seu
        pet. Confira nossa loja física em Franca.
      </p>

      {/* Carrossel */}
      <div className="carousel">
        <img src={images[current]} alt="Carrossel PetShop" />
        <div className="indicators">
          {images.map((_, index) => (
            <span
              key={index}
              className={index === current ? "active" : ""}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>
      </div>

      {/* Endereço */}
      <div className="endereco">
        <h3>Endereço</h3>
        <p>Av. Dr. Ismael Alonso Y Alonso, 450 — Franca / SP</p>
        <button onClick={() => window.open("https://maps.google.com")}>
          Google Maps
        </button>
      </div>
    </div>
  );
}

export default Home;
