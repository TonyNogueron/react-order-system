import React from "react";
import ViewOrderPage from "./pages/view-order-page/viewOrderPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/viewOrder" element={<ViewOrderPage />} />
      </Routes>
    </Router>
  );
}

export default App;