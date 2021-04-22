import React from 'react'

export default function Hero() {
    return (
        <section className="hero">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="hero-inner">
                            <h1>One solution to All your <span>Web Design</span> Needs</h1>
                            <p className="lead">
                            LYB Technology is one of the top web development companies in India who is dedicated to provide the best solution for your web development, web application development, web portal and custom built websites in the Indian industry.
                            </p>
                            <div className="button-group">
                                <Link className="btn btn-lg btn-primary rounded">
                                    Contact Now
                                </Link>
                                <Link className="btn btn-lg btn-light rounded">
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
