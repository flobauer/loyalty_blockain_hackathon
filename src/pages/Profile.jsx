import React from "react";
import { useParams } from "react-router-dom";
import { useProfile } from "nostr-react";
import Profile from "../templates/Profile";
import Layout from "../components/Layout";

export default function AllProfile() {
  const { pubkey } = useParams();

  if (!pubkey) {
    return <div>no pubkey</div>;
  }

  const { data: userData } = useProfile({
    pubkey,
  });

  return (
    <Layout title={userData.name} back="/">
      <Profile data={userData} />
    </Layout>
  );
}
