import React from 'react'

function Pricing7() {
	return (
		<section class="py-12 sm:py-16 lg:py-20 bg-black">
    <div class="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
        <div class="lg:flex lg:items-start lg:justify-between">
            <div class="mx-auto text-center lg:text-left sm:max-w-lg lg:mx-0">
                <h2 class="tracking-tighter text-white">
                    <span class="font-sans text-4xl font-normal md:text-6xl"> Pricing </span>
                    <span class="font-serif text-5xl italic md:text-7xl"> Options </span>
                </h2>
                <p class="mt-6 font-sans text-lg font-normal text-opacity-50 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dolor urna, tincidunt sed.</p>
            </div>

            <div class="flex items-center mt-8 lg:mt-0 justify-center lg:justify-end space-x-2.5">
                <span class="font-sans text-base font-normal text-white"> Monthly </span>

                <button type="button" class="relative inline-flex flex-shrink-0 h-6 py-0.5 transition-colors duration-200 ease-in-out bg-transparent border-2 border-primary rounded-full cursor-pointer w-12 focus:outline-none" role="switch">
                    <span aria-hidden="true" class="inline-block w-4 h-4 transition duration-200 ease-in-out translate-x-[26px] rounded-full shadow pointer-events-none bg-white"></span>
                </button>

                <span class="font-sans text-base font-normal text-white"> Yearly </span>
            </div>
        </div>

        <div class="mt-12 lg:hidden">
            <div class="flex w-full gap-5 mt-12 overflow-auto lg:overflow-hidden lg:gap-6 whitespace-nowrap lg:grid lg:grid-cols-3 flex-nowrap">
                <div class="flex flex-col justify-between flex-shrink-0 w-4/5 divide-y-2 rounded-2xl bg-dark-gray sm:w-3/5 lg:w-full md:w-2/5 divide-neutral divide-opacity-50">
                    <div class="flex-1 p-6 lg:px-10 lg:py-8">
                        <h3 class="font-sans text-2xl font-normal text-white">Beginner</h3>
                        <p class="mt-5 font-sans text-6xl font-normal text-white">$9</p>
                        <p class="mt-2 font-sans text-base font-normal text-white">per month</p>
                    </div>

                    <div class="px-6 py-3">
                        <div class="flex items-center">
                            <p class="font-sans text-lg text-white">10 Video courses</p>
                            <svg class="w-4 h-4 ml-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>

                    <div class="px-6 py-3">
                        <div class="flex items-center">
                            <p class="font-sans text-lg text-white">Slack Limited access</p>
                            <svg class="w-4 h-4 ml-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>

                    <div class="px-6 py-3">
                        <p class="font-sans text-lg text-white">Lorem ipsum Up to 3</p>
                    </div>

                    <div class="px-6 py-3">
                        <p class="font-sans text-lg text-white">Cancel anytime</p>
                    </div>

                    <div class="px-6 py-3">
                        <div class="flex items-center">
                            <p class="font-sans text-lg text-white">Lorem ipsum</p>
                            <svg class="w-4 h-4 ml-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>

                    <div class="px-6 py-3">
                        <div class="flex items-center">
                            <p class="font-sans text-lg text-white">Zoom Call</p>
                            <svg class="w-4 h-4 ml-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>

                    <div class="px-6 py-3">
                        <p class="font-sans text-lg text-white">Lorem ipsum</p>
                    </div>

                    <div class="px-6 py-6 text-center">
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
                            Get Started
                        </a>
                    </div>
                </div>

                <div class="flex flex-col justify-between flex-shrink-0 w-4/5 divide-y-2 rounded-2xl bg-dark-gray sm:w-3/5 lg:w-full md:w-2/5 divide-neutral divide-opacity-50">
                    <div class="flex-1 p-6 lg:px-10 lg:py-8">
                        <h3 class="font-sans text-2xl font-normal text-white">Intermediate</h3>
                        <p class="mt-5 font-sans text-6xl font-normal text-white">$29</p>
                        <p class="mt-2 font-sans text-base font-normal text-white">per month</p>
                    </div>

                    <div class="px-6 py-3">
                        <div class="flex items-center">
                            <p class="font-sans text-lg text-white">10 Video courses</p>
                            <svg class="w-4 h-4 ml-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>

                    <div class="px-6 py-3">
                        <div class="flex items-center">
                            <p class="font-sans text-lg text-white">Slack Limited access</p>
                            <svg class="w-4 h-4 ml-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>

                    <div class="px-6 py-3">
                        <p class="font-sans text-lg text-white">Lorem ipsum Up to 3</p>
                    </div>

                    <div class="px-6 py-3">
                        <p class="font-sans text-lg text-white">Cancel anytime</p>
                    </div>

                    <div class="px-6 py-3">
                        <div class="flex items-center">
                            <p class="font-sans text-lg text-white">Lorem ipsum</p>
                            <svg class="w-4 h-4 ml-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>

                    <div class="px-6 py-3">
                        <div class="flex items-center">
                            <p class="font-sans text-lg text-white">Zoom Call</p>
                            <svg class="w-4 h-4 ml-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>

                    <div class="px-6 py-3">
                        <p class="font-sans text-lg text-white">Lorem ipsum</p>
                    </div>

                    <div class="px-6 py-6 text-center">
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
                            Get Started
                        </a>
                    </div>
                </div>

                <div class="flex flex-col justify-between flex-shrink-0 w-4/5 divide-y-2 rounded-2xl bg-dark-gray sm:w-3/5 lg:w-full md:w-2/5 divide-neutral divide-opacity-50">
                    <div class="flex-1 p-6 lg:px-10 lg:py-8">
                        <h3 class="font-sans text-2xl font-normal text-white">Pro</h3>
                        <p class="mt-5 font-sans text-6xl font-normal text-white">$59</p>
                        <p class="mt-2 font-sans text-base font-normal text-white">per month</p>
                    </div>

                    <div class="px-6 py-3">
                        <div class="flex items-center">
                            <p class="font-sans text-lg text-white">10 Video courses</p>
                            <svg class="w-4 h-4 ml-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>

                    <div class="px-6 py-3">
                        <div class="flex items-center">
                            <p class="font-sans text-lg text-white">Slack Limited access</p>
                            <svg class="w-4 h-4 ml-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>

                    <div class="px-6 py-3">
                        <p class="font-sans text-lg text-white">Lorem ipsum Up to 3</p>
                    </div>

                    <div class="px-6 py-3">
                        <p class="font-sans text-lg text-white">Cancel anytime</p>
                    </div>

                    <div class="px-6 py-3">
                        <div class="flex items-center">
                            <p class="font-sans text-lg text-white">Lorem ipsum</p>
                            <svg class="w-4 h-4 ml-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>

                    <div class="px-6 py-3">
                        <div class="flex items-center">
                            <p class="font-sans text-lg text-white">Zoom Call</p>
                            <svg class="w-4 h-4 ml-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>

                    <div class="px-6 py-3">
                        <p class="font-sans text-lg text-white">Lorem ipsum</p>
                    </div>

                    <div class="px-6 py-6 text-center">
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
                            Get Started
                        </a>
                    </div>
                </div>
            </div>

            <div class="flex items-center justify-center mt-8 space-x-2">
                <div class="w-2.5 h-2.5 rounded-full bg-neutral"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-white"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-neutral"></div>
            </div>
        </div>

        <div class="hidden mt-24 lg:block">
            <table class="w-full text-left divide-y-2 divide-neutral">
                <thead>
                    <tr>
                        <td class="w-[20%] xl:w-[30%] pr-10 py-6">
                            <p class="font-sans text-base font-bold text-white">Plans</p>
                        </td>

                        <td class="px-10 py-6">
                            <p class="font-sans text-2xl font-normal text-white">Beginner</p>
                        </td>

                        <td class="px-10 py-6 bg-dark-gray">
                            <p class="font-sans text-2xl font-normal text-white">Intermediate</p>
                        </td>

                        <td class="px-10 py-6">
                            <p class="font-sans text-2xl font-normal text-white">Pro</p>
                        </td>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td class="pt-8 pb-12 pr-10 align-top">
                            <p class="font-sans text-lg text-white">Pricing</p>
                        </td>

                        <td class="px-10 pt-8 pb-12">
                            <p class="font-sans text-6xl font-normal text-white">$19</p>
                            <p class="mt-2 font-sans text-base font-normal text-white">per month</p>
                        </td>

                        <td class="px-10 pt-8 pb-12 bg-dark-gray">
                            <p class="font-sans text-6xl font-normal text-white">$29</p>
                            <p class="mt-2 font-sans text-base font-normal text-white">per month</p>
                        </td>

                        <td class="px-10 pt-8 pb-12">
                            <p class="font-sans text-6xl font-normal text-white">$59</p>
                            <p class="mt-2 font-sans text-base font-normal text-white">per month</p>
                        </td>
                    </tr>

                    <tr>
                        <td class="py-3 pr-10">
                            <div class="flex items-center">
                                <p class="font-sans text-lg text-white">Video courses</p>
                                <svg class="w-4 h-4 ml-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </td>

                        <td class="px-10 py-3">
                            <p class="font-sans text-lg text-white">10</p>
                        </td>

                        <td class="px-10 py-3 bg-dark-gray">
                            <p class="font-sans text-lg text-white">Unlimited</p>
                        </td>

                        <td class="px-10 py-3">
                            <p class="font-sans text-lg text-white">Unlimited</p>
                        </td>
                    </tr>

                    <tr>
                        <td class="py-3 pr-10">
                            <div class="flex items-center">
                                <p class="font-sans text-lg text-white">Slack</p>
                                <svg class="w-4 h-4 ml-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </td>

                        <td class="px-10 py-3">
                            <p class="font-sans text-lg text-white">Limited access</p>
                        </td>

                        <td class="px-10 py-3 bg-dark-gray">
                            <p class="font-sans text-lg text-white">Unlimited</p>
                        </td>

                        <td class="px-10 py-3">
                            <p class="font-sans text-lg text-white">Unlimited</p>
                        </td>
                    </tr>

                    <tr>
                        <td class="py-3 pr-10">
                            <p class="font-sans text-lg text-white">Lorem ipsum</p>
                        </td>

                        <td class="px-10 py-3">
                            <p class="font-sans text-lg text-white">Up to 3</p>
                        </td>

                        <td class="px-10 py-3 bg-dark-gray">
                            <p class="font-sans text-lg text-white">Up to 10</p>
                        </td>

                        <td class="px-10 py-3">
                            <p class="font-sans text-lg text-white">Up to 10</p>
                        </td>
                    </tr>

                    <tr>
                        <td class="py-3 pr-10">
                            <p class="font-sans text-lg text-white">Cancel anytime</p>
                        </td>

                        <td class="px-10 py-3">
                            <p class="font-sans text-lg text-white">Unlimited</p>
                        </td>

                        <td class="px-10 py-3 bg-dark-gray">
                            <p class="font-sans text-lg text-white">Unlimited</p>
                        </td>

                        <td class="px-10 py-3">
                            <p class="font-sans text-lg text-white">Unlimited</p>
                        </td>
                    </tr>

                    <tr>
                        <td class="py-3 pr-10">
                            <div class="flex items-center">
                                <p class="font-sans text-lg text-white">Lorem ipsum</p>
                                <svg class="w-4 h-4 ml-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </td>

                        <td class="px-10 py-3">
                            <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                        </td>

                        <td class="px-10 py-3 bg-dark-gray">
                            <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                        </td>

                        <td class="px-10 py-3">
                            <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                        </td>
                    </tr>

                    <tr>
                        <td class="py-3 pr-10">
                            <div class="flex items-center">
                                <p class="font-sans text-lg text-white">Zoom Call</p>
                                <svg class="w-4 h-4 ml-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </td>

                        <td class="px-10 py-3"></td>

                        <td class="px-10 py-3 bg-dark-gray">
                            <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                        </td>

                        <td class="px-10 py-3">
                            <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                        </td>
                    </tr>

                    <tr>
                        <td class="py-3 pr-10">
                            <p class="font-sans text-lg text-white">Lorem ipsum</p>
                        </td>

                        <td class="px-10 py-3">
                            <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                        </td>

                        <td class="px-10 py-3 bg-dark-gray">
                            <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                        </td>

                        <td class="px-10 py-3"></td>
                    </tr>

                    <tr>
                        <td class="py-3 pr-10"></td>

                        <td class="px-10 pt-3 pb-8">
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
                                Get Started
                            </a>
                        </td>

                        <td class="px-10 pt-3 pb-8 bg-dark-gray">
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
                                Get Started
                            </a>
                        </td>

                        <td class="px-10 pt-3 pb-8">
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
                                Get Started
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</section>

	)
}

export default Pricing7