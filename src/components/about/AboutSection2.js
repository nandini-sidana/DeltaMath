import React from 'react'
import '../../styles/about.scss'
import img from '../../assets/about/Rectangle 8.png';

export default function AboutSection2() {
    return (
        <section className = "About2">
            <div className = "wrapper_2">
                <div className = "img_container">
                    <img src = {img}/>
                </div>
                <div className = "para_container">
                    <p>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium 
                        voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint 
                        occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia 
                        animi, id est laborum et dolorum fuga.
                    </p>
                    <p>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium 
                        voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint 
                        occaecati cupiditate non
                    </p>
                    <button>Contact Us</button>
                </div>   
            </div>
            
        </section>
    )
}
