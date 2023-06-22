import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {

    const friend = useLoaderData();
    const{phone, address} = friend
    // console.log(friend);
    return (
        <div>
            <h3>Phone: {phone}</h3>
            <h3>Street: {address.street}</h3>
        </div>
    );
};

export default FriendDetails;