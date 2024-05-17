import React from 'react'

type Props = {}

const four = (props: Props) => {
	return (
		<section className="py-12 bg-white sm:py-16 lg:py-20">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between md:space-x-16">
            <div className="max-w-lg xl:max-w-2xl">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">The only platform that creates rare UI Kits.</h2>
            </div>

            <div className="flex items-center flex-grow mt-12 space-x-4 sm:space-x-8 lg:space-x-16 md:mt-0">
                <div>
                    <p className="text-4xl font-bold text-gray-900 xl:text-6xl font-pj">1.5M</p>
                    <p className="mt-2 text-base font-normal text-gray-600 lg:text-xl font-pj">Active Customers</p>
                </div>

                <div>
                    <svg className="w-4 h-auto text-gray-300" viewBox="0 0 16 81" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0.83205 0.5547 0.5547 -0.83205 1 56)" />
                        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0.83205 0.5547 0.5547 -0.83205 1 21)" />
                        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0.83205 0.5547 0.5547 -0.83205 1 49)" />
                        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0.83205 0.5547 0.5547 -0.83205 1 14)" />
                        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0.83205 0.5547 0.5547 -0.83205 1 42)" />
                        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0.83205 0.5547 0.5547 -0.83205 1 7)" />
                        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0.83205 0.5547 0.5547 -0.83205 1 70)" />
                        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0.83205 0.5547 0.5547 -0.83205 1 35)" />
                        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0.83205 0.5547 0.5547 -0.83205 1 0)" />
                        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0.83205 0.5547 0.5547 -0.83205 1 63)" />
                        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0.83205 0.5547 0.5547 -0.83205 1 28)" />
                    </svg>
                </div>

                <div>
                    <p className="text-4xl font-bold text-gray-900 xl:text-6xl font-pj">4.8/5</p>
                    <p className="mt-2 text-base font-normal text-gray-600 lg:text-xl font-pj">Ratings on TrustPilot</p>
                </div>
            </div>
        </div>
    </div>
</section>

	)
}

export default four