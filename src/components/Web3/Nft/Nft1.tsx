import React from 'react'

function Nft1() {
	return (
		<div class="bg-white">
    <header class="py-4 sm:py-6" x-data="{expanded: false}">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <nav class="flex items-center justify-between">
                <div class="shrink-0">
                    <a href="#" title="" class="flex items-center">
                        <img class="w-auto h-8" src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/logo.svg" alt="" />
                    </a>
                </div>

                <div class="flex md:hidden">
                    <button type="button" class="p-1 text-gray-500 transition-all duration-200 bg-transparent rounded-md hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2" @click="expanded = !expanded" :aria-expanded="expanded">
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
                    <a href="#" title="" class="text-base font-medium text-gray-500 transition-all duration-200 hover:text-gray-900"> About </a>

                    <a href="#" title="" class="text-base font-medium text-gray-500 transition-all duration-200 hover:text-gray-900"> Our NFTs </a>
                </div>
            </nav>

            <nav x-show="expanded" x-collapse>
                <div class="px-1 py-5">
                    <div class="grid gap-y-6">
                        <a href="#" title="" class="text-base font-medium text-gray-500 transition-all duration-200 hover:text-gray-900"> About </a>

                        <a href="#" title="" class="text-base font-medium text-gray-500 transition-all duration-200 hover:text-gray-900"> Our NFTs </a>
                    </div>
                </div>
            </nav>
        </div>
    </header>

    <section class="py-12 sm:py-16 lg:pb-20">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="grid grid-cols-3 gap-5 mx-auto sm:max-w-md">
                <img class="rounded-xl" src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/hero-coming-soon/1/image-1.png" alt="" />
                <img class="transform -rotate-2 rounded-xl" src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/hero-coming-soon/1/image-2.png" alt="" />
                <img class="transform rounded-xl rotate-2" src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/hero-coming-soon/1/image-3.png" alt="" />
            </div>

            <div class="max-w-md mx-auto mt-8 text-center">
                <h1 class="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">Apes are coming</h1>
                <p class="mt-4 text-base font-medium text-gray-500 lg:text-lg">A collection of 100 funny ape NFTs-unique digital collectibles living on the Ethereum blockchain will be available.</p>
            </div>

            <div class="max-w-sm mx-auto mt-10 overflow-hidden text-center bg-gray-900 rounded-xl">
                <div class="p-6">
                    <div class="flex items-center justify-between px-1 space-x-3 lg:space-x-6">
                        <div>
                            <p class="text-4xl font-bold text-white">37</p>
                            <p class="mt-1 text-sm font-medium text-gray-400">Days</p>
                        </div>

                        <div>
                            <p class="text-2xl font-bold text-white animate-pulse">:</p>
                        </div>

                        <div>
                            <p class="text-4xl font-bold text-white">14</p>
                            <p class="mt-1 text-sm font-medium text-gray-400">Hours</p>
                        </div>

                        <div>
                            <p class="text-2xl font-bold text-white animate-pulse">:</p>
                        </div>

                        <div>
                            <p class="text-4xl font-bold text-white">45</p>
                            <p class="mt-1 text-sm font-medium text-gray-400">Mins</p>
                        </div>

                        <div>
                            <p class="text-2xl font-bold text-white animate-pulse">:</p>
                        </div>

                        <div>
                            <p class="text-4xl font-bold text-white">17</p>
                            <p class="mt-1 text-sm font-medium text-gray-400">Secs</p>
                        </div>
                    </div>

                    <div class="mt-5">
                        <a
                            href="#"
                            title=""
                            class="inline-flex items-center justify-center w-full px-6 py-4 text-xs font-bold tracking-widest text-white uppercase transition-all duration-200 border border-transparent rounded-lg bg-rose-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-600 hover:bg-rose-600"
                            role="button"
                        >
                            Join Discord
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>

	)
}

export default Nft1