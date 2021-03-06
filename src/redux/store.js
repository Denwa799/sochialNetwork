import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";

let store = {
    _state: {
        navbar: {
            friends: [
                {id: 1, name: 'Aizen', img: 'https://sun9-70.userapi.com/impg/PwcI47TTLuiaMmGt9_4MlvMQ7-9MwCvxq2C92Q/IatbXhqLKUw.jpg?size=1400x1800&quality=96&proxy=1&sign=55d5901f59f65ce2e3c5b9695ceaa0fd&type=album'},
                {id: 2, name: 'Madara', img: 'https://i.pinimg.com/736x/91/c2/ec/91c2eca7be22bd97b337db48f88680eb.jpg'},
                {id: 3, name: 'Denwa', img: 'https://sun9-26.userapi.com/impg/BC7X7pAMA9P0TNqNz1gkLNC-fQxPpjZKjTgKrA/i2bqm2aFJC0.jpg?size=1080x1080&quality=96&proxy=1&sign=990fa05d11a2f5121fef053c17dd6d21&type=album'},
            ]
        },
        profilePage: {
            posts: [
                {id: 1, message: 'Hello', likeCount: '5'},
                {id: 2, message: 'Hello', likeCount: '10'},
                {id: 3, message: 'How are you', likeCount: '11'},
                {id: 4, message: 'I\'m fine', likeCount: '100'}
            ],
            newPostText: ''
        },
        messagesPage: {
            dialogs: [
                {id: 1, name: 'Nikita', img: 'https://sun9-44.userapi.com/impg/8hVlJ11E9S1A1y0jI8QIPZGMII5zBcQc6jmsRg/1mOWIsaxHcU.jpg?size=1620x2160&quality=96&proxy=1&sign=eaecb4fe19e3261cd716c329938d300d&type=album'},
                {id: 2, name: 'Denwa', img: 'https://sun9-26.userapi.com/impg/BC7X7pAMA9P0TNqNz1gkLNC-fQxPpjZKjTgKrA/i2bqm2aFJC0.jpg?size=1080x1080&quality=96&proxy=1&sign=990fa05d11a2f5121fef053c17dd6d21&type=album'},
                {id: 3, name: 'Madara', img: 'https://i.pinimg.com/736x/91/c2/ec/91c2eca7be22bd97b337db48f88680eb.jpg'},
                {id: 4, name: 'Aizen', img: 'https://sun9-70.userapi.com/impg/PwcI47TTLuiaMmGt9_4MlvMQ7-9MwCvxq2C92Q/IatbXhqLKUw.jpg?size=1400x1800&quality=96&proxy=1&sign=55d5901f59f65ce2e3c5b9695ceaa0fd&type=album'},
                {id: 5, name: 'Naruto', img: 'https://i.artfile.ru/2339x1654_1090816_[www.ArtFile.ru].jpg'},
                {id: 6, name: 'Ichigo', img: 'https://segaretro.org/images/b/b1/BLEACH_3rd_Ichigo_Artwork_30.06.09.JPG'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Nice'}
            ],
            newMessageText: ''
        }
    },
    getState() {
      return this._state;
    },
    _callSubscriber() {
        console.log('State changed');
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.navbar = navbarReducer(this._state.navbar, action);

        this._callSubscriber(this._state);
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    }

}

window.store = store;

export default store;