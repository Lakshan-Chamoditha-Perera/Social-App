import React from 'react';

const Reply = ({reply}) => {
    return (<div className="p-2 border-gray-200 border m-2 rounded-lg shadow-sm">
            <p>{reply.content}</p>
        </div>);
};

export default Reply;
