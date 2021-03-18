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
                <img className={classes.photosLarge} src={props.profile.photos.large} alt=""/>
                {/*<img
                    src="https://demotivation.ru/wp-content/uploads/2020/01/Canada_Parks_Lake_Mountains_Forests_Scenery_Rocky_567540_3840x2400-scaled.jpg"
                    alt=""/>*/}
            </div>
            <div className={classes.descriptionBlog}>
                <div>
                    <h1>{props.profile.fullName}</h1>
                </div>
                <div>
                    Описание: {props.profile.aboutMe}
                </div>
                <div>
                    Ищу работу: {props.profile.lookingForAJob
                    ? <span>{props.profile.lookingForAJobDescription}</span>
                    : <span>Не ищу работу</span>}
                </div>
            </div>
        </div>
    );
}


export default ProfileInfo;