import React from 'react';
import Logo from './Logo';
import Menu from './Menu';
import Themes from './Themes';

const Header = () => {
    
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    };

    return (
        <header className="header">
            <Logo
                scrollUp={scrollUp}
            />
            <Menu
                scrollUp={scrollUp}
            />
            <Themes/>
        </header>
    )
};

export default Header;