import { useState, useRef } from "react";
import { MapPinIcon, PlusIcon } from "@heroicons/react/24/outline";
import Button from "./Button";
import PaymentModal from "./PaymentModal";
import AcceptModal from "./AcceptModal";

export default function GlobalFeed() {
  const now = useRef(new Date()); // Make sure current time isn't re-rendered

  const tempData = [
    {
      user: "skldjf",
      cash: "40€",
      distance: "10km",
    },
    {
      user: "slskjslkjlkjkldjf",
      cash: "50€",
      distance: "20km",
    },
    {
      user: "skljksdfjlsldjf",
      cash: "40€",
      distance: "10km",
    },
    {
      user: "skleeeedjf",
      cash: "40€",
      distance: "10km",
    },
    {
      user: "skldjf",
      cash: "40€",
      distance: "10km",
    },
    {
      user: "skldjf",
      cash: "40€",
      distance: "10km",
    },
    {
      user: "skldjf",
      cash: "40€",
      distance: "10km",
    },
    {
      user: "skldjf",
      cash: "40€",
      distance: "10km",
    },
    {
      user: "skleeeedjf",
      cash: "40€",
      distance: "10km",
    },
    {
      user: "skldjf",
      cash: "40€",
      distance: "10km",
    },
    {
      user: "skldjf",
      cash: "40€",
      distance: "10km",
    },
    {
      user: "skldjf",
      cash: "40€",
      distance: "10km",
    },
    {
      user: "skldjf",
      cash: "40€",
      distance: "10km",
    },
  ];

  const [openRequest, setOpenRequest] = useState(false);
  const [openAccept, setOpenAccept] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);

  const handleClick = (request) => {
    setOpenAccept(true);
    setSelectedRequest(request);
  };

  return (
    <div className="relative">
      {tempData.map((item) => (
        <div className="bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 m-3 p-2 flex flex-row justify-between">
          <div className="">
            <p>
              {item.user} needs {item.cash}
            </p>
            <p>
              <MapPinIcon className="w-5 h-5 inline pb-1" /> {item.distance}{" "}
              away
            </p>
          </div>
          <div className="flex content-around p-2">
            <Button onClick={() => handleClick(item)}>Help out</Button>
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
