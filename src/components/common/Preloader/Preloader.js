import preloader from "../../../assets/images/loader.svg";
import React from "react";
import styles from './Preloader.module.css'

const Preloader = (props) => {
    return <div>
        <img className={styles.preloader} src={preloader} alt="Preloader"/>
    </div>
}

export default Preloader;