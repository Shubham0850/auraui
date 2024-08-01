import React from 'react'

function Nft10() {
	return (
		<div class="bg-gray-900">
    <header class="relative py-4 sm:py-6" x-data="{expanded: false}">
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

                <div class="hidden md:flex md:items-center md:justify-end md:space-x-12 md:mr-auto md:ml-20">
                    <a href="#" title="" class="text-base font-medium text-gray-300 transition-all duration-200 hover:white"> About </a>

                    <a href="#" title="" class="text-base font-medium text-gray-300 transition-all duration-200 hover:white"> Apes </a>

                    <a href="#" title="" class="text-base font-medium text-gray-300 transition-all duration-200 hover:white"> Dashboard </a>
                </div>

                <div class="hidden md:flex">
                    <a
                        href="#"
                        title=""
                        class="inline-flex items-center justify-center px-4 py-2 text-base font-semibold text-white transition-all duration-200 bg-gray-800 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 hover:bg-gray-700"
                        role="button"
                    >
                        Connect Wallet
                    </a>
                </div>
            </nav>

            <nav x-show="expanded" x-collapse>
                <div class="px-1 py-5">
                    <div class="grid gap-y-6">
                        <a href="#" title="" class="text-base font-medium text-gray-300 transition-all duration-200 hover:text-white"> About </a>

                        <a href="#" title="" class="text-base font-medium text-gray-300 transition-all duration-200 hover:text-white"> Apes </a>

                        <a href="#" title="" class="text-base font-medium text-gray-300 transition-all duration-200 hover:text-white"> Dashboard </a>

                        <a
                            href="#"
                            title=""
                            class="inline-flex items-center justify-center px-4 py-2 text-base font-semibold text-white transition-all duration-200 bg-gray-800 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 hover:bg-gray-700"
                            role="button"
                        >
                            Connect Wallet
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    </header>

    <section class="relative py-12 sm:py-16 lg:pb-20">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="grid items-center max-w-4xl grid-cols-1 mx-auto xl:max-w-5xl md:grid-cols-2 md:gap-x-24 gap-y-12">
                <div class="max-w-sm mx-auto text-center md:text-left lg:mx-0">
                    <div class="flex items-center justify-center space-x-3 md:justify-start">
                        <div class="shrink-0 w-6 h-px bg-gray-500"></div>
                        <p class="text-lg font-semibold tracking-wide text-gray-500 uppercase">Day 34/1000</p>
                    </div>
                    <h1 class="mt-7 text-8xl sm:text-[140px] font-bold tracking-tight leading-[0.85]">
                        <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-500 to-teal-700"> NFT<br />ARTS </span>
                    </h1>
                    <p class="mt-10 text-lg font-normal text-gray-100">Fuape is a collection of 1000 funny ape NFTs - unique digital collectibles living on the Ethereum blockchain.</p>
                </div>

                <div>
                    <div class="max-w-xs mx-auto md:ml-auto md:mr-0">
                        <img class="object-cover w-full h-full rounded-xl" src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/hero-single/4/image.png" alt="" />

                        <div class="flex items-start max-w-xs mt-6 lg:max-w-none gap-x-16">
                            <div>
                                <p class="text-base font-medium text-gray-500">Current Bid</p>
                                <p class="mt-2 text-2xl font-bold text-white">Ξ 1.7 ETH</p>
                            </div>

                            <div>
                                <p class="text-base font-medium text-gray-500">Bid Ends In</p>
                                <p class="mt-2 text-2xl font-bold text-white">12h:39m:41s</p>
                            </div>
                        </div>

                        <div class="mt-6">
                            <a
                                href="#"
                                title=""
                                class="inline-flex items-center justify-center w-full px-8 py-3 text-base font-bold text-white transition-all duration-200 bg-transparent border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white hover:bg-white hover:text-gray-900"
                            >
                                Bid on Opensea
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>

	)
}

export default Nft10