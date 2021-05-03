import React from 'react'
import Layout from '../components/layout'
import { FaBriefcase, FaCalendar } from "react-icons/fa";
import ctaInner from "../assets/img/cta-inner.png"

export default function Careers() {
    return (
        <Layout>
            <div className="career-page">
                <div className="page-header text-center text-body">
                    <div className="container">
                        <h1 className="title">
                            Careers
                    </h1>
                        <p>
                            Works with Us
                    </p>
                    </div>

                </div>


                <div className="container mt-n5">
                    <div class="cta-inner position-relative d-flex">
                        <div class="inner">
                            <h2 class="text-white title">
                                You’re One Step Away
                            </h2>
                            <p class="text-white">
                                Purpose is a great free UI package based on Bootstrap 4 that includes the most important
                                components and features so you can jumpstart the hard work and get right to the website
                                creation fast and easy.
                            </p>
                            <a href="#" class="btn btn-light px-4 rounded-pill shadow-sm">Apply Now</a>
                        </div>
                        <div class="thumb">
                            <img src={ctaInner} alt="Schedule a Callback" />
                        </div>
                    </div>
                </div>

                {/* JOB CAREERS OPENINGS  */}

                <div className="container jobs mt-6 mb-6">
                    <div className="row">


                        <div className="col-xl-10 mx-auto col-lg-11">
                            <h2 className="text-center mb-5 text-dark">

                                Current Openings 
                            </h2>
                        </div>
                        <div className="col-xl-10 mx-auto">

                            <div class="card rounded-lg">
                                <div class="card-body">
                                    <div class="title d-flex align-items-baseline mb-2">
                                        <h5 class="job-name mb-0">UI/UX Designer</h5>
                                        <span class="small  text-muted ml-auto">
                                            <FaBriefcase /> 2 - 3 Year experience
                                            </span>
                                    </div>
                                    <div class="date">
                                        <span class="text-muted small">
                                            <FaCalendar />  Posted a month ago
                                            </span>
                                    </div>
                                    <div class="body d-flex mt-4">
                                        <p class="mb-0">
                                            In publishing and graphic design, Lorem ipsum is a placeholder text
                                            commonly used to demonstrate the visual form of a documen...
                                            </p>
                                        <a href="#" class="flex-auto ml-4 btn btn-bg-pink">Explore</a>
                                    </div>
                                </div>
                            </div>

                            <div class="card rounded-lg">
                                <div class="card-body">
                                    <div class="title d-flex align-items-baseline mb-2">
                                        <h5 class="job-name mb-0">UI/UX Designer</h5>
                                        <span class="small  text-muted ml-auto">
                                            <FaBriefcase /> 2 - 3 Year experience
                                            </span>
                                    </div>
                                    <div class="date">
                                        <span class="text-muted small">
                                            <FaCalendar />  Posted a month ago
                                            </span>
                                    </div>
                                    <div class="body d-flex mt-4">
                                        <p class="mb-0">
                                            In publishing and graphic design, Lorem ipsum is a placeholder text
                                            commonly used to demonstrate the visual form of a documen...
                                            </p>
                                        <a href="#" class="flex-auto ml-4 btn btn-bg-pink">Explore</a>
                                    </div>
                                </div>
                            </div>

                            <div class="card rounded-lg">
                                <div class="card-body">
                                    <div class="title d-flex align-items-baseline mb-2">
                                        <h5 class="job-name mb-0">UI/UX Designer</h5>
                                        <span class="small  text-muted ml-auto">
                                            <FaBriefcase /> 2 - 3 Year experience
                                            </span>
                                    </div>
                                    <div class="date">
                                        <span class="text-muted small">
                                            <FaCalendar />  Posted a month ago
                                            </span>
                                    </div>
                                    <div class="body d-flex mt-4">
                                        <p class="mb-0">
                                            In publishing and graphic design, Lorem ipsum is a placeholder text
                                            commonly used to demonstrate the visual form of a documen...
                                            </p>
                                        <a href="#" class="flex-auto ml-4 btn btn-bg-pink">Explore</a>
                                    </div>
                                </div>
                            </div>

                            <div class="card rounded-lg">
                                <div class="card-body">
                                    <div class="title d-flex align-items-baseline mb-2">
                                        <h5 class="job-name mb-0">Project Manager </h5>
                                        <span class="small  text-muted ml-auto">
                                            <FaBriefcase /> 2 - 3 Year experience
                                            </span>
                                    </div>
                                    <div class="date">
                                        <span class="text-muted small">
                                            <FaCalendar />  Posted a month ago
                                            </span>
                                    </div>
                                    <div class="body d-flex mt-4">
                                        <p class="mb-0">
                                            In publishing and graphic design, Lorem ipsum is a placeholder text
                                            commonly used to demonstrate the visual form of a documen...
                                            </p>
                                        <a href="#" class="flex-auto ml-4 btn btn-bg-pink">Explore</a>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>


            </div>
        </Layout>
    )
}
