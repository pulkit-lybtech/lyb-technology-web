import React from 'react'
import { Link } from "gatsby";
import { StaticImage } from 'gatsby-plugin-image'

export default function AboutTeam() {
    return (
        <section className="about-team mt-6">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="about-pic p-4">
                            <StaticImage 
                            formats={["auto", "webp"]}
                            width="600"
                            quality="80"
                            src="../assets/img/about-team.png"
                            className=" img-fluid" />
                            
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center ">
                        <div className="inner">
                            <div className="section-title">
                                <h6 className="text-purple mb-4">ABOUT   </h6>
                                <h2 className="title mb-4">
                                    We are a Professional team With Effective Solutions
                                </h2>
                                <p className="text-body mb-4">
                                Do you want to meet our creative and innovative team at the LYB technology? Do you want to know with what passion we work here out? At LYB technology, we are working all about transformation of technology. We generate perfect and ideal digital experience for small businesses as well as for global brands. We are able to translate your wishes into technology through the effective combination of communication, design, technology and many years of experience. 
                                </p>
                                <div className="button-group">
                                    <Link className="btn btn-primary py-2  px-4">Get Started</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
