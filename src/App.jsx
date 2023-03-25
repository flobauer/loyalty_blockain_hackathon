import React, { useRef } from "react";
import { useNostrEvents, dateToUnix } from "nostr-react";
import Feed from "./pages/Feed";
import QR from "./components/QR";
import Profile from "./pages/Profile";
import MyProfile from "./pages/MyProfile";
import Settings from "./pages/Settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLocalStorage } from "./helper/hooks";

export default function MyApp() {
  const [iban, setIban] = useLocalStorage("iban", "DE02100100100006820101");
  const [bic, setBic] = useLocalStorage("bic", "BYLADEM1001");
  const [name, setName] = useLocalStorage("name", "Max Mustermann");

  const amount = "50.00"; // TODO: this should be based on requested amount?
  const reason = "";

  const now = useRef(new Date()); // Make sure current time isn't re-rendered
  const { events } = useNostrEvents({
    filter: {
      since: dateToUnix(now.current), // all new events from now
      kinds: [1],
    },
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Feed events={events} />} />
        <Route exact path="/profile" element={<MyProfile />} />
        <Route exact path="/profile/:pubkey" element={<Profile />} />
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
