import React from 'react';
import './post.css';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {

    const { id, title, body } = post
    return (
        <div className='post'>
            <h2>Title: {title}</h2>
            <h3><small>{body}</small></h3>

            <Link to={`/post/${id}`}>
                <button>Show Details</button>
            </Link>


        </div>
    );
};

export default Post;