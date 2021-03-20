import React from 'react'
import logo from '../assets/images/dm-Logo.png'
import Navigation from '../components/Navigation';

export default function Footer() {
    return (
        <footer>
            <img src={logo}/>
            <Navigation/>
        </footer>
    )
}
