import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

export default function Process() {
    return (
        <div className="process d-none d-md-block">
             <svg width="1600" className="position-absolute bg-wire" height="200" viewBox="0 0 1279 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-2 109C14.8333 71.5001 73.7 -2.29991 174.5 2.50009C300.5 8.50009 321 196 451.5 197.5C582 199 575 2.50009 727.5 2.50009C880 2.50009 886 197.5 997 197.5C1108 197.5 1212.5 2.50009 1278.5 2.50009" stroke="#C7D7E2" stroke-width="3" stroke-dasharray="3 5"/>
                    </svg>
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-6 col-md-8 mx-auto">
                        <div className="section-title  text-center mb-5">
                            <h6 className="text-purple">PROCESS</h6>
                            <h2 className="title">How We Streamline 
                                Our Workflow</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                   

                    <div className="col-lg-3 col-md-6">
                        <div className="process-box ">
                           <div className="icon rounded-circle overflow-hidden">
                                <StaticImage quality={99} width={120} formats={["auto", "webp"]} src="../assets/img/pr1.png"
                                 placeholder="dominantColor" />
                            </div>  
                            <h4 className="title">Estimate</h4>
                            <p className="mb-0 text-body">
                                A secure, user-friendly, and feature-rich ERP software perfect for manufacturing SMEs.
                            </p>
                        </div>    
                    </div> 

                    <div className="col-lg-3 col-md-6">
                        <div className="process-box flex-column flex-column-lg-reverse">
                           <div className="icon rounded-circle overflow-hidden">
                                <StaticImage quality={99} width={120} formats={["auto", "webp"]} src="../assets/img/pr2.png"
                                 placeholder="dominantColor" />
                            </div>  
                            <h4 className="title">Design</h4>
                            <p className="mb-0 text-body">
                                A secure, user-friendly, and feature-rich ERP software perfect for manufacturing SMEs.
                            </p>
                        </div>    
                    </div>  

                    <div className="col-lg-3 col-md-6">
                        <div className="process-box">
                           <div className="icon rounded-circle overflow-hidden">
                                <StaticImage quality={99} width={120} formats={["auto", "webp"]} src="../assets/img/pr3.png"
                                 placeholder="dominantColor" />
                            </div>  
                            <h4 className="title">Develop</h4>
                            <p className="mb-0 text-body">
                                A secure, user-friendly, and feature-rich ERP software perfect for manufacturing SMEs.
                            </p>
                        </div>    
                    </div>    
                    
                    <div className="col-lg-3 col-md-6">
                        <div className="process-box  flex-column flex-column-lg-reverse">
                           <div className="icon rounded-circle overflow-hidden">
                                <StaticImage quality={99} width={120} formats={["auto", "webp"]} src="../assets/img/pr4.png"
                                 placeholder="dominantColor" />
                            </div>  
                            <h4 className="title">Deploy</h4>
                            <p className="mb-0 text-body">
                                A secure, user-friendly, and feature-rich ERP software perfect for manufacturing SMEs.
                            </p>
                        </div>    
                    </div>    
                </div>    
            </div>   
        </div>
    )
}
