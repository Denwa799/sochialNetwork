import React from "react";
import Navbar from "./Navbar";
import StoreContext from "../../storeContext";

const NavbarContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState();

                return <Navbar friends={state.navbarReducer.friends}/>
            }
        }
        </StoreContext.Consumer>
    );
}

export default NavbarContainer;