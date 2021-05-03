import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import icon1 from '../../assets/img/draw-1.svg'
import icon2 from '../../assets/img/draw-2.svg'
import icon3 from '../../assets/img/draw-3.svg'
import icon4 from '../../assets/img/draw-4.svg'
import icon5 from '../../assets/img/draw-5.svg'
import icon6 from '../../assets/img/draw-6.svg'

import { FaBeer } from 'react-icons/fa';



const ServicePage = () => (
    <Layout>
        <Seo title="Services We Provide " />
        <div className="service-page">
            <div class="page-header">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-10 mx-auto col-lg-10 col-md-11">
                            <div class="inner">
                                <h1 class="title  mb-4">Services We Provide with Perfections </h1>
                                <p class="lead">Resolute each Ripeners to Cultivate expertise in every stage of product creation to craft immortal mobile app solutions &amp; deliver extraordinary digital experiences.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cta bg-primary">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center flex-column py-4 py-lg-3 flex-md-row">
                        <p className="mb-4 lead text-white text-center text-md-left mb-md-0">
                         <span className="badge badge-danger badge-lg">
                         <FaBeer />
                         </span>   Develop beautiful landing pages, using top-notch layouts    
                        </p>
                        <Link className="btn btn-warning rounded-sm" to="/contact" > Get A free Quote Now </Link>
                    </div>
                </div>
            </div>

            <div className="service-card pt-5">
                <div className="container">
                    <div className="section-title mb-4 text-center">
                        <h6 className="text-purple"> 
                            SERVICES 
                        </h6>
                        <h2 className="title text-dark">
                            Everything from <span className="text-primary">
                            design</span> to development.
                        </h2>
                    </div>
                    <div className="row mt-5 seperated">

                        <div className="col-md-6 col-lg-4 text-center">
                            <i className="w-50 svg">
                                <span>
                                    <img src={icon1} alt="Img" className="img-fluid"/>
                                </span>
                            </i>
                            <h4 className="text-dark">App Development </h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aut reprehenderit voluptatum!
                            </p>    
                        </div>
                        <div className="col-md-6 col-lg-4 text-center">
                            <i className="w-50 svg">
                                <span>
                                    <img src={icon2} alt="Img" className="img-fluid"/>
                                </span>
                            </i>
                            <h4 className="text-dark">App Development </h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aut reprehenderit voluptatum!
                            </p>    
                        </div>
                        <div className="col-md-6 col-lg-4 text-center">
                            <i className="w-50 svg">
                                <span>
                                    <img src={icon3} alt="Img" className="img-fluid"/>
                                </span>
                            </i>
                            <h4 className="text-dark">App Development </h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aut reprehenderit voluptatum!
                            </p>    
                        </div>
                        <div className="col-md-6 col-lg-4 text-center">
                            <i className="w-50 svg">
                                <span>
                                    <img src={icon4} alt="Img" className="img-fluid"/>
                                </span>
                            </i>
                            <h4 className="text-dark">App Development </h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aut reprehenderit voluptatum!
                            </p>    
                        </div>
                        <div className="col-md-6 col-lg-4 text-center">
                            <i className="w-50 svg">
                                <span>
                                    <img src={icon5} alt="Img" className="img-fluid"/>
                                </span>
                            </i>
                            <h4 className="text-dark">App Development </h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aut reprehenderit voluptatum!
                            </p>    
                        </div>
                        <div className="col-md-6 col-lg-4 text-center">
                            <i className="w-50 svg">
                                <span>
                                    <img src={icon6} alt="Img" className="img-fluid"/>
                                </span>
                            </i>
                            <h4 className="text-dark">App Development </h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aut reprehenderit voluptatum!
                            </p>    
                        </div>


                    </div>
                </div>
            </div>
        
            <div className="testimonial mt-5 ">

            </div>
        </div>
    </Layout>
)

export default ServicePage
