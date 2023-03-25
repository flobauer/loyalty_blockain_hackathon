import Feed from "./components/Feed";
import Payment from "./pages/Payment";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function MyApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Feed />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}
