import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import {Link} from "gatsby"
export default function OurBlogs() {
    return (
        <div className="container our-blogs mb-5">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title text-center pb-5">
                        <h2 className="title text-dark">
                             Latest Blogs and Updates
                        </h2>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="card border-0">
                        <div className="thumb">
                            <StaticImage src="../assets/img/blog1.png" width={396} placeholder="tracedSVG"  alt="blog.title"/>
                        </div>
                        <h5 className="card-title">
                            <Link className="link" to="/">
                                How is environment ERP confirmed?
                            </Link>
                        </h5>
                        <span className="date text-muted">
                            Dec 16, 2020
                        </span>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6">
                    <div className="card border-0">
                        <div className="thumb">
                            <StaticImage src="../assets/img/blog1.png" width={396} placeholder="tracedSVG"  alt="blog.title"/>
                        </div>
                        <h5 className="card-title">
                            <Link className="link" to="/">
                                How is environment ERP confirmed?
                            </Link>
                        </h5>
                        <span className="date text-muted">
                            Dec 16, 2020
                        </span>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="card border-0">
                        <div className="thumb">
                            <StaticImage src="../assets/img/blog1.png" width={396} placeholder="tracedSVG"  alt="blog.title"/>
                        </div>
                        <h5 className="card-title">
                            <Link className="link" to="/">
                                How is environment ERP confirmed?
                            </Link>
                        </h5>
                        <span className="date text-muted">
                            Dec 16, 2020
                        </span>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="card border-0">
                        <div className="thumb">
                            <StaticImage src="../assets/img/blog1.png" width={396} placeholder="tracedSVG"  alt="blog.title"/>
                        </div>
                        <h5 className="card-title">
                            <Link className="link" to="/">
                                How is environment ERP confirmed?
                            </Link>
                        </h5>
                        <span className="date text-muted">
                            Dec 16, 2020
                        </span>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
