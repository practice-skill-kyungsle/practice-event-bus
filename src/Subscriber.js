import { useEffect } from "react";
import eventBus from "./eventBus";
import Dummy from "./Dummy";

function Subscriber() {
  useEffect(() => {
    const handleMyEvent = (message) => {
      console.log(`%c${message}`, "color:cadetblue");
    };

    eventBus.on("myEvent", handleMyEvent);
    return () => {
      eventBus.off("myEvent", handleMyEvent);
    };
  }, []);

  return (
    <div id="subscriber">
      <h2>Subscriber Component</h2>
      <Dummy />
    </div>
  );
}

export default Subscriber;
