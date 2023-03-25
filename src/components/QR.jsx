import React, { useState } from "react";
import { girocode } from "@dipser/epc-qr-code.js";
import Modal from "./Modal";

export default function QR({ iban, bic, name, amount, reason }) {
  const [open, setOpen] = useState(false);
  var g = girocode({
    iban: iban,
    bic: bic,
    name: name,
    amount: amount,
    reason: reason,
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setOpen(true)}
      >
        Open Modal
      </button>
      <Modal open={open} setOpen={setOpen}>
        <div>
          <div dangerouslySetInnerHTML={{ __html: g.svg() }} />
        </div>
      </Modal>
    </div>
  );
}
