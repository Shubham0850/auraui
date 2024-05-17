import React from 'react'

type Props = {}

const five = (props: Props) => {
	return (
		<section className="py-10 bg-gradient-to-r from-fuchsia-600 to-blue-600 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-left sm:text-center">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">Meet the team</h2>
            <p className="mt-4 text-xl text-white">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-8 sm:mt-12 xl:mt-20 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:gap-14">
            <div className="bg-white">
                <div className="py-8 px-9">
                    <p className="text-lg font-bold text-black">Jenny Wilson</p>
                    <p className="mt-1 text-gray-600 text-500">Founder</p>
                    <p className="mt-6 text-base text-gray-700">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
                </div>
            </div>

            <div className="bg-white">
                <div className="py-8 px-9">
                    <p className="text-lg font-bold text-black">Guy Hawkins</p>
                    <p className="mt-1 text-gray-600 text-500">CTO</p>
                    <p className="mt-6 text-base text-gray-700">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
                </div>
            </div>

            <div className="bg-white">
                <div className="py-8 px-9">
                    <p className="text-lg font-bold text-black">Jerome Bell</p>
                    <p className="mt-1 text-gray-600 text-500">CMO</p>
                    <p className="mt-6 text-base text-gray-700">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
                </div>
            </div>

            <div className="bg-white">
                <div className="py-8 px-9">
                    <p className="text-lg font-bold text-black">Jacob Jones</p>
                    <p className="mt-1 text-gray-600 text-500">Senior Software Engineer</p>
                    <p className="mt-6 text-base text-gray-700">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
                </div>
            </div>

            <div className="bg-white">
                <div className="py-8 px-9">
                    <p className="text-lg font-bold text-black">Annette Black</p>
                    <p className="mt-1 text-gray-600 text-500">Customer Success Manager</p>
                    <p className="mt-6 text-base text-gray-700">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
                </div>
            </div>

            <div className="bg-white">
                <div className="py-8 px-9">
                    <p className="text-lg font-bold text-black">Ronald Richards</p>
                    <p className="mt-1 text-gray-600 text-500">User Experience Designer</p>
                    <p className="mt-6 text-base text-gray-700">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
                </div>
            </div>
        </div>
    </div>
</section>

	)
}

export default five