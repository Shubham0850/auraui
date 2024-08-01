import React from 'react'

function Hero9() {
	return (
		<section>
			<header class="bg-[#FFE942]">
				<div class="px-4 mx-auto sm:px-6 lg:px-8 xl:px-12">
					<div class="flex items-center justify-between h-16 lg:h-[72px]">
						<div class="flex items-center flex-shrink-0">
							<a href="#" title="" class="inline-flex">
								<span class="sr-only"> Rareblocks logo </span>
								<img class="w-auto h-8" src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/logo.svg" alt="" />
							</a>
						</div>

						<div class="hidden lg:flex lg:justify-center lg:ml-16 lg:space-x-8 xl:space-x-14">
							<a href="#" title="" class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none hover:text-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"> All Artworks </a>

							<a href="#" title="" class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none hover:text-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"> All Artists </a>

							<a href="#" title="" class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none hover:text-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"> Sell Your Artwork </a>
						</div>

						<div class="flex items-center justify-end ml-auto">
							<div class="hidden lg:flex lg:items-center lg:space-x-8">
								<a href="#" title="" class="text-base font-medium text-gray-900 transition-all duration-200 rounded hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"> Create Free Account </a>

								<a href="#" title="" class="text-base font-medium text-gray-900 transition-all duration-200 rounded hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"> Login </a>
							</div>

							<div class="flex items-center justify-end space-x-5">
								<button type="button" class="p-2 -m-2 text-gray-900 transition-all duration-200 lg:hidden hover:text-gray-700">
									<svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
									</svg>
								</button>

								<button type="button" class="relative p-2 -m-2 text-gray-900 transition-all duration-200 hover:text-gray-700">
									<svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
									</svg>

									<span class="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-indigo-600 rounded-full"> 3 </span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</header>

			<div class="relative py-12 bg-[#FFE942] overflow-hidden sm:py-16 lg:py-20">
				<div class="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
					<div class="max-w-6xl mx-auto">
						<div class="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-16 xl:gap-x-24">
							<div class="max-w-lg mx-auto text-center lg:max-w-none lg:mx-0 lg:order-2 lg:text-left">
								<p class="text-base font-medium text-gray-600">The only book you’ll need to earn more</p>
								<h1 class="mt-5 text-3xl font-bold text-gray-900 lg:mt-8 sm:text-4xl xl:text-5xl xl:leading-tight">Learn to earn more money💰without loosing time.</h1>

								<div class="mt-10 lg:mt-14">
									<p class="text-base font-bold text-gray-900">Get your free chapter now</p>

									<form action="#" class="mt-4 lg:mt-5">
										<div>
											<input
												type="email"
												name=""
												id=""
												placeholder="Your email where we’ll send the book"
												class="block w-full px-4 py-3 text-base font-normal leading-7 text-gray-900 placeholder-gray-500 bg-white border border-white rounded-md focus:ring-gray-900 focus:border-gray-900"
											/>
										</div>

										<div class="mt-3">
											<button
												type="submit"
												class="
                                            inline-flex
                                            w-full
                                            lg:w-auto
                                            items-center
                                            justify-center
                                            px-6
                                            py-3
                                            text-base
                                            font-bold
                                            leading-7
                                            text-white
                                            transition-all
                                            duration-200
                                            bg-gray-900
                                            border border-transparent
                                            rounded-md
                                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
                                            hover:bg-gray-600
                                            focus:ring-offset-[#FFE942]
                                        "
											>
												Send My Free Chapter
											</button>
										</div>
									</form>
								</div>
							</div>

							<div class="relative lg:order-1">
								<div class="absolute -inset-24">
									<img class="w-full h-full" src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/hero/3/text-pattern.png" alt="" />
								</div>

								<div class="relative">
									<img class="w-full max-w-xs mx-auto xl:max-w-sm" src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/hero/3/book-cover.png" alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero9