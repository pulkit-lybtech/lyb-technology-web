import React from 'react'
import { projectImg } from "../assets/img/project.jpg";
export default function projects() {
    return (
        <div className="projects-page">
            <div className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mx-auto">
                            <h1 className="title">
                                Multipurpose Graph Project
                            </h1>
                            <p className="lead">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quaerat eius? Nisi?
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="project-thumb">
                <img src={projectImg} alt="project Title"/>
            </div>
        </div>
    )
}
