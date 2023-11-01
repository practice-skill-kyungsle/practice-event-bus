import { createContext, useContext, useReducer } from "react";
import Publisher from "./Publisher";
import Subscriber from "./Subscriber";
import "./App.css";

const data = { contextValue: "start!" };

const Context = createContext();
const PatherContext = createContext();

export const useMyContext = () => useContext(Context);
export const useMyDispatchContext = () => useContext(PatherContext);

const reducer = (state, action) => {
  console.log("%ccontext change!", "color:chocolate");
  return { ...state, contextValue: action.value };
};

function App() {
  const [state, dispatch] = useReducer(reducer, { ...data });

  return (
    <PatherContext.Provider value={dispatch}>
      <Context.Provider value={state}>
        <div>
          <Publisher />
          <Subscriber />
        </div>
      </Context.Provider>
    </PatherContext.Provider>
  );
}

export default App;
