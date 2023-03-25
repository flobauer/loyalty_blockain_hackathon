import React, { useEffect, useState } from "react";
import CircularSlider from "@fseehawer/react-circular-slider";
import Modal from "../components/Modal";
import PaymentButton from "../components/PaymentButton";
import AskForGeolocation from "../components/AskForGeolocation";
import { CheckIcon } from "@heroicons/react/24/outline";
import { useLocalStorage } from "../helper/hooks";

export default function PaymentModal({ open, setOpen }) {
  const [confirmation, setConfirmation] = useState(false);
  const [geoHash] = useLocalStorage("geoHash", "");
  const [value, setValue] = useState(10);

  useEffect(() => {
    if (confirmation) {
      setTimeout(() => {
        setConfirmation(false);
      }, 1100);
    }
  }, [confirmation]);

  return (
    <>
      <Modal
        open={open}
        setOpen={setOpen}
        button={
          geoHash ? (
            <PaymentButton
              value={value}
              setOpen={setOpen}
              setConfirmation={setConfirmation}
              geoHash={geoHash}
            />
          ) : (
            <></>
          )
        }>
        <CircularSlider
          label="payment"
          progressColorFrom="#FCD34D"
          progressColorTo="#FFC0CB"
          knobColor="#FCD34D"
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
      </Modal>
      <Modal open={confirmation} setOpen={setConfirmation}>
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
