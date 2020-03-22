import React, { useState } from 'react'; // add useState

import './header.css'

const Header = () => {

    // chaning state, first arg value second function
    const [ className, changeClass ] = useState('header')
    const [ fontSize, setFontSize ] = useState(12)

    //if we have two values in state, and updating one, last value will be overwriten
    const [pStyle, changeButtonStyle] = useState({
        color: 'orange',
        font: 'Monospace'
    })

    //If we changing one hook in state it will all another hooks from state
    const changeOnlyColor = () => {
        changeButtonStyle({ color: 'black'})
    }
    //Two make this right we can do it like this
    const allAvailableHooks = () => {
        changeButtonStyle((pStyle) => {
            return { ...pStyle, color: 'Pink'}
        });
    }

    //If we fire changeOnlyColor first we will remove font value from state
    

    return (
        <div className={className}>
            <button onClick={() => changeClass('yellow-header')}>
                Yellow Header Class
            </button>
            <button onClick={() => changeClass('header')}>
                Usual Header class
            </button>
            {/* Calling same function setFontSize, get updated state value passed (s) as curent font size */}
            <button onClick={() => setFontSize((s) => s + 2)}>
                Increase Text Size
            </button>
            <button
                // This way we are removing font value from state
                onClick={() => changeOnlyColor()}
                >
                Hooks button
            </button>
            {/* using all hooks without removing nothing */}
            <button onClick={() => allAvailableHooks()}>
                Use booth hooks
            </button>
            <h1 className='header-h1'>Rolandas learning blog</h1>
            <p style={{fontSize: `${fontSize}px`}}>
                My jorney to web development, by learning React and Django
            </p>
            {/* way to access  */}
            <p style={{color: pStyle.color, fontFamily: pStyle.font}}>
                Very detailed story with bugs, and bugs solving
            </p>
            <a href="/create">Create</a>
            <p></p>
            <a href="/rest-auth/login/">Login</a>
        </div>
    )
}
export default Header;