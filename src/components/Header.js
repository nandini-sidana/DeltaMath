import React, {useState} from 'react'
import {Link} from 'gatsby';
import logo from '../assets/images/Logo.png';
import '../styles/header.scss';
import Form from '../components/login/LoginForm';
import Modal from '../components/login/Modal';
import MobileNav from './MobileNav';

export default function Header() {

//     var links = document.querySelectorAll(".navLink");
//     var select = (links) => Array.from(links).forEach(item => {
//       item.addEventListener("click", () => {
//           console.log("done");
//          var selected = document.getElementsByClassName("active");
//          selected[0].className = selected[0].className.replace(" active", "");
//          item.className += " active";
//       });
//    });

    

    const [beingAdded, updateBeingAdded] = useState(false); 
    const [mobNav, updateMobNav] = useState(false);

    const authenticate = () => {
        console.log("done");
        updateBeingAdded(true);
    };

    const removeFormHandler = () => {
        updateBeingAdded(false);
    }; 

    const showNav = () => {
        updateMobNav(true);
    }

    const closeNav = () => {
        updateMobNav(false);
    }

    return (
        <div>
            <Modal show={beingAdded} modalClosed={removeFormHandler}>
                    <Form/> 
            </Modal>
            <MobileNav show={mobNav} close={closeNav}></MobileNav>
            <header>
                <Link className = "active" to = "/">
                        <img src= {logo} alt = "logo" className = "header_img"></img></Link>
                <nav id = "header_nav">
                    <Link className = "navLink border" to = "/teachersSchools">Teachers&#8202;/&#8202;Schools</Link>
                    <Link className = "navLink border" to = "/families">Families&#8202;/&#8202;Individual</Link>
                    <Link className = "navLink border" to = "/students">Students</Link>
                    <Link className = "navLink border" to = "/about">About</Link>
                    <Link className = "navLink border" to = "/faqs">FAQs</Link>
                    <Link className = "navLink" to = "/contact">Contact</Link>
                </nav>
                <button onClick = {authenticate}> Login </button>
                <span className = "toggle" onClick = {showNav}>
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </header>
        </div>
    )
}
