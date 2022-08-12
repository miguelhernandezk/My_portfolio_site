import React from 'react';
import { CSSTransition } from 'react-transition-group';
import Header from "./Header";
import Menu from './Menu';
import AppContext from "../context/AppContext";
import "../styles/components/Layout.css"

const Layout = ({children}) => {
    const {state} = React.useContext(AppContext);
    return (
        <div className="Main">
            <div className="Menus">
                <CSSTransition /* For mobile*/
                    in={state.showMobileMenu}
                    timeout={300}
                    classNames="my-menu"
                    unmountOnExit
                    // onEnter={() => console.log("Hi")}
                    // onExited={() => console.log("Bye")}
                >
                    {/* {state.showMobileMenu && <Menu />}  Don't use this way or component won't animate*/} 
                    <Menu />
                </CSSTransition>
            </div>
            <div className="Main-container">
                <Header />
                {children}
            </div>
        </div>
    );
}

export default Layout;