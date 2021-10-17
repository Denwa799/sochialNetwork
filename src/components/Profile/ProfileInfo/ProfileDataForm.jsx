import React from "react";
import styles from "./ProfileInfo.module.css";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";

const ProfileDataForm = ({handleSubmit}) => {
    return <form className={styles.descriptionBlog} onSubmit={handleSubmit}>
        <div>
            <button>save</button>
        </div>
        <div className={styles.descriptionText}>
            <h1>{createField("Полное имя", "fullName", [], Input)}</h1>
        </div>
        <div className={styles.descriptionText}>
            Обо мне: {createField("Обо мне", "aboutMe", [], Textarea)}
        </div>
        <div className={styles.descriptionText}>
            Работа: {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
        </div>
        <div className={styles.descriptionText}>
            Мои навыки: {createField("Мои навыки", "lookingForAJobDescription", [], Textarea, {type: "checkbox"})}
        </div>
        {/*<div className={styles.descriptionText}>
            <span className={styles.descriptionText}>Контакты:</span>
            {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
        </div>*/}
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm