import React from "react";
import { useParams } from "react-router-dom";
import { useProfile } from "nostr-react";
import Profile from "../templates/Profile";
import Layout from "../components/Layout";

export default function AllProfile() {
  const { pubkey } = useParams();

  if (!pubkey) {
    return (
      <Layout title="404" back="/">
        <div className="p-8">no user data</div>
      </Layout>
    );
  }

  const { data: userData } = useProfile({
    pubkey,
  });

  // 404
  if (!userData) {
    return (
      <Layout title="404" back="/feed">
        <div className="p-8">no user data</div>
      </Layout>
    );
  }

  return (
    <Layout title={userData.name} back="/feed">
      <Profile data={userData} />
    </Layout>
  );
}
