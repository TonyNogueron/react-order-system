import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.css";
import flyer from "../../imgs/Flyer.png";

function HomePage() {
  let navigate = useNavigate();
  return (
      <div className="Buttons">
        <img src={flyer} alt="Flyer" className="Flyer" />
        <button className="b1" onClick={() => navigate("/viewOrder")}>Ver Pedidos</button>
        <button className="b2" onClick={() => navigate("/form")}>Hacer Pedido</button>
      </div>
  );
}

export default HomePage;
