import React from 'react';
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}
                                                                        img={dialog.img}/>);

    let messagesElements = props.state.messages.map(message => <Message message={message.message}/>);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div className={classes.firstMessage}>
                    {messagesElements}
                </div>
                <div className={classes.SecondMessage}>
                    {messagesElements}
                </div>
            </div>
        </div>
    );
}

export default Dialogs;