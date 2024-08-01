import React from 'react'

function Hero4() {
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

					<nav class="hidden ml-10 mr-auto space-x-10 lg:ml-20 lg:space-x-12 md:flex md:items-center md:justify-start">
						<a href="#" title="" class="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Products </a>

						<a href="#" title="" class="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Features </a>

						<a href="#" title="" class="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Pricing </a>

						<a href="#" title="" class="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Support </a>
					</nav>

					<div class="relative hidden md:items-center md:justify-center md:inline-flex group">
						<div class="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
						<a href="#" title="" class="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full" role="button"> Start free trial </a>
					</div>
				</div>

				<nav x-show="expanded" x-collapse>
					<div class="flex flex-col pt-8 pb-4 space-y-6">
						<a href="#" title="" class="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Products </a>

						<a href="#" title="" class="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Features </a>

						<a href="#" title="" class="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Pricing </a>

						<a href="#" title="" class="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Support </a>

						<div class="relative inline-flex items-center justify-center group">
							<div class="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
							<a href="#" title="" class="relative inline-flex items-center justify-center w-full px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full" role="button"> Start free trial </a>
						</div>
					</div>
				</nav>
		</div>
    </header >

		<section class="relative py-12 overflow-hidden bg-black sm:pb-16 lg:pb-20 xl:pb-24">
			<div class="px-4 mx-auto relativea sm:px-6 lg:px-8 max-w-7xl">
				<div class="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-16">
					<div>
						<h1 class="text-4xl font-normal text-white sm:text-5xl lg:text-6xl xl:text-7xl">Connecting Devs with Employers</h1>
						<p class="mt-4 text-lg font-normal text-gray-400 sm:mt-8">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.</p>

						<form action="#" method="POST" class="relative mt-8 rounded-full sm:mt-12">
							<div class="relative">
								<div class="absolute rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500"></div>
								<div class="relative">
									<div class="absolute inset-y-0 left-0 flex items-center pl-6">
										<svg class="w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
											<path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
										</svg>
									</div>
									<input type="email" name="" id="" placeholder="Try Java Developer, React Dev etc." class="block w-full py-4 pr-6 text-white placeholder-gray-500 bg-black border border-transparent rounded-full pl-14 sm:py-5 focus:border-transparent focus:ring-0" />
								</div>
							</div>
							<div class="sm:absolute flex sm:right-1.5 sm:inset-y-1.5 mt-4 sm:mt-0">
								<button type="submit" class="inline-flex items-center justify-center w-full px-5 py-5 text-sm font-semibold tracking-widest text-black uppercase transition-all duration-200 bg-white rounded-full sm:w-auto sm:py-3 hover:opacity-90">Find A Developer</button>
							</div>
						</form>

						<div class="mt-8 sm:mt-12">
							<p class="text-lg font-normal text-white">Trusted by 50k+ users</p>

							<div class="flex items-center mt-3">
								<div class="flex">
									<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M10.8586 4.71248C11.2178 3.60691 12.7819 3.60691 13.1412 4.71248L14.4246 8.66264C14.5853 9.15706 15.046 9.49182 15.5659 9.49182H19.7193C20.8818 9.49182 21.3651 10.9794 20.4247 11.6626L17.0645 14.104C16.6439 14.4095 16.4679 14.9512 16.6286 15.4456L17.912 19.3958C18.2713 20.5013 17.0059 21.4207 16.0654 20.7374L12.7052 18.2961C12.2846 17.9905 11.7151 17.9905 11.2945 18.2961L7.93434 20.7374C6.99388 21.4207 5.72851 20.5013 6.08773 19.3958L7.37121 15.4456C7.53186 14.9512 7.35587 14.4095 6.93529 14.104L3.57508 11.6626C2.63463 10.9794 3.11796 9.49182 4.28043 9.49182H8.43387C8.95374 9.49182 9.41448 9.15706 9.57513 8.66264L10.8586 4.71248Z"
											fill="url(#b)"
										/>
										<defs>
											<linearGradient id="b" x1="3.07813" y1="3.8833" x2="23.0483" y2="6.90161" gradientUnits="userSpaceOnUse">
												<stop offset="0%" style="stop-color: var(--color-cyan-500)" />
												<stop offset="100%" style="stop-color: var(--color-purple-500)" />
											</linearGradient>
										</defs>
									</svg>
									<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M10.8586 4.71248C11.2178 3.60691 12.7819 3.60691 13.1412 4.71248L14.4246 8.66264C14.5853 9.15706 15.046 9.49182 15.5659 9.49182H19.7193C20.8818 9.49182 21.3651 10.9794 20.4247 11.6626L17.0645 14.104C16.6439 14.4095 16.4679 14.9512 16.6286 15.4456L17.912 19.3958C18.2713 20.5013 17.0059 21.4207 16.0654 20.7374L12.7052 18.2961C12.2846 17.9905 11.7151 17.9905 11.2945 18.2961L7.93434 20.7374C6.99388 21.4207 5.72851 20.5013 6.08773 19.3958L7.37121 15.4456C7.53186 14.9512 7.35587 14.4095 6.93529 14.104L3.57508 11.6626C2.63463 10.9794 3.11796 9.49182 4.28043 9.49182H8.43387C8.95374 9.49182 9.41448 9.15706 9.57513 8.66264L10.8586 4.71248Z"
											fill="url(#b)"
										/>
										<defs>
											<linearGradient id="b" x1="3.07813" y1="3.8833" x2="23.0483" y2="6.90161" gradientUnits="userSpaceOnUse">
												<stop offset="0%" style="stop-color: var(--color-cyan-500)" />
												<stop offset="100%" style="stop-color: var(--color-purple-500)" />
											</linearGradient>
										</defs>
									</svg>
									<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M10.8586 4.71248C11.2178 3.60691 12.7819 3.60691 13.1412 4.71248L14.4246 8.66264C14.5853 9.15706 15.046 9.49182 15.5659 9.49182H19.7193C20.8818 9.49182 21.3651 10.9794 20.4247 11.6626L17.0645 14.104C16.6439 14.4095 16.4679 14.9512 16.6286 15.4456L17.912 19.3958C18.2713 20.5013 17.0059 21.4207 16.0654 20.7374L12.7052 18.2961C12.2846 17.9905 11.7151 17.9905 11.2945 18.2961L7.93434 20.7374C6.99388 21.4207 5.72851 20.5013 6.08773 19.3958L7.37121 15.4456C7.53186 14.9512 7.35587 14.4095 6.93529 14.104L3.57508 11.6626C2.63463 10.9794 3.11796 9.49182 4.28043 9.49182H8.43387C8.95374 9.49182 9.41448 9.15706 9.57513 8.66264L10.8586 4.71248Z"
											fill="url(#b)"
										/>
										<defs>
											<linearGradient id="b" x1="3.07813" y1="3.8833" x2="23.0483" y2="6.90161" gradientUnits="userSpaceOnUse">
												<stop offset="0%" style="stop-color: var(--color-cyan-500)" />
												<stop offset="100%" style="stop-color: var(--color-purple-500)" />
											</linearGradient>
										</defs>
									</svg>
									<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M10.8586 4.71248C11.2178 3.60691 12.7819 3.60691 13.1412 4.71248L14.4246 8.66264C14.5853 9.15706 15.046 9.49182 15.5659 9.49182H19.7193C20.8818 9.49182 21.3651 10.9794 20.4247 11.6626L17.0645 14.104C16.6439 14.4095 16.4679 14.9512 16.6286 15.4456L17.912 19.3958C18.2713 20.5013 17.0059 21.4207 16.0654 20.7374L12.7052 18.2961C12.2846 17.9905 11.7151 17.9905 11.2945 18.2961L7.93434 20.7374C6.99388 21.4207 5.72851 20.5013 6.08773 19.3958L7.37121 15.4456C7.53186 14.9512 7.35587 14.4095 6.93529 14.104L3.57508 11.6626C2.63463 10.9794 3.11796 9.49182 4.28043 9.49182H8.43387C8.95374 9.49182 9.41448 9.15706 9.57513 8.66264L10.8586 4.71248Z"
											fill="url(#b)"
										/>
										<defs>
											<linearGradient id="b" x1="3.07813" y1="3.8833" x2="23.0483" y2="6.90161" gradientUnits="userSpaceOnUse">
												<stop offset="0%" style="stop-color: var(--color-cyan-500)" />
												<stop offset="100%" style="stop-color: var(--color-purple-500)" />
											</linearGradient>
										</defs>
									</svg>
									<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M10.8586 4.71248C11.2178 3.60691 12.7819 3.60691 13.1412 4.71248L14.4246 8.66264C14.5853 9.15706 15.046 9.49182 15.5659 9.49182H19.7193C20.8818 9.49182 21.3651 10.9794 20.4247 11.6626L17.0645 14.104C16.6439 14.4095 16.4679 14.9512 16.6286 15.4456L17.912 19.3958C18.2713 20.5013 17.0059 21.4207 16.0654 20.7374L12.7052 18.2961C12.2846 17.9905 11.7151 17.9905 11.2945 18.2961L7.93434 20.7374C6.99388 21.4207 5.72851 20.5013 6.08773 19.3958L7.37121 15.4456C7.53186 14.9512 7.35587 14.4095 6.93529 14.104L3.57508 11.6626C2.63463 10.9794 3.11796 9.49182 4.28043 9.49182H8.43387C8.95374 9.49182 9.41448 9.15706 9.57513 8.66264L10.8586 4.71248Z"
											fill="url(#b)"
										/>
										<defs>
											<linearGradient id="b" x1="3.07813" y1="3.8833" x2="23.0483" y2="6.90161" gradientUnits="userSpaceOnUse">
												<stop offset="0%" style="stop-color: var(--color-cyan-500)" />
												<stop offset="100%" style="stop-color: var(--color-purple-500)" />
											</linearGradient>
										</defs>
									</svg>
								</div>
								<span class="ml-2 text-base font-normal text-white"> 4.1/5 </span>
								<span class="ml-1 text-base font-normal text-gray-500"> (14k Reviews) </span>
							</div>
						</div>
					</div>

					<div class="relative">
						<div class="absolute inset-0">
							<svg class="blur-3xl filter opacity-70" style="filter: blur(64px)" width="444" height="536" viewBox="0 0 444 536" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M225.919 112.719C343.98 64.6648 389.388 -70.487 437.442 47.574C485.496 165.635 253.266 481.381 135.205 529.435C17.1445 577.488 57.9596 339.654 9.9057 221.593C-38.1482 103.532 107.858 160.773 225.919 112.719Z" fill="url(#c)" />
								<defs>
									<linearGradient id="c" x1="82.7339" y1="550.792" x2="-39.945" y2="118.965" gradientUnits="userSpaceOnUse">
										<stop offset="0%" style="stop-color: var(--color-cyan-500)" />
										<stop offset="100%" style="stop-color: var(--color-purple-500)" />
									</linearGradient>
								</defs>
							</svg>
						</div>

						<div class="absolute inset-0">
							<img class="object-cover w-full h-full opacity-50" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png" alt="" />
						</div>

						<img class="relative w-full max-w-md mx-auto" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/hero/2/illustration.png" alt="" />
					</div>
				</div>
			</div>
		</section>
</div >
	)
}

export default Hero4