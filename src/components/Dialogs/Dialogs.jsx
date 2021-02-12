import React from 'react';
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Nikita'},
        {id: 2, name: 'Denwa'},
        {id: 3, name: 'Madara'},
        {id: 4, name: 'Aizen'},
        {id: 5, name: 'Naruto'},
        {id: 6, name: 'Ichigo'}
    ]

    let dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Nice'}
    ]

    let messagesElements = messages.map(message => <Message message={message.message}/>);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;