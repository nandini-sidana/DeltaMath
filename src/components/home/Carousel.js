import React from 'react'
import '../../styles/home_carousel.scss'
import '../../components/home/CarouselCard'
import CarouselCard from '../../components/home/CarouselCard'
import Ellipse3 from '../../assets/home/Ellipse3.png'
import Ellipse4 from '../../assets/home/Ellipse4.png'
import Ellipse5 from '../../assets/home/Ellipse5.png'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
      <div
        //lassName={nextArrow}
        style={{ ...style, 
            display: "block",
            width: `30px`,
            height: `30px`,
            boxShadow: `-2px 2px 0 #6b6b6b`,
            opacity: `0.5`,
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
        //className={prevArrow}
        style={{ ...style, 
            display: "block",
            width: `30px`,
            height: `30px`,
            boxShadow: `-2px 2px 0 #6b6b6b`,
            opacity: `0.5`,
            position: `absolute`,
            top: `50%`,
            transform: `translateY(-50%) rotate(45deg)`,
            left: `-25px`,
            cursor: `pointer`}}
        onClick={onClick}
      />
    );
  }

export default function Carousel() {
    const content = "At vero eos et accusamus et iusto odio dignissimos" +
            "ducimus qui blanditiis praesentium" + 
            "voluptatum deleniti atque corrupti quos";
    const teach = "Teacher";
    const stud = "Student";
    const parent = "Parent";

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
      };

    return (
        <section className = "carousel_section">
            <h2>Why do millions of people choose to learn on DeltaMath?</h2>

            {/* Carousel */}
            <div className = "carousel_container">
                <Slider {...settings}>
                    <CarouselCard className = "card" content = {content} teach_or_student = {parent} src = {Ellipse3}/>
                    <CarouselCard className = "card" content = {content} teach_or_student = {teach} src = {Ellipse4}/>
                    <CarouselCard className = "card" content = {content} teach_or_student = {stud} src = {Ellipse4}/>
                    <CarouselCard className = "card" content = {content} teach_or_student = {stud} src = {Ellipse5}/>
                    <CarouselCard className = "card" content = {content} teach_or_student = {teach} src = {Ellipse3}/>
                    <CarouselCard className = "card" content = {content} teach_or_student = {parent} src = {Ellipse5}/>
                </Slider>
            </div>
        </section>
    )
}
