import React from 'react'

function Hero10() {
	return (
		<div class="relative">
    <header class="absolute inset-x-0 top-0 z-10 py-4 bg-transparent sm:py-5" x-data="{expanded: false}">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <nav class="flex items-center justify-between">
                <div class="flex shrink-0">
                    <a href="#" title="" class="flex">
                        <img class="w-auto h-8" src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/logo.svg" alt="" />
                    </a>
                </div>

                <div class="flex md:hidden">
                    <button type="button" class="text-gray-900" @click="expanded = !expanded" :aria-expanded="expanded">
                        <span x-show="!expanded" aria-hidden="true">
                            <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </span>

                        <span x-show="expanded" aria-hidden="true">
                            <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </span>
                    </button>
                </div>

                <div class="hidden md:items-center md:justify-start md:ml-16 md:mr-auto md:space-x-10 md:flex">
                    <a href="#" title="" class="text-base font-medium text-gray-900 transition-all duration-200 hover:text-indigo-600"> Features </a>

                    <a href="#" title="" class="text-base font-medium text-gray-900 transition-all duration-200 hover:text-indigo-600"> Pricing </a>

                    <a href="#" title="" class="text-base font-medium text-gray-900 transition-all duration-200 hover:text-indigo-600"> Support </a>
                </div>
            </nav>

            <nav x-show="expanded" x-collapse>
                <div class="px-1 pt-8 pb-4">
                    <div class="grid gap-y-6">
                        <a href="#" title="" class="flex items-center text-base font-medium text-gray-900 transition-all duration-200 focus:outline-none focus:ring-0"> Features </a>

                        <a href="#" title="" class="flex items-center text-base font-medium text-gray-900 transition-all duration-200 focus:outline-none focus:ring-0"> Pricing </a>

                        <a href="#" title="" class="flex items-center text-base font-medium text-gray-900 transition-all duration-200 focus:outline-none focus:ring-0"> Support </a>
                    </div>
                </div>
            </nav>
        </div>
    </header>

    <section class="relative bg-gray-900">
        <div class="absolute inset-0">
            <div class="absolute inset-y-0 left-0 w-1/2 bg-white"></div>
        </div>

        <div class="relative mx-auto max-w-7xl lg:grid lg:grid-cols-2">
            <div class="flex items-end px-4 pb-16 bg-white pt-28 sm:px-6 lg:px-8 lg:pb-24 xl:pr-12">
                <div class="max-w-lg mx-auto lg:mx-0">
                    <p class="text-5xl sm:text-6xl lg:text-7xl">⚡️</p>
                    <h1 class="mt-10 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">We write articles on SaaS startup growth.</h1>
                    <p class="mt-6 text-base font-normal leading-7 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.</p>
                    <div class="relative inline-flex mt-10 group">
                        <div class="absolute transitiona-all duration-1000 opacity-70 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>

                        <a
                            href="#"
                            title=""
                            class="inline-flex relative items-center justify-center w-full sm:w-auto px-8 py-3 sm:text-sm text-base sm:py-3.5 font-semibold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                            role="button"
                        >
                            Read Exclusive Blog
                        </a>
                    </div>
                </div>
            </div>

            <div class="relative flex items-end px-4 py-16 bg-gray-900 sm:px-6 lg:pb-24 lg:px-8 xl:pl-12">
                <div class="absolute inset-0">
                    <img class="object-cover w-full h-full" src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/6/grid-pattern.svg" alt="" />
                </div>

                <div class="relative w-full max-w-lg mx-auto lg:max-w-none">
                    <p class="text-lg font-bold text-white">Featured Articles</p>

                    <div class="mt-6 space-y-5">
                        <div class="overflow-hidden transition-all duration-200 transform bg-white border border-gray-200 rounded-2xl hover:shadow-lg hover:-translate-y-1">
                            <div class="px-4 py-5 sm:p-5">
                                <div class="flex items-start lg:items-center">
                                    <a href="#" title="" class="shrink-0">
                                        <img class="lg:h-24 w-14 h-14 lg:w-24 rounded-xl object-cvoer" src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/6/thumbnail-1.png" alt="" />
                                    </a>

                                    <div class="flex-1 ml-4 lg:ml-6">
                                        <p class="text-xs font-medium text-gray-900 lg:text-sm">
                                            <a href="#" title="" class=""> Growth </a>
                                        </p>
                                        <p class="mt-2 text-sm font-bold text-gray-900 lg:text-lg group-hover:text-gray-600">
                                            <a href="#" title="" class=""> How a visual artist redefines success in graphic design </a>
                                        </p>
                                        <p class="mt-2 text-xs font-medium text-gray-500 lg:text-sm">April 09, 2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="overflow-hidden transition-all duration-200 transform bg-white border border-gray-200 rounded-2xl hover:shadow-lg hover:-translate-y-1">
                            <div class="px-4 py-5 sm:p-5">
                                <div class="flex items-start lg:items-center">
                                    <a href="#" title="" class="shrink-0">
                                        <img class="lg:h-24 w-14 h-14 lg:w-24 rounded-xl object-cvoer" src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/6/thumbnail-2.png" alt="" />
                                    </a>

                                    <div class="flex-1 ml-4 lg:ml-6">
                                        <p class="text-xs font-medium text-gray-900 lg:text-sm">
                                            <a href="#" title="" class=""> Growth </a>
                                        </p>
                                        <p class="mt-2 text-sm font-bold text-gray-900 lg:text-lg group-hover:text-gray-600">
                                            <a href="#" title="" class=""> How a visual artist redefines success in graphic design </a>
                                        </p>
                                        <p class="mt-2 text-xs font-medium text-gray-500 lg:text-sm">April 09, 2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="overflow-hidden transition-all duration-200 transform bg-white border border-gray-200 rounded-2xl hover:shadow-lg hover:-translate-y-1">
                            <div class="px-4 py-5 sm:p-5">
                                <div class="flex items-start lg:items-center">
                                    <a href="#" title="" class="shrink-0">
                                        <img class="lg:h-24 w-14 h-14 lg:w-24 rounded-xl object-cvoer" src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/6/thumbnail-3.png" alt="" />
                                    </a>

                                    <div class="flex-1 ml-4 lg:ml-6">
                                        <p class="text-xs font-medium text-gray-900 lg:text-sm">
                                            <a href="#" title="" class=""> Growth </a>
                                        </p>
                                        <p class="mt-2 text-sm font-bold text-gray-900 lg:text-lg group-hover:text-gray-600">
                                            <a href="#" title="" class=""> How a visual artist redefines success in graphic design </a>
                                        </p>
                                        <p class="mt-2 text-xs font-medium text-gray-500 lg:text-sm">April 09, 2022</p>
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

export default Hero10