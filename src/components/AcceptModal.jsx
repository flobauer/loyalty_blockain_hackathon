import React, { useState } from "react";
import Modal from "./Modal";
import Button from "./Button";
import AskForGeolocation from "./AskForGeolocation";
import { CheckIcon, MapPinIcon } from "@heroicons/react/24/outline";
import Map, { Marker } from "react-map-gl";

export default function AcceptModal({ open, setOpen, requestData }) {
  const [confirmation, setConfirmation] = useState(false);
  const { user, cash, distance } = requestData || {};
  return (
    <>
      <Modal
        open={open}
        setOpen={setOpen}
        button={<Button onClick={() => setConfirmation(true)}>Accept</Button>}
      >
        <p>
          Will you help out {user} with {cash}?
        </p>
        <p>They are {distance} away:</p>
        <div className="m-2">
          <Map
            longitude={16.37351128650816}
            latitude={48.20904017128513}
            zoom={15}
            mapboxAccessToken="pk.eyJ1IjoiZmxvYmF1IiwiYSI6ImNrdW1uYW12cDFlenUzM282Ym96N3pqYTEifQ.RH29qvuc6pkcbl5JxtDzVQ"
            style={{ width: "100%", height: 200 }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
          >
            <Marker
              key={user}
              longitude={16.374028026924933}
              latitude={48.18843507581358}
            >
              <MapPinIcon className="w-5 h-5 inline" />
            </Marker>
          </Map>
        </div>
      </Modal>
      <Modal
        open={confirmation}
        setOpen={setConfirmation}
        button={<Button onClick={() => setConfirmation(false)}>Close</Button>}
      >
        <div className="flex flex-col gap-6">
          <p>Thanks mate! Get on your way to help out {user}</p>
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
            <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
          </div>
        </div>
      </Modal>
    </>
  );
}

//pk.eyJ1IjoiZmxvYmF1IiwiYSI6ImNrdW1uYW12cDFlenUzM282Ym96N3pqYTEifQ.RH29qvuc6pkcbl5JxtDzVQ
