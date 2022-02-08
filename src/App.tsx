import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Pages/Header";
import { MyOrders } from "./Pages/MyOrders";
import { Cart } from "./Pages/Cart";
import { Home } from "./Pages/Home";
import { SelectedBook } from "./Pages/SelectedBook";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
      </div>
      <Routes>
        <Route path="/myOrders" element={<MyOrders />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/selectedBook" element={<SelectedBook />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
