import React, { useState, createContext, useReducer, useEffect } from 'react'
// import uuid from 'uuid/v1'
import {AppReducer} from '../reducers/AppReducer'

export const AppContext = createContext()

const AppContextProvider = (props) => {
    
    //if use the useReducer
    const[selectedNum, dispatch] = useReducer(AppReducer, 1)
    useEffect(() => {
        
    }, [selectedNum])

    return(
        <AppContext.Provider value={{selectedNum, dispatch}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
