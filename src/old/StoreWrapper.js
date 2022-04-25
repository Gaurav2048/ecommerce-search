import { createContext, useContext, useReducer } from "react";
import reducer, { initialValue } from "./Reducer";


export const DataContext = createContext();

const StoreWrapper = (props) => {
  const [state, dispatch] = useReducer(reducer, initialValue)
  return <DataContext.Provider value ={{
    state, dispatch
  }}>
    {props.children}
  </DataContext.Provider>
}

export default StoreWrapper;
