import styled from "styled-components"
import { NavLink as Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'

export const Nav = styled.nav`
    background: #222;
    /* height: ${(props) => (props.extendNavbar ? "100vh" : '80px')}; */
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 999;
`;

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    cursor: pointer;

    &.active {
        color: #15cdfc;
    }
`;

export const OpenLinksButton = styled.button`
    display: none;
    color: #fff;
    background: none;
    height: auto;

    @media screen and (max-width: 768px) {
            display: block;
            position: absolute;
            top: 0;
            right: 0;
            transform: translate(-100%, 55%);
            font-size:1.8rem;
            cursor: pointer;
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #fff;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size:1.8rem;
        cursor: pointer; 
    }
`;

export const Times = styled(FaTimes)`
    display: none;
    color: #fff;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size:1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    padding: 10px 22px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        /* background: #fff; */
        background: #474646;
        /* color: #010606; */
    }
`;

export const ContrastedNavBtnLink = styled(NavBtnLink)`
    color: #000;
    background: #fff;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #bcbcbc;
    }
`;

export const NavbarExtendedContainer = styled.div`
        display: flex;
        background: #000;
        flex-direction: column;
        align-items: center;
        z-index: 999;
        margin-top: 80px;

    @media (min-width: 768px) {
        display: none;
    }

`;

export const NavLinkExtended = styled(Link)`
    color: #000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 10px;
    cursor: pointer;

    &.active {
        color: #15cdfc;
    }
`;

