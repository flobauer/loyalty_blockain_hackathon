import React from "react";
import GiebelKreuz from "../components/Giebelkreuz";

export default function Profile({ data }) {
  return (
    <div className="p-8 flex gap-6">
      <div>
        <div className="rounded-full border-4 border-yellow-400 w-20">
          <img src={data?.picture} alt="Profile picture" />
        </div>
      </div>
      <div>
        <p>Name: {data?.name}</p>
        <p>Public key: {data?.npub}</p>
        <p>About:{data?.about} </p>
        <p className="text-lg font-bold mt-10">Loyalty Score</p>
        <div className="flex gap-4 my-2">
          <div className="w-6">
            <GiebelKreuz />
          </div>
          <div className="w-6">
            <GiebelKreuz />
          </div>
          <div className="w-6">
            <GiebelKreuz />
          </div>
        </div>
      </div>
    </div>
  );
}
