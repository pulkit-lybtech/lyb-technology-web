import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';
import moment from 'moment';

export default function Portfolio({ data }) {

    console.log(data);

    return (
        <Layout>
            <Seo title="Projects - LYB Technology" />
            <div className="projects-page">
                <div className="page-header">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-9 mx-auto">
                                <h1 className="title">
                                    Portfolio
                                            </h1>
                                <p className="lead">
                                    Some of our best work we completed in the past.
                                            </p>
                            </div>


                        </div>
                    </div>
                </div>

                <div className="projects-all">
                    <div className="container">
                        <div className="row">
                            {
                                data.allGraphCmsProject.edges.map((proj) => {
                                    // console.table(proj)
                                    return (


                                        <div className="col-12 col-md-4 product">
                                            <Link class="card card-flush mb-7" to={`../projects/${proj.node.slug}`}>
                                                <div class="card-zoom">
                                                    <img class="card-img-top rounded shadow-light-lg" src={proj.node.projectImage.url} alt="..." />
                                                </div>

                                                <div class="card-footer">

                                                    <h6 class="text-uppercase mb-1 text-muted">{moment().format("DD, MMM YY", proj.node.createdAt)}</h6>

                                                    <h4 class="mb-0"> {proj.node.title}</h4>

                                                </div>
                                            </Link>
                                        </div>


                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Layout>

    )
}


export const Projectquery = graphql`
  {
    allGraphCmsProject(sort: {fields: createdAt, order: DESC}) {
        edges {
            node {
                createdAt
                slug
                projectImage {
                    url
                }
                title
            }
        }
    }
  }
`