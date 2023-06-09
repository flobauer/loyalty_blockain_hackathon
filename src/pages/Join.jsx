import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useNostr } from "nostr-react";
import { useLocalStorage } from "../helper/hooks";
import Layout from "../components/Layout";
import Button from "../components/Button";
import InputWithLabel from "../components/InputWithLabel";
import AskForGeolocation from "../components/AskForGeolocation";

import { generatePrivateKey } from "nostr-tools";

import { updateProfile } from "../components/NostrProfileButton";

export default function Join({ events }) {
  const { publish } = useNostr();
  const navigate = useNavigate();

  const [name, setName] = useLocalStorage("name", "");
  const [privateKey, setPrivateKey] = useLocalStorage("privateKey", "");
  const [ask, setAsk] = useState(false);
  const [geoHash, setGeoHash] = useLocalStorage("geoHash", "");

  useEffect(() => {
    if (geoHash && privateKey && name) {
      try {
        updateProfile({ name, tShirtColor: "", privateKey, publish });
        navigate("/feed");
      } catch (e) {
        alert("Something went wrong, please try again");
      }
    }
  }, [geoHash]);

  const registration = (hash) => {
    setGeoHash(hash);
  };

  return (
    <Layout title="Join us">
      <div className="p-4 py-12">
        <div className="flex flex-col gap-4">
          <div>
            <InputWithLabel
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-5">
            <div className="col-span-3 sm:col-span-4">
              <InputWithLabel
                label="Private key"
                value={privateKey}
                onChange={(e) => setPrivateKey(e.target.value)}
                type="password"
              />
            </div>
            <div className="pb-3 col-span-2 sm:col-span-1">
              <Button
                className="text-sm mt-8 w-full rounded"
                onClick={(e) => {
                  e.preventDefault();
                  const sk = generatePrivateKey();
                  setPrivateKey(sk);
                }}>
                Generate Key
              </Button>
            </div>
          </div>

          {!geoHash && (
            <Button onClick={() => setAsk(true)}>
              Allow Location & Register
            </Button>
          )}
        </div>

        {ask && <AskForGeolocation setGeoHash={registration} />}
      </div>
    </Layout>
  );
}
