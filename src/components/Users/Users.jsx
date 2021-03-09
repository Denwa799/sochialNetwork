import React from 'react';
import classes from "./Users.module.css";

const Users = (props) => {

    /*if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://sun9-44.userapi.com/impg/8hVlJ11E9S1A1y0jI8QIPZGMII5zBcQc6jmsRg/1mOWIsaxHcU.jpg?size=1620x2160&quality=96&proxy=1&sign=eaecb4fe19e3261cd716c329938d300d&type=album',
                followed: true,
                fullName: 'Nikita',
                status: 'Denwa',
                location: {city: 'Sochi', country: 'Russia'},
            },
            {
                id: 2,
                photoUrl: 'https://segaretro.org/images/b/b1/BLEACH_3rd_Ichigo_Artwork_30.06.09.JPG',
                followed: false,
                fullName: 'Ichigo',
                status: 'Bankai',
                location: {city: 'Karakura', country: 'Japan'},
            },
            {
                id: 3,
                photoUrl: 'https://i.pinimg.com/736x/91/c2/ec/91c2eca7be22bd97b337db48f88680eb.jpg',
                followed: true,
                fullName: 'Madara',
                status: 'Rinnegan',
                location: {city: 'Konoha', country: 'Fire'},
            },
            {
                id: 4,
                photoUrl: 'https://sun9-70.userapi.com/impg/PwcI47TTLuiaMmGt9_4MlvMQ7-9MwCvxq2C92Q/IatbXhqLKUw.jpg?size=1400x1800&quality=96&proxy=1&sign=55d5901f59f65ce2e3c5b9695ceaa0fd&type=album',
                followed: true,
                fullName: 'Aizen',
                status: 'Kami',
                location: {city: 'Gotei13', country: 'Soul society'},
            },
        ])
    }*/

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={classes.userPhoto} alt=""/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>
                                {u.fullName}
                            </div>
                            <div>
                                {u.status}
                            </div>
                        </span>
                        <span>
                            <div>
                                {u.location.country}
                            </div>
                            <div>
                                {u.location.city}
                            </div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
}

export default Users;