import React from 'react';
import {Button} from "@mui/material";

const Comment = ({comment}) => {
    return (<div className="p-3 border-gray-300 border m-4 rounded-lg shadow-lg">
        <div className="border-gray-200 rounded">
            <p>{comment.content}</p>
            <Button variant="outlined" size="small">Reply</Button>
        </div>
    </div>);
};

export default Comment;
