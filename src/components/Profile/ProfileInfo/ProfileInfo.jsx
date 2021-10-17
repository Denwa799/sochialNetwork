import React, {useState} from "react";
import styles from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, isOwner, status, updateStatus, savePhoto, saveProfile} ) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData);
        setEditMode(false);
    }

    return (
        <div>
            <div>
                <img className={styles.mainPhoto} src={profile.photos.large || userPhoto} alt=""/>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                {/*<img
                src="https://demotivation.ru/wp-content/uploads/2020/01/Canada_Parks_Lake_Mountains_Forests_Scenery_Rocky_567540_3840x2400-scaled.jpg"
                alt=""/>*/}
                {editMode ?
                    <ProfileDataForm initialValues={profile}
                                     onSubmit={onSubmit}
                                     profile={profile}
                    />
                    : <ProfileData profile={profile}
                                   status={status}
                                   updateStatus={updateStatus}
                                   isOwner={isOwner}
                                   goToEditMode={() => {
                                       setEditMode(true)
                                   }}
                    />}
            </div>
        </div>
    );
}

const ProfileData = ({profile, status, updateStatus, isOwner, goToEditMode}) => {
    return <div className={styles.descriptionBlog}>
        {isOwner && <div>
            <button onClick={goToEditMode}>edit</button>
        </div>}
        <div className={styles.descriptionText}>
            <h1>{profile.fullName}</h1>
        </div>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        <div className={styles.descriptionText}>
            Обо мне: {profile.aboutMe ? profile.aboutMe : "Нет информации"}
        </div>
        <div className={styles.descriptionText}>
            Работа: {profile.lookingForAJob
            ? <span>{profile.lookingForAJob}</span>
            : <span>Не ищу работу</span>}
        </div>
        <div className={styles.descriptionText}>
            Мои навыки: {profile.lookingForAJobDescription
            ? <span>{profile.lookingForAJobDescription}</span>
            : <span>Нет навыков</span>}
        </div>
        <div className={styles.descriptionText}>
            <span className={styles.descriptionText}>Контакты:</span>
            {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
        </div>
    </div>
}

const Contact = ({contactTitle, contactValue}) => {
    return <div className={styles.descriptionText}>{contactTitle} - {contactValue}</div>
}


export default ProfileInfo;