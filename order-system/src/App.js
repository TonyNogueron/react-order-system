import orders from "./utils/testOrder.json";
import Order from "./components/order-component/orderComponent";
import styles from "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Orders</h1>
      <div className="orderContainer">
      <Order props={orders} />
      </div>
    </div>
  );
}

export default App;
