import React from "react";
import Input from "./Input";
import Label from "./Label";

export default function InputWithLabel({
  id,
  label,
  type = "text",
  value,
  error = false,
  onChange,
  onInputChange,
  ...props
}) {
  return (
    <>
      <Label idf={id} error={error}>
        {label}
      </Label>
      <div className="mt-2">
        <Input
          id={id}
          type={type}
          error={error}
          value={value}
          onChange={onChange}
          {...props}
        />
      </div>
    </>
  );
}
