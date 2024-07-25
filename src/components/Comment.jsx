import React, {useState} from 'react';
import {Button, Card} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {fetchReplies} from "../redux/repliesSlice";
import Reply from "./Reply";

const Comment = ({comment}) => {
    const dispatch = useDispatch();
    const [showReplies, setShowReplies] = useState(false);
    const commentReplies = useSelector((state) => state.replies.items)?.filter(r => r.commentId == comment.id);


    const toggleReplies = () => {
        if (!showReplies) {
            dispatch(fetchReplies(comment.id));
        }
        setShowReplies(!showReplies);
    };

    return (<Card className=" min-h-[100px] m-4 border border-gray-300 rounded-lg shadow-lg" key={comment.id}>
        <div className="p-4 flex flex-col justify-between">
            <p>{comment.content}</p>
            <div>
                <div className="w-full flex items-end justify-end">
                    <Button onClick={toggleReplies} size="small">
                        {showReplies ? 'Hide replies' : 'Show replies'}
                    </Button>
                </div>
            </div>
            {showReplies && (<div className="mt-4">
                <h2 className="text-lg font-bold">Replies</h2>
                <ul>
                    {commentReplies && commentReplies.length > 0 ? (commentReplies.map((reply) => (
                        <li key={reply.id} className="mb-2">
                            <Reply reply={reply}/>
                        </li>))) : (<li className="text-red-400 rounded p-2">No replies yet!</li>)}
                </ul>
            </div>)}
        </div>
    </Card>);
};

export default Comment;
