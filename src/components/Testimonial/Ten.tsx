import React from 'react'

type Props = {}

const ten = (props: Props) => {
	return (
		<section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 md:grid-cols-2 md:gap-16 gap-y-10">
            <div className="-mx-4 sm:mx-0">
                <img className="w-full max-w-md mx-auto" src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/8/woman.png" alt="" />
            </div>

            <div className="xl:pr-24">
                <img className="w-auto h-7" src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/8/crowny-logo.svg" alt="" />

                <blockquote className="mt-8 md:mt-16">
                    <p className="text-xl font-medium leading-relaxed text-gray-900 font-pj">“Simply the best. Better than all the rest. I’d recommend this product to beginners and all users.”</p>
                </blockquote>

                <blockquote className="mt-5 md:mt-7">
                    <p className="text-lg font-normal leading-relaxed text-gray-900 font-pj">“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.”</p>
                </blockquote>

                <p className="mt-5 text-base font-bold text-gray-400 md:mt-7 font-pj">Leslie Alexander, Product Designer at Crowny</p>
            </div>
        </div>
    </div>
</section>

	)
}

export default ten