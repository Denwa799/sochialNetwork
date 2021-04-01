import React from 'react';
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";


const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(dialog => <DialogItem name={dialog.name}
                                                                  key={dialog.id}
                                                                  id={dialog.id}
                                                                  img={dialog.img}/>);

    let messagesElements = props.messages.map(message => <Message message={message.message}
                                                                  key={message.id}/>);

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        props.addMessage();
    }

    let onMessageChange = (b) => {
        let body = b.target.value;
        props.updateNewMessageBody(body);
    }

    if (!props.isAuth) return <Redirect to={"/login"}/>;

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div className={classes.messageDialogs}>
                    {messagesElements}
                    <div>
                        <div className={classes.textArea}>
                            <textarea placeholder="Enter your message" onChange={onMessageChange}
                                      ref={newMessageElement} value={props.newMessageBody}/>
                        </div>
                        <div>
                            <button onClick={sendMessage}>Отправить сообщение</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;