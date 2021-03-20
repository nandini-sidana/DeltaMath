import React from 'react'
import '../../styles/home.scss';
import laptop from '../../assets/home/laptopCopy.png'
import callout from '../../assets/home/calloutCopy.png'

export default function SectionHeader4() {
    return (
        <section className="SectionHeader4">
            <div className = "stu_image">
                <img id = "laptop_img" src={laptop} alt=""/> 
                <img id = "calloutCopy_img" src={callout} alt=""/>
            </div>
            <div className = "stu_learn">
                <h1>For Parents</h1>
                <p>Our Courses option allows parents to engage in learning 
                    with their children/students. Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam. Loren ipsum
                </p>
                <button>Learn More</button>
            </div>
        </section>
    )
}
