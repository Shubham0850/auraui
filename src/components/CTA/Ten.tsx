import React from 'react'

type Props = {}

const ten = (props: Props) => {
	return (
		<section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
    <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-24 gap-y-10">
            <div>
                <img className="object-cover w-16 h-16 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/9/female-avatar-1.png" alt="" />
                <blockquote>
                    <p className="mt-6 text-xl leading-relaxed text-black">“Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.”</p>
                </blockquote>
                <p className="mt-6 text-base font-semibold text-black">Jenny Wilson</p>
                <p className="mt-1 text-base text-gray-600">Project Manager at Microsoft</p>
            </div>

            <div>
                <div className="overflow-hidden bg-white">
                    <div className="p-8 lg:px-12 lg:py-10">
                        <h3 className="text-2xl font-semibold text-black">Join 5,482 other developers</h3>
                        <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>

                        <a href="#" title="" className="flex items-center justify-center w-full px-4 py-4 mt-8 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border-2 border-transparent rounded-md hover:bg-blue-700 focus:bg-blue-700" role="button">
                            Create your first website
                        </a>

                        <a href="#" title="" className="flex items-center justify-center w-full px-4 py-4 mt-4 text-base font-semibold text-black transition-all duration-200 bg-transparent border-2 border-black rounded-md hover:bg-black focus:bg-black hover:text-white focus:text-white" role="button">
                            Talk to sales
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

	)
}

export default ten