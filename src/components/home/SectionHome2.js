import React from 'react'
import '../../styles/home.scss'
import object from '../../assets/home/Object.png'
import object1 from '../../assets/home/Object-1.png'
import object2 from '../../assets/home/object-2.png'

export default function SectionHome2() {
    return (
        <section className = "SectionHome2">
            <div>
                <img src={object2} style = {{marginTop: `20px`}} alt="object"></img>
                <h2 style = {{marginTop: `36px`}}>Unlimited practice</h2>
                <p>Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            <div>
                <img src={object1} alt="object1"></img>
                <h2>Instant Feedback</h2>
                <p>Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            <div>
                <img src={object} alt="object2"></img>
                <h2>Fine-tune Controls</h2>
                <p>Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
        </section>
    )
}
