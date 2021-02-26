import React from 'react';
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(dialog => <DialogItem name={dialog.name}
                                                                  id={dialog.id}
                                                                  img={dialog.img}/>);

    let messagesElements = props.messages.map(message => <Message message={message.message}/>);

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div className={classes.firstMessage}>
                    {messagesElements}
                    <div>
                        <div>
                            <textarea placeholder="Enter your message" onChange={onMessageChange} ref={newMessageElement} value={props.newMessageText}/>
                        </div>
                        <div>
                            <button onClick={sendMessage}>Отправить сообщение</button>
                        </div>
                    </div>
                </div>
                <div className={classes.SecondMessage}>
                    {messagesElements}
                </div>
            </div>
        </div>
    );
}

export default Dialogs;