import React, { useRef } from 'react'
import Slider from "react-slick"
// import slick from "slick-carousel"
// import {StaticImage} from "gatsby-plugin-image"
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';



function ourWork(props) {
    let settings = {
        dots: false,
        nav: false,
        speed: 500,
        className: "our-work-slider",
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
        <div className="our-work position-relative mt-6">
            <div className=" container ">
                <div className="row ">
                    <div className="col-lg-4">
                        <div className="section-title text-left">
                            <h6 className="text-danger">PROJECTS</h6>
                            <h2 className="title">Some of our
                                Work We Have Done</h2>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex align-items-end">
                        <div className="inner">
                            <p className="mb-4 mt-auto">We are always trying to convert client’s dreams or wishes into technology to provide </p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="slider container">
                <Slider {...settings} >
                
                            <div className="project-card">
                           
                                <div className="thumb">
                                    <StaticImage quality={95}
                                        formats={["AUTO", "WEBP"]}
                                        alt="LYB Technology" width="400" placeholder="blurred" src="../assets/img/slider2.png" />
                                </div>
    
                                <div className="overlay">
                                    <span className="cat">
                                        React
                                    </span>
                                    <h4 className="title">
                                        Project Title
                                    </h4>
                                    <Link className="d-flex align-items-center">Read More <svg className="ml-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 12H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12 5L19 12L12 19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    </Link>
                                </div>
                            </div>


                            <div className="project-card">
                           
                                <div className="thumb">
                                    <StaticImage quality={95}
                                        formats={["AUTO", "WEBP"]}
                                        alt="LYB Technology" width="400" placeholder="blurred" src="../assets/img/slider2.png" />
                                </div>
    
                                <div className="overlay">
                                    <span className="cat">
                                        React
                                    </span>
                                    <h4 className="title">
                                        Project Title
                                    </h4>
                                    <Link className="d-flex align-items-center">Read More <svg className="ml-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 12H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12 5L19 12L12 19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    </Link>
                                </div>
                            </div>


                            <div className="project-card">
                           
                                <div className="thumb">
                                    <StaticImage quality={95}
                                        formats={["AUTO", "WEBP"]}
                                        alt="LYB Technology" width="400" placeholder="blurred" src="../assets/img/slider2.png" />
                                </div>
    
                                <div className="overlay">
                                    <span className="cat">
                                        React
                                    </span>
                                    <h4 className="title">
                                        Project Title
                                    </h4>
                                    <Link className="d-flex align-items-center">Read More <svg className="ml-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 12H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12 5L19 12L12 19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    </Link>
                                </div>
                            </div>
                      
                  




                </Slider>
            </div>

            <div className="d-flex mt-3 justify-content-center">
                <div className="inner text-center">
                    <Link to="/projects" className="btn rounded-lg btn-light">
                        View All
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ourWork;

