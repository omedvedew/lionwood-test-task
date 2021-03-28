import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({
    scrollUp,
}) => {
    return (
        <Link to ="/" className="header__logo" onClick={scrollUp} style={{backgroundImage: 'url(/images/lionwood-logo-dark.png)'}}></Link>
    )
};

export default Logo;