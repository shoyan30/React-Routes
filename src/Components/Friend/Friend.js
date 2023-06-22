import React from 'react';
import './Friend.css'
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    

    const{id,name, email, phone} = friend
    const {street} = friend.address
    return (
        <div className='friend'>
            <h3>Name: {name}</h3>
            <h3>Email: {email}</h3>
            <h3><small>UserName: <Link to={`/friend/${id}`}>{street}</Link></small></h3>
            
            
            
        </div>
    );
};

export default Friend;