import React, { useState } from 'react';
import LinksElements from "../elements/LinksElements";
import ButtonDownloadElements from "../elements/ButtonDownloadElements";
import { Link } from 'react-router-dom';

const NavigationFragments = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={isMenuOpen ? 'open' : ''}>
            <div className="hamburger" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className="menu">
                <div className="left">
                    <li><Link to={'/'}>HOME</Link></li>
                    <LinksElements href="#about" text="ABOUT"></LinksElements>
                    <LinksElements href="#feature" text="FEATURES"></LinksElements>
                </div>
                <div className="right">
                    <LinksElements href="#screenshot" text="SCREENSHOT"></LinksElements>
                    <li><Link to={'/blog'}>BLOG</Link></li>
                    <ButtonDownloadElements text="DOWNLOAD"></ButtonDownloadElements>
                </div>
            </ul>
        </nav>
    );
};

export default NavigationFragments;
