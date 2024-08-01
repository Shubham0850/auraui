import React from 'react'

function Nft11() {
	return (
		<div class="relative bg-gray-900">
    <div class="absolute inset-0">
        <img class="object-cover w-full h-full" src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/hero-single/2/background.png" alt="" />
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
            <div class="grid items-center max-w-6xl grid-cols-1 mx-auto lg:grid-cols-2 gap-x-24 gap-y-12">
                <div class="max-w-md mx-auto text-center lg:text-left lg:max-w-none lg:mx-0 lg:order-last">
                    <h1 class="text-4xl font-bold text-white sm:text-5xl xl:text-6xl">New funny human every day, till 1000th day.</h1>
                    <p class="max-w-md mx-auto mt-5 text-lg font-normal text-gray-400 lg:mx-0 lg:text-xl lg:leading-9 lg:mt-8">Fuape is a collection of 1000 funny ape NFTs - unique digital collectibles living on the Ethereum blockchain.</p>
                    <div class="mt-8 sm:mt-12 lg:mt-16">
                        <a
                            href="#"
                            title=""
                            class="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white transition-all duration-200 border border-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white hover:bg-white hover:text-gray-900"
                            role="button"
                        >
                            See on Opensea
                        </a>
                    </div>
                </div>

                <div>
                    <div class="grid max-w-md grid-cols-2 gap-6 mx-auto lg:max-w-none lg:mx-0">
                        <img class="object-cover w-full h-full mx-auto rounded-lg" src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/hero-single/2/image-1.png" alt="" />
                        <img class="object-cover w-full h-full mx-auto rounded-lg" src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/hero-single/2/image-2.png" alt="" />
                        <img class="object-cover w-full h-full mx-auto transform rounded-lg rotate-3" src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/hero-single/2/image-4.png" alt="" />
                        <img class="object-cover w-full h-full mx-auto rounded-lg" src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/hero-single/2/image-3.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>

	)
}

export default Nft11