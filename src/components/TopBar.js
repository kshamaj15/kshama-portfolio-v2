import React, { useEffect, useState } from 'react';

import './TopBar.css';
import { THEME } from '../constant';
import { getTheme, onThemeToggle } from '../Utils/theme-utils';

const TopBar = () => {

    const [theme, setTheme] = useState(getTheme());

    useEffect(() => {
        if (theme === THEME.DARK) {
            onThemeToggle(true);
        }
    }, [])

    const handleTeamToggle = (e) => {
        const checked = e.target.checked;
        setTheme(checked ? THEME.DARK : THEME.LIGHT);
        onThemeToggle(checked);
    }

    const getToggle = () => {
        return (
            <div id="theme-switch" className="switch-container">
                <div className="sun"></div>
                <label className="switch">
                    <input onChange={handleTeamToggle} checked={theme === THEME.DARK} type="checkbox" id="themeSwitch" aria-label="Theme switch" />
                    <span className="slider round"></span>
                </label>
                <div className="moon"></div>
            </div>
        )
    }
    return (
        <>
            <img src='/logo.png' height='70px' alt='logo' />
            <nav className='nav-bar'>
                <ul>
                    <li><a href="sa">About</a></li>
                    <li><a href="ds">Work</a></li>
                    <li><a href="sa">Skills</a></li>
                    <li><a href="sa">Projects</a></li>
                    <li><a href="sa">Get In Touch</a></li>
                </ul>
            </nav>
            {getToggle()}
        </>
    )
}

export default TopBar;