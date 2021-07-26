import React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import appDev from '../../assets/images/app-dev.svg'
import appDev2 from '../../assets/images/4420086.jpg'
import { Link } from 'gatsby'
import { BsArrowRight } from "react-icons/bs"
import { StaticImage } from 'gatsby-plugin-image'
import { FaArrowRight } from 'react-icons/fa'

import { FcEditImage, FcInfo, FcProcess } from 'react-icons/fc'

export default function webDevelopment() {
    return (
        <Layout>
            <Seo title="App Development  | LYB Technology LLP " />

            <div className="app develop">
                <div className="page-header">
                    <div className="container">

                        <div className="row align-items-center mb5">

                            <div className=" col-lg-6  ">
                                <div className="inner">
                                    <h1 className="title  mb-4">
                                        App <span className="text-danger">
                                            Development
                                        </span>
                                    </h1>
                                    <p className="mb-4">
                                        We provide you with the latest technology with better security at a very effective cost. LYB Technology builds powerful and scalable applications that involve the latest web technologies and agile development processes.
                                    </p>
                                    <Link className="btn btn-lg btn-danger rounded-lg" to="/contact">Get Free Quotation <BsArrowRight /> </Link>
                                </div>
                            </div>
                            <div className=" col-lg-6  ">
                                <picture>
                                    <img src={appDev} className="img-fluid mb-4" alt="placeholder" />
                                </picture>

                            </div>


                        </div>

                    </div>
                </div>
            </div>

            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 col-lg-10 mx-auto mb-5  mt-n5 col-md-10">
                            <StaticImage src="../../assets/images/close-up-image-programer-working-his-desk-office.jpg" placeholder="blurred"
                                quality={22} alt="web development " className="mb-5 rounded-lg img-fluid " />

                            <h2 className="h1 fw mb-4 font-weight-bolder title">
                                Why need <span className="text-danger">App Development</span>?
                            </h2>
                            <p className="lead">
                                The process of developing a computer programme to perform the various tasks that every company needs is known as application development. Native apps, hybrid apps, and HTML5 apps are examples of the types of mobile apps that our developers make.
                                Businesses may use an App to simplify processes and improve performance.
                            </p>


                            <h2 className=" mt-5 fw mb-4 font-weight-bolder title">
                                The steps that we follow during App development
                            </h2>
                            <p className="lead">
                                We are a good app development company because of the outcomes of our search sessions, which are backed up by research and Analysis.
                            </p>




                            <div className="row">


                                <div class="col-sm-6 col-lg-4">
                                    <div class="middle-item">
                                        <FcEditImage />
                                        <h4>Requirements <br /> Analysis </h4>
                                        <span>01</span>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-lg-4">
                                    <div class="middle-item">
                                        <FcInfo />
                                        <h4>Design &amp; <br /> Development </h4>
                                        <span>02</span>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-lg-4">
                                    <div class="middle-item">
                                        <FcProcess />
                                        <h4>Deploy &amp; <br /> Testing </h4>
                                        <span>03</span>
                                    </div>
                                </div>

                            </div>
                            <div className="coll row">

                                <div className="col-md-6 mb-4 ">
                                    <div className="card card-light h-100 shadow bg-primary">
                                        <div className="icon px-4 pt-5">
                                            <StaticImage width={88} quality="99" placeholder="tracedSVG" src="../../assets/images/rise.png" />
                                        </div>
                                        <div className="card-body text-white">
                                            <h4 className="card-title fw-700 text-white">
                                                Planning
                                            </h4>
                                            <p className="card-text">
                                                Planning entails deciding on a technology stack and software development approach, identifying deliverables, and measuring project time and resources.Other sensitive decisions include creating content structures and sitemaps, wireframing, layout planning, including UI and UX design, and more.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 mb-4">
                                    <div className="card card-light h-100 shadow bg-danger">
                                        <div className="icon px-4 pt-5">
                                            <StaticImage width={88} quality="99" placeholder="tracedSVG" src="../../assets/images/develop.png" />
                                        </div>
                                        <div className="card-body text-white">
                                            <h4 className="card-title fw-700 text-white">
                                                Development
                                            </h4>
                                            <p className="card-text">
                                                We believe that agreeing on a sitemap during the planning stage is critical to the project's success. This involves streamlining the website's layout, determining how many pages and tasks should be aligned with each other based on their significance, and determining what content and features should be included in the initial release.
                                            </p>
                                        </div>
                                    </div>
                                </div>



                            </div>

                            <div className="row align-items-center mt-5">
                                <div className="col-lg-6 ">
                                    <h4 className="h3 mb-4 title font-weight-bolder">1. Strategy</h4>
                                    <p className="card-text mb-4">
                                        The first phase of the mobile app development process is defining the strategy for evolving your idea into a successful app.  As one app’s objectives may differ from another, there is still an app-specific impact to the mobility strategy to address during the development process.
                                        <br />
                                        In this phase, we:                                  </p>
                                    <ul className="list">
                                        <li> Identify the app users</li>
                                        <li>
                                            Research the competition
                                        </li>
                                        <li>
                                            Establish the app’s goals and objectives
                                        </li>
                                        <li>
                                            Select a mobile platform for your app
                                        </li>




                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <picture>
                                        <img src={appDev2} alt="app strategy " className="img-fluid " />
                                    </picture>
                                </div>
                            </div>


                        </div>
                    </div>







                </div>

                <div className="bg-grad  mb-5 ">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-9 col-lg-10 mx-auto col-md-10">
                                <div className="row mt- align-items-center">
                                    <div className="col-lg-6">
                                        <picture>
                                            <StaticImage quality="99" placeholder="tracedSVG" src="../../assets/images/Scrum board-pana.png" className="img-fluid mb-md-4" />
                                        </picture>
                                    </div>
                                    <div className="col-lg-6 ">
                                        <h4 className="h3 mb-4 title text-white  font-weight-bolder">2. Analysis and Planning
                                        </h4>
                                        <p className="text-white ">
                                            At this stage, the app idea starts taking shape and turns into an actual project. Analysis and planning begin with defining use cases and capturing detailed functional requirements.
                                            After identifying the requirements for your app, we prepare a product roadmap.  This includes prioritizing the mobile app requirements and grouping them into delivery milestones.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>


                <div className="bg-white  mb-5 ">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-9 col-lg-10 mx-auto col-md-10">
                                <div className="row mt- align-items-center">
                                    <div className="col-lg-6 ">
                                        <h4 className="h3 mb-4 title text-dark  font-weight-bolder"> 3. UI/UX Design
                                        </h4>
                                        <p className="text-body ">
                                            The purpose of an app’s design is to deliver seamless and effortless user experiences with a polished look.

                                            The success of a mobile app is determined based on how well users are adopting and benefiting from all its features. The goal for mobile app UI / UX design is creating excellent user experiences making your app interactive, intuitive, and user-friendly. While polished UI designs will help with early adoption, your app must have intuitive user experiences to keep app users’ engaged.

                                        </p>

                                    </div>
                                    <div className="col-lg-6">
                                        <picture>
                                            <StaticImage quality="99" placeholder="tracedSVG" src="../../assets/images/Mobile UX-pana.png" className="img-fluid mb-md-4" />
                                        </picture>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="mt-5 bg-light py-5">
                    <div className="container">
                        <div className="row justify-items-center align-items-stretch">
                            <div className="col-12 text-center">
                                <span className="badge badge-info badge-lg px-3 rounded-pill">
                                    Process
                                </span>
                                <h2 className="text-dark mb-5 fw-800 h1">
                                    App development <span className="text-primary">Planning
                                    </span>
                                </h2>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="pro-card card">
                                    <div className="card-body">
                                        <div className="icon mb-4 ">
                                            <StaticImage src="../../assets/images/developing.png" width={78} placeholder="tracedSVG" quality="80" />
                                        </div>

                                        <h4 className="card-title fw-700">
                                            Advance Technologies
                                        </h4>

                                        <p className="card-text">
                                            This part includes database and server-side objects necessary for supporting functions of your mobile app.
                                        </p>


                                    </div>
                                </div>
                            </div>


                            <div className="col-md-6 col-lg-4">
                                <div className="pro-card card">
                                    <div className="card-body">
                                        <div className="icon mb-4 ">
                                            <StaticImage src="../../assets/images/api.png" width={78} placeholder="tracedSVG" quality="80" />
                                        </div>

                                        <h4 className="card-title fw-700">
                                            API
                                        </h4>

                                        <p className="card-text">
                                            An Application Programming Interface (API) is a method of communication between the app and a back-end server/database.
                                        </p>


                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4">
                                <div className="pro-card card">
                                    <div className="card-body">
                                        <div className="icon mb-4 ">
                                            <StaticImage src="../../assets/images/mobile-app.png" width={78} placeholder="tracedSVG" quality="80" />
                                        </div>

                                        <h4 className="card-title fw-700">
                                            Mobile App Front-End

                                        </h4>

                                        <p className="card-text">
                                            The front-end is the native mobile app an end-user will use. In most cases, mobile apps consist of interactive user experiences that use an API and a back-end for managing data.
                                        </p>


                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

                <div className="bg-sexy pt-5 pb-3  mb-5 ">
                    <div className="container">
                        <div className="row mt- align-items-center">
                            <div className="col-lg-5">
                                <picture>
                                    <StaticImage quality="99" placeholder="tracedSVG" src="../../assets/images/App development-amico.png" className="img-fluid mb-md-4" />
                                </picture>
                            </div>
                            <div className="col-lg-7 ">
                                <h4 className="h3 mb-4 title text-white  font-weight-bolder"> Information Architecture &amp; Workflows
                                </h4>
                                <p className="text-white ">
                                    The first step of your mobile app design process is to determine the data your mobile app will display to the users, the data it will collect, user interactions with the finished product, and the user journeys within the app. For companies, enterprise mobile solutions have users with different roles and privileges, and it is essential to incorporate these rules as part of your app’s information architecture. Workflow diagrams help identify every possible interaction a user has with the app and the app’s navigation structure.

                                </p>
                                <Link to="/contact" className="btn shadow-sm rounded btn-lg btn-light">
                                    Discuss a Project
                                    <FaArrowRight className="ml-2" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="prop">
                    <div className="container">
                        <div className="row mt-5">
                            <div className="col-md-6 mb-3">
                                <StaticImage quality="99" placeholder="tracedSVG" src="../../assets/images/discussing-mobile-app.jpg" className="img-fluid  rounded-lg shadow-sm mb-md-4" />
                            </div>
                            <div className="col-md-6  mb-3" >
                                <StaticImage quality="99" placeholder="tracedSVG" src="../../assets/images/choosing-icons-mobile-app.jpg" className="img-fluid rounded-lg shadow-sm  mb-md-4" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </Layout>
    )
}
