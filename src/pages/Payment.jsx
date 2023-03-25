import React, { useState } from "react";
import Button from "../components/Button";
import PaymentModal from "../components/PaymentModal";

export default function Payment() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
      </div>
      <PaymentModal open={open} setOpen={setOpen} />
    </div>
  );
}
