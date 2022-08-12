import React from 'react';
import initialState from "../initialState";

const useActions = () => {
    const [state, setState] = React.useState(initialState);

    const displayMenu = () => {
        setState({
            ...state,
            showMobileMenu: !state.showMobileMenu,
        });
    }

    const turnOnLight = () =>{
        setState({
            ...state,
            lightMode: !state.lightMode,
        });
    }

    return{
        state,
        displayMenu,
        turnOnLight,
    }
}

export default useActions; 