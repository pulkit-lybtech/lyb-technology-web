import React from 'react'
import { graphql } from 'gatsby'
// import projectImg from "../assets/img/project.jpg";
import Layout from '../components/layout';

export default function portfolio( {data : {graphCmsProject}}) {

    const project = graphCmsProject;

    return (
        <Layout>
            <div className="projects-page">
                <div className="page-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mx-auto">
                                <h1 className="title">
                                    {project.title}
                                </h1>
                                    <p className="lead">
                                        {project.excerpt}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="project-thumb container">
                     <img className="img-fluid" src={project.projectImage.url} alt={project.title} />
                </div>

                <div className="container project-into py-4 border-top border-bottom border- my-5 ">
                    <div className="row">
                        <div className="col-lg-3 mb-lg-0 mb-4">
                            <h2 className="h6 text-uppercase text-purple">

                                Client
                            </h2>
                        </div>
                        <div className="col-lg-9">
                            <p className="lead">
                                {project.clientDescription}
                            </p>
                        </div>
                    </div>

                    <div className="row pt-4 border-top">
                        <div className="col-lg-3 mb-lg-0 mb-4">
                            <h2 className="h6 text-uppercase text-purple">
                                Challenges
                            </h2>
                        </div>
                        <div className="col-lg-9">
                            <p className="lead">
                                {project.challenges}
                            </p>
                        </div>
                    </div>
                    <div className="row pt-4 border-top">
                        <div className="col-lg-3 mb-lg-0 mb-4">
                        <h2 className="h6 text-uppercase text-purple">

                                Tool &amp; Technology
                            </h2>
                        </div>
                        <div className="col-lg-9">
                            <p className="lead">
                                {project.toolsTechnology}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container">
                <div className="row mt-6 mb-6">
                        <article className="col-xl-10 col-lg-11 mx-auto" dangerouslySetInnerHTML={{ __html: project.projectDescription.html}}>
                            
                        </article>
                    </div>
                </div>
            </div>
        </Layout>
    )
}


export const query = graphql`
query projectQuery ($slug: String!) {
    graphCmsProject(slug: {eq: $slug}) {
        id
        projectDescription {
          html
        }
        slug
        projectImage
        {
            url
        }
        title
        toolsTechnology
        publishedAt
        clientDescription
        challenges
    }
  }
`