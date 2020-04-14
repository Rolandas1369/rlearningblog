import React, { useState } from 'react'; // add useState

import './header.css'

const Header = () => {

    // chaning state, first arg value second function
    const [ className, changeClass ] = useState('header')
    const [ fontSize, setFontSize ] = useState(12)
    const [ buttonStyle ] = useState('bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow')
    const [ linkStyle ] = useState('text-blue-500 hover:text-blue-800')

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
            <button className={buttonStyle} onClick={() => changeClass('yellow-header')}>
                Yellow Header Class
            </button>
            <button className={buttonStyle} onClick={() => changeClass('header')}>
                Usual Header class
            </button>
            {/* Calling same function setFontSize, get updated state value passed (s) as curent font size */}
            <button className={buttonStyle} onClick={() => setFontSize((s) => s + 2)}>
                Increase Text Size
            </button>
            <button
                className={buttonStyle}
                // This way we are removing font value from state
                onClick={() => changeOnlyColor()}
                >
                Hooks button
            </button>
            {/* using all hooks without removing nothing */}
            <button className={buttonStyle} onClick={() => allAvailableHooks()}>
                Use booth hooks
            </button>
            <h1 className="font-sans text-3xl text-gray-800 text-center text-yellow-600">Rolandas learning blog</h1>
            <p style={{fontSize: `${fontSize}px`}}>
                My jorney to web development, by learning React and Django
            </p>
            {/* way to access  */}
            <p style={{color: pStyle.color, fontFamily: pStyle.font}}>
                Story with bugs, and bugs solving
            </p>
            <a className={linkStyle} href="/create">Create</a>
            <p></p>
            <a className={linkStyle} href="/rest-auth/login/">Login</a>
        </div>
    )
}
export default Header;