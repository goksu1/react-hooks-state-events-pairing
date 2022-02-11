import React, { useState } from 'react';

function Comment({user, comment}) {

    const [ upvote, setUpVote ] = useState(0);
    const [ downvote, setDownVote ] = useState(0);
    const [ hidden, setHidden ] = useState(false);

    function incrementVote(e){
        setUpVote(upvote => upvote += 1);
    }
    function decrementVote(e){
        setDownVote(downvote => downvote += 1);
    }
    function removeComment(e){
        setHidden(hidden => !hidden);
    }

    return (<div>
            { hidden ? null : <div><h3>{user}</h3>
            <p>{comment}</p>
            <button onClick={incrementVote} >{upvote} 👍🏻</button>
            <button onClick={decrementVote} >{downvote} 👎🏻</button><br></br><br></br>
            <button onClick={removeComment} >Remove Comment</button></div>}
        </div>

    );
}

export default Comment; 