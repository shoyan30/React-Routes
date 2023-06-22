import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const PostDetails = () => {

    const post = useLoaderData()
    

    const {id, title, body} = post;
    return (
        <div>
            <h1>{id}</h1>
            <h2>{title}</h2>
            <h2><small>{body}</small></h2>
            <Link to={`/friend/${id}`}><button>Author</button></Link>
        </div>
    );
};

export default PostDetails;