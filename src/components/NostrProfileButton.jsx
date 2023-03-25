import React from "react";
import { useLocalStorage } from "../helper/hooks";
import { dateToUnix, useNostr } from "nostr-react";
import { getEventHash, getPublicKey, signEvent } from "nostr-tools";
import Button from "./Button";

export default function NostrProfileButton({ children }) {
  const { publish } = useNostr();

  const [name] = useLocalStorage("name", "");
  const [tShirtColor] = useLocalStorage("thsirtcolor", "");
  const [privateKey] = useLocalStorage("privateKey", "");

  const updateProfile = async () => {
    // make sure user has key set
    if (!privateKey) {
      alert("Please add your Private key first!");
      return;
    }

    let pk = getPublicKey(privateKey); // `pk` is a hex string

    const event = {
      content: JSON.stringify({
        name: name,
        about: "Tshirt: " + tShirtColor,
        picture: "https://cat-avatars.vercel.app/api/cat?name=" + pk,
      }),
      kind: 0,
      tags: [],
      created_at: dateToUnix(),
      pubkey: pk,
    };

    event.id = getEventHash(event);
    event.sig = signEvent(event, privateKey);

    publish(event);
  };

  return <Button onClick={(e) => updateProfile(publish)}>{children}</Button>;
}
