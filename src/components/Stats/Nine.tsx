import React from 'react'

type Props = {}

const nine = (props: Props) => {
	return (
		<section className="py-12 sm:py-16 lg:py-20 bg-black">
    <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
        <div className="text-center">
            <h2 className="tracking-tighter text-white">
                <span className="font-sans text-4xl font-normal sm:text-5xl md:text-6xl"> Some </span>
                <span className="font-serif text-5xl italic sm:text-6xl md:text-7xl"> statistics. </span>
            </h2>
        </div>

        <div className="grid grid-cols-1 mt-12 overflow-hidden text-center border rounded-lg sm:grid-cols-2 lg:grid-cols-4 border-neutral">
            <div className="px-4 py-5 transition-all duration-200 sm:p-6 md:p-8 hover:bg-dark-gray">
                <p className="font-sans text-5xl font-normal text-white">1,800</p>
                <h3 className="mt-2 font-sans text-lg font-normal text-white">Students</h3>
            </div>

            <div className="px-4 py-5 transition-all duration-200 border-t sm:p-6 md:p-8 border-neutral sm:border-t-0 sm:border-l hover:bg-dark-gray">
                <p className="font-sans text-5xl font-normal text-white">28</p>
                <h3 className="mt-2 font-sans text-lg font-normal text-white">Teachers</h3>
            </div>

            <div className="px-4 py-5 transition-all duration-200 border-t sm:p-6 md:p-8 border-neutral lg:border-t-0 lg:border-l hover:bg-dark-gray">
                <p className="font-sans text-5xl font-normal text-white">30</p>
                <h3 className="mt-2 font-sans text-lg font-normal text-white">Countries</h3>
            </div>

            <div className="px-4 py-5 transition-all duration-200 border-t sm:p-6 md:p-8 border-neutral sm:border-l lg:border-t-0 hover:bg-dark-gray">
                <p className="font-sans text-5xl font-normal text-white">300k</p>
                <h3 className="mt-2 font-sans text-lg font-normal text-white">Breads</h3>
            </div>
        </div>
    </div>
</section>

	)
}

export default nine