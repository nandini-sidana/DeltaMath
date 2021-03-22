import React from 'react'
import '../../styles/about.scss'

export default function LeaderCard(props) {
    return (
        <div className = "card_wrapper" onClick = {props.onClick}>
            <img src = {props.src}/>
            <h3>{props.name}</h3>
            <h4>Title Here</h4>
        </div>
    )
}
