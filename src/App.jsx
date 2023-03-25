import Feed from "./pages/Feed";
import QR from "./components/QR";
import Payment from "./pages/Payment";
import Settings from "./pages/Settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLocalStorage } from "./helper/hooks";

export default function MyApp() {
  const [iban, setIban] = useLocalStorage("iban", "DE02100100100006820101");
  const [bic, setBic] = useLocalStorage("bic", "BYLADEM1001");
  const [name, setName] = useLocalStorage("name", "Max Mustermann");

  const amount = "50.00"; // TODO: this should be based on requested amount?
  const reason = "";

  const Handler = () => {
    setIban("test");
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Feed />} />
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

        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}
