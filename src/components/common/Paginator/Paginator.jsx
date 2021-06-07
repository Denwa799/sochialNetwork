import React from "react";
import styles from "./Paginator.module.css";

const Paginator = ({currentPage, totalUsersCount, pagesSize, onPageChanged}) => {
    //let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pagesCount = 10;

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        {
            pages.map(p => {
                return <span className={currentPage === p && styles.selectedPage}
                             onClick={(e) => {
                                 onPageChanged(p)
                             }}>{p}</span>
            })
        }
    </div>

}

export default Paginator;