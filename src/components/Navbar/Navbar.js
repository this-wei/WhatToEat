import React, { useState } from 'react'
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink, ContrastedNavBtnLink, OpenLinksButton, NavbarExtendedContainer, NavLinkExtended } from './NavbarElements';
import {FaBars, FaTimes} from 'react-icons/fa'
// import './Navbar.css'

const Navbar = () => {
    const [extendNavbar, setExtendNavbar] = useState(false);


    return (
        <>
        <Nav extendNavbar={extendNavbar}>
            <NavLink to="/home">
                <h1>Logo</h1>
            </NavLink>

            <OpenLinksButton onClick={() => {setExtendNavbar((curr) => (!curr))}}>
                {extendNavbar ? <FaTimes/> : <FaBars />}
            </OpenLinksButton>

            <NavMenu>
                <NavLink to='/home'>
                    Home
                </NavLink>
                <NavLink to='/about'>
                    About Us
                </NavLink>
            </ NavMenu>

            <NavBtn>
                <NavBtnLink to='login'>Login</NavBtnLink>
                <ContrastedNavBtnLink to='signup'>Sign up</ContrastedNavBtnLink>
            </NavBtn>

            {extendNavbar && (
            <NavbarExtendedContainer>
                <NavLinkExtended to='/home'>
                    Home
                </NavLinkExtended>
                <NavLinkExtended to='/about'>
                    About Us
                </NavLinkExtended>
                <ContrastedNavBtnLink to='login'>Login</ContrastedNavBtnLink>
                <ContrastedNavBtnLink to='signup'>Sign up</ContrastedNavBtnLink>
            </NavbarExtendedContainer>
            )}


        </Nav>


        </>
    )
}

export default Navbar


