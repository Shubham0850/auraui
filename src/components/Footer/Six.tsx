import React from 'react'

type Props = {}

const six = (props: Props) => {
	return (
		<footer className="py-12 bg-gray-900 sm:py-16 lg:py-20">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
            <h5 className="max-w-xl text-3xl font-bold text-white sm:text-4xl xl:text-5xl font-pj">Build beautiful landing pages fast using Rareblocks Kit.</h5>

            <div className="max-w-sm mt-8 md:mt-0">
                <ul className="space-y-7">
                    <li className="flex items-start">
                        <svg className="flex-shrink-0 w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="ml-5 text-xl font-normal text-white font-pj"> 8502 Preston Rd. Inglewood, Maine 98380, USA </span>
                    </li>

                    <li className="flex items-start">
                        <svg className="flex-shrink-0 w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="ml-5 text-xl font-normal text-white font-pj"> support@rareblocks.xyz </span>
                    </li>
                </ul>
            </div>
        </div>

        <hr className="mt-12 border-gray-600 md:mt-20" />

        <div className="mt-10 lg:flex lg:items-center lg:justify-between md:mt-16">
            <ul className="flex items-center space-x-6 sm:space-x-12">
                <li>
                    <a href="#" title="" className="text-lg font-medium text-white transition-all duration-200 font-pj hover:text-gray-300"> About </a>
                </li>

                <li>
                    <a href="#" title="" className="text-lg font-medium text-white transition-all duration-200 font-pj hover:text-gray-300"> Features </a>
                </li>

                <li>
                    <a href="#" title="" className="text-lg font-medium text-white transition-all duration-200 font-pj hover:text-gray-300"> Works </a>
                </li>

                <li>
                    <a href="#" title="" className="text-lg font-medium text-white transition-all duration-200 font-pj hover:text-gray-300"> Support </a>
                </li>
            </ul>

            <p className="mt-8 text-lg font-normal text-white lg:mt-0 font-pj">© Copyright 2021, All Rights Reserved</p>
        </div>
    </div>
</footer>

	)
}

export default six