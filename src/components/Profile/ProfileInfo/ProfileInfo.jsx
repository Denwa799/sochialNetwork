import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                {props.profile.photos.large ?
                    <img className={classes.photosLarge} src={props.profile.photos.large} alt=""/> :
                    <span className={classes.dontPhoto}>Фотография отсутствует</span>}
                {/*<img
                    src="https://demotivation.ru/wp-content/uploads/2020/01/Canada_Parks_Lake_Mountains_Forests_Scenery_Rocky_567540_3840x2400-scaled.jpg"
                    alt=""/>*/}
                <div className={classes.descriptionBlog}>
                    <div className={classes.descriptionText}>
                        <h1>{props.profile.fullName}</h1>
                    </div>
                    <div className={classes.descriptionText}>
                        Обо мне: {props.profile.aboutMe ? props.profile.aboutMe : "Нет информации"}
                    </div>
                    <div className={classes.descriptionText}>
                        Работа: {props.profile.lookingForAJob
                        ? <span>{props.profile.lookingForAJobDescription}</span>
                        : <span>Не ищу работу</span>}
                    </div>
                    <div className={classes.descriptionText}>
                        <span className={classes.descriptionText}>Контакты:</span>
                        <div className={classes.descriptionText}>
                            Facebook
                            - {props.profile.contacts.facebook ? props.profile.contacts.facebook : "Нет"}
                        </div>
                        <div className={classes.descriptionText}>
                            Website - {props.profile.contacts.website ? props.profile.contacts.website : "Нет"}
                        </div>
                        <div className={classes.descriptionText}>
                            Vk - {props.profile.contacts.vk ? props.profile.contacts.vk : "Нет"}
                        </div>
                        <div className={classes.descriptionText}>
                            Twitter - {props.profile.contacts.twitter ? props.profile.contacts.twitter : "Нет"}
                        </div>
                        <div className={classes.descriptionText}>
                            Instagram - {props.profile.contacts.instagram ? props.profile.contacts.instagram : "Нет"}
                        </div>
                        <div className={classes.descriptionText}>
                            Youtube - {props.profile.contacts.youtube ? props.profile.contacts.youtube : "Нет"}
                        </div>
                        <div className={classes.descriptionText}>
                            Github - {props.profile.contacts.github ? props.profile.contacts.github : "Нет"}
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}


export default ProfileInfo;