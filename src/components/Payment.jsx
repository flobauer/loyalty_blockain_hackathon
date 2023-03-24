import React, { useState } from "react";
import CircularSlider from "@fseehawer/react-circular-slider";
import Modal from "./Modal";

export default function Payment() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setOpen(true)}>
        Open Modal
      </button>
      <Modal open={open} setOpen={setOpen}>
        <CircularSlider
          label="payment"
          data={[
            "5€",
            "10€",
            "20€",
            "30€",
            "40€",
            "50€",
            "60€",
            "70€",
            "80€",
            "90€",
            "100€",
          ]}
          dataIndex={10}
          onChange={(value) => {
            console.log(value);
          }}
        />
      </Modal>
    </div>
  );
}
