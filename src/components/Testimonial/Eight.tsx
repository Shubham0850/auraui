import React from 'react'

type Props = {}

const eight = (props: Props) => {
	return (
		<section className="py-10 bg-white sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
            <img className="object-cover w-32 h-32 mx-auto rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/4/avatar.jpg" alt="" />
            <p className="mt-6 text-lg font-semibold text-black">Mark Tanker, <span className="font-normal text-gray-600">California</span></p>
            <blockquote className="max-w-xl mx-auto mt-7">
                <p className="text-xl leading-relaxed text-black">“Amet minim mollit non deserunt ullam co est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.”</p>
            </blockquote>
        </div>
    </div>
</section>

	)
}

export default eight