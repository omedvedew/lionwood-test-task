import React from 'react';
import Logo from './Logo';
import Menu from './Menu';
import Themes from './Themes';

const Header = () => {
    return (
        <header className="header">
            <Logo/>
            <Menu/>
            <Themes/>
        </header>
    )
};

export default Header;