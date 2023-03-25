import React from "react";
import Button from "./Button";

export default function AcceptRequestButton({
  value,
  setOpen,
  setConfirmation,
}) {
  const onClick = async () => {
    setOpen(false);
    setConfirmation(true);
  };

  return <Button onClick={() => onClick()}>Accept</Button>;
}
