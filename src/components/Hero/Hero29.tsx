import React from 'react'

function Hero29() {
	return (
		<div class="relative bg-gradient-to-b from-green-50 to-green-100">
    <header class="absolute inset-x-0 top-0 z-10 w-full">
        <div class="px-4 mx-auto sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16 lg:h-20">
                <div class="flex-shrink-0">
                    <a href="#" title="" class="flex">
                        <img class="w-auto h-8" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/logo.svg" alt="" />
                    </a>
                </div>

                <button type="button" class="inline-flex items-center p-2 text-sm text-white uppercase transition-all duration-200 bg-black lg:hidden focus:bg-gray-800 hover:bg-gray-800">
                    <!-- Menu open: "hidden", Menu closed: "block" -->
                    <svg class="block w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>

                    <!-- Menu open: "block", Menu closed: "hidden" -->
                    <svg class="hidden w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>

                    Menu
                </button>

                <div class="hidden lg:flex lg:items-center lg:justify-center lg:ml-10 lg:mr-auto lg:space-x-10">
                    <a href="#" title="" class="text-base text-black transition-all duration-200 hover:text-opacity-80"> Features </a>

                    <a href="#" title="" class="text-base text-black transition-all duration-200 hover:text-opacity-80"> Solutions </a>

                    <a href="#" title="" class="text-base text-black transition-all duration-200 hover:text-opacity-80"> Resources </a>

                    <a href="#" title="" class="text-base text-black transition-all duration-200 hover:text-opacity-80"> Pricing </a>
                </div>

                <a href="#" title="" class="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-200 focus:bg-black focus:text-white" role="button"> Try for free </a>
            </div>
        </div>
    </header>

    <section class="overflow-hidden">
        <div class="flex flex-col lg:flex-row lg:items-stretch lg:max-h-[900px] lg:min-h-[900px]">
            <div class="flex items-center justify-center w-full lg:order-2 lg:w-7/12">
                <div class="h-full px-4 pt-24 pb-16 sm:px-6 lg:px-24 2xl:px-32 lg:pt-40 lg:pb-14">
                    <div class="flex flex-col justify-between flex-1 h-full">
                        <div>
                            <h1 class="text-4xl font-bold text-black sm:text-6xl xl:text-7xl">Take control <br />on your daily expenses</h1>
                            <p class="mt-6 text-base text-black sm:text-xl">Our A.I helps you to predict your expenses based on your previous activity and shares how you should manage you money.</p>
                            <a href="#" title="" class="inline-flex items-center px-6 py-5 text-base font-semibold text-black transition-all duration-200 bg-green-300 mt-9 hover:bg-green-400 focus:bg-green-400" role="button"> Get started for free </a>
                        </div>

                        <div class="mt-8 border-t-2 border-black lg:mt-auto sm:mt-14">
                            <div class="pt-8 sm:flex sm:items-center sm:justify-between sm:pt-14">
                                <p class="text-base font-semibold text-black">App available on</p>

                                <div class="flex items-center mt-5 space-x-5 sm:mt-0">
                                    <a href="#" title="" class="block transition-all duration-200 hover:opacity-80 focus:opacity-80" role="button">
                                        <img class="w-auto rounded h-14 sm:h-16" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/app-store-button.png" alt="" />
                                    </a>

                                    <a href="#" title="" class="block transition-all duration-200 hover:opacity-80 focus:opacity-80" role="button">
                                        <img class="w-auto rounded h-14 sm:h-16" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/play-store-button.png" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="relative w-full overflow-hidden lg:w-5/12 lg:order-1">
                <div class="lg:absolute lg:bottom-0 lg:left-0">
                    <img class="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/phone-mockup.png" alt="" />
                </div>
            </div>
        </div>
    </section>
</div>

	)
}

export default Hero29