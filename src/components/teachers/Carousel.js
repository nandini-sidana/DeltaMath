import React from 'react'
import '../../styles/teachers.scss'

import mac from '../../assets/teachers/macbook.png'

import pop1 from '../../assets/teachers/popup1.png'
import pop2 from '../../assets/teachers/popup2.png'
import pop3 from '../../assets/teachers/popup3.png'
import pop4 from '../../assets/teachers/Rectangle10.png'
import pop5 from '../../assets/teachers/Rectangle11.png'
import pop6 from '../../assets/teachers/screen.png'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {

    function SampleNextArrow(props) {
        const { style, onClick } = props;
        return (
          <div
            style={{ ...style, 
                display: "block",
                width: `30px`,
                height: `30px`,
                boxShadow: `-2px 2px 0 #000`,
                opacity: `0.9`,
                position: `absolute`,
                top: `120%`,
                transform: `translateY(-50%) rotate(-135deg)`,
                right: `47%`,
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
                boxShadow: `-2px 2px 0 #000`,
                opacity: `0.9`,
                position: `absolute`,
                top: `120%`,
                transform: `translateY(-50%) rotate(45deg)`,
                left: `47%`,
                cursor: `pointer`}}
            onClick={onClick}
          />
        );
      }

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };

    return (
        <section className = "Carousel">

            {/* Carousel */}
            <div className = "carousel_container">
                <Slider {...settings}>
                    <img src={pop1} alt = ""></img>
                    <img src={pop2} alt = ""></img>
                    <img src={pop3} alt = ""></img>
                    <img src={pop4} alt = ""></img>
                    <img src={pop5} alt = ""></img>
                    <img src={pop6} alt = ""></img>
                </Slider>
            </div>
            {/* <img src={mac} alt = ""></img> */}
        </section>
    )
}
