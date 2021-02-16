import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const [navBar, setNavbar] = useState(false)
    const changeBg = () => {
        if(window.scrollY >= 80) {
            setNavbar(true)
        }
        else {
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changeBg)

    return (
        <>
            <nav className={navBar ? 'navbar active' : 'navbar'}>
                <Link to='/' className='navbar-logo'>
                    LOGO
                </Link>  
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>                  
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Blog
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Contact
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Help
                        </Link>
                    </li>
            
                    <li className='nav-item'>
                        <Link
                            to='/'
                            className='nav-links-mobile'
                            onClick={closeMobileMenu}
                            >
                            <i className="far fa-user-circle"></i>
                            &nbsp;
                            Sign Up
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar