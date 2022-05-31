import React from 'react';
import { Link } from "react-router-dom";


function Header() {
    return (
        <header>
            <img src="https://user-images.githubusercontent.com/97350067/171006678-058f4e5e-db68-4623-91b7-92b574e11c65.jpeg" alt="" />
            <div>
                <h1>Hír-Sat BHC</h1>
                <Link to='/team'>Team</Link>
                <Link to='/gallery'>Gallery</Link>
                <Link to='/achievements'>Achievements</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </header>
    )
}

export default Header