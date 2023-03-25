import React from "react";
import { Link } from "react-router-dom";
import { useLocalStorage } from "../helper/hooks";
import { useProfile } from "nostr-react";
import Profile from "../templates/Profile";
import Layout from "../components/Layout";

export default function MyProfile() {
  const [pubkey] = useLocalStorage("publicKey", "");
  const { data: userData } = useProfile({
    pubkey,
  });

  return (
    <Layout title="Your profile" back="/">
      <Profile data={userData} />
      <div className="p-4 flex justify-end">
        <Link to="/settings" className="my-button">
          Edit profile
        </Link>
      </div>
    </Layout>
  );
}
