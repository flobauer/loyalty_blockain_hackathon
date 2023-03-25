import React, { useState } from "react";
import Modal from "./Modal";
import Button from "./Button";
import AskForGeolocation from "./AskForGeolocation";
import { CheckIcon } from "@heroicons/react/24/outline";

export default function AcceptModal({ open, setOpen, requestData }) {
  const [confirmation, setConfirmation] = useState(false);
  const { user, cash, distance } = requestData || {};
  return (
    <>
      <Modal
        open={open}
        setOpen={setOpen}
        button={<Button onClick={() => setConfirmation(true)}>Accept</Button>}
      >
        <p>
          Will you help out {user} with {cash}?
        </p>
        <p>They are {distance} away:</p>
        <p>Here goes the map . . . .</p>
      </Modal>
      <Modal
        open={confirmation}
        setOpen={setConfirmation}
        button={<Button onClick={() => setConfirmation(false)}>Close</Button>}
      >
        <div className="flex flex-col gap-6">
          <p>Thanks mate! Get on your way to help out {user}</p>
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
            <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
          </div>
        </div>
      </Modal>
    </>
  );
}
