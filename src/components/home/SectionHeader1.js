import React from 'react'
import '../../styles/home.scss';

export default function SectionHeader1() {
    return (
        <section className = "SectionHeader">
            <div className = "math_done">
                <h1>Math Done <span>right.</span></h1>
                <h1>Depth, clarity, and rigor.</h1>
                <h3>Built by teachers. Used by millions.</h3>
            </div>
            <div className = "yellow_btns">
                <button>
                    For Teachers/
                    <br></br>
                    Schools
                </button>
                <button>
                    For Families/
                    <br></br>
                    Individuals
                </button>
                <button>For Students</button>
            </div>
        </section>
    )
}
