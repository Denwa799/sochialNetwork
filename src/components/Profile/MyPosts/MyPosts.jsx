import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"newPostText"} component={Textarea} placeholder="Post message"
                       validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: "myPost"}) (AddNewPostForm)

const MyPosts = React.memo(props => {
    let postsElements = props.posts.map(post => <Post message={post.message}
                                                      key={post.id}
                                                      likeCount={post.likeCount}/>);

    let addNewPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={addNewPost}/>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    );
});


export default MyPosts;