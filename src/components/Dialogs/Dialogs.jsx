import React from 'react';
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.messagesPage.dialogs.map(dialog => <DialogItem name={dialog.name}
                                                                               id={dialog.id}
                                                                               img={dialog.img}/>);

    let messagesElements = props.messagesPage.messages.map(message => <Message message={message.message}/>);

    let newMessageElement = React.createRef();

    let addMessage = () => {
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
                            <textarea onChange={onMessageChange} ref={newMessageElement} value={props.messagesPage.newMessageText}/>
                        </div>
                        <div>
                            <button onClick={addMessage}>Отправить сообщение</button>
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