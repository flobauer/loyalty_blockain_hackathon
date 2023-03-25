import { useState, useRef } from "react";
import { MapPinIcon, PlusIcon } from "@heroicons/react/24/outline";
import Button from "./Button";
import PaymentModal from "./PaymentModal";
import AcceptModal from "./AcceptModal";

export default function Feed({ events }) {
  const [openRequest, setOpenRequest] = useState(false);
  const [openAccept, setOpenAccept] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);

  const handleClick = (request) => {
    setSelectedRequest(request);
    setOpenAccept(true);
  };

  return (
    <div className="relative">
      {events.map((item) => (
        <div className="bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 m-3 p-2 flex flex-row justify-between">
          <div className="flex gap-4 items-center">
            <img
              src={"https://cat-avatars.vercel.app/api/cat?name=" + item.user}
              className="w-16 h-16"
            />
            <div>
              <p>
                <span className="font-mono">{item.user.substring(0, 7)}</span>{" "}
                <span className="text-gray-500">needs</span> {item.cash}
              </p>
              <p className="text-gray-500 text-sm">
                <MapPinIcon className="w-5 h-5 inline pb-1" />
                {item.distance} away | {item.time}
              </p>
            </div>
          </div>
          <div className="p-2">
            <Button
              onClick={() => handleClick(item)}
              className="w-16 h-16 rounded-full text-xs"
            >
              Raika-
              <br />
              tsching
            </Button>
          </div>
        </div>
      ))}
      {!openRequest && (
        <button
          onClick={() => setOpenRequest(true)}
          className="fixed bottom-5 left-1/2 transform -translate-x-1/2 p-0 w-16 h-16 bg-yellow-400 rounded-full hover:bg-yellow-500 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
        >
          <PlusIcon className="w-8 h-8 mx-auto self-center" />
        </button>
      )}
      <AcceptModal
        open={openAccept}
        setOpen={setOpenAccept}
        requestData={selectedRequest}
      />
      <PaymentModal open={openRequest} setOpen={setOpenRequest} />
    </div>
  );
}
