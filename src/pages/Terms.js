import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import termsImg from '../assets/images/terms.svg'
export default function Terms() {
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
										Terms &amp; Conditions
									</h1>
								</div>
								<article class="mb-5">
									<picture className="mb-3 d-flex col-md-6 col-11 mx-auto ">
										<img src={termsImg} alt="terms" className="img-fluid" />
									</picture>
									<h2 className="title font-weight-bolder text-dark h1 mb-4">
										Introduction

									</h2>
									<p className="lead mb-4">
										Here is a mention of the legal agreement which is between you as well as the LYB Technology You are requested to go through the “Terms of Use"? before you start using the website. In case you are using, accessing or browsing the website, you acknowledge that you have agreed, understood and read the terms and conditions. Along with that, we make sure that you have agreed to the bound by these terms and applicable laws as well as regulations. In case you hold any objection to any of these terms and conditions please do not use the website.

									</p>
									<p className="lead mb-">
										LYB Technology holds the rights to change or alter the terms and condition without offering you any prior notice. The update might also include the changes in the Terms of Use or in any other information in that case.

									</p>

<hr className="mb-4 mt-5" />

									<h2 className="title font-weight-bolder text-dark h1 mb-4">
										General
									</h2>

									<p className="lead mb-5">
										The website along with the content which is there might be copied, republished, posted, distributed, used for creation of some of related works, reproduced, uploaded, or even transmitted without getting any consent from LYB Technology in written form.
										In case you fail to follow the terms, conditions as well as the notices on the website, this might lead to the termination of the rights give to you automatically, even without informing you. In that case, you should destroy all the copies of the downloaded material belonging to you. LYB Technology will not ensure whether or not the expressed rights or license are the trademark or proprietary of any other organization. Also, you cannot copy the content from this website to another website or any document which is to be produced or published in public domain.
									</p>
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
