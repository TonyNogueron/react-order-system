//import orders from "./utils/testOrder.json";
import React, { useState, useEffect } from "react";
import Order from "./components/order-component/orderComponent";
import styles from "./App.css";
import axios from "axios";

function App() {
  const [orderList, setOrderList] = useState([]);

  const [orderListInRange, setOrderListInRange] = useState([]);

  const [horaInicial, setHoraInicial] = useState("00:00");
  const [horaFinal, setHoraFinal] = useState("23:59");
  const [buttonStart, setButtonStart] = useState("00:00");
  const [buttonEnd, setButtonEnd] = useState("23:59");


  useEffect(() => {
    axios.get("http://localhost:3001/getAllOrders").then((res) => {
      setOrderList(res.data);
    }).catch((err) => { console.log(err); });
  }, []);

  useEffect(() => {
    console.log(`Hora inicial: ${buttonStart} Hora final: ${buttonEnd}`); 
    axios.get("http://localhost:3001/getOrderInRange", {params: {start: buttonStart, end: buttonEnd}}).then((res) => {
      setOrderListInRange(res.data);
    }).catch((err) => { console.log(err); });
  }, [buttonStart, buttonEnd]);

  const handleSetHoraInicial = (e) => {
    if(e.target.value === "") {
      setHoraInicial("00:00");
    } else {
    setHoraInicial(e.target.value);
    }
  };

  const handleSetHoraFinal = (e) => {
    if(e.target.value === "") {
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
    <div className="App">
      <h1>Orders</h1>
      <div className="orderContainer">
      <Order props={orderList} />
      </div>
      <br />
      <br />
      <div>
        <input type="text" placeholder="Hora inicial" onChange={handleSetHoraInicial} />
        <input type="text" placeholder="Hora final" onChange={handleSetHoraFinal}/>
        {`Hora inicial: ${horaInicial} Hora final: ${horaFinal}`}
        <button onClick={handleButtonClick}>Buscar</button> 
      </div>
      <br />
      <br />
      <div className="orderContainer">
      {orderListInRange.length > 0 ? <Order key={"OrderInRange"} props={orderListInRange} /> : null}
      </div>

    </div>
  );
}

export default App;
