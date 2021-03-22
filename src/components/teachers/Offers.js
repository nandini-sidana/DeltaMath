import React from 'react'
import '../../styles/teachers.scss'

export default function Offers() {
    return (
        <section className = "offers">
           <h2>DeltaMath offers both free DeltaMath Teacher 
               <br></br>
               accounts and DeltaMath Plus accounts.
           </h2> 
           <div>
               <div>
                    <h1 className = "dm_teacher">DeltaMath Teacher</h1>
                    <ul> <h1>FREE</h1>
                        <li>Unlimited Students</li>
                        <li>Unlimited Assignments</li>
                        <li>Unlimited Student Practice</li>
                        <li>1500+ premade problem types, aligned to Common Core</li>
                        <li>Auto grading</li>
                        <li>Detailed student data, including time-stamps</li>
                        <li>Evidence of student progress/learning</li>
                        <li>Cheat prevention tools</li>
                        <li>Copy and share assignments</li>
                    </ul>
               </div>
               <div>
                    <h1 className = "dm_plus">DeltaMath Plus</h1>
                    <ul> <h1>$75&#8202;&#8202;/&#8202;&#8202;teacher</h1>
                    <span id = "through">through October 2021</span>
                        <li>All the features of DeltaMath Teacher,<br></br>
                            <span id = "plus"> PLUS: </span>
                        </li>
                        
                        <li>Instructional videos for every problem type</li>
                        <li>Assign videos from Youtube</li>
                        <li>Create a test</li>
                        <li>Selection of problem sub-types</li>
                        <li>Assign specific problems</li>
                        <li>Assign to individuals or groups</li>
                        <li>Create your own problem</li>
                    </ul>
               </div>
               <div>
                    <h1 className = "dm_xxxx">DeltaMath XXXX</h1>
                    <ul> <h1>$XX&#8202;&#8202;/&#8202;&#8202;teacher</h1>
                        <span id = "through">through October 2021</span>
                        <li>All the features of DeltaMath Teacher,<br></br>
                            <span id = "plus"> PLUS: </span>
                        </li>
                        
                        <li>Instructional videos for every problem type</li>
                        <li>Assign videos from Youtube</li>
                        <li>Create a test</li>
                        <li>Selection of problem sub-types</li>
                        <li>Assign specific problems</li>
                        <li>Assign to individuals or groups</li>
                        <li>Create your own problem</li>
                    </ul>
               </div>
                    
           </div>
        </section>
    )
}
