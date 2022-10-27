import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
    let navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/viewOrder")}>Ver Pedidos</button>
      <button onClick={() => navigate("/form")}>Hacer Pedido</button>
    </div>
  );
}

export default HomePage;