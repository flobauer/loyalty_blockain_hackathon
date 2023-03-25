import React from "react";

export default function Profile({ data }) {
  return (
    <div className="p-8 flex gap-6">
      <div>
        <div className="rounded-full border-4 border-yellow-400">
          <img src={data?.picture} alt="Profile picture" />
        </div>
      </div>
      <div>
        <p>Name: {data?.name}</p>
        <p>Public key: {data?.npub}</p>
        <p>About:{data?.about} </p>
      </div>
    </div>
  );
}
