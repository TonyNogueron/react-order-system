import React from "react";
import styles from "./orderComponent.css";

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
                return <th>{title}</th>;
              })}
          </tr>
          {props &&
            props.map((order) => {
              return (
                <tr>
                  <td>{order.id}</td>
                  <td>{order.folio}</td>
                  <td>{order.hora}</td>
                  <td>{order.nombreCompleto}</td>
                  <td>{order.telefono}</td>
                  <td>{order.paquete}</td>
                  <td>{order.polloRelleno}</td>
                  <td>{order.lomo}</td>
                  <td>{order.pierna}</td>
                  <td>{order.costilla}</td>
                  <td>{order.polloAdobado}</td>
                  <td>{order.polloNatural}</td>
                  <td>{order.manzana}</td>
                  <td>{order.espaguetti}</td>
                  <td>{order.codo}</td>
                  <td>{order.rusa}</td>
                  <td>{order.chiles}</td>
                  <td>{order.otros}</td>
                  <td>{order.total}</td>
                  <td>{order.anticipo}</td>
                  <td>{order.resta}</td>
                  <td>{order.entregado ? "Si" : "No"}</td>
                  <td>{order.pagado  ? "Si" : "No"}</td>
                </tr>
              );
            })}
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
