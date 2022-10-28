import React, { useState } from "react";
import styles from "./ButtonBarRowComponent.css";
import axios from "axios";

function ButtonBar({ props }) {
  const handleEntregarClick = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3001/entregarOrden", null, {
        params: { id: props.id },
      })
      .then((res) => {
        console.log(res);
        alert("Orden entregada");
      })
      .catch((err) => {
        console.log(err);
        alert("Error al entregar orden");
      });
  };

  return (
    <tr>
      <td colSpan="24" className="buttons">
        <button onClick={handleEntregarClick}>Entregar</button>
        <button>Editar</button>
      </td>
    </tr>
  );
}

export default ButtonBar;
