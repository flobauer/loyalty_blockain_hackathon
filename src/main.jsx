import React from "react";
import ReactDOM from "react-dom/client";
import { NostrProvider } from "nostr-react";
import App from "./App";
import "./index.css";

const relayUrls = ["wss://nostr-pub.wellorder.net", "wss://relay.nostr.ch"];

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NostrProvider relayUrls={relayUrls} debug={true}>
      <App />
    </NostrProvider>
  </React.StrictMode>
);
