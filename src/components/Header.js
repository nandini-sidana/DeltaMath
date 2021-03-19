import React from 'react'
import {Link} from 'gatsby';
import logo from '../assets/images/logo.png';

export default function Header() {
    return (
        <div>
            <nav>
                <Link to = "/">
                    <img src= {logo} alt = "logo"></img></Link>
                <Link to = "/teachersSchools">Teachers&#8202;/&#8202;Schools</Link>
                <Link to = "/families">Families&#8202;/&#8202;Individual</Link>
                <Link to = "/students">Students</Link>
                <Link to = "/about">About</Link>
                <Link to = "/faqs">FAQs</Link>
                <Link to = "/contact">Contact</Link>
            </nav>
            <button> Login </button>
        </div>
    )
}
