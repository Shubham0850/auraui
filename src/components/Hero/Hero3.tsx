import React from 'react'

function Hero3() {
	return (
		<div>
			<header className="py-4 bg-white sm:py-5" x-data="{expanded: false}">
				<div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
					<div className="flex items-center justify-between">
						<div className="shrink-0">
							<a href="#" title="" className="">
								<img className="w-auto h-8" src="https://landingfoliocom.imgix.net/store/collection/saasui/images/logo.svg" alt="" />
							</a>
						</div>

						<div className="hidden lg:flex lg:items-center lg:space-x-4 lg:ml-12">
							<a href="#" title="" className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-300">
								Products
							</a>

							<a href="#" title="" className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-300">
								Features
							</a>

							<a href="#" title="" className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-300">
								Pricing
							</a>

							<a href="#" title="" className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-300">
								Support
							</a>
						</div>

						<div className="hidden sm:flex sm:items-center sm:justify-end sm:space-x-4 sm:ml-auto">
							<a
								href="#"
								title=""
								className="inline-flex items-center justify-center px-6 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-gray-900 rounded-full hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-900"
								role="button"
							>
								Start free trial
							</a>
						</div>

						<div className="flex ml-4 lg:hidden">
							<button
								type="button"
								className="inline-flex items-center p-2.5 text-gray-900 duration-200 border border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transiton-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 focus:bg-gray-900 focus:text-white"
							>
								<span x-show="!expanded" aria-hidden="true">
									<svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
									</svg>
								</span>

								<span x-show="expanded" aria-hidden="true">
									<svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
									</svg>
								</span>
							</button>
						</div>
					</div>
				</div>
			</header >

			<section className="pb-8 bg-white sm:pb-12 lg:pb-12">
				<div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-40">
					<div className="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
						<div className="lg:mt-16">
							<div className="mx-auto text-center sm:max-w-lg lg:max-w-xl lg:text-left lg:mx-0">
								<h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl xl:text-7xl sm:tracking-tight">Meet the New Landingfolio Kit</h1>
								<p className="mt-6 text-lg leading-7 text-gray-700 lg:leading-8 lg:text-xl">Clarity gives you the blocks & components you need to create a truly professional website, landing page or admin panel for your SaaS.</p>
							</div>

							<div className="flex flex-col items-stretch justify-center gap-4 mt-8 sm:flex-row sm:items-center sm:mt-10 lg:justify-start sm:flex-wrap">
								<a
									href="#"
									title=""
									className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
									role="button"
								>
									Start using LandingFolio
								</a>

								<a
									href="#"
									title=""
									className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-gray-900 transition-all duration-200 border border-gray-300 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
									role="button"
								>
									<svg className="w-6 h-6 mr-3 -ml-1 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
										<path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
										<path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
									Watch 1 min intro
								</a>
							</div>
						</div>
					</div>

					<div className="sm:mx-auto sm:max-w-3xl sm:px-6">
						<div className="py-12 mt-6 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
							<div className="relative pl-10 -mr-40 sm:max-w-3xl lg:max-w-none lg:h-full lg:pl-24">
								<img className="w-full shadow-2xl rounded-xl lg:rounded-2xl ring-[24px] lg:ring-[48px] ring-blue-100 lg:h-full lg:w-auto lg:max-w-none" src="https://landingfoliocom.imgix.net/store/collection/saasui/images/hero/1/dashboard-mockup.svg" alt="" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</div >
	)
}

export default Hero3