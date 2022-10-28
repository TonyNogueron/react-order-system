import React from "react";
import ViewOrderPage from "./pages/view-order-page/viewOrderPage";
import Formulario from "./pages/Formulario/Formulario";
import HomePage from "./pages/home-page/Home";
import EditPage from "./pages/edit-order/editPage";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<HomePage />} />
        <Route exact path="/viewOrder" element={<ViewOrderPage />} />
        <Route exact path="/form" element={<Formulario/>} />
        <Route exact path="/edit-order" element={<EditPage/>} />
      </Routes>
    </Router>
  );
}

export default App;