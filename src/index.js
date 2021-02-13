import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: 'Hello', likeCount: '5'},
    {id: 2, message: 'Hello', likeCount: '10'},
    {id: 3, message: 'How are you', likeCount: '11'},
    {id: 4, message: 'I\'m fine', likeCount: '100'}
]

let dialogs = [
    {id: 1, name: 'Nikita'},
    {id: 2, name: 'Denwa'},
    {id: 3, name: 'Madara'},
    {id: 4, name: 'Aizen'},
    {id: 5, name: 'Naruto'},
    {id: 6, name: 'Ichigo'}
]

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Nice'}
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
