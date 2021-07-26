import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

export default function Privacy() {
	return (
		<div>
			<Layout>
				<Seo title="Privacy Policy | LYB TEchnologies" />
				<div class="privacy">
					<div class="container bg-white shadow rounded-lg  page-white mb-5 mt-3">
						<div class="row">
							<div class="col-lg-11 col-xl-10 mx-auto">
								<div class="inner py-5 mt-4">
									<h1 class="display-4 font-weight-bolder text-center">
										Privacy Policy
									</h1>
								</div>
								<article class="mb-5">
									<p>
									LYB Technology truly appreciates your privacy. The manner data is briefly provided in the Privacy Policy, which is collected and then utilized by LYB Technology It is suggested that you read the privacy policy carefully. By utilizing the services being offered by LYB Technology or our website www.lybtechnology.com you give your permission to collect and utilize you data to us in the manner it is offered in the Privacy Policy.
									</p>
									<p>
									LYB Technology has been honored with the prestigious Privacy Seal signifying Trustee’s. This holds importance when it has to review and compliance the privacy policies and practices under Trustee’s program. These requirements include various aspects like accountability, transparency as well as option for collection and usage of the personal information.

This excludes the information, which is furbished through the software that is downloaded. This is a mission, which is independent of third party. It aims at developing trust among consumers for online platforms. It works all across the world with its trustworthy trademark for the policy as well as practices related to the privacy. You can contact us at info@lybtechnology.com. In case you are not satisfied with the response which we offer you, you can reach out to Trustee for the same.
									</p>
									
									<div className="my-5"></div>

									<h2 className="title font-weight-bolder text-dark h1 mb-4">
									We Make Sure That

									</h2>
									<ul className="list-group">
										<li className="list-group-item">
											You do not feel any issues which using our website.
										</li>
										<li className="list-group-item">
										You feel safe while you are submitting any information of your with us.
										</li>
										<li className="list-group-item">
										You can feel free to reach for any queries or concerns regarding the privacy.
										</li>
									</ul>
									
									<h2 className="title mt-5 font-weight-bolder text-dark h1 mb-4">
									What Type Of Information Is Likely To Be Gathered From You?

									</h2>

									<ul className="list-group">
										<li className="list-group-item">
										We have a system to gather and get some specific anonymous information, which is standard usage log via the web servers. This might include the information based on computer identification that can be gathered from cookies that is again sent via browser, which the user is using.
										</li>
										<li className="list-group-item">
										Cookies stored on the hard drive
										</li>
										<li className="list-group-item">
										The IP address of the computer you are using.
										</li>
										<li className="list-group-item">
										Domain server through which you are utilizing our services.
										</li>
									</ul>


								</article>
								<div class="alert alert-primary mb-5 rounded-sm border-light ">
									<p className="h4" ><strong>How we’re working during lockdown?</strong></p>
									<p class="lead text-white mb-0">
										While we continue to follow government guidelines around Covid-19 by working
										remotely, we cannot receive communications by post. We’re also unable to search for
										or erase any hard copies of your personal records, though we have a limited amount
										of these. Thank you for your understanding.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		</div>
	)
}
