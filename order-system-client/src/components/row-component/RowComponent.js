import React, { useState } from "react";
import styles from "./RowComponent.css";

function Row({ props }) {
  const handleRowClick = () => {
    console.log(`Row clicked: ${props.id}`);
  };

  return (
    <tr onClick={handleRowClick} key={props.id}>
      <td>{props.id}</td>
      <td>{props.folio}</td>
      <td>{props.hora}</td>
      <td>{props.nombreCompleto}</td>
      <td>{props.telefono}</td>
      <td>{props.paquete}</td>
      <td>{props.polloRelleno}</td>
      <td>{props.lomo}</td>
      <td>{props.pierna}</td>
      <td>{props.costilla}</td>
      <td>{props.polloAdobado}</td>
      <td>{props.polloNatural}</td>
      <td>{props.manzana}</td>
      <td>{props.espaguetti}</td>
      <td>{props.codo}</td>
      <td>{props.rusa}</td>
      <td>{props.chiles}</td>
      <td>{props.otros}</td>
      <td>{props.total}</td>
      <td>{props.anticipo}</td>
      <td>{props.resta}</td>
      <td>{props.entregado ? "Si" : "No"}</td>
      <td>{props.pagado ? "Si" : "No"}</td>
    </tr>
  );
}

export default Row;
