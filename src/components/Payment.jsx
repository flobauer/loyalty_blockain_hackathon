import React, { useState } from "react";
import { useNostr, dateToUnix } from "nostr-react";
import {
  getEventHash,
  generatePrivateKey,
  getPublicKey,
  signEvent,
} from "nostr-tools";
import CircularSlider from "@fseehawer/react-circular-slider";
import Modal from "./Modal";
import Button from "./Button";
import Feed from "./Feed";

export default function Payment() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(10);

  const { publish } = useNostr();

  const onPost = async () => {
    let sk = generatePrivateKey(); // `sk` is a hex string
    let pk = getPublicKey(sk); // `pk` is a hex string

    const event = {
      content: "Loyalty hackathon Test Message 👐🏻👹 + " + value,
      kind: 1,
      tags: [],
      created_at: dateToUnix(),
      pubkey: pk,
    };

    event.id = getEventHash(event);
    event.sig = signEvent(event, pk);

    publish(event);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Feed />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setOpen(true)}>
        Open Modal
      </button>
      <Modal
        open={open}
        setOpen={setOpen}
        button={<Button onClick={() => onPost()}>Post a message!</Button>}>
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
      </Modal>
    </div>
  );
}
