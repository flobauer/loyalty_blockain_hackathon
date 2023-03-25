import React from "react";
import { useLocalStorage } from "../helper/hooks";

export default function AnimatedLogo() {
  const [privateKey] = useLocalStorage("privateKey", "");
  return (
    <div className="my-4 text-center flex flex-col items-center justify-center">
      <div className="rounded-full border-4 border-yellow-400 animate-pulse">
        <img
          src={"https://cat-avatars.vercel.app/api/cat?name=" + privateKey}
          className="w-16 h-16"
        />
      </div>
      <span className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500 animatedLogo">
        Raikatchu
      </span>
      <span className="text-gray-600 italic">
        Waiting for requests that come in - Raika-tsching...
      </span>
    </div>
  );
}
