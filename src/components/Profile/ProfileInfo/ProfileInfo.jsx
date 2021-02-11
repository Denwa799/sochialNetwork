import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://demotivation.ru/wp-content/uploads/2020/01/Canada_Parks_Lake_Mountains_Forests_Scenery_Rocky_567540_3840x2400-scaled.jpg"
                    alt=""/>
            </div>
            <div className={classes.descriptionBlog}>
                ava + description
            </div>
        </div>
    );
}


export default ProfileInfo;