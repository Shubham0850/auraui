import React from 'react'

type Props = {}

const six = (props: Props) => {
	return (
		<section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 lg:items-stretch md:grid-cols-2 gap-y-8 gap-x-12 xl:gap-x-20">
            <div className="relative">
                <div className="aspect-w-4 aspect-h-3">
                    <img className="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/5/man-using-phone.jpg" alt="" />
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex items-center justify-center rounded-full w-28 h-28 bg-white/20">
                        <button type="button" className="flex items-center justify-center w-20 h-20 text-white transition-all duration-200 rounded-full bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:opacity-90">
                            <svg className="w-6 h-6 lg:w-8 lg:h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-between md:py-5">
                <blockquote>
                    <p className="text-2xl leading-relaxed text-black">You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save. No need to think twice before making it.</p>
                </blockquote>

                <div className="mt-6 lg:mt-auto">
                    <p className="text-xl font-semibold text-black">Jenny Wilson</p>
                    <p className="mt-2 text-base text-gray-600">Co-founder, Appson</p>
                </div>
            </div>
        </div>
    </div>
</section>

	)
}

export default six