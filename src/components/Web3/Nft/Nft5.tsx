import React from 'react'

function Nft5() {
	return (
		<section class="relative pt-12 overflow-hidden bg-gray-900 sm:pt-16 lg:py-20 xl:py-24">
    <div class="absolute inset-0">
        <img class="object-cover w-full h-full" src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/hero-marketplace/1/background.png" alt="" />
    </div>

    <div class="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-5xl mx-auto lg:flex lg:items-center">
            <div class="max-w-md mx-auto text-center lg:w-1/2 lg:text-left lg:max-w-none lg:mx-0">
                <h1 class="text-3xl font-bold text-white sm:text-4xl xl:text-6xl">Enjoy your live 🔥auction with NFT</h1>
                <p class="max-w-sm mx-auto mt-6 text-lg font-normal text-gray-200 lg:mx-0 xl:text-xl">More than 2,200 artworks available for auction. Get your artwork now.</p>
                <div class="mt-10">
                    <a
                        href="#"
                        title=""
                        class="inline-flex items-center justify-center px-6 py-4 text-xs font-bold tracking-widest text-white uppercase transition-all duration-200 border border-transparent rounded-lg bg-rose-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-600 hover:bg-rose-600"
                        role="button"
                    >
                        Place your bid
                    </a>
                </div>

                <div class="inline-grid grid-cols-2 mt-12 gap-x-8">
                    <div class="flex flex-col lg:items-center lg:space-x-3 lg:flex-row">
                        <p class="text-4xl font-bold text-white">486+</p>
                        <p class="mt-2 text-sm font-medium text-gray-400 lg:mt-0">Talented <br class="hidden lg:block" />Artists</p>
                    </div>

                    <div class="flex flex-col lg:items-center lg:space-x-3 lg:flex-row">
                        <p class="text-4xl font-bold text-white">2,200+</p>
                        <p class="mt-2 text-sm font-medium text-gray-400 lg:mt-0">Awesome <br class="hidden lg:block" />Projects</p>
                    </div>
                </div>
            </div>

            <div class="relative mt-8 lg:w-1/2 lg:mt-0">
                <img class="max-w-xs mx-auto lg:max-w-sm lg:absolute lg:inset-x-0 lg:-bottom-80" src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/hero-marketplace/1/phone-mockup.png" alt="" />
            </div>
        </div>
    </div>
</section>

	)
}

export default Nft5