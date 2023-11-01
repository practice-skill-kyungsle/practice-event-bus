import { useEffect, useState } from "react";
import eventBus from "./eventBus";

function Subscriber() {
  const [received, setReceived] = useState("I AM Subscriber");

  useEffect(() => {
    const handleMyEvent = (message) => {
      setReceived((prev) => prev + `, i received "${message}"`);
    };

    eventBus.on("myEvent", handleMyEvent);

    return () => {
      eventBus.off("myEvent", handleMyEvent);
    };
  }, []);

  return <div>{received}</div>;
}

export default Subscriber;
