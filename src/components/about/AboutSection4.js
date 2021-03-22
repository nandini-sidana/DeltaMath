import React from 'react'
import '../../styles/about.scss'
import quote from '../../assets/about/quote.png'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function AboutSection4() {

    function SampleNextArrow(props) {
        const { style, onClick } = props;
        return (
          <div
            style={{ ...style, 
                display: "block",
                width: `30px`,
                height: `30px`,
                boxShadow: `-2px 2px 0 #fff`,
                opacity: `0.9`,
                position: `absolute`,
                top: `50%`,
                transform: `translateY(-50%) rotate(-135deg)`,
                right: `-25px`,
                cursor: `pointer` }}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { style, onClick } = props;
        return (
          <div
            style={{ ...style, 
                display: "block",
                width: `30px`,
                height: `30px`,
                boxShadow: `-2px 2px 0 #fff`,
                opacity: `0.9`,
                position: `absolute`,
                top: `50%`,
                transform: `translateY(-50%) rotate(45deg)`,
                left: `-25px`,
                cursor: `pointer`}}
            onClick={onClick}
          />
        );
      }

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };

    return (
        <section className = "carousel">
            <div className = "carousel_container">
                <Slider {...settings}>
                    <div className = "carousel_card_about">
                        <img src = {quote}></img>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui 
                            <br></br>
                            blitis praesentium voluptatum deleniti atque corrupti quos. Doleres 
                            <br></br>
                            et quas molestias excepturi sint occaecati cupiditate non provident</p>
                        <h2>NAME HERE, TEACHER</h2>
                    </div>
                    <div className = "carousel_card_about">
                        <img src = {quote}></img>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui 
                            <br></br>
                            blitis praesentium voluptatum deleniti atque corrupti quos. Doleres 
                            <br></br>
                            et quas molestias excepturi sint occaecati cupiditate non provident</p>
                        <h2>NAME HERE, TEACHER</h2>
                    </div>
                </Slider>
            </div>
        </section>
    )
}
