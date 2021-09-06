import React from 'react';
import {useReducer, createContext } from 'react';
import { storage } from "./firebase";
import firebase from 'firebase/app';
import "firebase/storage";

let initialState = {
    fullImageFilePaths: [],
    // mainRef: firebase.storage().ref(),
};

const reducer = (state, action) => {
    switch (action.type) {
        case "reset":
            return initialState;
        default:
            return state;
    }
};

export const MediaContext = createContext(initialState);

const MediaContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const reset = () => {
        dispatch({
            type: "reset",
        });
    };
    

    return(
        <MediaContext.Provider value={{
            fullImageFilePaths: state.fullImageFilePaths,
            reset,
        }}> {children} </MediaContext.Provider>
    )
};

export default MediaContextProvider;