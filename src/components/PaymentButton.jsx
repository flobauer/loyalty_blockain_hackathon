import React from "react";

import { useNostr, dateToUnix } from "nostr-react";
import Button from "./Button";
import {
  getEventHash,
  generatePrivateKey,
  getPublicKey,
  signEvent,
} from "nostr-tools";

export default function PaymentButton({ value, setOpen, setConfirmation }) {
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
    event.sig = signEvent(event, sk);

    publish(event);

    setOpen(false);
    setConfirmation(true);
  };

  return <Button onClick={() => onPost()}>Post a message!</Button>;
}
