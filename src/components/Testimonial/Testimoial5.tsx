import React from 'react'

function Testimoial5() {
	return (
		<section class="py-12 bg-white sm:py-16 lg:py-20 xl:py-24">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-16 xl:gap-x-24">
            <div class="relative overflow-hidden group lg:order-2 rounded-2xl lg:rounded-3xl">
                <img class="object-cover w-full h-full transition-all duration-200 group-hover:scale-110" src="https://landingfoliocom.imgix.net/store/collection/saasui/images/testimonial/1/woman-smiling.png" alt="" />
                <div class="absolute inset-0 pointer-events-none bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                <div class="absolute bottom-0 left-0 px-8 py-6">
                    <p class="text-lg font-semibold text-white">Albert Flores</p>
                    <p class="text-sm font-normal text-gray-400">Product Manager at Jomanar</p>
                </div>
            </div>

            <div class="lg:order-1">
                <svg class="w-auto text-gray-300 h-9" viewBox="0 0 43 35" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M42.28 34.3H26.04C24.4533 29.1667 23.66 23.8467 23.66 18.34C23.66 12.74 25.1067 8.30666 28 5.03999C30.9867 1.68 35.3733 0 41.16 0V7.84C36.4933 7.84 34.16 10.6867 34.16 16.38V19.04H42.28V34.3ZM18.62 34.3H2.38C0.793333 29.1667 0 23.8467 0 18.34C0 12.74 1.44667 8.30666 4.34 5.03999C7.32667 1.68 11.7133 0 17.5 0V7.84C12.8333 7.84 10.5 10.6867 10.5 16.38V19.04H18.62V34.3Z"
                    />
                </svg>
                <blockquote class="mt-8">
                    <p class="text-2xl font-medium leading-snug tracking-tight text-gray-900 sm:text-3xl">“People now recognise that having a good performance conversation means that something happens as a result.”</p>
                    <p class="mt-8 text-lg font-normal leading-8 text-gray-600 sm:text-xl sm:leading-9">“With Landingfolio, the design team can now build design which identifies employees' career aspirations and goals and from which we approach managers and check to see what is happening.”</p>
                </blockquote>

                <div class="mt-8 sm:mt-12">
                    <a href="#" title="" class="inline-flex items-center text-sm font-semibold text-blue-600 transition-all duration-200 group hover:text-blue-800 hover:underline">
                        Read Success Story
                        <svg class="w-5 h-5 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

	)
}

export default Testimoial5