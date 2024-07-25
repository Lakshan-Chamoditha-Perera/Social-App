import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../../redux/postsSlice";
import {Bounce, toast} from "react-toastify"
import Post from "../../components/Post";

const Wall = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.items);
    const postStatus = useSelector((state) => state.posts.status);
    const error = useSelector((state) => state.posts.error);

    useEffect(() => {
        if (postStatus === "idle") {
            dispatch(fetchPosts());
        }
    }, [postStatus, dispatch]);

    let content;

    if (postStatus === "loading") {
        content = <p>Loading...</p>;
    } else if (postStatus === "succeeded") {
        content = (<ul>
            {posts.map((post) => (<li key={post.id}>
                <Post post={post}/>
            </li>))}
        </ul>);

    } else if (postStatus === "failed") {
        toast.error('Something went wrong!', {
            hideProgressBar: false, closeOnClick: true, pauseOnHover: true, theme: "dark", transition: Bounce,
        });
        content = <p>{error}</p>;
    }

    return (<div className={"border border-black flex flex-col items-center justify-center"}>
        <h1 className={"text-4xl mt-3 font-bold"}>Wall</h1>
        {content}
    </div>);
};

export default Wall;
