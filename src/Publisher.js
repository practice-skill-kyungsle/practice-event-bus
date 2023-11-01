import { useMyContext, useMyDispatchContext } from "./App";
import eventBus from "./eventBus";

function Publisher() {
  const { contextValue } = useMyContext();
  const dispather = useMyDispatchContext();

  const handleBusClick = () => {
    eventBus.emit("myEvent", "Hello, I AM Publisher!");
  };

  const handleContextClick = () => {
    dispather({ value: contextValue + "add" });
  };

  return (
    <div id="butonWrapper">
      <h2>Publisher Component</h2>
      <button id="busButton" onClick={handleBusClick}>
        event bus button
      </button>
      <button id="contextButton" onClick={handleContextClick}>
        context button
      </button>
    </div>
  );
}

export default Publisher;
