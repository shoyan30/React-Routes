import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Friends = () => {
    const friends = useLoaderData();
    return (
        <div>
            <h1>I have so many friends: {friends.length}</h1>

            {
                friends.map(friend => <Friend
                    key={friend.id}
                
                    friend = {friend}
                
                ></Friend>)
            }
        </div>
    );
};

export default Friends;