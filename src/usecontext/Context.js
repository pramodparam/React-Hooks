import React,{createContext,useState} from 'react';

import Login from "./Login";
import User from "./User";

export const AppContext=createContext(null)
function Context() {
    const [username,setUserName]=useState("")
    return ( <AppContext.Provider value={{username,setUserName}}>
        <Login/>
        <User/>
        </AppContext.Provider> );
}

export default Context;