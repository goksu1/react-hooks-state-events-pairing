import React, { useState } from 'react';
import Comment from './Comment';

function VideoComments({ comments }) {
    const [usernameInput, setUsernameInput] = useState("");
    function inputEvent(e) {
        setUsernameInput(usernameInput => usernameInput = e.target.value);
    }
    const filteredComments = comments.filter((comment) => {
        return comment.user.includes(usernameInput)
    })

    return (
        <div>
            <br></br>
            <input onChange={inputEvent} type="text" placeholder="Search username"></input>
            <h2>{comments.length} Comments</h2>
            {usernameInput === "" ? comments.map((comment) => {
                return <div>
                    <Comment key={comment.id} user={comment.user} comment={comment.user} />
                </div>
            }) : filteredComments.map((comment) => {
                return <div>
                    <Comment key={comment.id} user={comment.user} comment={comment.user} />
                </div>
            })}
        </div>
    );
}

export default VideoComments; 