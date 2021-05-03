import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import moment from 'moment';


export default function Blogs({ data: { allGraphCmsPost } }) {
    
    return (
        <Layout>
            <div className="blogs-page">
                <div className="page-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-10 col-lg-11 mx-auto">
                                <h1 className="title">Our Blogs</h1>
                                <p className="lead">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil deleniti consequatur sapiente, vitae error, voluptate obcaecati beatae consectetur molestiae quisquam reiciendis!
                        </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container blog-mt mb-6">
                    <div className="row">
                        <div className="col-xl-10 col-lg-11 mx-auto mb-5">

                            {allGraphCmsPost.edges.map((post) => {
                                // console.log(post.posts)
                                return (
                                        <div key={post.posts.id} class="blog-card">
                                            <div class="blog-img">
                                                <img src={post.posts.coverImage.url} alt="blog text" />
                                                {/* <Img
                                                fluid={post.posts.coverImage.gatsbyImageData.images}
                                                className="mb-8 rounded"
                                                fadeIn={false}
                                                />
                                                 */}
                                            </div>
                                            <div class="blog-body">
                                                <h4>
                                                    {post.posts.title}    
                                                </h4>
                                                <div class="author mb-3">
                                                    <span class="d-flex mr-4 align-items-center">
                                                        <svg class="mr-3" width="33" height="36" viewBox="0 0 33 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <ellipse cx="16.0599" cy="18" rx="16.0599" ry="18" fill="#F2F2F2"></ellipse>
                                                            <path d="M16.0569 21.1749C12.2088 21.1749 8.92188 21.8549 8.92188 24.5749C8.92188 27.2959 12.1883 27.9999 16.0569 27.9999C19.905 27.9999 23.192 27.3209 23.192 24.5999C23.192 21.8789 19.9265 21.1749 16.0569 21.1749Z" fill="#555555"></path>
                                                            <path opacity="0.4" d="M16.0575 18.584C18.6789 18.584 20.7791 16.229 20.7791 13.292C20.7791 10.355 18.6789 8 16.0575 8C13.4371 8 11.3359 10.355 11.3359 13.292C11.3359 16.229 13.4371 18.584 16.0575 18.584Z" fill="#555555"></path>
                                                        </svg>
                                                by Admin  
                                            </span>
                                                    <span class="d-flex mr-4 align-items-center">
                                                        <svg class="mr-3" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <circle cx="18" cy="18" r="18" fill="#F2F2F2"></circle>
                                                            <path d="M9.09277 15.4043H26.9167" stroke="#555555" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M22.442 19.3097H22.4512" stroke="#555555" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M18.0045 19.3097H18.0137" stroke="#555555" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M13.5582 19.3097H13.5674" stroke="#555555" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M22.442 23.1962H22.4512" stroke="#555555" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M18.0045 23.1962H18.0137" stroke="#555555" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M13.5582 23.1962H13.5674" stroke="#555555" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M22.0433 8V11.2908" stroke="#555555" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M13.9652 8V11.2908" stroke="#555555" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.2383 9.5792H13.771C10.8343 9.5792 9 11.2151 9 14.2222V23.2719C9 26.3262 10.8343 28 13.771 28H22.229C25.175 28 27 26.3546 27 23.3475V14.2222C27.0092 11.2151 25.1842 9.5792 22.2383 9.5792Z" stroke="#555555" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        </svg>
                                                {moment().format( "DD - MMM - YYYY",post.posts.publishedAt)}
                                            </span>
                                                </div>
                                                <p class="blog-text">
                                                    {post.posts.excerpt}
                                                </p>
                                                <Link href={`/blogs/${post.posts.slug}`} class="btn px-0 text-decoration-none stretched-link btn-link text-yellow">Continue Reading </Link>
                                            </div>
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

export const BlogPageQ = graphql`query {
    allGraphCmsPost(sort: { fields: date, order: DESC }) {
      edges {
        posts: node {
          id
          title
          slug
          publishedAt
          excerpt
          coverImage {
            url
          }
        }
      }
    }
  }`


