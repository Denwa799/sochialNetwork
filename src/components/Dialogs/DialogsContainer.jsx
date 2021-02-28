import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../storeContext";


const DialogsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState();

                let addMessage = () => {
                    store.dispatch(addMessageActionCreator());
                }

                let onMessageChange = (text) => {
                    let action = updateNewMessageTextActionCreator(text);
                    store.dispatch(action);
                }

                return (
                    <Dialogs updateNewMessageText={onMessageChange}
                             addMessage={addMessage}
                             dialogs={state.dialogsReducer.dialogs}
                             messages={state.dialogsReducer.messages}
                             newMessageText={state.dialogsReducer.newMessageText}/>
                );
            }
        }
        </StoreContext.Consumer>
    );
}

export default DialogsContainer;