import React from 'react'
import {Link} from 'gatsby'
import '../styles/footer.scss'

export default function Navigation() {
    return (
        <nav id = "footer_nav">
                <Link className = "footernavLink active" to = "/teachersSchools">TEACHERS&#8202;/&#8202;SCHOOLS</Link>
                <Link className = "footernavLink" to = "/families">FAMILIES&#8202;/&#8202;INDIVIDUAL</Link>
                <Link className = "footernavLink" to = "/students">STUDENTS</Link>
                <Link className = "footernavLink" to = "/about">ABOUT</Link>
                <Link className = "footernavLink" to = "/faqs">FAQs</Link>
                <Link className = "footernavLink" to = "/contact">CONTACT</Link>
        </nav>
    )
}
