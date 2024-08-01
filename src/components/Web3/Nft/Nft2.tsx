import React from 'react'

function Nft2() {
	return (
		<div class="bg-gray-900">
    <header class="py-4 sm:py-6" x-data="{expanded: false}">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <nav class="flex items-center justify-between">
                <div class="shrink-0">
                    <a href="#" title="" class="flex items-center">
                        <img class="w-auto h-8" src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/logo-alt.svg" alt="" />
                    </a>
                </div>

                <div class="flex md:hidden">
                    <button
                        type="button"
                        class="p-1 text-gray-200 transition-all duration-200 bg-transparent rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-gray-900 focus:ring-offset-2"
                        @click="expanded = !expanded"
                        :aria-expanded="expanded"
                    >
                        <span x-show="!expanded" aria-hidden="true">
                            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </span>

                        <span x-show="expanded" aria-hidden="true">
                            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </span>
                    </button>
                </div>

                <div class="hidden md:flex md:items-center md:justify-end md:space-x-12">
                    <a href="#" title="" class="text-base font-medium text-gray-300 transition-all duration-200 hover:white"> About </a>

                    <a href="#" title="" class="text-base font-medium text-gray-300 transition-all duration-200 hover:white"> Our NFTs </a>
                </div>
            </nav>

            <nav x-show="expanded" x-collapse>
                <div class="px-1 py-5">
                    <div class="grid gap-y-6">
                        <a href="#" title="" class="text-base font-medium text-gray-300 transition-all duration-200 hover:text-white"> About </a>

                        <a href="#" title="" class="text-base font-medium text-gray-300 transition-all duration-200 hover:text-white"> Our NFTs </a>
                    </div>
                </div>
            </nav>
        </div>
    </header>

    <section class="py-12 sm:py-16 lg:pb-20">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="grid items-center max-w-6xl grid-cols-1 mx-auto lg:grid-cols-5 lg:gap-x-4 xl:gap-x-24 gap-y-12">
                <div class="lg:col-span-3">
                    <div class="max-w-lg">
                        <h1 class="text-2xl font-bold text-white sm:text-3xl">A collection of daily NFTs-unique digital collectibles living on the Ethereum blockchain will be available.</h1>
                        <div class="flex items-center mt-7">
                            <img class="object-cover w-5 h-5 rounded-full shrink-0" src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/hero-coming-soon/4/avatar.png" alt="" />
                            <p class="flex-1 ml-3 text-base font-medium text-gray-400">Made by <span class="text-white">Danny Postma</span></p>
                        </div>

                        <p class="mt-12 text-base font-bold text-white">Join the email list to:</p>
                        <ul class="mt-4 space-y-3">
                            <li class="flex items-center space-x-3">
                                <span class="text-sm shrink-0"> 💸 </span>
                                <span class="flex-1 text-sm font-medium text-white"> Claim 15% launch discount on release </span>
                            </li>

                            <li class="flex items-center space-x-3">
                                <span class="text-sm shrink-0"> 🎁 </span>
                                <span class="flex-1 text-sm font-medium text-white"> Surprised gift upon every single purchases </span>
                            </li>

                            <li class="flex items-center space-x-3">
                                <span class="text-sm shrink-0"> ⌛️ </span>
                                <span class="flex-1 text-sm font-medium text-white"> Special discounts on every new ape </span>
                            </li>
                        </ul>

                        <form action="#" method="POST" class="max-w-md mt-14">
                            <div class="space-y-6">
                                <div class="grid grid-cols-1 gap-6 sm:grid-cols-5">
                                    <div class="sm:col-span-2">
                                        <label for="" class="sr-only"> First Name </label>
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            class="block w-full px-0 py-2 text-base font-medium text-white placeholder-gray-500 bg-transparent border-t-0 border-b border-l-0 border-r-0 border-gray-700 rounded-none focus:border-white focus:outline-none focus:ring-0"
                                            placeholder="First Name"
                                        />
                                    </div>

                                    <div class="sm:col-span-3">
                                        <label for="" class="sr-only"> Email Address </label>
                                        <input
                                            type="email"
                                            name=""
                                            id=""
                                            class="block w-full px-0 py-2 text-base font-medium text-white placeholder-gray-500 bg-transparent border-t-0 border-b border-l-0 border-r-0 border-gray-700 rounded-none focus:border-white focus:outline-none focus:ring-0"
                                            placeholder="Email Address"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="button"
                                        class="inline-flex items-center justify-center w-full px-6 py-4 text-xs font-bold tracking-widest text-gray-900 uppercase transition-all duration-200 bg-white border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-gray-900 hover:bg-gray-100"
                                    >
                                        Join Waiting list
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="lg:col-span-2">
                    <div class="grid grid-cols-3 gap-8 md:max-w-md lg:max-w-none">
                        <div>
                            <img class="object-cover w-full h-full rounded-lg" src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/hero-coming-soon/4/image-1.png" alt="" />
                        </div>

                        <div>
                            <img class="object-cover w-full h-full rounded-lg" src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/hero-coming-soon/4/image-2.png" alt="" />
                        </div>

                        <div>
                            <img class="object-cover w-full h-full rounded-lg" src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/hero-coming-soon/4/image-3.png" alt="" />
                        </div>

                        <div>
                            <img class="object-cover w-full h-full rounded-lg" src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/hero-coming-soon/4/image-4.png" alt="" />
                        </div>

                        <div>
                            <img class="object-cover w-full h-full rounded-lg" src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/hero-coming-soon/4/image-5.png" alt="" />
                        </div>

                        <div>
                            <img class="object-cover w-full h-full rounded-lg" src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/hero-coming-soon/4/image-6.png" alt="" />
                        </div>

                        <div>
                            <img class="object-cover w-full h-full rounded-lg" src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/hero-coming-soon/4/image-7.png" alt="" />
                        </div>

                        <div>
                            <img class="object-cover w-full h-full rounded-lg" src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/hero-coming-soon/4/image-8.png" alt="" />
                        </div>

                        <div>
                            <img class="object-cover w-full h-full rounded-lg" src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/hero-coming-soon/4/image-9.png" alt="" />
                        </div>

                        <div>
                            <img class="object-cover w-full h-full rounded-lg" src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/hero-coming-soon/4/image-10.png" alt="" />
                        </div>

                        <div class="bg-gray-700 rounded-lg"></div>

                        <div class="bg-gray-800 rounded-lg"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>

	)
}

export default Nft2