import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";



const DialogsContainer = (props) => {

    let state = props.store.getState();

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (text) => {
        let action = updateNewMessageTextActionCreator(text);
        props.store.dispatch(action);
    }

    return (
        <Dialogs updateNewMessageText={onMessageChange}
                 addMessage={addMessage}
                 dialogs={state.dialogsReducer.dialogs}
                 messages={state.dialogsReducer.messages}
                 newMessageText={state.dialogsReducer.newMessageText}/>
    );
}

export default DialogsContainer;