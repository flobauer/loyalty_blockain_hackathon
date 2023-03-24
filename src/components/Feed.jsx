import { useRef } from "react";
import { useNostrEvents, dateToUnix } from "nostr-react";

export default function GlobalFeed() {
  const now = useRef(new Date()); // Make sure current time isn't re-rendered

  const { events } = useNostrEvents({
    filter: {
      since: dateToUnix(now.current), // all new events from now
      kinds: [1],
    },
  });

  const tempData = [
    {
      user: "skldjf",
      cash: "40€",
      distance: "10km",
    },
    {
      user: "slskjslkjlkjkldjf",
      cash: "50€",
      distance: "20km",
    },
    {
      user: "skljksdfjlsldjf",
      cash: "40€",
      distance: "10km",
    },
    {
      user: "skleeeedjf",
      cash: "40€",
      distance: "10km",
    },
    {
      user: "skldjf",
      cash: "40€",
      distance: "10km",
    },
    {
      user: "skldjf",
      cash: "40€",
      distance: "10km",
    },
    {
      user: "skldjf",
      cash: "40€",
      distance: "10km",
    },
    {
      user: "skldjf",
      cash: "40€",
      distance: "10km",
    },
  ];

  return (
    <div className="relative">
      {tempData.map((item) => (
        <div className="bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 m-5">
          <p>
            {item.user} needs {item.cash}
          </p>
        </div>
      ))}
      <button className="p-0 w-16 h-16 bg-yellow-400 rounded-full hover:bg-yellow-500 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
        +
      </button>
    </div>
  );
}
