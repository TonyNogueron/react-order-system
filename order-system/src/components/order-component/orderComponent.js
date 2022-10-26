import React from "react";
import styles from "./orderComponent.css";

function Order({ props }) {
  const { id, nombreCompleto, folio, telefono } = props;
  const titles = [
    "Id",
    "Folio",
    "Hora",
    "Nombre",
    "Teléfono",
    "Paquete",
    "Pollo Relleno",
    "Lomo",
    "Pierna",
    "Costilla",
    "Pollo Adobado",
    "Pollo Natural",
    "Manzana",
    "Espaguetti",
    "Codo",
    "Rusa",
    "Chiles",
    "Otros",
    "Total",
    "Anticipo",
    "Resta",
    "Entregado",
    "Pagado",
  ];
  return (
    <div className="orderContainer">
      <table id="tabla">
        <tbody>
        <tr>
        {titles &&
          titles.map((title) => {
            return <th>{title}</th>;
          })}
      </tr>
          <tr key={id}>
            <td>{id}</td>
            <td>{nombreCompleto}</td>
            <td>{folio}</td>
            <td>{telefono}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Order;

/*
{props.id} 
            <br/>
            {props.nombreCompleto}
            <br/>
            {props.folio}
*/
