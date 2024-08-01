import React from 'react'

function Nft7() {
	return (
		<div class="relative bg-gradient-to-r from-[#FEF6E0] to-[#FFFFF4] overflow-hidden">
    <div class="absolute bottom-0 right-0 lg:inset-y-0 md:-right-16">
        <img class="object-cover w-full h-full origin-left transform lg:scale-110" src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/hero-single/1/background-pattern.svg" alt="" />
    </div>

    <header class="relative py-4 sm:py-6" x-data="{expanded: false}">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <nav class="flex items-center justify-between">
                <div class="shrink-0">
                    <a href="#" title="" class="flex items-center">
                        <img class="w-auto h-8" src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/logo.svg" alt="" />
                    </a>
                </div>

                <div class="flex md:hidden">
                    <button type="button" class="p-1 text-gray-900 transition-all duration-200 bg-transparent rounded-md hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2" @click="expanded = !expanded" :aria-expanded="expanded">
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

                    <a
                        href="#"
                        title=""
                        class="inline-flex items-center justify-center px-4 py-2 text-base font-semibold text-gray-900 transition-all duration-200 border border-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 hover:text-white"
                        role="button"
                    >
                        Connect Wallet
                    </a>
                </div>
            </nav>

            <nav x-show="expanded" x-collapse>
                <div class="px-1 py-5">
                    <div class="grid gap-y-6">
                        <a href="#" title="" class="text-base font-medium text-gray-500 transition-all duration-200 hover:text-gray-900"> About </a>

                        <a href="#" title="" class="text-base font-medium text-gray-500 transition-all duration-200 hover:text-gray-900"> Our NFTs </a>

                        <a
                            href="#"
                            title=""
                            class="inline-flex items-center justify-center px-4 py-2 text-base font-semibold text-gray-900 transition-all duration-200 border border-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 hover:text-white"
                            role="button"
                        >
                            Connect Wallet
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    </header>

    <section class="relative py-12 sm:py-16 lg:pb-20 xl:pb-24">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="grid items-center max-w-5xl grid-cols-1 mx-auto md:grid-cols-2 md:gap-x-8 lg:gap-x-16 gap-y-12">
                <div class="max-w-md">
                    <h1 class="text-4xl font-bold text-gray-900 sm:text-5xl xl:text-6xl">Osprey</h1>
                    <p class="mt-5 text-lg font-medium leading-8 text-gray-600">Osprey is a collection of 100 funny ape NFTs-unique digital collectibles living on the Ethereum blockchain.</p>

                    <div class="flex items-start max-w-xs mt-12 lg:max-w-none gap-x-16">
                        <div>
                            <p class="text-base font-medium text-gray-500">Reserve Price</p>
                            <p class="mt-2 text-3xl font-bold text-gray-900">Ξ 1.7 ETH</p>
                        </div>

                        <div>
                            <p class="text-base font-medium text-gray-500">Available</p>
                            <p class="mt-2 text-3xl font-bold text-gray-900">89/100</p>
                        </div>
                    </div>

                    <div class="mt-8">
                        <a
                            href="#"
                            title=""
                            class="inline-flex items-center justify-center px-6 py-4 text-xs font-bold tracking-widest text-white uppercase transition-all duration-200 border border-transparent rounded-lg bg-rose-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-600 hover:bg-rose-600"
                            role="button"
                        >
                            Connect wallet
                        </a>
                    </div>
                </div>

                <div>
                    <img class="mx-auto lg:ml-auto sm:max-w-xs rounded-xl" src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/hero-single/1/image.png" alt="" />
                </div>
            </div>
        </div>
    </section>
</div>

	)
}

export default Nft7