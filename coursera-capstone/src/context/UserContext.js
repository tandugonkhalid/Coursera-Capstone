import { createContext, useReducer } from "react";
import { INITIAL_STATE, postReducer } from "../components/postReducer";

const UserContext = createContext();

function UserProvider({ children }){

    const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);

    return (
        <UserContext.Provider value={{state, dispatch}}>
            {children}
        </UserContext.Provider>
    );

}

export {UserProvider, UserContext};