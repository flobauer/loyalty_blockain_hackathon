import React from "react";
import { useLocalStorage } from "../helper/hooks";

import { useNostr, dateToUnix } from "nostr-react";
import Button from "./Button";
import {
  getEventHash,
  generatePrivateKey,
  getPublicKey,
  signEvent,
} from "nostr-tools";

export default function PaymentButton({
  value,
  setOpen,
  setConfirmation,
  geoHash,
}) {
  const { publish } = useNostr();

  const [privateKey] = useLocalStorage("privateKey", "");

  const onPost = async () => {
    let sk = privateKey;

    // make sure user has key set
    if (!privateKey) {
      alert("Please add your Private key first!");
      return;
    }

    let pk = getPublicKey(privateKey); // `pk` is a hex string

    const event = {
      content: `raikatchu:request:${geoHash}:${value}`,
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
