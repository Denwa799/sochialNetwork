import React from "react";
import classes from "./Forms.Controls.module.css"

//31:08

export const Textarea = ({input, meta, ...props}) => {
    return (
        <div className={classes.formControl + " " + classes.error}>
            <textarea {...input} {...props}/>
            <span></span>
        </div>
    )
}