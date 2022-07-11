import React from 'react';
import { Link } from "react-router-dom";


function Header() {
    return (
        <header>
            <img className="logo" src="https://user-images.githubusercontent.com/97350067/171006678-058f4e5e-db68-4623-91b7-92b574e11c65.jpeg" alt="" />
            <div className="headerText">
                <h1 className="teamName">Hír-Sat BHC</h1>
                <div className="headerTextLinks">
                    <Link to='/team'>Team</Link>
                    <Link to='/gallery'>Gallery</Link>
                    <Link to='/achievements'>Achievements</Link>
                    <Link to='/contact'>Contact</Link>
                </div>
            </div>
        </header>
    )
}

export default Header