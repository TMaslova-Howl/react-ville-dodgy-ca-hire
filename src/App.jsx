import './App.css'
import MainBookingPage from "./pages/MainBookingPage.jsx";
import ConfirmationPage from "./pages/ConfirmationPage.jsx";
import {Route, Routes} from "react-router-dom";
import PaymentPage from "./pages/PaymentPage.jsx";
import CompletedOrderPage from "./pages/CompletedOrderPage.jsx";

function App() {

  return (
      <Routes>
          <Route path="/" element={<MainBookingPage/>}></Route>
          <Route path="/confirmation" element={<ConfirmationPage/>}></Route>
          <Route path="/payment" element={<PaymentPage/>}></Route>
          <Route path="/complete" element={<CompletedOrderPage/>}></Route>
      </Routes>
  )
}

export default App;
