import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Process from "../components/Process"
import AboutTeam from "../components/AboutTeam"
import OurWork from "../components/OurWork"
import OurTeam from "../components/OurTeam"
import OurBlogs from "../components/OurBlogs"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    
    <Hero />
    <Services />
    <AboutTeam />
    <Process />
    <OurWork />
    <OurTeam />
    <OurBlogs />

    {/* <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
    </p> */}

  </Layout>
)

export default IndexPage
