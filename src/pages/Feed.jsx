import React, { useRef } from "react";
import { useNostrEvents, dateToUnix } from "nostr-react";
import Feed from "../components/Feed";
import Layout from "../components/Layout";

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
      return event.content.includes("Loyalty hackathon Test Message 👐🏻👹");
    })
    .map((event) => {
      return {
        user: event.pubkey,
        cash: event.content.split(" ")[event.content.split(" ").length - 1],
        distance: "10km",
      };
    });

  return (
    <Layout title="Home">
      <Feed events={filteredEvents} />
    </Layout>
  );
}
