import React from 'react'
import {Link} from 'gatsby'
import { FaMobileAlt, } from "react-icons/fa"
export default function Services() {
    return (
        <section id="services" className="mt-6 service">
            <div className="container">
                <div className="section-title mb-5 col-lg-6 col-xl-5 mx-auto text-center">
                    <h6>
                        SERVICES
                    </h6>
                    <h2 className="title text-capitalize text-dark">
                        Services We Provide
                        With Perfection
                    </h2>
                </div>

                {/* SERVICE CARDS  */}

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="card serv-card border-0">
                            <div className="card-body">
                                <div className="icon">

                                </div>
                                <div className="title">
                                    <h4 className="card-title">
                                    Web Design
                                    </h4>
                                </div>
                                <p className="card-text">
                                We design your website with plans and strategies so it's attractive as well as user-friendly.
                                </p>
                                <Link to="/services/web-design" className="stretched-link">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.70716 11.1771C3.3078 11.2321 3 11.5795 3 11.9999C3 12.4585 3.36631 12.8302 3.81818 12.8302H18.1999L13.0047 18.0813L12.9253 18.1743C12.687 18.4989 12.7124 18.9602 13.0023 19.2556C13.3212 19.5805 13.8392 19.5816 14.1594 19.258L20.7477 12.5996C20.787 12.5614 20.8224 12.5194 20.8536 12.474C21.0766 12.1498 21.0452 11.6999 20.7593 11.4111L14.1593 4.74193L14.0674 4.66174C13.7466 4.42125 13.2921 4.44905 13.0023 4.74446C12.6834 5.06942 12.6845 5.59515 13.0047 5.91871L18.2012 11.1696L3.81818 11.1696L3.70716 11.1771Z" fill="#4A63FE"/>
                                    </svg>

                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="card serv-card border-0">
                            <div className="card-body">
                                <div className="icon">

                                </div>
                                <div className="title">
                                    <h4 className="card-title">
                                    Website Development
                                    </h4>
                                </div>
                                <p className="card-text">
                                We build responsive as well as SEO friendly websites so that your business can be expanded rapidly.
                                </p>
                                <Link to="/services/web-development" className="stretched-link">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.70716 11.1771C3.3078 11.2321 3 11.5795 3 11.9999C3 12.4585 3.36631 12.8302 3.81818 12.8302H18.1999L13.0047 18.0813L12.9253 18.1743C12.687 18.4989 12.7124 18.9602 13.0023 19.2556C13.3212 19.5805 13.8392 19.5816 14.1594 19.258L20.7477 12.5996C20.787 12.5614 20.8224 12.5194 20.8536 12.474C21.0766 12.1498 21.0452 11.6999 20.7593 11.4111L14.1593 4.74193L14.0674 4.66174C13.7466 4.42125 13.2921 4.44905 13.0023 4.74446C12.6834 5.06942 12.6845 5.59515 13.0047 5.91871L18.2012 11.1696L3.81818 11.1696L3.70716 11.1771Z" fill="#4A63FE"/>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="card serv-card border-0">
                            <div className="card-body">
                                <div className="icon text-primary">
                                   <span>
                                   <FaMobileAlt size="32" />
                                   </span>
                                </div>
                                <div className="title">
                                    <h4 className="card-title">
                                    App Development
                                    </h4>
                                </div>
                                <p className="card-text">
                                LYB Technology builds powerful and scalable applications                                </p>
                                <Link to="/services/app-development" className="stretched-link">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.70716 11.1771C3.3078 11.2321 3 11.5795 3 11.9999C3 12.4585 3.36631 12.8302 3.81818 12.8302H18.1999L13.0047 18.0813L12.9253 18.1743C12.687 18.4989 12.7124 18.9602 13.0023 19.2556C13.3212 19.5805 13.8392 19.5816 14.1594 19.258L20.7477 12.5996C20.787 12.5614 20.8224 12.5194 20.8536 12.474C21.0766 12.1498 21.0452 11.6999 20.7593 11.4111L14.1593 4.74193L14.0674 4.66174C13.7466 4.42125 13.2921 4.44905 13.0023 4.74446C12.6834 5.06942 12.6845 5.59515 13.0047 5.91871L18.2012 11.1696L3.81818 11.1696L3.70716 11.1771Z" fill="#4A63FE"/>
                                    </svg>

                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="card serv-card border-0">
                            <div className="card-body">
                                <div className="icon">

                                </div>
                                <div className="title">
                                    <h4 className="card-title">
                                    Digital Marketing
                                    </h4>
                                </div>
                                <p className="card-text">
                                Search engine optimization, technical audits, website design, content marketing, email marketing, analytics and search engine marketing
                                </p>
                                <Link to="/service/digital-marketing" className="stretched-link">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.70716 11.1771C3.3078 11.2321 3 11.5795 3 11.9999C3 12.4585 3.36631 12.8302 3.81818 12.8302H18.1999L13.0047 18.0813L12.9253 18.1743C12.687 18.4989 12.7124 18.9602 13.0023 19.2556C13.3212 19.5805 13.8392 19.5816 14.1594 19.258L20.7477 12.5996C20.787 12.5614 20.8224 12.5194 20.8536 12.474C21.0766 12.1498 21.0452 11.6999 20.7593 11.4111L14.1593 4.74193L14.0674 4.66174C13.7466 4.42125 13.2921 4.44905 13.0023 4.74446C12.6834 5.06942 12.6845 5.59515 13.0047 5.91871L18.2012 11.1696L3.81818 11.1696L3.70716 11.1771Z" fill="#4A63FE"/>
                                    </svg>

                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="col-lg-4 col-md-6">
                        <div className="card serv-card border-0">
                            <div className="card-body">
                                <div className="icon">

                                </div>
                                <div className="title">
                                    <h4 className="card-title">
                                    E-Commerce Development
                                    </h4>
                                </div>
                                <p className="card-text">
                                We are E-commerce website developers for an increased conversion rate by keeping in view the latest trends.
                                </p>
                                <Link to="/services/e-commerce-development" className="stretched-link">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.70716 11.1771C3.3078 11.2321 3 11.5795 3 11.9999C3 12.4585 3.36631 12.8302 3.81818 12.8302H18.1999L13.0047 18.0813L12.9253 18.1743C12.687 18.4989 12.7124 18.9602 13.0023 19.2556C13.3212 19.5805 13.8392 19.5816 14.1594 19.258L20.7477 12.5996C20.787 12.5614 20.8224 12.5194 20.8536 12.474C21.0766 12.1498 21.0452 11.6999 20.7593 11.4111L14.1593 4.74193L14.0674 4.66174C13.7466 4.42125 13.2921 4.44905 13.0023 4.74446C12.6834 5.06942 12.6845 5.59515 13.0047 5.91871L18.2012 11.1696L3.81818 11.1696L3.70716 11.1771Z" fill="#4A63FE"/>
                                    </svg>

                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="card serv-card border-0">
                            <div className="card-body">
                                <div className="icon">

                                </div>
                                <div className="title">
                                    <h4 className="card-title">
                                    ERP &amp; CRM
                                    </h4>
                                </div>
                                <p className="card-text">
                                We are one of the best CRM development companies in Delhi NCR, and our team ensures a secure and fully featured ERP software for manufacturing SMEs
                                </p>
                                <Link to="services/ai-machine-learning" className="stretched-link">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.70716 11.1771C3.3078 11.2321 3 11.5795 3 11.9999C3 12.4585 3.36631 12.8302 3.81818 12.8302H18.1999L13.0047 18.0813L12.9253 18.1743C12.687 18.4989 12.7124 18.9602 13.0023 19.2556C13.3212 19.5805 13.8392 19.5816 14.1594 19.258L20.7477 12.5996C20.787 12.5614 20.8224 12.5194 20.8536 12.474C21.0766 12.1498 21.0452 11.6999 20.7593 11.4111L14.1593 4.74193L14.0674 4.66174C13.7466 4.42125 13.2921 4.44905 13.0023 4.74446C12.6834 5.06942 12.6845 5.59515 13.0047 5.91871L18.2012 11.1696L3.81818 11.1696L3.70716 11.1771Z" fill="#4A63FE"/>
                                    </svg>

                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
        
    )
}
