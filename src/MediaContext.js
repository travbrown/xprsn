import React from 'react';
import {useReducer, createContext } from 'react';

let initialState = {
    fullImageFilePaths: [],
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