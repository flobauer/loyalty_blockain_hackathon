import React, { useState } from "react";
import CircularSlider from "@fseehawer/react-circular-slider";
import Modal from "../components/Modal";
import Button from "../components/Button";
import PaymentButton from "../components/PaymentButton";
import AskForGeolocation from "../components/AskForGeolocation";
import { CheckIcon } from "@heroicons/react/24/outline";

export default function PaymentModal({ open, setOpen }) {
  const [confirmation, setConfirmation] = useState(false);
  const [value, setValue] = useState(10);

  return (
    <>
      <Modal
        open={open}
        setOpen={setOpen}
        button={
          <PaymentButton
            value={value}
            setOpen={setOpen}
            setConfirmation={setConfirmation}
          />
        }>
        <AskForGeolocation>
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
              setValue(value);
            }}
            value={value}
          />
        </AskForGeolocation>
      </Modal>
      <Modal
        open={confirmation}
        setOpen={setConfirmation}
        button={<Button onClick={() => setConfirmation(false)}>Close</Button>}>
        <div className="flex flex-col gap-6">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
            <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
          </div>
          <span>
            Your request for <strong>{value}</strong> was published.
          </span>
        </div>
      </Modal>
    </>
  );
}