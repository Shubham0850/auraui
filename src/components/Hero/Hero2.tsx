import React from 'react'

function Hero2() {
	return (
		<div className="">
			<header className="py-4 bg-white sm:py-5" x-data="{expanded: false}">
				<div className="container px-4 mx-auto sm:px-6 lg:px-8">
					<nav className="flex items-center justify-between">
						<div className="flex shrink-0">
							<a href="#" title="" className="flex">
								<img className="w-auto h-8" src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/logo.svg" alt="" />
							</a>
						</div>

						<div className="flex md:hidden">
							<button type="button" className="text-gray-900">
							<span x-show="!expanded" aria-hidden="true">
								<svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
								</svg>
							</span>

							<span x-show="expanded" aria-hidden="true">
								<svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
								</svg>
							</span>
						</button>
				</div>

				<div className="hidden md:space-x-10 md:items-center md:justify-center md:flex">
					<a href="#" title="" className="text-xs font-bold tracking-widest text-gray-900 uppercase transition-all duration-200 hover:text-indigo-600"> Services </a>

					<a href="#" title="" className="text-xs font-bold tracking-widest text-gray-900 uppercase transition-all duration-200 hover:text-indigo-600"> Latest Collections </a>

					<a href="#" title="" className="text-xs font-bold tracking-widest text-gray-900 uppercase transition-all duration-200 hover:text-indigo-600"> Blog </a>
				</div>

				<div className="hidden md:flex">
					<a
						href="#"
						title=""
						className="inline-flex items-center justify-center px-6 py-2 sm:py-2.5 text-base font-semibold text-white transition-all duration-200 bg-gray-900 rounded-lg sm:text-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
						role="button"
					>
						Join Email List
					</a>
				</div>
			</nav>

			<nav x-show="expanded" x-collapse>
				<div className="px-1 pt-8 pb-4">
					<div className="grid gap-y-6">
						<a href="#" title="" className="flex items-center text-base font-medium text-gray-900 transition-all duration-200 focus:outline-none focus:ring-0"> Services </a>

						<a href="#" title="" className="flex items-center text-base font-medium text-gray-900 transition-all duration-200 focus:outline-none focus:ring-0"> Latest Collections </a>

						<a href="#" title="" className="flex items-center text-base font-medium text-gray-900 transition-all duration-200 focus:outline-none focus:ring-0"> Blog </a>

						<a
							href="#"
							title=""
							className="inline-flex items-center justify-center px-6 py-2 text-base font-semibold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-lg hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
							role="button"
						>
							Join Email List
						</a>
					</div>
				</div>
			</nav>
		</div>
    </header >

		<section className="pt-12 bg-gradient-to-b from-gray-50 via-white to-gray-50">
			<div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
				<div className="grid max-w-md grid-cols-1 mx-auto lg:grid-cols-12 gap-x-6 gap-y-8 lg:max-w-none">
					<div className="self-center lg:col-span-4">
						<h1 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">Hey 👋 I am Brian Jones, writing on NFTs.</h1>
						<p className="mt-5 text-base font-normal leading-7 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus.</p>
						<div className="relative inline-flex mt-9 group">
							<div className="absolute transitiona-all duration-1000 opacity-70 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>

							<a
								href="#"
								title=""
								className="relative inline-flex items-center justify-center px-8 py-3 sm:text-sm sm:py-3.5 text-base font-semibold text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
								role="button"
							>
								Read Exclusive Blog
							</a>
						</div>
					</div>

					<div className="self-end lg:order-last lg:pb-20 lg:col-span-3">
						<p className="text-xs font-bold tracking-widest text-gray-500 uppercase">⚡️ Latest Picks</p>

						<div className="mt-6 space-y-6 lg:space-y-8">
							<div className="relative overflow-hidden">
								<div className="flex items-start lg:items-center">
									<img className="object-cover w-12 h-12 rounded-lg shrink-0" src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/1/thumbnail-1.png" alt="" />
									<p className="ml-5 text-base font-bold leading-6 text-gray-900">
										<a href="#" title="">
											How a visual artist redefines success in graphic design
											<span className="absolute inset-0" aria-hidden="true"></span>
										</a>
									</p>
								</div>
							</div>

							<div className="relative overflow-hidden">
								<div className="flex items-start lg:items-center">
									<img className="object-cover w-12 h-12 rounded-lg shrink-0" src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/1/thumbnail-2.png" alt="" />
									<p className="ml-5 text-base font-bold leading-6 text-gray-900">
										<a href="#" title="">
											How a visual artist redefines success in graphic design
											<span className="absolute inset-0" aria-hidden="true"></span>
										</a>
									</p>
								</div>
							</div>

							<div className="relative overflow-hidden">
								<div className="flex items-start lg:items-center">
									<img className="object-cover w-12 h-12 rounded-lg shrink-0" src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/1/thumbnail-3.png" alt="" />
									<p className="ml-5 text-base font-bold leading-6 text-gray-900">
										<a href="#" title="">
											How a visual artist redefines success in graphic design
											<span className="absolute inset-0" aria-hidden="true"></span>
										</a>
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="self-end lg:col-span-5">
						<img className="w-full mx-auto" src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/1/author.png" alt="" />
					</div>
				</div>
			</div>
		</section>
</div >
	)
}

export default Hero2