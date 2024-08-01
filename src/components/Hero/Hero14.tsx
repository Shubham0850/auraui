import React from 'react'

function Hero14() {
	return (
		<div>
    <header class="py-4 bg-white sm:py-5" x-data="{expanded: false}">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div class="flex items-center justify-between">
                <div class="shrink-0">
                    <a href="#" title="" class="">
                        <img class="w-auto h-8" src="https://landingfoliocom.imgix.net/store/collection/saasui/images/logo.svg" alt="" />
                    </a>
                </div>

                <div class="hidden lg:flex lg:items-center lg:space-x-4 lg:ml-12">
                    <a href="#" title="" class="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-300">
                        Products
                    </a>

                    <a href="#" title="" class="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-300">
                        Features
                    </a>

                    <a href="#" title="" class="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-300">
                        Pricing
                    </a>

                    <a href="#" title="" class="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-300">
                        Support
                    </a>
                </div>

                <div class="hidden sm:flex sm:items-center sm:justify-end sm:space-x-4 sm:ml-auto">
                    <a
                        href="#"
                        title=""
                        class="inline-flex items-center justify-center px-6 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-gray-900 rounded-full hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-900"
                        role="button"
                    >
                        Start free trial
                    </a>
                </div>

                <div class="flex ml-4 lg:hidden">
                    <button
                        type="button"
                        class="inline-flex items-center p-2.5 text-gray-900 duration-200 border border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transiton-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 focus:bg-gray-900 focus:text-white"
                        @click="expanded = !expanded"
                        :aria-expanded="expanded"
                    >
                        <span x-show="!expanded" aria-hidden="true">
                            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </span>

                        <span x-show="expanded" aria-hidden="true">
                            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </header>

    <section class="py-12 bg-white sm:py-16 lg:py-20 xl:py-24">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-y-12">
                <div class="flex flex-col justify-between lg:order-2">
                    <div class="flex-1">
                        <span class="inline-flex items-center px-3 py-2 text-sm font-medium text-blue-600 rounded-xl bg-blue-50"> #1 Email marketing tool in the market </span>

                        <h1 class="mt-6 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl xl:text-7xl sm:tracking-tight">The safest email in this earth.</h1>
                    </div>

                    <div class="mt-6 lg:mt-auto">
                        <p class="text-lg leading-7 text-gray-700 lg:leading-8 lg:text-xl">Clarity gives you the blocks & components you need to create a truly professional website, landing page or admin panel for SaaS.</p>
                        <div class="mt-10">
                            <a
                                href="#"
                                title=""
                                class="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
                                role="button"
                            >
                                Book A Discovery Call
                            </a>
                        </div>
                    </div>
                </div>

                <div class="lg:order-1">
                    <div class="relative w-full max-w-sm mx-auto">
                        <img class="relative w-full max-w-xs mx-auto sm:max-w-sm rounded-2xl" src="https://landingfoliocom.imgix.net/store/collection/saasui/images/hero/5/portrait-girl.png" alt="" />

                        <div class="absolute bottom-0 left-0 mb-12 -ml-2 bg-white shadow-2xl sm:mb-24 sm:-ml-24 lg:-ml-12 xl:-ml-24 w-72 rounded-2xl">
                            <div class="px-4 py-5 sm:p-6">
                                <div class="flex items-start">
                                    <svg class="text-blue-600 w-9 h-9 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                                        />
                                    </svg>
                                    <div class="ml-4">
                                        <p class="text-3xl font-semibold text-gray-900">34,585</p>
                                        <p class="mt-1 text-lg font-normal text-gray-700">Secured emails are sent last week</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>

	)
}

export default Hero14