import React from 'react'

function Hero5() {
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

                <div class="flex lg:hidden">
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

                <div class="hidden lg:flex lg:items-center lg:justify-start lg:ml-16 lg:mr-auto lg:space-x-10">
                    <a href="#" title="" class="text-base font-medium text-gray-900 transition-all duration-200 hover:text-indigo-600"> Features </a>

                    <a href="#" title="" class="text-base font-medium text-gray-900 transition-all duration-200 hover:text-indigo-600"> Pricing </a>

                    <a href="#" title="" class="text-base font-medium text-gray-900 transition-all duration-200 hover:text-indigo-600"> Support </a>
                </div>

                <div class="hidden lg:flex">
                    <a
                        href="#"
                        title=""
                        class="inline-flex items-center justify-center px-6 py-2 sm:py-2.5 text-base font-semibold text-white transition-all duration-200 bg-gray-900 rounded-lg sm:text-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                        role="button"
                    >
                        Get Design Inspirations
                    </a>
                </div>
            </nav>

            <nav x-show="expanded" x-collapse>
                <div class="px-1 pt-8 pb-4">
                    <div class="grid gap-y-6">
                        <a href="#" title="" class="flex items-center text-base font-medium text-gray-900 transition-all duration-200 focus:outline-none focus:ring-0"> Features </a>

                        <a href="#" title="" class="flex items-center text-base font-medium text-gray-900 transition-all duration-200 focus:outline-none focus:ring-0"> Pricing </a>

                        <a href="#" title="" class="flex items-center text-base font-medium text-gray-900 transition-all duration-200 focus:outline-none focus:ring-0"> Support </a>

                        <a
                            href="#"
                            title=""
                            class="inline-flex items-center justify-center px-6 py-2 text-base font-semibold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-lg hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                            role="button"
                        >
                            Get Design Inspiration
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    </header>

    <section class="relative pb-12 bg-white pt-28 sm:pb-16 sm:pt-32 lg:pb-20 xl:pt-48 xl:pb-32">
        <div class="absolute inset-0">
            <img class="hidden object-cover w-full h-full md:block" src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/2/background.png" alt="" />
        </div>

        <div class="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div class="flex">
                <div class="w-full md:max-w-xs lg:max-w-md">
                    <h1 class="text-4xl font-bold text-gray-900 sm:text-5xl">Weekly articles on design inspirations</h1>
                    <p class="mt-5 text-base font-normal leading-7 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.</p>

                    <p class="mt-10 text-base font-bold text-gray-900">Join the email list to:</p>
                    <ul class="mt-4 space-y-4">
                        <li class="flex items-center">
                            <span class="text-base"> 💸 </span>
                            <span class="flex-1 text-base font-medium text-gray-900 ml-2.5"> Get 10 Web & Mobile UI Inspirations Every Week </span>
                        </li>

                        <li class="flex items-center">
                            <span class="text-base"> 🎁 </span>
                            <span class="flex-1 text-base font-medium text-gray-900 ml-2.5"> Exclusive Discount on Design Resources </span>
                        </li>

                        <li class="flex items-center">
                            <span class="text-base"> ⌛️ </span>
                            <span class="flex-1 text-base font-medium text-gray-900 ml-2.5"> 3 Random Subscriber will Get Featured on Emails </span>
                        </li>
                    </ul>

                    <div class="relative inline-flex mt-10 group">
                        <div class="absolute transitiona-all duration-1000 opacity-70 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>

                        <a
                            href="#"
                            title=""
                            class="relative inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                            role="button"
                        >
                            Join Newsletter For Free
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-12 md:hidden sm:mt-16">
            <img class="object-cover w-full h-full" src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/2/background-mobile.png" alt="" />
        </div>
    </section>
</div>
	)
}

export default Hero5