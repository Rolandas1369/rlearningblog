import React from 'react';

import './header.css'

const Header = () => {

     

    return (
        <div className='header'>
            <h1 className='header-h1'>Rolandas learning blog</h1>
            <p>My jorney to web development, by learning React and Django</p>
            <p>Very detailed story with bugs, and bugs solving</p>
            <a href="/create">Create</a>
            <p></p>
            <a href="/rest-auth/login/">Login</a>
        </div>
    )
}

export default Header;