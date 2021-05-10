import preloader from "../../../assets/images/loader.svg";
import React from "react";
import classes from './Preloader.module.css'

const Preloader = (props) => {
    return <div>
        <img className={classes.preloader} src={preloader} alt="Preloader"/>
    </div>
}

export default Preloader;