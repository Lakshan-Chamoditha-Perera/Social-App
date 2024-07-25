import React from 'react';

const Reply = ({ reply }) => {
    return (
        <div className="p-2 border border-gray-200 m-2 rounded-lg shadow-sm hover:bg-blue-100 hover:scale-105 transition duration-300 ease-in-out">
            <p>{reply.content}</p>
        </div>
    );
};

export default Reply;
