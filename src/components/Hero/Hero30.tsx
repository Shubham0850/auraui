import React from 'react'

function Hero30() {
	return (
		<div class="">
			<header class="py-4 bg-black sm:py-6" x-data="{expanded: false}">
				<div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
					<div class="flex items-center justify-between">
						<div class="shrink-0">
							<a href="#" title="" class="flex">
								<img class="w-auto h-9" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/logo.svg" alt="" />
							</a>
						</div>

						<div class="flex md:hidden">
							<button type="button" class="text-white" @click="expanded = !expanded" :aria-expanded="expanded">
							<span x-show="!expanded" aria-hidden="true">
								<svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
								</svg>
							</span>

							<span x-show="expanded" aria-hidden="true">
								<svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
								</svg>
							</span>
						</button>
					</div>

					<nav class="hidden md:flex md:items-center md:justify-end md:space-x-12">
						<a href="#" title="" class="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Products </a>

						<a href="#" title="" class="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Features </a>

						<a href="#" title="" class="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Pricing </a>

						<a href="#" title="" class="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Support </a>
					</nav>
				</div>

				<nav x-show="expanded" x-collapse>
					<div class="flex flex-col pt-8 pb-4 space-y-6">
						<a href="#" title="" class="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Products </a>

						<a href="#" title="" class="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Features </a>

						<a href="#" title="" class="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Pricing </a>

						<a href="#" title="" class="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Support </a>
					</div>
				</nav>
		</div>
    </header >

		<section class="py-12 bg-black sm:pb-16 lg:pb-20 xl:pb-24">
			<div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
				<div class="relative">
					<div class="lg:w-2/3">
						<p class="text-sm font-normal tracking-widest text-gray-300 uppercase">A Hub for Designers, Developers & Marketers</p>
						<h1 class="mt-6 text-4xl font-normal text-white sm:mt-10 sm:text-5xl lg:text-6xl xl:text-8xl"><span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">Unlimited Design</span> Inspiration</h1>
						<p class="max-w-lg mt-4 text-xl font-normal text-gray-400 sm:mt-8">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.</p>
						<div class="relative inline-flex items-center justify-center mt-8 sm:mt-12 group">
							<div class="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
							<a href="#" title="" class="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white bg-black border border-transparent rounded-full" role="button"> Start Exploring Inspiration </a>
						</div>

						<div>
							<div class="inline-flex items-center pt-6 mt-8 border-t border-gray-800 sm:pt-10 sm:mt-14">
								<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg">
									<path d="M13 7.00003H21M21 7.00003V15M21 7.00003L13 15L9 11L3 17" stroke="url(#a)" stroke-linecap="round" stroke-linejoin="round" />
									<defs>
										<linearGradient id="a" x1="3" y1="7.00003" x2="22.2956" y2="12.0274" gradientUnits="userSpaceOnUse">
											<stop offset="0%" style="stop-color: var(--color-cyan-500)" />
											<stop offset="100%" style="stop-color: var(--color-purple-500)" />
										</linearGradient>
									</defs>
								</svg>

								<span class="ml-2 text-base font-normal text-white"> 42 new design inspiration was added last week </span>
							</div>
						</div>
					</div>

					<div class="mt-8 md:absolute md:mt-0 md:top-32 lg:top-0 md:right-0">
						<img class="w-full max-w-xs mx-auto lg:max-w-lg xl:max-w-xl" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/hero/1/3d-illustration.png" alt="" />
					</div>
				</div>
			</div>
		</section>
</div >

	)
}

export default Hero30