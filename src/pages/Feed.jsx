import React, { useRef } from "react";
import { useNostrEvents, dateToUnix } from "nostr-react";
import Geohash from "latlon-geohash";

import Feed from "../components/Feed";
import Layout from "../components/Layout";
import AnimatedLogo from "../components/AnimatedLogo";

export default function FeedPage() {
  const now = useRef(new Date()); // Make sure current time isn't re-rendered

  const { events } = useNostrEvents({
    filter: {
      since: dateToUnix(now.current), // all new events from now
      kinds: [1],
    },
  });

  const filteredEvents = events
    .filter((event) => {
      return event.content.includes("raikatchu:request");
    })
    .map((event) => {
      const geohash = Geohash.decode(event.content.split(":")[2]);
      return {
        user: event.pubkey,
        cash: event.content.split(":")[3],
        time: new Date(event.created_at * 1000).toLocaleString(),
        location: [geohash.lat, geohash.lon],
      };
    });

  return (
    <Layout title="Home">
      {filteredEvents.length === 0 && <AnimatedLogo />}
      <Feed events={filteredEvents} />
    </Layout>
  );
}
