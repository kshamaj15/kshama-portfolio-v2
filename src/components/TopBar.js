import React, { useEffect, useState } from 'react';
import Scrollspy from 'react-scrollspy';

import './TopBar.css';
import { THEME } from '../constant';
import { getTheme, onThemeToggle } from '../Utils/theme-utils';
import HamburgerMenu from './HamburgerMenu';

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
        <header className='top-container'>
            <img src='/logo.png' height='70px' alt='logo' />
            <nav className='navbar'>
                <div class="navbar-container container">

                    <input type="checkbox" name="" id="" />
                    <div class="hamburger-lines">
                        <span class="line line1"></span>
                        <span class="line line2"></span>
                        <span class="line line3"></span>
                    </div>

                    <Scrollspy className="scrollspy menu-items" items={['intro', 'projects', 'work-exp', 'skills', 'education', 'contact']} currentClassName="active">
                        <li><a href="#about">About</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#skills">Skillsets</a></li>
                        <li><a href="#projects">Personal Projects</a></li>
                        <li><a href="#education">Education</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </Scrollspy>
                </div>
            </nav>
            {/* <HamburgerMenu /> */}
            {getToggle()}
        </header>
    )
}

export default TopBar;