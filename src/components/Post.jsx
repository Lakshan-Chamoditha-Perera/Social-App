import React, {useState} from "react";
import {Button, Card} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {fetchComments} from "../redux/commentsSlice";

const Post = ({post}) => {
    const dispatch = useDispatch();
    const [showComments, setShowComments] = useState(false);
    const postComments = useSelector((state) => state.comments.items)?.filter(c => c.postId == post.id);

    const loadComments = async () => {
        setShowComments(true);
        dispatch(fetchComments());
    };

    const hideComments = () => {
        setShowComments(false);
    };

    return (<Card className=" w-[350px] min-h-[200px] m-4 border border-gray-300 rounded-lg shadow-lg" key={post.id}>
        {/* Card body */}
        <div className="p-4 flex flex-col justify-between">
            <h1 className="text-2xl font-bold">{post.title}</h1>
            <p>{post.content}</p>
            <div>
                <div className="w-full  flex items-end justify-end">
                    <Button onClick={showComments ? hideComments : loadComments} size={'small'}>
                        {showComments ? 'Hide comments' : 'Show comments'}
                    </Button>
                </div>

            </div>
            {showComments ? (<div className="mt-4">
                <h2 className="text-xl font-bold">Comments</h2>
                <ul>
                    {postComments.length > 0 ? (postComments.map((comment) => (
                        <li key={comment.id} className="mb-2">
                        <div className="p-2 border border-gray-200 rounded">
                            <p>{comment.content}</p>
                            <Button variant="outlined" size="small">Reply</Button>
                        </div>
                        </li>
                    ))) : <li>No comments yet !</li>}
                </ul>
            </div>) : <></>
            }
        </div>
    </Card>);
};

export default Post;
