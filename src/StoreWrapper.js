import { useReducer, createContext } from "react";
import Reducer from "./Reducer";

const initialValue = {
    data: {
        map: {},
        id: []
    },
    cart: [],
}

export const DataContext = createContext();

const StoreWrapper = (props) => {
    const [ store, dispatch ] = useReducer(Reducer, initialValue)
   
    return <DataContext.Provider value={{
        store, dispatch
    }}>
        {props.children}
    </DataContext.Provider>
}

export default StoreWrapper;
