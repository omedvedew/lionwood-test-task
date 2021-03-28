import React from 'react';
import { Link } from 'react-router-dom';

const Menu = ({
    scrollUp,
}) => {
    return (
        <nav className="header__menu">
            <Link to="/" className="header__menu_item" onClick={scrollUp}>characters</Link>
            <Link to="/new-character" className="header__menu_item" onClick={scrollUp}>new character</Link>
        </nav>
    )
};

export default Menu;