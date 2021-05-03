import React from 'react'
import projectImg from "../assets/img/project.jpg";
import Layout from '../components/layout';
export default function portfolio() {
    return (
        <Layout>
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

                <div className="project-thumb container">
                    <img className="img-fluid" src={projectImg} alt="project Title" />
                </div>

                <div className="container project-into py-4 border-top border-bottom border- my-5 ">
                    <div className="row">
                        <div className="col-lg-3 mb-lg-0 mb-4">
                            <h2>
                                Client
                            </h2>
                        </div>
                        <div className="col-lg-9">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dolorem odit libero magni nemo dicta nulla accusantium ex expedita laudantium, necessitatibus optio sapiente unde aut, alias rerum fugit obcaecati excepturi.

                            </p>
                        </div>
                    </div>

                    <div className="row pt-4 border-top">
                        <div className="col-lg-3 mb-lg-0 mb-4">
                            <h2>
                                Challenges
                            </h2>
                        </div>
                        <div className="col-lg-9">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dolorem odit libero magni nemo dicta nulla accusantium ex expedita laudantium, necessitatibus optio sapiente unde aut, alias rerum fugit obcaecati excepturi.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, in nesciunt?
                            </p>
                        </div>
                    </div>
                    <div className="row pt-4 border-top">
                        <div className="col-lg-3 mb-lg-0 mb-4">
                            <h2>
                                Tool &amp; Technology
                            </h2>
                        </div>
                        <div className="col-lg-9">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dolorem odit libero magni nemo dicta nulla accusantium ex expedita laudantium, necessitatibus optio sapiente unde aut, alias rerum fugit obcaecati excepturi.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, in nesciunt?
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container">
                <div className="row mt-6 mb-6">
                        <article className="col-xl-10 col-lg-11 mx-auto">
                            <img src={projectImg} className="mb-3 img-fluid" alt="project "/>
                            <h3>Lorem ipsum dolor sit amet.</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident nisi ducimus iste natus. Temporibus aut distinctio cupiditate hic, animi quidem eos nisi, fugit magnam ipsam tenetur sed dolorum porro, ad assumenda aliquam voluptas nemo.
                            </p>

                            <ul>
                                <li>
                                    Lorem ipsum dolor sit.
                                </li>
                                <li>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis.
                                </li>
                                <li>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                </li>
                            </ul>
                        </article>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
