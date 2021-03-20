import React from 'react'
import quotes from '../../assets/home/quote.png';
import '../../styles/home_carousel.scss'

export default function CarouselCard(props) {
    return (
        <div className = "carousel_card">
            <img className = "card_quote" src = {quotes} alt = ""/>
            <p>{props.content}</p>
            <img className = "person" src={props.src} alt = ""></img>
            <h4 className="card_name">Name Here</h4>
            <h4 className="ts_card">{props.teach_or_student}</h4>
        </div>
    )
}
