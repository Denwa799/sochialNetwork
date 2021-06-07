import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({currentPage, totalUsersCount, pagesSize, onPageChanged, users, ...props}) => {
    return <div>
        <Paginator currentPage={currentPage}
                   onPageChanged={onPageChanged}
                   totalUsersCount={totalUsersCount}
                   pagesSize={pagesSize}/>
        <div>
            {
                users.map(u => <User user={u}
                                     followingInProgress={props.followingInProgress}
                                     key={u.id}
                                     unfollow={props.unfollow}
                                     follow={props.follow}/>)
            }
        </div>


    </div>
}

export default Users;