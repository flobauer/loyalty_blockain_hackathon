import React, { useEffect } from "react";
import { useLocalStorage } from "../helper/hooks";
import Layout from "../components/Layout";
import Button from "../components/Button";
import Label from "../components/Label";
import InputWithLabel from "../components/InputWithLabel";
import IBAN from "iban";

import { generatePrivateKey, getPublicKey } from "nostr-tools";

export default function Settings() {
  const [name, setName] = useLocalStorage("name", "");
  const [tShirtColor, setTShirtColor] = useLocalStorage("thsirtcolor", "");
  const [iban, setIban] = useLocalStorage("iban", "DE02100100100006820101");
  const [bic, setBic] = useLocalStorage("bic", "BYLADEM1001");

  // Nostr
  const [privateKey, setPrivateKey] = useLocalStorage("privateKey", "");
  const [publicKey, setPublicKey] = useLocalStorage("publicKey", "");

  useEffect(() => {
    if (privateKey !== "") {
      try {
        let pk = getPublicKey(privateKey);
        setPublicKey(pk);
      } catch (e) {}
    } else {
      setPublicKey("");
    }
  }, [privateKey]);

  return (
    <Layout title="Settings" back={true}>
      <div className="space-y-10 divide-y divide-gray-900/10 max-w-5xl mx-auto p-8">
        <div className="grid grid-cols-1 gap-y-8 gap-x-8 md:grid-cols-3">
          <div className="px-4 sm:px-0">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Profile
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>

          <form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
            <div className="px-4 py-6 sm:p-8">
              <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-full">
                  <InputWithLabel
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="sm:col-span-4">
                  <Label id="tshirtcolor">Current T-Shirt Color</Label>
                  <div className="mt-2">
                    <select
                      id="tshirtcolor"
                      value={tShirtColor}
                      onChange={(e) => setTShirtColor(e.target.value)}
                      name="tshirtcolor"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                      <option>Black</option>
                      <option>White</option>
                      <option>Blue</option>
                      <option>Red</option>
                      <option>Green</option>
                      <option>Yellow</option>
                      <option>Purple</option>
                      <option>Pink</option>
                      <option>Orange</option>
                      <option>Gray</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="grid grid-cols-1 gap-y-8 gap-x-8 pt-10 md:grid-cols-3">
          <div className="px-4 sm:px-0">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Banking Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This information is only shared during transaction with a fellow
              Überall.
            </p>
          </div>

          <form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
            <div className="px-4 py-6 sm:p-8">
              <div className="grid max-w-2xl grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-6">
                <div className="col-span-full">
                  <InputWithLabel
                    label="IBAN"
                    value={iban}
                    error={!IBAN.isValid(iban) && iban !== ""}
                    onChange={(e) => {
                      setIban(e.target.value);
                    }}
                  />
                </div>
                <div className="sm:col-span-4">
                  <InputWithLabel
                    label="Bic"
                    value={bic}
                    onChange={(e) => setBic(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="grid grid-cols-1 gap-y-8 gap-x-8 pt-10 md:grid-cols-3">
          <div className="px-4 sm:px-0">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Nostr Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Please enter your Nostr User if you want to use your own Public
              Key. Otherwise we generate a key on the fly.
            </p>
          </div>

          <form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
            <div className="px-4 py-6 sm:p-8">
              <div className="grid max-w-2xl grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-6">
                <div className="col-span-full">
                  <Label>Public Key</Label>
                  <div className="mt-2 text-ellipsis overflow-hidden">
                    {publicKey}
                  </div>
                </div>
                <div className="col-span-4">
                  <InputWithLabel
                    label="Private Key"
                    type="password"
                    error={!publicKey && privateKey !== ""}
                    value={privateKey}
                    onChange={(e) => setPrivateKey(e.target.value)}
                  />
                </div>
                <div className="col-span-2 mt-8">
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      const sk = generatePrivateKey();
                      setPrivateKey(sk);
                    }}>
                    Generate Key
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="grid grid-cols-1 gap-y-8 gap-x-8 pt-10 md:grid-cols-3">
          <div className="px-4 sm:px-0">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Notifications
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              We'll always let you know about important changes, but you pick
              what else you want to hear about.
            </p>
          </div>

          <form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
            <div className="px-4 py-6 sm:p-8">
              <div className="max-w-2xl space-y-10">
                <fieldset>
                  <legend className="text-sm font-semibold leading-6 text-gray-900">
                    Push Notifications
                  </legend>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    These are delivered via SMS to your mobile phone.
                  </p>
                  <div className="mt-6 space-y-6">
                    <div className="flex items-center gap-x-3">
                      <input
                        id="push-everything"
                        name="push-notifications"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="push-everything"
                        className="block text-sm font-medium leading-6 text-gray-900">
                        Everything
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        id="push-nothing"
                        name="push-notifications"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="push-nothing"
                        className="block text-sm font-medium leading-6 text-gray-900">
                        No push notifications
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
