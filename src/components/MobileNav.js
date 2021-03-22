import React from 'react'
import '../styles/header.scss'
import {Link} from 'gatsby';
import logo from '../assets/images/Logo.png';
import Backdrop from './MobBackdrop';

export default function MobileNav(props) {
    return (
        <div>
            <Backdrop show={props.show}/>
            <div className = "modal_div_nav"
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                <Link className = "active" to = "/">
                    <img src= {logo} alt = "logo" className = "header_img"></img>
                </Link>
                <span className = "cross" onClick ={props.close}>X</span>
                <nav id = "mob_nav">
                    <Link className = "navLink border" to = "/teachersSchools">Teachers&#8202;/&#8202;Schools</Link>
                    <Link className = "navLink border" to = "/families">Families&#8202;/&#8202;Individual</Link>
                    <Link className = "navLink border" to = "/students">Students</Link>
                    <Link className = "navLink border" to = "/about">About</Link>
                    <Link className = "navLink border" to = "/faqs">FAQs</Link>
                    <Link className = "navLink" to = "/contact">Contact</Link>
                </nav>
            </div>
        </div>
    )
}
