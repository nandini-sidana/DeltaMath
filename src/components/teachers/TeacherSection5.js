import React from 'react'
import '../../styles/teachers.scss'

import image from '../../assets/teachers/Rectangle 15.png'

export default function TeacherSection5() {
    return (
        <section className = "TeacherSection5">
            <div className = "image">
                <img src = {image} alt = "" />
            </div>
            <div className = "text">
                <h1>Watch a quick tour of <br></br>
                    DeltaMath for Teachers.
                </h1>
                <h2 id = "get_sta">Get Started</h2>
                <div>
                    <div>
                        <h2>Teachers:</h2>
                        <div>
                            <button>Create Account</button>
                        </div>
                    </div>
                    <div>
                        <h2>School Districts:</h2>
                        <div>
                            <button>Get a Quote</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
