import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <Link to='/home'>Home page</Link>
            <Link to='/about'>about page</Link>
            <Link to='/product'>Product page</Link>
            <Link to='/friends'>Friends List</Link>
            <Link to='/posts'>Posts</Link>
            
        </div>
    );
};

export default Header;