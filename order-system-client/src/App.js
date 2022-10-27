//import orders from "./utils/testOrder.json";
import React, { useState, useEffect } from "react";
import Order from "./components/order-component/orderComponent";
import Folio from "./components/folio-component/Folio";
import styles from "./App.css";
import axios from "axios";

function App() {
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/getAllOrders").then((res) => {
      setOrderList(res.data);
    }).catch((err) => { console.log(err); });
  }, []);


  return (
    <div className="App">
      <Folio />
    </div>
  );
}

export default App;

/*
      <h1>Orders</h1>
      <div className="orderContainer">
      <Order props={orderList} />
      </div>
      
*/