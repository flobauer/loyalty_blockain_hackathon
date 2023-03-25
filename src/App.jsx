import Feed from "./pages/Feed";
import QR from "./components/QR";
import Payment from "./pages/Payment";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function MyApp() {
  // get iban, bic, name, amount, reason from localStorage or default
  const iban = localStorage.getItem("iban") || "DE02100100100006820101";
  const bic = localStorage.getItem("bic") || "PBNKDEFF";
  const name = localStorage.getItem("name") || "Max Muster";

  const amount = "50.00"; // TODO: this should be based on requested amount?
  const reason = "";
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Feed />} />
        <Route path="/payment" element={<Payment />} />
        <Route
          path="/qr"
          element={
            <QR
              iban={iban}
              bic={bic}
              name={name}
              amount={amount}
              reason={reason}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
