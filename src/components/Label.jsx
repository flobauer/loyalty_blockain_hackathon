import React from "react";

export default function Label({ id, children }) {
  return (
    <label
      htmlFor={id}
      className="block text-sm font-medium leading-6 text-gray-900">
      {children}
    </label>
  );
}
