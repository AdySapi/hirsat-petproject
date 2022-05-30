import React from 'react';
import { Link } from "react-router-dom";


function Header() {
    return (
        <header>
            <Link to='/team'>Team</Link>
            <Link to='/gallery'>Gallery</Link>
            <Link to='/achievements'>Achievements</Link>
            <Link to='/contact'>Contact</Link>
        </header>
    )
}

export default Header