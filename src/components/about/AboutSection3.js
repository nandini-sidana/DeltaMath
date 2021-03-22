import React from 'react'
import '../../styles/about.scss'
import LeaderCard from '../about/LeaderCard';
import Bodner from '../../assets/about/Bodner.png'
import Katey from '../../assets/about/Katey.png'
import person3 from '../../assets/about/Rectangle 7.png'
import person4 from '../../assets/about/Rectangle 71.png'

export default function AboutSection3() {
    return (
        <section className = "About3">
            <h1>Leadership Team</h1>
            <div className = "leader_wrapper">
                <LeaderCard src = {person3} name = "Zach Korzyl"/>
                <LeaderCard src = {person4} name = "Ben Peled"/>
                <LeaderCard src = {Katey} name = "Katey Phillips"/>
                <LeaderCard src = {Bodner} name = "Name Bodner"/>
                <LeaderCard src = {person3} name = "Zach Korzyl"/>
                <LeaderCard src = {person4} name = "Ben Peled"/>
                <LeaderCard src = {Katey} name = "Katey Phillips"/>
                <LeaderCard src = {Bodner} name = "Name Bodner"/>
            </div>
        </section>
    )
}
