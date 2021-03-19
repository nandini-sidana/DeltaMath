import React from 'react'
import '../styles/global.scss';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
    return (
        <div>
            <Header/>
           { children } 
           <Footer/>
        </div>
    )
}
