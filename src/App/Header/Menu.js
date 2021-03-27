import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <nav className="header__menu">
            <Link to="/" className="header__menu_item">characters</Link>
            <Link to="/new-character" className="header__menu_item">new character</Link>
        </nav>
    )
};

export default Menu;