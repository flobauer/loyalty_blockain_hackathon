import React from "react";
import Geohash from "latlon-geohash";

import Feed from "../components/Feed";
import Layout from "../components/Layout";
import AnimatedLogo from "../components/AnimatedLogo";

export default function FeedPage({ events }) {
  const filteredEvents = events
    .filter((event) => {
      return event.content.includes("raikatchu:request");
    })
    .map((event) => {
      const geohash = Geohash.decode(event.content.split(":")[2]);
      return {
        id: event.id,
        user: event.pubkey,
        cash: event.content.split(":")[3],
        time: new Date(event.created_at * 1000).toLocaleString(),
        location: geohash ? [geohash.lat, geohash.lon] : [0, 0],
      };
    });

  return (
    <Layout title="Home">
      {filteredEvents.length === 0 && <AnimatedLogo />}
      <Feed events={filteredEvents} />
    </Layout>
  );
}
