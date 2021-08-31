import React from "react";
import styles from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    return (
        <div>
            <div>
                <img className={styles.mainPhoto} src={props.profile.photos.large || userPhoto} alt=""/>
                {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                {/*<img
                src="https://demotivation.ru/wp-content/uploads/2020/01/Canada_Parks_Lake_Mountains_Forests_Scenery_Rocky_567540_3840x2400-scaled.jpg"
                alt=""/>*/}
                <div className={styles.descriptionBlog}>
                    <div className={styles.descriptionText}>
                        <h1>{props.profile.fullName}</h1>
                    </div>
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                    <div className={styles.descriptionText}>
                        Обо мне: {props.profile.aboutMe ? props.profile.aboutMe : "Нет информации"}
                    </div>
                    <div className={styles.descriptionText}>
                        Работа: {props.profile.lookingForAJob
                        ? <span>{props.profile.lookingForAJobDescription}</span>
                        : <span>Не ищу работу</span>}
                    </div>
                    <div className={styles.descriptionText}>
                        <span className={styles.descriptionText}>Контакты:</span>
                        <div className={styles.descriptionText}>
                            Facebook
                            - {props.profile.contacts.facebook ? props.profile.contacts.facebook : "Нет"}
                        </div>
                        <div className={styles.descriptionText}>
                            Website - {props.profile.contacts.website ? props.profile.contacts.website : "Нет"}
                        </div>
                        <div className={styles.descriptionText}>
                            Vk - {props.profile.contacts.vk ? props.profile.contacts.vk : "Нет"}
                        </div>
                        <div className={styles.descriptionText}>
                            Twitter - {props.profile.contacts.twitter ? props.profile.contacts.twitter : "Нет"}
                        </div>
                        <div className={styles.descriptionText}>
                            Instagram - {props.profile.contacts.instagram ? props.profile.contacts.instagram : "Нет"}
                        </div>
                        <div className={styles.descriptionText}>
                            Youtube - {props.profile.contacts.youtube ? props.profile.contacts.youtube : "Нет"}
                        </div>
                        <div className={styles.descriptionText}>
                            Github - {props.profile.contacts.github ? props.profile.contacts.github : "Нет"}
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}


export default ProfileInfo;