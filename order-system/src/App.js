import orders from "./utils/testOrder.json";
import Order from "./components/order-component/orderComponent";

function App() {
  return (
    <div className="App">
      <h1>Orders</h1>
      {orders &&
        orders.map((order) => {
          return <Order props={order} />;
        })}
    </div>
  );
}

export default App;
