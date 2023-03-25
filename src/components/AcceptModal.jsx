import React, { useState } from "react";
import Modal from "./Modal";
import Button from "./Button";
import AskForGeolocation from "./AskForGeolocation";
import { CheckIcon, MapPinIcon } from "@heroicons/react/24/outline";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default function AcceptModal({ open, setOpen, requestData }) {
  const [confirmation, setConfirmation] = useState(false);

  const { user, cash, location } = requestData || {};

  return (
    <>
      <Modal
        open={open}
        setOpen={setOpen}
        button={<Button onClick={() => setConfirmation(true)}>Accept</Button>}
        className="max-w-7xl"
      >
        <p>
          Will you help out {user?.substring(0, 7)} with {cash}?
        </p>
        <div className="m-2">
          <Map
            longitude={16.37351128650816}
            latitude={48.20904017128513}
            zoom={13}
            mapboxAccessToken="pk.eyJ1IjoiZmxvYmF1IiwiYSI6ImNrdW1uYW12cDFlenUzM282Ym96N3pqYTEifQ.RH29qvuc6pkcbl5JxtDzVQ"
            style={{ width: "100%", height: 200 }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
          >
            <Marker
              key={user}
              longitude={location?.[1]}
              latitude={location?.[0]}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="black"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
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
          <p>Thanks mate! go catch em all!</p>
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
            <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
          </div>
        </div>
      </Modal>
    </>
  );
}

//pk.eyJ1IjoiZmxvYmF1IiwiYSI6ImNrdW1uYW12cDFlenUzM282Ym96N3pqYTEifQ.RH29qvuc6pkcbl5JxtDzVQ
