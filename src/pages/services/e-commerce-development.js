import React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { Link } from 'gatsby'
import { BsArrowRight } from "react-icons/bs"
import { StaticImage } from 'gatsby-plugin-image'
import { FaArrowRight } from 'react-icons/fa'
import { FcEditImage, FcInfo, FcProcess } from 'react-icons/fc'


// images  

import ecom from '../../assets/images/In no time-amico.png'
import appDev2 from '../../assets/images/4420086.jpg'



export default function webDevelopment() {
	return (
		<Layout>
			<Seo title="E-commerce Development  | LYB Technology LLP " />
			<div className="app develop">
				<div className="page-header">
					<div className="container">

						<div className="row align-items-center mb5">

							<div className=" col-lg-6  ">
								<div className="inner">
									<h1 className="title  mb-4">
										eCommerce <span className="text-success">
											Development
										</span>
									</h1>
									<p className="mb-4">
										We provide you with the latest technology with better security at a very effective cost. LYB Technology builds powerful and scalable applications that involve the latest web technologies and agile development processes.
									</p>
									<Link className="btn btn-lg btn-success rounded-lg" to="/contact">Get Free Quotation <BsArrowRight /> </Link>
								</div>
							</div>
							<div className=" col-lg-6  ">
								<picture>
									<img src={ecom} className="img-fluid mb-4" alt="placeholder" />
								</picture>

							</div>


						</div>

					</div>
				</div>
			</div>

			<div className="content">
				<div className="container">
					<div className="row">
						<div className="col-xl-9 col-lg-10 mx-auto mb-5  mt-n5 col-md-10">
							<StaticImage src="../../assets/images/ecommerce.jpg" placeholder="blurred"
								quality={22} alt="web development " className="mb-5 shadow rounded-lg img-fluid " />

							<h2 className="h1 fw mb-4 font-weight-bolder title">
								Why need <span className="text-success">E-Commerce Development</span>?
							</h2>
							<div className="row">
								<p className="text-body col-md-6">
									As commerce continues to evolve, so do the ways that it’s conducted. E-commerce is the buying and selling of goods or services via the internet, and the transfer of money and data to complete the sales. E-commerce helps organizations to provide better customer services. It helps to simplify the business processes and makes them faster and efficient.

									<br />
									<br />

									<Link to="/contact" className="btn btn-outline-success btn-lg shadow-sm px-5 rounded">
										Get a Call Back
									</Link>
								</p>
								<p className="text-body  col-md-6">
									There are numerous steps involved in the eCommerce development stage that start from effective planning which consists of requirement analysis, followed by frontend and backend development after which the application is tested and deployed. Maintenance of the application is also a crucial part of the process. We will be explaining all the steps of the eCommerce development process in detail in the following sections.
								</p>
							</div>



							<hr className="my-5" />


							<h2 className=" mt-5 fw mb-4 font-weight-bolder title">
								Requirement Analysis
							</h2>
							<p className="text-body">
								Requirement Analysis, also known as Requirement Engineering is the method of determining user expectations for a new software being developed or modified. In the eCommerce development process, it is sometimes loosely referred to as requirement gathering or requirement capturing. Requirements analysis includes those tasks that go into determining the needs or conditions to meet for a new or altered product or project, taking account of the possibly conflicting requirements of the various stakeholders, analyzing, documenting, validating and managing software or system requirements.
							</p>

							<hr className="my-5" />


							<div className="row">


								<div class="col-sm-6 col-lg-4">
									<div class="middle-item">
										<FcEditImage />
										<h4>Requirements <br /> Analysis </h4>
										<span>01</span>
									</div>
								</div>
								<div class="col-sm-6 col-lg-4">
									<div class="middle-item">
										<FcInfo />
										<h4>Reseach &amp; <br /> Development </h4>
										<span>02</span>
									</div>
								</div>
								<div class="col-sm-6 col-lg-4">
									<div class="middle-item">
										<FcProcess />
										<h4>Deploy &amp; <br /> Testing </h4>
										<span>03</span>
									</div>
								</div>

							</div>
							<div className="coll mt-3">

								<div className="card card-light h-100 shadow-sm border-0 ">

									<div className="card-body text-dark">
										<div className="icon mb-3">
											<StaticImage width={78} quality="99" placeholder="tracedSVG" src="../../assets/images/quill.png" />
										</div>
										<h4 className="card-title fw-700 text-dark">
											What is the Requirement?
										</h4>
										<p className="card-text">
											For an e-commerce project, the main business requirement is the same as any other development process i.e. a user comes to the platform and purchases products. eCommerce applications have a large scope, at a micro level, the requirement could depend upon the nature of the product sold whereas, at a macro level, business and functional requirements have to be considered. In the end, we are looking forward to developing a high-quality eCommerce store that meets the retailer’s real need on time and within a budget.
										</p>
									</div>
								</div>
							</div>

						</div>
					</div>







				</div>

				<div className="bg-light">
					<div className="container">
						<div className="row align-items-center mt-5 py-5">
							<div className="col-lg-6  ">
								<h4 className="h3 mb-4 title font-weight-bolder">Activities for Requirement Analysis</h4>
								<p className="card-text mb-4">
									The first phase of the mobile app development process is defining the strategy for evolving your idea into a successful app.  As one app’s objectives may differ from another, there is still an app-specific impact to the mobility strategy to address during the development process.
								</p>

							</div>
							<div className="col-lg-6 mb-4">
								<picture>
									<img src={appDev2} alt="app strategy " className="img-fluid " />
								</picture>
							</div>

							<hr className="my-4 col-12" />

							<div className="col-lg-6">
								<div className=" mb-4 h-100">
									<h5 className="crd-header mb-4">
										<strong className="title">
											Here are the main activities involved in requirement analysis:
										</strong>
									</h5>
									<ul className="list-group">
										<li className="list-group-item">
											1. Identify customer’s needs
										</li>
										<li className="list-group-item">
											2. Evaluate the system for feasibility
										</li>
										<li className="list-group-item">
											3. Perform economic and technical analysis
										</li>
										<li className="list-group-item">
											4. Allocate functions to system elements
										</li>
										<li className="list-group-item">
											5. Establish a schedule and constraints
										</li>
										<li className="list-group-item">
											6. Create system definitions
										</li>
									</ul>
								</div>
							</div>


							<div className="col-lg-6">

								<ul className="list">
									<li className="mb-3"> <strong>Obtaining Requirements:</strong> The process of communicating with users to determine what their actual requirements are. This is also called requirements gathering.
									</li>
									<li className="mb-3">
										<strong>Analyzing Requirements:</strong> The process of resolving whether the affirmed requirements are unclear, vague, inadequate or conflicting, and then resolving these issues.
									</li>
									<li className="mb-3">
										<strong>Requirements Modeling:</strong> Requirements might be documented in various forms. Most common among that are natural-language documents, use cases, user stories, or process specifications.
									</li>
									<li className="mb-3">
										<strong>Review and Retrospective:</strong> Team members speculate on what happened in the iteration and identifies actions for improvement going forward.
									</li>

								</ul>
							</div>



						</div>
					</div>
				</div>


				<div className="bg-green  mb-5 ">
					<div className="container">
						<div className="row mt- align-items-center">
							<div className="col-lg-6">
								<picture>
									<StaticImage quality="99" placeholder="tracedSVG" src="../../assets/images/Self checkout-pana.png" className="img-fluid mb-md-4" />
								</picture>
							</div>
							<div className="col-lg-6 ">
								<h4 className="h3 mb-4 title text-white  font-weight-bolder">
									Designing a secure eCommerce website
								</h4>
								<p className="text-white ">
									It is very important for your shoppers to feel secure when they are entering or shopping on your eCommerce website. Shoppers should feel that their data is safe and their payment information is secure when purchasing on the website. A website that doesn’t look secure loses customers even if it actually follows all security measures and especially if you are new in the market building trust among the new shoppers is even more difficult and important.
								</p>
							</div>
						</div>

					</div>
				</div>


				<div className="bg-white  mb-5 ">
					<div className="container">
						
								<div className="row mt- align-items-center">
									<div className="col-lg-6 ">
										<h4 className="h3 mb-4 title text-dark  font-weight-bolder">Designing the <span className="text-priimary">
										shopping cart
										</span>

										</h4>
										<p className="text-body ">
											The purpose of an website's design is to deliver seamless and effortless user experiences with a polished look.
											The shopping cart is where the final purchase decision is made as the shoppers review their picks and in some cases, choose the best ones. The main function of the shopping cart is to make shoppers checkout. A shopping cart should be user-friendly and should encourage the shopper to purchase further.

										</p>

									</div>
									<div className="col-lg-6">
										<picture>
											<StaticImage quality="99" placeholder="tracedSVG" src="../../assets/images/Mobile UX-pana.png" className="img-fluid mb-md-4" />
										</picture>
									</div>
						</div>

					</div>
				</div>

				<div className="mt-5 bg-light py-5">
					<div className="container">
						<div className="row justify-items-center align-items-stretch">
							<div className="col-12 text-center">
								<span className="badge badge-info badge-lg px-3 rounded-pill">
									Process
								</span>
								<h2 className="text-dark mb-5 fw-800 h1">
									App development <span className="text-primary">Planning
									</span>
								</h2>
							</div>
							<div className="col-md-6 col-lg-4">
								<div className="pro-card card">
									<div className="card-body">
										<div className="icon mb-4 ">
											<StaticImage src="../../assets/images/developing.png" width={78} placeholder="tracedSVG" quality="80" />
										</div>

										<h4 className="card-title fw-700">
											Advance Technologies
										</h4>

										<p className="card-text">
											This part includes database and server-side objects necessary for supporting functions of your mobile app.
										</p>


									</div>
								</div>
							</div>


							<div className="col-md-6 col-lg-4">
								<div className="pro-card card">
									<div className="card-body">
										<div className="icon mb-4 ">
											<StaticImage src="../../assets/images/api.png" width={78} placeholder="tracedSVG" quality="80" />
										</div>

										<h4 className="card-title fw-700">
										Bug fixing

										</h4>

										<p className="card-text">
										bugs are reported because of some scenarios which are not tested at all.

										</p>


									</div>
								</div>
							</div>

							<div className="col-md-6 col-lg-4">
								<div className="pro-card card">
									<div className="card-body">
										<div className="icon mb-4 ">
											<StaticImage src="../../assets/images/mobile-app.png" width={78} placeholder="tracedSVG" quality="80" />
										</div>

										<h4 className="card-title fw-700">
										Upgrade

										</h4>

										<p className="card-text">
										Upgrading the application to newer versions.

										</p>


									</div>
								</div>
							</div>


						</div>
					</div>
				</div>

				<div className="bg-sexy pt-5 pb-3  mb-5 ">
					<div className="container">
						<div className="row mt- align-items-center">
							<div className="col-lg-5">
								<picture>
									<StaticImage quality="99" placeholder="tracedSVG" src="../../assets/images/App development-amico.png" className="img-fluid mb-md-4" />
								</picture>
							</div>
							<div className="col-lg-7 ">
								<h4 className="h3 mb-4 title text-white  font-weight-bolder">Enhancement 
								</h4>
								<p className="text-white ">
									Adding some new features into the existing website/app.
								</p>
								<Link to="/contact" className="btn shadow-sm rounded btn-lg btn-light">
									Discuss a Project
									<FaArrowRight className="ml-2" />
								</Link>
							</div>
						</div>
					</div>
				</div>


				<div className="prop">
					<div className="container">
						<div className="row mt-5">
							<div className="col-md-6 mb-3">
								<StaticImage quality="99" placeholder="tracedSVG" src="../../assets/images/discussing-mobile-app.jpg" className="img-fluid  rounded-lg shadow-sm mb-md-4" />
							</div>
							<div className="col-md-6  mb-3" >
								<StaticImage quality="99" placeholder="tracedSVG" src="../../assets/images/choosing-icons-mobile-app.jpg" className="img-fluid rounded-lg shadow-sm  mb-md-4" />
							</div>
						</div>
					</div>
				</div>

			</div>

		</Layout>
	)
}
