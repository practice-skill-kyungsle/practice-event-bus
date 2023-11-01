import eventBus from "./eventBus";

function Publisher() {
  const handleClick = () => {
    eventBus.emit("myEvent", "Hello, I AM Publisher!");
  };

  return (
    <button onClick={handleClick} style={_style}>
      Click Me!
    </button>
  );
}

const _style = { backgroundColor: "white" };

export default Publisher;
