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
  return <Feed events={events} />;
}
