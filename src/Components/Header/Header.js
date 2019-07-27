import React from 'react';

import "./Header.css"

import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';

const list = [
    {
        name: "Mountain",
        href: "/mountain"
    },
    {
        name: "Ocean",
        href: "/ocean"
    },
    {
        name: "Forest",
        href: "/forest"
    }
];

function Header(props) {
    return (
        <header className='Header'>
            <Logo title={props.logo?props.logo:'logo'}/>
            <Menu list={list}/>
        </header>
    )

}


export default Header;