import React from 'react'

function Feature6() {
	return (
		<section class="py-12 sm:py-16 lg:py-20 bg-black">
    <div class="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
        <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-24 gap-y-16 xl:gap-x-36">
            <div>
                <h2 class="tracking-tighter text-white">
                    <span class="font-sans text-4xl md:text-6xl"> Learn how to </span>
                    <span class="font-serif text-5xl italic lg:block md:text-7xl"> make bread at </span>
                    <span class="font-sans text-4xl lg:block md:text-6xl"> your own pace. </span>
                </h2>
                <p class="mt-6 font-sans text-lg font-normal leading-8 text-opacity-50 lg:mt-8 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio nulla maecenas nulla consectetur erat.</p>
                <div class="mt-8">
                    <a
                        href="#"
                        title=""
                        class="
                            inline-flex
                            items-center
                            justify-center
                            px-5
                            py-2
                            font-sans
                            text-base
                            font-semibold
                            transition-all
                            duration-200
                            border-2 border-transparent
                            rounded-full
                            sm:leading-8
                            bg-white
                            sm:text-lg
                            text-black
                            hover:bg-opacity-90
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary
                        "
                        role="button"
                    >
                        Learn More
                        <svg class="w-6 h-6 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </a>
                </div>
            </div>

            <div>
                <ul class="space-y-8">
                    <li>
                        <h3 class="font-sans text-2xl font-normal text-white">Beginner and Pro levels</h3>
                        <p class="mt-3 font-sans text-lg font-normal leading-8 text-opacity-50 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare ut a felis ornare sapien purus.</p>
                    </li>

                    <li>
                        <h3 class="font-sans text-2xl font-normal text-white">Slack Community</h3>
                        <p class="mt-3 font-sans text-lg font-normal leading-8 text-opacity-50 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare ut a felis ornare sapien purus.</p>
                    </li>

                    <li>
                        <h3 class="font-sans text-2xl font-normal text-white">Watch on mobile</h3>
                        <p class="mt-3 font-sans text-lg font-normal leading-8 text-opacity-50 text-white">Download our dedicated app</p>
                        <div class="flex items-center mt-4 space-x-3">
                            <a href="#" title="" class="" role="button">
                                <img class="w-auto h-12" src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/features/3/appstore.png" alt="" />
                            </a>

                            <a href="#" title="" class="" role="button">
                                <img class="w-auto h-12" src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/features/3/googlestore.png" alt="" />
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <div class="relative mt-16 group">
            <div class="overflow-hidden rounded-lg aspect-w-16 aspect-h-9">
                <img class="object-cover w-full h-full transition-all duration-300 group-hover:opacity-80" src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/features/3/video-thumbnail.png" alt="" />
            </div>
            <div class="absolute inset-0 flex flex-col items-center justify-center">
                <button type="button" class="flex flex-col items-center text-center">
                    <span class="inline-flex items-center justify-center w-16 h-16 transition-all duration-200 rounded-full text-black bg-white hover:bg-opacity-90">
                        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.0416 4.91926C7.37507 4.51934 6.5271 4.99945 6.5271 5.77675L6.5271 18.2232C6.5271 19.0005 7.37507 19.4806 8.0416 19.0807L18.4137 12.8575C19.061 12.4691 19.061 11.5309 18.4137 11.1425L8.0416 4.91926Z"></path>
                        </svg>
                    </span>
                    <span class="mt-5 text-2xl font-normal text-white"> Watch the trailer </span>
                </button>
            </div>
        </div>
    </div>
</section>

	)
}

export default Feature6