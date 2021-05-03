import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Slider from 'react-slick'

function OurTeam() {
    
    let settings = {
        dots: false,
        nav: false,
        speed: 500,
        className: "our-team-slider",
        // centerPaddingLeft: '6rem',
        arrows: true,
        arrowClass: "shadow",
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
              }
            },
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                slidesToShow: 2,
                dots: true,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 576,
              settings: {
                  arrows: false,
                  dots: true,
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    }

    return (
        <div className="our-team mt-5 pt-5">
                <div className="section-title text-center">
                    <h6>OUR TEAM</h6>
                    <h2 className="title">
                        Teamwork Makes <br/>
                        The Dreamworks
                    </h2>
                </div>

                <div className="container " >
                    <Slider {...settings}> 
                        <div className="team-member">
                            <div className="thumb">
                                <StaticImage placeholder="blurred" quality={80} width="360" formats={["webp","auto"]} src="../assets/img/person1.png" alt="Name"/>
                            </div>
                            <div className="cont p-3">
                                <h5 className="name">Animesh Kumar</h5>
                                <small>CFO, Project Manager</small>
                            </div>
                        </div>

                        <div className="team-member">
                            <div className="thumb">
                                <StaticImage placeholder="blurred" quality={80} width="360" formats={["webp","auto"]} src="../assets/img/person2.png" alt="Name"/>
                            </div>
                            <div className="cont p-3">
                                <h5 className="name">Pulkit Singh </h5>
                                <small>Front End Developer</small>
                            </div>
                        </div>
                        
                        <div className="team-member">
                            <div className="thumb">
                                <StaticImage placeholder="blurred" quality={80} width="360" formats={["webp","auto"]} src="../assets/img/person2.png" alt="Name"/>
                            </div>
                            <div className="cont p-3">
                                <h5 className="name">Raj Singh </h5>
                                <small>Digital Marketer </small>
                            </div>
                        </div>
                        
                        <div className="team-member">
                            <div className="thumb">
                                <StaticImage placeholder="blurred" quality={80} width="360" formats={["webp","auto"]} src="../assets/img/person2.png" alt="Name"/>
                            </div>
                            <div className="cont p-3">
                                <h5 className="name">Raj Singh </h5>
                                <small>Digital Marketer </small>
                            </div>
                        </div>
                        
                        <div className="team-member">
                            <div className="thumb">
                                <StaticImage placeholder="blurred" quality={80} width="360" formats={["webp","auto"]} src="../assets/img/person2.png" alt="Name"/>
                            </div>
                            <div className="cont p-3">
                                <h5 className="name">Raj Singh </h5>
                                <small>Digital Marketer </small>
                            </div>
                        </div>

                    </Slider>
                </div>
        </div>
    )
}

export default OurTeam
