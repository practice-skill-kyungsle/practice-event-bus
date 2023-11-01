import eventBus from "./eventBus";

function Publisher() {
  const handleClick = () => {
    eventBus.emit("myEvent", "Hello, I AM Publisher!");
  };

  return <button onClick={handleClick}>Click Me!</button>;
}

export default Publisher;
