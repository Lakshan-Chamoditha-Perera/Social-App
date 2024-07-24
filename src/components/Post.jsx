import React, {useState} from "react";
import {toast} from "react-toastify";
import {Button, Card, CardActionArea} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";

const Post = ({post}) => {
    const [showComments, setShowComments] = useState(false);
    const dispatch = useDispatch();
    const comments = useSelector((state) => state.comments.items);
    const commentsStatus = useSelector((state) => state.comments.status);
    const error = useSelector((state) => state.comments.error);

    const loadComments = async () => {
        setShowComments(true);
        toast.success("Comments loaded successfully");
    };

    let content;

    if (commentsStatus === "loading") {
        content = <p>Loading...</p>;
    } else if (commentsStatus === "succeeded") {
        content = (<ul>
            {comments.map((comment) => (<li key={comment.id}>comment</li>))}
        </ul>);
    } else if (commentsStatus === "failed") {
        content = <p>{error}</p>;
    }

    return (<Card
        className="cursor-pointer w-[350px] min-h-[400px] m-4 border border-gray-300 rounded-lg shadow-lg"
        key={post.id}
    >
        {/* Card body */}
        <div className="p-4 flex flex-col justify-between">
            <h1 className="text-2xl font-bold">{post.title}</h1>
            <p>{post.content}</p>
            <div onClick={loadComments}>
                <div className={'w-full border d-flex items-end justify-end'}>
                    <Button variant="outlined" size={'small'}> Show comments</Button>
                </div>
            </div>
            {showComments ? (<div className="mt-4">
                <h2 className="text-xl font-bold">Comments</h2>
                {content}
            </div>) : null}
        </div>
    </Card>);
};

export default Post;
