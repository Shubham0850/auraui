import React from 'react'

function Nft3() {
	return (
		<div class="relative bg-indigo-600">
    <div class="absolute inset-0 hidden md:block">
        <img class="object-cover w-full h-full" src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/hero-coming-soon/3/image-background.png" alt="" />
    </div>

    <header class="relative py-4 sm:py-6" x-data="{expanded: false}">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <nav class="flex items-center justify-between">
                <div class="shrink-0">
                    <a href="#" title="" class="flex items-center">
                        <img class="w-auto h-8" src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/logo-alt.svg" alt="" />
                    </a>
                </div>

                <div class="flex md:hidden">
                    <button type="button" class="p-1 text-white transition-all duration-200 bg-transparent rounded-md hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-800 focus:ring-offset-indigo-600 focus:ring-offset-2" @click="expanded = !expanded" :aria-expanded="expanded">
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

    <section class="relative py-12 sm:py-16 lg:py-20">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="max-w-md mx-auto overflow-hidden text-center bg-white shadow-lg rounded-2xl">
                <div class="p-6 lg:p-8 xl:p-12">
                    <div class="">
                        <h1 class="text-2xl font-bold text-gray-900">Artworky is releasing on</h1>

                        <div class="flex items-center justify-between px-2 mt-8 space-x-3 lg:space-x-6">
                            <div>
                                <p class="text-sm font-medium text-gray-500">Days</p>
                                <p class="mt-1 text-4xl font-bold text-rose-500">37</p>
                            </div>

                            <div>
                                <p class="text-2xl font-bold text-gray-300 animate-pulse">:</p>
                            </div>

                            <div>
                                <p class="text-sm font-medium text-gray-500">Hours</p>
                                <p class="mt-1 text-4xl font-bold text-rose-500">14</p>
                            </div>

                            <div>
                                <p class="text-2xl font-bold text-gray-300 animate-pulse">:</p>
                            </div>

                            <div>
                                <p class="text-sm font-medium text-gray-500">Mins</p>
                                <p class="mt-1 text-4xl font-bold text-rose-500">45</p>
                            </div>

                            <div>
                                <p class="text-2xl font-bold text-gray-300 animate-pulse">:</p>
                            </div>

                            <div>
                                <p class="text-sm font-medium text-gray-500">Secs</p>
                                <p class="mt-1 text-4xl font-bold text-rose-500">17</p>
                            </div>
                        </div>

                        <p class="mt-8 text-base font-medium text-gray-600">A collection of 200+ Art NFTs-unique digital collectibles living on the Ethereum blockchain will be available.</p>

                        <form action="#" method="POST" class="mt-10">
                            <div class="space-y-4">
                                <div>
                                    <label for="" class="sr-only"> Email Address </label>
                                    <input type="email" name="" id="" class="block w-full px-3 py-3 text-center placeholder-gray-500 border border-gray-300 rounded-lg focus:border-indigo-600 focus:ring-indigo-600" placeholder="Enter email address" />
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        class="inline-flex items-center justify-center w-full px-6 py-4 text-xs font-bold tracking-widest text-white uppercase transition-all duration-200 bg-gray-900 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-700"
                                    >
                                        Join Waiting list
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>

	)
}

export default Nft3