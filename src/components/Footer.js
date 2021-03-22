import React from 'react'
import logo from '../assets/images/dm-Logo.png'
import Navigation from '../components/Navigation';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    faTwitter,
    faFacebook
} from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    
    return (     
        <footer>
            <img src={logo}/>
            <Navigation/>
            <div className = "bottom">
                <div className = "footer_left">
                    <h4>&#xA9;2021 DeltaMath </h4>
                    <h4 className = "foo-bor">Terms of Use</h4>
                    <h4 className = "foo-bor">Privacy Policy</h4>
                </div>
                <div className="footer_right">
                    <span><FontAwesomeIcon className= "icon1"icon={faFacebook} size="1x" /></span>
                    <span><FontAwesomeIcon className= "icon2"icon={faTwitter} size="1x" /></span>
                </div>
            </div>
        </footer>
    )
}
