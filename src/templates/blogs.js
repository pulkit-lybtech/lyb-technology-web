import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from "../components/seo";
import moment from "moment"

export default function blogs({ data }) {
    // console.log(data)
    const post = data.graphCmsPost
    return (
        <Layout>
            <Seo title={post.title} />

            <div className="blog-single">
            <div className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 mx-auto col-lg-9">
                            <h1 className="text-dark title">
                                {post.title}
                            </h1>
                            <p className="lead">
                                {post.excerpt}
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                                <picture>
                                    <img className="img-fluid" src={post.coverImage.url} alt={post.title} />
                                </picture>
                        </div>
                        <div className="row">
                            <div className="col-xl-8 col-lg-9 mx-auto mb-6">
                                <article className="my-5 blog-content pb-5 border-bottom" dangerouslySetInnerHTML={{ __html: post.content.html }} />
                                    
                                <span className="text-muted d-flex mb-5">
                                Posted on { moment().format("DD, MMM YYYY", post.publishedAt)}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
query MyQuery($slug: String!) {
    graphCmsPost(slug: {eq: $slug}) {
      title
      id
      slug
      publishedAt
      excerpt
      content{html}
      coverImage{
          url
        }
    }
  }
`
