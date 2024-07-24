import React, {useState} from "react";
import {Button, Card} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {fetchComments} from "../redux/commentsSlice";

const Post = ({post}) => {
    const dispatch = useDispatch();
    const [showComments, setShowComments] = useState(false);
    const comments = useSelector((state) => state.comments.items);

    const loadComments = async () => {
        setShowComments(true);
        dispatch(fetchComments());
        // toast.success("Comments loaded successfully");
    };

    const hideComments = () => {
        setShowComments(false);
    };

    return (<Card
        className="cursor-pointer w-[350px] min-h-[400px] m-4 border border-gray-300 rounded-lg shadow-lg"
        key={post.id}
    >
        {/* Card body */}
        <div className="p-4 flex flex-col justify-between">
            <h1 className="text-2xl font-bold">{post.title}</h1>
            <p>{post.content}</p>
            <div>
                <div className={'w-full border d-flex items-end justify-end'}>
                    <Button onClick={showComments ? hideComments: loadComments} variant="outlined"
                            size={'small'}>
                        {showComments ? 'Hide comments' : 'Show comments'}
                    </Button>
                </div>
            </div>
            {showComments ? (<div className="mt-4">
                <h2 className="text-xl font-bold">Comments</h2>
                <ul>
                    {comments.map((comment) => {
                        if (comment.postId == post.id) {
                            return <li key={comment.id} className="mb-2">
                                <p className="p-2 border border-gray-200 rounded">{comment.content}</p>
                            </li>
                        }
                    })}
                </ul>
            </div>) : <>

            </>}
        </div>
    </Card>);
};

export default Post;
