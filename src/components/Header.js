import React from 'react'
import {Link} from 'gatsby';
import logo from '../assets/images/Logo.png';
import '../styles/header.scss';

export default function Header() {

    var links = document.querySelectorAll(".navLink");
    Array.from(links).forEach(item => {
      item.addEventListener("click", () => {
          console.log("done");
         var selected = document.getElementsByClassName("active");
         selected[0].className = selected[0].className.replace(" active", "");
         item.className += " active";
      });
   });

    return (
        <header>
            <Link to = "/">
                    <img src= {logo} alt = "logo" className = "header_img"></img></Link>
            <nav id = "header_nav">
                <Link className = "navLink border active" to = "/teachersSchools">Teachers&#8202;/&#8202;Schools</Link>
                <Link className = "navLink border" to = "/families">Families&#8202;/&#8202;Individual</Link>
                <Link className = "navLink border" to = "/students">Students</Link>
                <Link className = "navLink border" to = "/about">About</Link>
                <Link className = "navLink border" to = "/faqs">FAQs</Link>
                <Link className = "navLink" to = "/contact">Contact</Link>
            </nav>
            <button> Login </button>
        </header>
    )
}
