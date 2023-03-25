import React from "react";
import classNames from "classnames";

export default function Input({
  value,
  onChange,
  type = "text",
  className,
  error,
  ...props
}) {
  return (
    <input
      type={type}
      value={value}
      error={error}
      onChange={onChange}
      className={classNames(
        "block w-full rounded-md border-0 py-1.5 px-2  shadow-sm ring-1 ring-inset  placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6",
        error && "text-red-900 ring-red-300 focus:ring-red-600",
        !error && "text-gray-900 ring-gray-300 focus:ring-indigo-600"
      )}
      {...props}
    />
  );
}
