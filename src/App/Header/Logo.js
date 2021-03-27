import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link to ="/" className="header__logo" style={{backgroundImage: 'url(/images/lionwood-logo-dark.png)'}}></Link>
    )
};

export default Logo;