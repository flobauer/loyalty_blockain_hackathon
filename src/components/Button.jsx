import React from "react";
import classNames from "classnames";

export default function Button({ onClick, className, children }) {
  return (
    <button
      type="button"
      className={classNames(
        "inline-flex justify-center items-center bg-yellow-400 px-3 py-2 font-semibold text-black shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600",
        className ? className : "rounded-md  w-full text-sm"
      )}
      onClick={onClick}>
      {children}
    </button>
  );
}
