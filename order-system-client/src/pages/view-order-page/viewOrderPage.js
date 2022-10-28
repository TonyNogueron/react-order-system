import React from "react";
import { useEffect, useState } from "react";
import Order from "../../components/order-component/orderComponent";
import styles from "./viewOrderPage.css";
import axios from "axios";

function ViewOrderPage() {
  const [orderList, setOrderList] = useState([]);
  const [pendingOrderList, setPendingOrderList] = useState([]);


  const [orderListInRange, setOrderListInRange] = useState([]);

  const [horaInicial, setHoraInicial] = useState("00:00");
  const [horaFinal, setHoraFinal] = useState("23:59");
  const [buttonStart, setButtonStart] = useState("00:00");
  const [buttonEnd, setButtonEnd] = useState("23:59");

  useEffect(() => {
    getOrders();
    getOrdenesPendientes();
  }, []);

  const getOrders = () => {
    axios
      .get("http://localhost:3001/getAllOrders")
      .then((res) => {
        setOrderList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getOrdenesPendientes = () => {
    axios
      .get("http://localhost:3001/getOrdenesPendientes")
      .then((res) => {
        setPendingOrderList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    console.log(`Hora inicial: ${buttonStart} Hora final: ${buttonEnd}`);
    axios
      .get("http://localhost:3001/getOrderInRange", {
        params: { start: buttonStart, end: buttonEnd },
      })
      .then((res) => {
        setOrderListInRange(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [buttonStart, buttonEnd]);

  useEffect(() => {
    setInterval(() => {
      getOrders();
      getOrdenesPendientes();
    }, 5000);
  }, []);

  const handleSetHoraInicial = (e) => {
    if (e.target.value === "") {
      setHoraInicial("00:00");
    } else {
      setHoraInicial(e.target.value);
    }
  };

  const handleSetHoraFinal = (e) => {
    if (e.target.value === "") {
      setHoraFinal("23:59");
    } else {
      setHoraFinal(e.target.value);
    }
  };

  const handleButtonClick = () => {
    setButtonStart(horaInicial);
    setButtonEnd(horaFinal);
  };

  return (
    <div className="ViewOrderPage">
      <h1>Ordenes Pendientes</h1>
      <div className="orderContainer">
        <Order props={pendingOrderList} />
      </div>
      <br />
      <br />
      <h1>Ordenes por hora</h1>
      <div>
        <input
          type="text"
          placeholder="Hora inicial"
          onChange={handleSetHoraInicial}
        />
        <input
          type="text"
          placeholder="Hora final"
          onChange={handleSetHoraFinal}
        />
        <button onClick={handleButtonClick}>Buscar</button>
      </div>
      <br />
      <br />
      <div className="orderContainer">
        {orderListInRange.length > 0 ? (
          <Order key={"OrderInRange"} props={orderListInRange} />
        ) : null}
      </div>
      <br />
      <br />
      <h1>Todas la Ordenes</h1>
      <div className="orderContainer">
        <Order props={orderList} />
      </div>
    </div>
  );
}

export default ViewOrderPage;
