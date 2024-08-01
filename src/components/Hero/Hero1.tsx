import React from 'react'

function Hero1() {
	return (
		<div className="">
			<header className="py-4 bg-white sm:py-5" x-data="{expanded: false}">
				<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
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

						<div className="hidden md:items-center md:justify-start md:ml-16 md:mr-auto md:space-x-10 md:flex">
							<a href="#" title="" className="text-base font-medium text-gray-900 transition-all duration-200 hover:text-indigo-600"> Features </a>

							<a href="#" title="" className="text-base font-medium text-gray-900 transition-all duration-200 hover:text-indigo-600"> Pricing </a>

							<a href="#" title="" className="text-base font-medium text-gray-900 transition-all duration-200 hover:text-indigo-600"> Support </a>
						</div>

						<div className="hidden md:block">
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
								<a href="#" title="" className="flex items-center text-base font-medium text-gray-900 transition-all duration-200 focus:outline-none focus:ring-0"> Features </a>

								<a href="#" title="" className="flex items-center text-base font-medium text-gray-900 transition-all duration-200 focus:outline-none focus:ring-0"> Pricing </a>

								<a href="#" title="" className="flex items-center text-base font-medium text-gray-900 transition-all duration-200 focus:outline-none focus:ring-0"> Support </a>

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

			<section className="relative py-12 bg-white sm:py-16 lg:py-20">
				<div className="absolute inset-0">
					<img className="object-cover w-full h-full" src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/5/grid-pattern.png" alt="" />
				</div>

				<div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
					<div className="max-w-xl mx-auto text-center">
						<h1 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">Helping developers to get their dream job</h1>
						<p className="max-w-md mx-auto mt-6 text-base font-normal leading-7 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.</p>

						<form action="#" method="POST" className="max-w-md mx-auto mt-8 space-y-4 sm:space-x-4 sm:flex sm:space-y-0 sm:items-end">
							<div className="flex-1">
								<label htmlFor="" className="sr-only"> Email address </label>
								<div>
									<input type="email" name="" id="" className="block w-full px-4 py-3 sm:py-3.5 text-base font-medium text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg sm:text-sm focus:ring-gray-900 focus:border-gray-900" placeholder="Email address" />
								</div>
							</div>

							<div className="relative group">
								<div className="absolute transitiona-all duration-1000 opacity-70 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>

								<button
									type="button"
									className="inline-flex relative items-center justify-center w-full sm:w-auto px-8 py-3 sm:text-sm text-base sm:py-3.5 font-semibold text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
								>
									Join Now
								</button>
							</div>
						</form>

						<ul className="flex items-center justify-center mt-6 space-x-6 sm:space-x-8">
							<li className="flex items-center">
								<svg className="w-5 h-5 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
									<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
								</svg>
								<span className="text-xs font-medium text-gray-900 sm:text-sm"> Weekly new articles </span>
							</li>

							<li className="flex items-center">
								<svg className="w-5 h-5 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
									<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
								</svg>
								<span className="text-xs font-medium text-gray-900 sm:text-sm"> Join other 1600+ Devs </span>
							</li>
						</ul>
					</div>
				</div>

				<div className="flex w-full gap-6 pb-8 mt-12 overflow-x-auto sm:mt-16 lg:mt-20 snap-x">
					<div className="relative snap-center scroll-ml-6 shrink-0 first:pl-6 last:pr-6">
						<div className="overflow-hidden w-[300px] lg:w-[420px] transition-all duration-200 transform bg-white border border-gray-200 rounded-2xl hover:shadow-lg hover:-translate-y-1">
							<div className="px-4 py-5 sm:p-5">
								<div className="flex items-start lg:items-center">
									<a href="#" title="" className="shrink-0">
										<img className="lg:h-24 w-14 h-14 lg:w-24 rounded-xl object-cvoer" src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/5/thumbnail-1.png" alt="" />
									</a>

									<div className="flex-1 ml-4 lg:ml-6">
										<p className="text-xs font-medium text-gray-900 lg:text-sm">
											<a href="#" title="" className=""> Growth </a>
										</p>
										<p className="mt-2 text-sm font-bold text-gray-900 lg:text-lg group-hover:text-gray-600">
											<a href="#" title="" className=""> How a visual artist redefines success in graphic design </a>
										</p>
										<p className="mt-2 text-xs font-medium text-gray-500 lg:text-sm">April 09, 2022</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="relative snap-center scroll-ml-6 shrink-0 first:pl-6 last:pr-6">
						<div className="overflow-hidden w-[300px] lg:w-[420px] transition-all duration-200 transform bg-white border border-gray-200 rounded-2xl hover:shadow-lg hover:-translate-y-1">
							<div className="px-4 py-5 sm:p-5">
								<div className="flex items-start lg:items-center">
									<a href="#" title="" className="shrink-0">
										<img className="lg:h-24 w-14 h-14 lg:w-24 rounded-xl object-cvoer" src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/5/thumbnail-2.png" alt="" />
									</a>

									<div className="flex-1 ml-4 lg:ml-6">
										<p className="text-xs font-medium text-gray-900 lg:text-sm">
											<a href="#" title="" className=""> Growth </a>
										</p>
										<p className="mt-2 text-sm font-bold text-gray-900 lg:text-lg group-hover:text-gray-600">
											<a href="#" title="" className=""> How a visual artist redefines success in graphic design </a>
										</p>
										<p className="mt-2 text-xs font-medium text-gray-500 lg:text-sm">April 09, 2022</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="relative snap-center scroll-ml-6 shrink-0 first:pl-6 last:pr-6">
						<div className="overflow-hidden w-[300px] lg:w-[420px] transition-all duration-200 transform bg-white border border-gray-200 rounded-2xl hover:shadow-lg hover:-translate-y-1">
							<div className="px-4 py-5 sm:p-5">
								<div className="flex items-start lg:items-center">
									<a href="#" title="" className="shrink-0">
										<img className="lg:h-24 w-14 h-14 lg:w-24 rounded-xl object-cvoer" src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/5/thumbnail-3.png" alt="" />
									</a>

									<div className="flex-1 ml-4 lg:ml-6">
										<p className="text-xs font-medium text-gray-900 lg:text-sm">
											<a href="#" title="" className=""> Growth </a>
										</p>
										<p className="mt-2 text-sm font-bold text-gray-900 lg:text-lg group-hover:text-gray-600">
											<a href="#" title="" className=""> How a visual artist redefines success in graphic design </a>
										</p>
										<p className="mt-2 text-xs font-medium text-gray-500 lg:text-sm">April 09, 2022</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="relative snap-center scroll-ml-6 shrink-0 first:pl-6 last:pr-6">
						<div className="overflow-hidden w-[300px] lg:w-[420px] transition-all duration-200 transform bg-white border border-gray-200 rounded-2xl hover:shadow-lg hover:-translate-y-1">
							<div className="px-4 py-5 sm:p-5">
								<div className="flex items-start lg:items-center">
									<a href="#" title="" className="shrink-0">
										<img className="lg:h-24 w-14 h-14 lg:w-24 rounded-xl object-cvoer" src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/5/thumbnail-4.png" alt="" />
									</a>

									<div className="flex-1 ml-4 lg:ml-6">
										<p className="text-xs font-medium text-gray-900 lg:text-sm">
											<a href="#" title="" className=""> Growth </a>
										</p>
										<p className="mt-2 text-sm font-bold text-gray-900 lg:text-lg group-hover:text-gray-600">
											<a href="#" title="" className=""> How a visual artist redefines success in graphic design </a>
										</p>
										<p className="mt-2 text-xs font-medium text-gray-500 lg:text-sm">April 09, 2022</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="relative snap-center scroll-ml-6 shrink-0 first:pl-6 last:pr-6">
						<div className="overflow-hidden w-[300px] lg:w-[420px] transition-all duration-200 transform bg-white border border-gray-200 rounded-2xl hover:shadow-lg hover:-translate-y-1">
							<div className="px-4 py-5 sm:p-5">
								<div className="flex items-start lg:items-center">
									<a href="#" title="" className="shrink-0">
										<img className="lg:h-24 w-14 h-14 lg:w-24 rounded-xl object-cvoer" src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/5/thumbnail-5.png" alt="" />
									</a>

									<div className="flex-1 ml-4 lg:ml-6">
										<p className="text-xs font-medium text-gray-900 lg:text-sm">
											<a href="#" title="" className=""> Growth </a>
										</p>
										<p className="mt-2 text-sm font-bold text-gray-900 lg:text-lg group-hover:text-gray-600">
											<a href="#" title="" className=""> How a visual artist redefines success in graphic design </a>
										</p>
										<p className="mt-2 text-xs font-medium text-gray-500 lg:text-sm">April 09, 2022</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div >
	)
}

export default Hero1