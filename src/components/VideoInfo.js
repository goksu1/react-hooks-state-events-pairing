import React, { useState } from 'react';
import VideoComments from './VideoComments';

function VideoInfo({ embedUrl, title, createdAt, views, upvotes, downvotes, comments }) {
    const [hidden, setHidden] = useState(false);
    const [upvote, setUpVote] = useState(upvotes);
    const [downvote, setDownVote] = useState(downvotes);

    function incrementVote(e) {
        setUpVote(upvote => upvote += 1);
    }
    function decrementVote(e) {
        setDownVote(downvote => downvote += 1);
    }
    function toggleHidden(e) {
        if (!hidden) {
            e.target.textContent = "Show Comments";
        } else {
            e.target.textContent = "Hide Comments";
        }
        setHidden(hidden => !hidden);
    }
    return (
        <div>
            <iframe
                width="919"
                height="525"
                src={embedUrl}
                frameBorder="0"
                allowFullScreen
                title={title}
            />
            <h1>{title} </h1>
            <p>{views} Views | Uploaded {createdAt}</p>
            <button onClick={incrementVote}>{upvote} 👍🏻</button>
            <button onClick={decrementVote}>{downvote} 👎🏻</button><br></br><br></br>
            <button onClick={toggleHidden}>Hide Comments</button>
            {hidden ? null : <VideoComments comments={comments} />}
        </div>
    );
}

export default VideoInfo; 