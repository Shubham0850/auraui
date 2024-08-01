import React from 'react'

function Hero8() {
	return (
		<div class="relative pt-40 pb-56 bg-black">
    <div class="absolute inset-0 lg:hidden">
        <img class="object-cover object-left w-full h-full opacity-50" src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/hero/6/bg-mobile.png" alt="" />
    </div>

    <header class="absolute inset-x-0 top-0 z-10 py-8 xl:py-12">
        <div class="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
            <div class="flex items-center justify-between">
                <div class="flex flex-shrink-0">
                    <a href="#" title="BakerStreet" class="inline-flex rounded-md focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-offset-secondary focus:ring-primary">
                        <img class="w-auto h-8" src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/logo.svg" alt="BakerStreet" />
                    </a>
                </div>

                <div class="md:hidden">
                    <button type="button" class="p-2 -m-2 transition-all duration-200 rounded-full text-white focus:outline-none focus:ring-offset-secondary focus:ring-2 focus:ring-offset-1 focus:ring-primary">
                        <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                <div class="hidden md:flex md:items-center md:space-x-10 lg:ml-28">
                    <a href="#" title="" class="font-sans text-base font-normal transition-all duration-200 rounded text-white focus:outline-none focus:ring-offset-secondary focus:ring-2 focus:ring-offset-1 focus:ring-primary"> Courses </a>

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
                            font-normal
                            leading-7
                            transition-all
                            duration-200
                            border-2
                            rounded-full
                            text-white
                            border-primary
                            focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary
                            hover:bg-white hover:text-black
                            focus:ring-offset-secondary
                        "
                    >
                        Sign Up
                    </a>
                </div>
            </div>
        </div>
    </header>

    <div class="relative">
        <div class="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
            <div class="grid items-center grid-cols-1 lg:grid-cols-2">
                <div>
                    <h1 class="font-sans text-base font-normal tracking-tight text-white text-opacity-70">Master the basics of baking</h1>
                    <p class="mt-6 tracking-tighter text-white">
                        <span class="font-sans font-normal text-7xl">The road to the</span><br />
                        <span class="font-serif italic font-normal text-8xl">perfect loaf</span>
                    </p>
                    <p class="mt-12 font-sans text-base font-normal leading-7 text-white text-opacity-70">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu penatibus pellentesque dolor consequat ligula egestas massa gravida. Porttitor venenatis enim praesent.</p>
                </div>

                <div class="hidden lg:block">
                    <img class="w-full mx-auto" src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/hero/6/background.png" alt="" />
                </div>
            </div>
        </div>
    </div>

    <div class="absolute inset-x-0 bottom-0 z-10">
        <div class="relative py-8 bg-white">
            <div class="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
                <div class="md:flex md:items-center md:justify-between">
                    <p class="font-sans text-xl font-normal tracking-tight text-black">Starting at $9.99/month</p>

                    <div class="flex items-center justify-start mt-4 space-x-3 md:mt-0 md:justify-end sm:space-x-4">
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
                                leading-6
                                transition-all
                                duration-200
                                border-2 border-transparent
                                rounded-full
                                sm:leading-8
                                bg-black
                                text-white
                                sm:text-lg
                                hover:bg-opacity-90
                                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary focus:ring-offset-primary
                            "
                            role="button"
                        >
                            Get started
                        </a>

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
                                leading-6
                                transition-all
                                duration-200
                                bg-transparent
                                border-2
                                rounded-full
                                sm:leading-8
                                text-black
                                border-secondary
                                hover:bg-black
                                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary
                                hover:text-white
                                sm:text-lg
                                focus:ring-offset-primary
                            "
                            role="button"
                        >
                            <svg class="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.0416 4.9192C7.37507 4.51928 6.5271 4.99939 6.5271 5.77669L6.5271 18.2232C6.5271 19.0005 7.37507 19.4806 8.0416 19.0807L18.4137 12.8574C19.061 12.469 19.061 11.5308 18.4137 11.1424L8.0416 4.9192Z" />
                            </svg>
                            Watch trailer
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
	)
}

export default Hero8