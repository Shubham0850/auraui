import React from 'react'

function Nft6() {
	return (
		<div class="bg-gray-50">
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
            <div class="grid items-center max-w-6xl grid-cols-1 mx-auto gap-y-12 lg:grid-cols-2 gap-x-16">
                <div class="max-w-md mx-auto text-center lg:text-left lg:mx-0 lg:order-last">
                    <p class="text-sm font-semibold tracking-wide text-gray-500 uppercase">Coming Soon</p>
                    <h1 class="mt-6 text-3xl font-bold text-gray-900 sm:text-4xl">Get notified when we launch our Apes</h1>
                    <p class="mt-6 text-sm font-medium text-gray-500">A collection of 200+ Art NFTs-unique digital collectibles living on the Ethereum blockchain will be available.</p>

                    <form action="#" method="POST" class="mt-8">
                        <div>
                            <label for="" class="sr-only"> Email Address </label>
                            <input type="email" name="" id="" class="block w-full px-3 py-3 placeholder-gray-500 border border-gray-300 rounded-lg focus:border-indigo-600 focus:ring-indigo-600" placeholder="Enter email address" />
                        </div>
                        <div class="mt-4">
                            <button
                                type="submit"
                                class="inline-flex items-center justify-center flex-1 w-full px-12 py-4 text-xs font-bold tracking-widest text-white uppercase transition-all duration-200 bg-indigo-600 border border-transparent rounded-lg shrink-0 lg:w-auto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-700"
                            >
                                Join Waiting list
                            </button>
                        </div>
                    </form>

                    <div class="flex items-center justify-center mt-8 space-x-5 lg:mt-24 lg:justify-start">
                        <span class="text-sm font-medium text-gray-500"> Connect with us: </span>

                        <ul class="flex items-center space-x-2.5">
                            <li>
                                <a href="#" title="" class="inline-flex items-center justify-center w-8 h-8 text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full hover:bg-gray-100">
                                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path
                                            d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                                        ></path>
                                    </svg>
                                </a>
                            </li>

                            <li>
                                <a href="#" title="" class="inline-flex items-center justify-center w-8 h-8 text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full hover:bg-gray-100">
                                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                                    </svg>
                                </a>
                            </li>

                            <li>
                                <a href="#" title="" class="inline-flex items-center justify-center w-8 h-8 text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full hover:bg-gray-100">
                                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path
                                            d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"
                                        ></path>
                                    </svg>
                                </a>
                            </li>

                            <li>
                                <a href="#" title="" class="inline-flex items-center justify-center w-8 h-8 text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full hover:bg-gray-100">
                                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                                        <circle cx="16.806" cy="7.207" r="1.078"></circle>
                                        <path
                                            d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"
                                        ></path>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div class="grid max-w-md grid-cols-2 gap-3 mx-auto">
                        <img class="w-full h-full rounded-lg" src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/hero-coming-soon/2/image-1.png" alt="" />
                        <img class="w-full h-full rounded-lg" src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/hero-coming-soon/2/image-2.png" alt="" />
                        <img class="w-full h-full rounded-lg" src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/hero-coming-soon/2/image-3.png" alt="" />
                        <img class="w-full h-full rounded-lg" src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/hero-coming-soon/2/image-4.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>

	)
}

export default Nft6