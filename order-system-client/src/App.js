//import orders from "./utils/testOrder.json";
import React from "react";
import Order from "./components/order-component/orderComponent";
import styles from "./App.css";
import ViewOrderPage from "./pages/view-order-page/viewOrderPage";
import Folio from "./components/folio-component/Folio";

function App() {
  return (
    <div className="App">
      <ViewOrderPage />
      <Folio />
    </div>
  );
}

export default App;
