import React from 'react';

const Comment = ({ comment }) => {
    return (
        <div className="p-4 m-4 border border-gray-300 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold">Comment</h2>
            <p className="mb-2">{comment.content}</p>
            <h3 className="text-md font-semibold">Replies</h3>
            <ul className="ml-4">
                {comment.replies.map(reply => (
                    <li key={reply.id} className="mb-2">
                        <p className="p-2 border border-gray-200 rounded">{reply.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Comment;
