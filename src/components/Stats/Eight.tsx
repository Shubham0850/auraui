import React from 'react'

type Props = {}

const eight = (props: Props) => {
	return (
		<section className="py-12 bg-white sm:py-16 lg:py-20">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="lg:max-w-xl lg:mx-auto sm:text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">We create solutions that make dev life easier</h2>
            <p className="mt-8 text-lg font-normal text-gray-600 font-pj">You can easily build anything with Rareblocks</p>
        </div>

        <div className="grid max-w-6xl grid-cols-1 gap-6 mx-auto mt-8 sm:mt-12 lg:mt-16 xl:mt-20 sm:grid-cols-3 lg:gap-x-12 xl:gap-x-20">
            <div className="overflow-hidden bg-white border border-gray-300 rounded-2xl">
                <div className="p-6 lg:py-10 lg:px-9">
                    <svg className="w-16 h-16 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <p className="mt-24 text-5xl font-bold text-gray-900 font-pj">430k</p>
                    <p className="mt-4 text-lg font-normal leading-tight text-gray-900 font-pj">Active customers</p>
                </div>
            </div>

            <div className="overflow-hidden bg-white border border-gray-300 rounded-2xl">
                <div className="p-6 lg:py-10 lg:px-9">
                    <svg className="w-16 h-16 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <p className="mt-24 text-5xl font-bold text-gray-900 font-pj">149k</p>
                    <p className="mt-4 text-lg font-normal leading-tight text-gray-900 font-pj">Email subscribers</p>
                </div>
            </div>

            <div className="overflow-hidden bg-white border border-gray-300 rounded-2xl">
                <div className="p-6 lg:py-10 lg:px-9">
                    <svg className="w-16 h-16 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <p className="mt-24 text-5xl font-bold text-gray-900 font-pj">$1M+</p>
                    <p className="mt-4 text-lg font-normal leading-tight text-gray-900 font-pj">Monthly transaction</p>
                </div>
            </div>
        </div>
    </div>
</section>

	)
}

export default eight