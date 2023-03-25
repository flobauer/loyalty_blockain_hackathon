import React from "react";
import { useNostrEvents, dateToUnix } from "nostr-react";
import Feed from "../components/Feed";

export default function Feed() {
  const { events } = useNostrEvents({
    filter: {
      since: dateToUnix(now.current), // all new events from now
      kinds: [1],
    },
  });

  const filteredEvents = events.filter((event) => {
    return event.content.includes("Loyalty hackathon Test Message 👐🏻👹");
  });

  return <Feed events={filteredEvents} />;
}
