import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import con1 from "../assets/images/ccon (1).svg"
import con2 from "../assets/images/ccon (2).svg"
import con3 from "../assets/images/ccon (3).svg"


const Contact = () => (
    <Layout>
        <Seo title="Contact Us | LYB Technology LLP " />
        <div className="contacts">
            <div className="page-header">
                <div className="container">

                    <div className="row">

                        <div className="col-xl-10 mx-auto col-lg-10 col-md-11">
                            <div className="inner">
                                <h1 className="title  mb-4">
                                We’re here to Help
                                </h1>
                                <p className="lead">
                                Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. 
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div className="container mt-n5">
            <div class="row">
                        <div class="col-md-4">
                            <div class="contact-card">
                                <div class="icon d-flex ">
                                    <img src={con1} className="mx-auto" alt="icon" />
                                </div>
                                <div class="cont text-center">
                                    <h5>Knowledgebase</h5>
                                    <p>
                                        We’re here to help you with any questions.
                                    </p>
                                </div>
                                <div class="foot">
                                    <a href="#"> Contact Support <i class="fa-external-link fa"></i> </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="contact-card">
                                <div class="icon d-flex ">
                                <img src={con2} className="mx-auto" alt="icon" />

                                </div>
                                <div class="cont text-center">
                                    <h5>Support</h5>
                                    <p>
                                        We’re here to help you with any questions.
                                    </p>
                                </div>
                                <div class="foot">
                                    <a href="#"> Call Us Now <i class="fa-external-link fa"></i> </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="contact-card">
                                <div class="icon d-flex ">
                                <img src={con3} className="mx-auto" alt="icon" />

                                </div>
                                <div class="cont text-center">
                                    <h5>FAQ</h5>
                                    <p>
                                        We’re here to help you with any questions.
                                    </p>
                                </div>
                                <div class="foot">
                                    <a href="./faq.html"> Visit FAQ <i class="fa-external-link fa"></i> </a>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>


            <div className="container mb-5 mb-5 ">
            {/* <!--- contact form --> */}
                    <div class="row">
                        <div class="col-xl-7 col-lg-9 col-md-11 mx-auto">
                            <div class="text-center section-title mb-5 pt-5 mt-5 ">
                                <h3 class="title font-weight-bold">Tell Us about Yourself</h3>
                                <p>
                                    Whether you have questions or you would just like to say hello, contact us.
                                </p>
                            </div>
                            <div class="contact-form">

                                <form action="#" class="valid">
                                    <fieldset class="form-row">
                                        <label for="#" class="col-md-6 mb-4">
                                            Name
                                            <input type="text" placeholder="Name " class="form-control" required />
                                            <div class="invalid-feedback">
                                                Please enter your name
                                            </div>
                                        </label>
                                        <label for="#" class="col-md-6 mb-4">
                                            Email
                                            <input type="email" placeholder="Email Address" class="form-control"
                                                required />
                                            <div class="invalid-feedback">
                                                Please enter a valid email
                                            </div>
                                        </label>
                                    </fieldset>
                                    <fieldset class="form-row">
                                        <label for="#" class="col-md-6 mb-4">
                                            Subject
                                            <input type="text" placeholder="Website development " class="form-control"
                                                required />
                                            <div class="invalid-feedback">
                                                Please enter a subject
                                            </div>
                                        </label>
                                        <label for="#" class="col-md-6 mb-4">
                                            Phone Number
                                            <input type="tel" placeholder="Phone Number" class="form-control" required />
                                            <div class="invalid-feedback">
                                                Please enter your phone Number
                                            </div>
                                        </label>
                                    </fieldset>
                                    <fieldset class="form-row">
                                        <label for="#" class="col-md-12 mb-4">
                                            How Can we help?

                                            <textarea name="" id="" rows="5" class="form-control"
                                                placeholder="Hi I would like to..." required ></textarea>

                                            <div class="invalid-feedback">
                                                Please enter your message here.
                                            </div>
                                        </label>
                                    </fieldset>
                                    <fieldset class="form-row mt-4">
                                        <button type="submit"
                                            class="btn submit mx-auto px-5 rounded-lg btn-primary btn-lg">Send</button>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
    </Layout>
)

export default Contact
