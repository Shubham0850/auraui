import React from 'react'

function Nft13() {
	return (
		<div class="relative bg-white">
    <div class="absolute inset-0">
        <img class="object-cover w-full h-full" src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/hero-single/5/image-background.png" alt="" />
    </div>

    <header class="relative py-4 sm:py-6" x-data="{expanded: false}">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <nav class="flex items-center justify-between">
                <div class="shrink-0">
                    <a href="#" title="" class="flex items-center">
                        <img class="w-auto h-8" src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/logo.svg" alt="" />
                    </a>
                </div>

                <div class="flex lg:hidden">
                    <button type="button" class="p-1 text-gray-900 transition-all duration-200 bg-transparent rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2" @click="expanded = !expanded" :aria-expanded="expanded">
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

                <div class="hidden lg:flex lg:items-center lg:justify-end lg:space-x-12 lg:mx-20">
                    <a href="#" title="" class="text-base font-medium text-gray-500 transition-all duration-200 hover:text-gray-900"> About </a>

                    <a href="#" title="" class="text-base font-medium text-gray-500 transition-all duration-200 hover:text-gray-900"> Apes </a>

                    <a href="#" title="" class="text-base font-medium text-gray-500 transition-all duration-200 hover:text-gray-900"> Dashboard </a>
                </div>

                <div class="hidden lg:flex">
                    <a
                        href="#"
                        title=""
                        class="inline-flex items-center justify-center px-4 py-2 text-base font-semibold text-gray-900 transition-all duration-200 bg-gray-100 border border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 hover:bg-gray-200"
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

                        <a href="#" title="" class="text-base font-medium text-gray-500 transition-all duration-200 hover:text-gray-900"> Apes </a>

                        <a href="#" title="" class="text-base font-medium text-gray-500 transition-all duration-200 hover:text-gray-900"> Dashboard </a>

                        <a
                            href="#"
                            title=""
                            class="inline-flex items-center justify-center px-4 py-2 text-base font-semibold text-gray-900 transition-all duration-200 bg-gray-100 border border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 hover:bg-gray-200"
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
            <div class="max-w-sm mx-auto lg:max-w-xl">
                <p class="text-lg font-semibold tracking-wide text-rose-500">3D Garrage</p>
                <h1 class="mt-3 text-3xl font-bold text-gray-900 lg:mt-8 sm:text-4xl lg:text-5xl xl:text-8xl">Rare 3D NFTs, new every day!</h1>
                <div class="mt-8 lg:mt-14">
                    <a
                        href="#"
                        title=""
                        class="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 hover:bg-blue-700"
                        role="button"
                    >
                        Explore on Opensea
                    </a>
                </div>
            </div>
        </div>
    </section>
</div>

	)
}

export default Nft13