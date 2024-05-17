import React from 'react'

type Props = {}

const seven = (props: Props) => {
	return (
		<footer className="py-12 bg-black lg:py-20 sm:py-16">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:justify-between">
            <div className="text-center lg:text-left">
                <a href="#" title="" className="flex">
                    <img className="w-auto mx-auto h-9 lg:mx-0" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/logo.svg" alt="" />
                </a>
                <p className="mt-6 text-base font-normal text-gray-400 lg:max-w-xs">Lorem ipsum dolor sit amet, consec tetur adipiscing elit.</p>
            </div>

            <div className="mt-6 lg:mt-0">
                <div className="flex items-center justify-center lg:justify-start">
                    <div className="inline-flex items-center justify-center px-5 py-4 border border-gray-800 lg:w-auto rounded-2xl">
                        <svg className="w-6 h-6 text-gray-600 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <a href="#" title="" className="ml-4 text-lg font-normal text-white"> hello@landingfolio.com </a>
                    </div>
                </div>

                <ul className="flex items-center justify-center mt-8 space-x-6 lg:justify-start sm:space-x-12">
                    <li>
                        <a href="#" title="" className="flex text-base font-normal transition-all duration-200 transform text-gray-50 hover:text-white hover:-translate-y-1"> About </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-base font-normal transition-all duration-200 transform text-gray-50 hover:text-white hover:-translate-y-1"> Features </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-base font-normal transition-all duration-200 transform text-gray-50 hover:text-white hover:-translate-y-1"> Pricing & Plans </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-base font-normal transition-all duration-200 transform text-gray-50 hover:text-white hover:-translate-y-1"> Contact </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</footer>

	)
}

export default seven