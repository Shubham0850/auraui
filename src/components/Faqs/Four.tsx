import React from 'react'

type Props = {}

const four = (props: Props) => {
	return (
		<section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16 gap-y-12">
            <div>
                <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">FAQ</p>
                <h2 className="mt-6 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">Discover the most common questions.</h2>
                <p className="mt-5 text-lg font-normal text-gray-600 sm:mt-8 font-pj">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ornare adipiscing nunc, est nec, neque aliquet maecenas mi. Lacus, pharetra aliquam.</p>
            </div>

            <div>
                <div className="space-y-8">
                    <div className="relative">
                        <div className="absolute -inset-2">
                            <div className="w-full h-full mx-auto opacity-30 blur-lg filter" style={{background: 'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)'}}></div>
                        </div>

                        <div className="relative overflow-hidden bg-white border border-gray-200 rounded-lg shadow-lg">
                            <div className="px-6 py-5 sm:py-8 sm:px-9">
                                <p className="text-xl font-bold text-gray-900 font-pj">Does this theme supports plugins?</p>
                                <p className="mt-6 text-base font-normal leading-7 text-gray-600 font-pj">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            </div>
                        </div>
                    </div>

                    <div className="overflow-hidden bg-white border border-gray-200 rounded-lg">
                        <div className="px-6 py-5 sm:py-8 sm:px-9">
                            <p className="text-xl font-bold text-gray-900 font-pj">How to avail support?</p>
                            <p className="mt-6 text-base font-normal leading-7 text-gray-600 font-pj">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <a href="#" title="" className="pb-2 text-base font-bold leading-7 text-gray-900 transition-all duration-200 border-b-2 border-gray-900 hover:border-gray-600 font-pj focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 hover:text-gray-600">
                        Check all common questions
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

	)
}

export default four