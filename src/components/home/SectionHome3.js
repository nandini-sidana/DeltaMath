import React from 'react'
import '../../styles/home.scss'
import laptop from '../../assets/home/laptop.png'
import callout from '../../assets/home/callout.png'

export default function SectionHome3() {
    return (
        <section className = "SectionHome3">
            <div className = "teacherImage">
                <img src={laptop} alt= ""/>
                <img id = "callout_img" src={callout} alt=""/>
            </div>
            <div className = "forTeachers">
                <h1>For Teachers</h1>
                <p>Use DeltaMath's modules to create high-leverage assignments 
                    and track student learning. With DeltaMath PLUS, students 
                    also get access to help videos. Create and assign tests, 
                    assign specific problem-types, even create your own problem.
                </p>
                <button>Learn More</button>
            </div>
        </section>
    )
}
