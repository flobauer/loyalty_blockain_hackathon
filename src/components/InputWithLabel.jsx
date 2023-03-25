import React from "react";
import Input from "./Input";
import Label from "./Label";

export default function InputWithLabel({
  id,
  label,
  type = "text",
  value,
  setValue,
  onInputChange,
  ...props
}) {
  return (
    <>
      <Label idf={id}>{label}</Label>
      <div className="mt-2">
        <Input
          id={id}
          type={type}
          value={value}
          setValue={setValue}
          {...props}
        />
      </div>
    </>
  );
}
