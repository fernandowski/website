import React from 'react'
import './Header.css';
import {Link, useLocation} from "react-router-dom";
function Header() {
    let location = useLocation();

    const links = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About Me' },
        { path: '/contact', label: 'Contact' }
    ];

    return (
        <header>
            <nav>
                <ul>
                    {links.map((link, index) => (
                        <li key={index}>
                            <Link
                                className={link.path === location.pathname ? 'active' : ''}
                                to={link.path}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
export default Header;
