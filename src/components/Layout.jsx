import React from "react";
import { Link } from "react-router-dom";
import { UserIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

export default function Layout({ title, back, children }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <div className="bg-yellow-400 p-4 w-full flex items-center">
        <h1 className="text-2xl font-bold text-black flex-1">
          <Link to="/" className="flex items-center space-x-2">
            {back && <ChevronLeftIcon className="h-6 w-6 text-black" />}
            {title}
          </Link>
        </h1>
        <Link to="/settings">
          <UserIcon className="h-6 w-6 text-black" aria-hidden="true" />
        </Link>
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}
