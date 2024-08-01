import React from 'react'

function Pricing13() {
	return (
		<section class="py-12 bg-gray-50 sm:py-16 lg:py-20">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="text-center">
            <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">Choose your plan</h2>
            <p class="mt-5 text-lg font-normal text-gray-900 font-pj">Premium UI Kit, affordable for everyone</p>
        </div>

        <div class="grid max-w-3xl grid-cols-1 mx-auto mt-8 text-center sm:grid-cols-2 sm:mt-16 gap-y-5 gap-x-10">
            <div class="overflow-hidden bg-white border border-gray-200 rounded-2xl">
                <div class="p-6 md:p-10">
                    <p class="text-lg font-bold text-gray-900 font-pj">Pay monthly</p>
                    <p class="mt-4 text-base font-normal leading-7 text-gray-600 font-pj">Lorem ipsum dolor sit amet, consect etur adipiscing elit dora.</p>
                    <p class="mt-8 text-xl font-bold text-gray-900 font-pj">$19/month</p>
                    <p class="mt-1 text-xl font-bold text-gray-900 font-pj">$228/year</p>
                    <a
                        href="#"
                        title=""
                        class="
                            inline-flex
                            items-center
                            justify-center
                            px-8
                            py-3.5
                            mt-10
                            text-base
                            font-bold
                            text-gray-900
                            transition-all
                            duration-200
                            border-2 border-gray-400
                            rounded-xl
                            font-pj
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
                            hover:bg-gray-900
                            focus:bg-gray-900
                            hover:text-white
                            focus:text-white
                            hover:border-gray-900
                            focus:border-gray-900
                        "
                        role="button"
                    >
                        Get monthly plan
                    </a>
                </div>
            </div>

            <div class="relative">
                <div class="absolute -inset-2">
                    <div class="w-full h-full mx-auto rotate-180 opacity-30 blur-lg filter" style="background: linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)"></div>
                </div>

                <div class="relative overflow-hidden bg-white border border-gray-200 rounded-2xl">
                    <div class="p-6 md:p-10">
                        <p class="text-lg font-bold text-gray-900 font-pj">Pay yearly</p>
                        <p class="mt-4 text-base font-normal leading-7 text-gray-600 font-pj">Lorem ipsum dolor sit amet, consect etur adipiscing elit dora.</p>
                        <p class="mt-8 text-xl font-bold text-gray-900 font-pj">$12/month</p>
                        <p class="mt-1 text-xl font-bold text-gray-900 font-pj">$144/year</p>
                        <a
                            href="#"
                            title=""
                            class="
                                relative
                                inline-flex
                                items-center
                                justify-center
                                px-8
                                py-3.5
                                mt-10
                                text-base
                                font-bold
                                text-white
                                transition-all
                                duration-200
                                bg-gray-900
                                border border-transparent
                                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
                                font-pj
                                hover:bg-opacity-90
                                rounded-xl
                            "
                            role="button"
                        >
                            Get yearly plan
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <p class="max-w-md mx-auto mt-10 text-base font-normal leading-7 text-center text-gray-600 font-pj">Looking for a bigger commitment? <a href="#" title="" class="font-bold">Let’s talk</a> and we’ll bring something great for you</p>
    </div>
</section>

	)
}

export default Pricing13