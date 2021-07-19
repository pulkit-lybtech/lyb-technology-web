import React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import webImg from '../../assets/images/web.svg'
import webDevelop from '../../assets/images/service-details1.jpg'
import webDevelop4 from '../../assets/images/service-details2.jpg'
import webDevelop5 from '../../assets/images/service-details3.jpg'
import webDevelop2 from '../../assets/images/Website setup-amico.svg'
import webDevelop3 from '../../assets/images/QA engineers-amico.svg'
import webDevelop6 from '../../assets/images/Developer activity-amico.png'





export default function webDevelopment() {
    return (
        <Layout>
            <Seo title="Web Development  | LYB Technology LLP " />

            <div className="develop">
                <div className="page-header">
                    <div className="container">

                        <div className="row align-items-center ">

                            <div className=" col-lg-6  ">
                                <div className="inner">
                                    <h1 className="title  mb-4">
                                        Web <span className="text-primary">
                                            Development
                                        </span>
                                    </h1>
                                    <p className="lead">

                                        We design your website with proper plans and strategies so that it's attractive as well as user-friendly.
                                        We'll help you with the latest technologies. And make sure that the web development process truly serves your business.

                                    </p>
                                </div>
                            </div>
                            <div className=" col-lg-6  ">
                                <picture>
                                    <img src={webImg} alt="new image web " className="img-fluid" />
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
                            <img src={webDevelop} alt="web development " className="mb-5 rounded-lg img-fluid " />
                            <h2 className="h1 fw mb-4 font-weight-bolder title">
                                Why Website Development?
                            </h2>
                            <p className="lead">
                                Website Development is a way to make people aware of the services and/or Products you're providing, to explain why your products are relevant and even appropriate for them to purchase or use, and to see what distinguishes your business from rivals. The importance of displaying this information with high-quality photographs and a well-thought-out presentation would have a significant impact on customers.
                            </p>


                            <h2 className="h1 fw mb-4 font-weight-bolder title">
                                Process
                            </h2>
                            <p className="lead">
                                We are a good web development company because of the outcomes of our search sessions, which are backed up by research and Analysis.
                            </p>




                            <div className="row">


                                <div class="col-sm-6 col-lg-4">
                                    <div class="middle-item">
                                        <i class="flaticon-vector"></i>
                                        <h4>Strategy Planning</h4>
                                        <span>01</span>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-lg-4">
                                    <div class="middle-item">
                                        <i class="flaticon-vector"></i>
                                        <h4>Development</h4>
                                        <span>02</span>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-lg-4">
                                    <div class="middle-item">
                                        <i class="flaticon-vector"></i>
                                        <h4>Deploy</h4>
                                        <span>03</span>
                                    </div>
                                </div>

                            </div>
                            <div className="coll mb-5">
                                <p>
                                    Planning entails deciding on a technology stack and software development approach, identifying deliverables, and measuring project time and resources.

                                    Other sensitive decisions include creating content structures and sitemaps, wireframing, layout planning, including UI and UX design, and more.

                                    We believe that agreeing on a sitemap during the planning stage is critical to the project's success. This involves streamlining the website's layout, determining how many pages and tasks should be aligned with each other based on their significance, and determining what content and features should be included in the initial release.


                                </p>
                                <div className="alert alert-primary">
                                    Our planning phase occurs with sufficient reports for you and for timely response in the process.

                                </div>
                            </div>

                            <div className="row align-items-center mt-5">
                                <div className="col-lg-6 ">
                                    <h4 className="h3 mb-4 title font-weight-bolder">Frontend Development</h4>
                                    <p className="card-text">
                                        This is the advancement of the website's client-side functionality, which allows users to communicate with it. Special animations and effects are created from the prototypes created in the early stages. Following that, functions are combined based on the technologies, and resources are chosen. Regardless of the platform, our developers ensure that the site is responsive and user-friendly.
                                    </p>

                                </div>
                                <div className="col-lg-6">
                                    <picture>
                                        <img src={webDevelop2} alt="web " className="img-fluid " />
                                    </picture>
                                </div>
                            </div>


                        </div>
                    </div>







                </div>

                <div className="bg-primary py-4 mb-5 ">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-9 col-lg-10 mx-auto col-md-10">
                                <div className="row mt- align-items-center">
                                    <div className="col-lg-6">
                                        <picture>
                                            <img src={webDevelop6} alt="web " className="img-fluid mb-md-4" />
                                        </picture>
                                    </div>
                                    <div className="col-lg-6 ">
                                        <h4 className="h3 mb-4 title text-white  font-weight-bolder">Backend Development</h4>
                                        <p className="text-white ">
                                            This is the advancement of the website's client-side functionality, which allows users to communicate with it. Special animations and effects are created from the prototypes created in the early stages. Following that, functions are combined based on the technologies, and resources are chosen. Regardless of the platform, our developers ensure that the site is responsive and user-friendly.
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
                                        <h4 className="h3 mb-4 title text-dark  font-weight-bolder">Testing And Deployment</h4>
                                        <p className="text-body ">
                                        Prior to the website being deployed on the server for Development, a series of thorough, meticulous, and repeated checks should be performed to ensure that bugs have been eliminated. Our quality assurance team checks for features such as functionality, accessibility, compatibility, and performance.
Assures that everything goes off without a glitch.All scripts are tested by our development team to ensure that the site is fully loaded and visible on all devices and platforms. Our task is to demonstrate that the website is market-ready and ready to go live. Our in-depth research reveals potential enhancements that can be made to boost the website.
                                        </p>

                                    </div>
                                    <div className="col-lg-6">
                                        <picture>
                                            <img src={webDevelop3} alt="web " className="img-fluid mb-md-4" />
                                        </picture>
                                    </div>
                                  
                                </div>


                                <hr className="mt-3" />
                            </div>
                        </div>




                        <div className="row mt-5">
                            <div className="col-md-6">
                                <img src={webDevelop5} alt="web develop" className="img-fluid rounded-lg shadow mb-3" />
                            </div>
                            <div className="col-md-6">
                                <img src={webDevelop4} alt="web develop" className="img-fluid rounded-lg shadow mb-3" />
                            </div>
                        </div>
                    </div>
                </div>



            </div>

        </Layout>
    )
}
