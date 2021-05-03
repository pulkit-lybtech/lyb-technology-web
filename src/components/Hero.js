import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
export default function Hero() {
    return (
        <section className="hero">
            
            <StaticImage
                src='../assets/img/bg-circle.svg'
                className="position-absolute bg-circle"
            />
            <StaticImage
                placeholder="tracedSVG  "
                src='../assets/img/round (1).png'
                className="position-absolute bg-dots"
            />
            <div className="container ">
                <div className="row flex-column-reverse flex-lg-row align-items-center">
                    <div className="col-lg-6">
                        <div className="hero-inner text-center text-lg-left">
                            <h1 className="fw-800 ">One solution to All your <span className="t-orange">Web Design</span> Needs</h1>
                            <p className="lead">
                            LYB Technology is one of the top web development companies in India who is dedicated to provide the best solution for your web development, web application development, web portal and custom built websites in the Indian industry.
                            </p>
                            <div className="button-group">
                                <Link className="btn btn-primary rounded">
                                    Get Started 
                                </Link>
                                <Link className="btn btn-light rounded">
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                           <StaticImage
                            src='../assets/img/hero.png'
                            width={600}
                            quality={95}
                            placeholder="blurred"
                            formats={["AUTO", "WEBP"]}
                            alt="LYB Technology"
                            className="img-fluid mb-4 mb-lg-0 mx-auto text-center px-lg-0"
                            />
                    </div>
                </div>
            </div>
        </section>
    )
}
