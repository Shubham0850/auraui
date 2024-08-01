import React from 'react'

function Testimoial15() {
	return (
		<section class="py-12 bg-white sm:py-16 lg:py-20 xl:py-24">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="relative">
            <div class="overflow-hidden aspect-square sm:aspect-video rounded-2xl lg:rounded-3xl group">
                <img class="object-cover w-full h-full transition-all duration-200 group-hover:scale-110" src="https://landingfoliocom.imgix.net/store/collection/saasui/images/testimonial/2/video-cover.png" alt="" />
            </div>
            <div class="absolute inset-0 pointer-events-none bg-gradient-to-t from-gray-900 to-transparent rounded-2xl lg:rounded-3xl opacity-80"></div>
            <div class="absolute inset-0 grid w-full h-full pointer-events-none place-items-center">
                <button type="button" class="inline-flex items-center justify-center w-20 h-20 text-white transition-all duration-200 border-2 border-white pointer-events-auto rounded-2xl bg-white/10 backdrop-blur-lg hover:bg-white/20">
                    <svg class="w-auto h-8 -mr-1" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 3.80425V14.1958C1 15.7666 2.7279 16.7243 4.06 15.8917L12.3732 10.696C13.6265 9.91266 13.6265 8.08734 12.3732 7.304L4.06 2.10825C2.7279 1.27569 1 2.23338 1 3.80425Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
            <div class="absolute bottom-0 w-full px-4 py-8 text-center -translate-x-1/2 left-1/2 lg:p-12">
                <p class="text-lg font-semibold text-white sm:text-xl lg:text-3xl">See how we helped Groover to grow 11x faster</p>
            </div>
        </div>

        <div class="grid grid-cols-1 gap-12 mt-12 text-center md:grid-cols-3 sm:mt-16">
            <div>
                <blockquote>
                    <p class="text-lg font-medium leading-8 text-gray-900">"We love Landingfolio! Our designers were using it for their projects, so clients already knew what Landingfolio was and how to use it."</p>
                </blockquote>
                <p class="mt-8 text-base font-semibold text-gray-900">Darlene Robertson</p>
                <p class="mt-1 text-sm font-normal text-gray-500">Product Manager at Jomanar</p>
            </div>

            <div>
                <blockquote>
                    <p class="text-lg font-medium leading-8 text-gray-900">"I didn't know designing in Webflow could be this individualized. I'd never considered it before, but Landingfolio changed my mind."</p>
                </blockquote>
                <p class="mt-8 text-base font-semibold text-gray-900">Bessie Cooper</p>
                <p class="mt-1 text-sm font-normal text-gray-500">Freelance UX Designer</p>
            </div>

            <div>
                <blockquote>
                    <p class="text-lg font-medium leading-8 text-gray-900">"We love Landingfolio! Our designers were using it for their projects, so clients already knew what Landingfolio was and how to use it."</p>
                </blockquote>
                <p class="mt-8 text-base font-semibold text-gray-900">Arlene McCoy</p>
                <p class="mt-1 text-sm font-normal text-gray-500">Product Designer at Martina.co</p>
            </div>
        </div>
    </div>
</section>
	)
}

export default Testimoial15