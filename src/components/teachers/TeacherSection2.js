import React from 'react'
import '../../styles/teachers.scss'

export default function TeacherSection2() {
    return (
        <section className = "teacherSection2">
            <div>
                <div style = {{paddingRight: `10px`, borderRight: `2px solid #757575`}}>
                    <h2>Teachers:</h2>
                    <button>Create Account</button>
                </div>
                <div style = {{paddingLeft: `30px`}}>
                    <h2>School Districts:</h2>
                    <button>Get a Quote</button>
                </div>
            </div>
        </section>
    )
}
