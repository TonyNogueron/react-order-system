import React from "react";
import styles from "./orderComponent.css";
import Row from "../row-component/RowComponent";

function Order({ props }) {
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
                return <th key={`${title}`}>{title}</th>;
              })}
          </tr>
          {props &&
            props.map((order) => {
              return <Row props={order} key={order.id}/>;
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Order;
