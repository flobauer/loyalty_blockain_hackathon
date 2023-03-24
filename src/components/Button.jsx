import React from "react";

export default function Button({ onClick, children }) {
  return (
    <button
      type="button"
      className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      onClick={onClick}>
      {children}
    </button>
  );
}
