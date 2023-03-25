import React from "react";
import classNames from "classnames";

export default function Button({ onClick, className, children }) {
  return (
    <button
      type="button"
      className={classNames(
        "my-button",
        className ? className : "rounded-md  w-full text-sm"
      )}
      onClick={onClick}>
      {children}
    </button>
  );
}
