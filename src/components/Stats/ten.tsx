import React from 'react'

type Props = {}

const ten = (props: Props) => {
	return (
		<section className="py-12 sm:py-16 lg:py-20 bg-black">
    <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-5 gap-x-16">
            <div className="text-center lg:col-span-2 lg:text-left">
                <h2 className="tracking-tighter text-white">
                    <span className="font-sans text-4xl font-normal"> Some </span>
                    <span className="font-serif text-5xl italic"> statistics. </span>
                </h2>
                <p className="mt-6 font-sans text-lg text-opacity-50 text-white">Nunc aenean risus nam risus neque lacus quis aliquam. Pulvinar dignissim id sem habitant. Mi, sed proin non venenatis nam.</p>
                <div className="mt-8">
                    <a
                        href="#"
                        title=""
                        className="
                            inline-flex
                            items-center
                            justify-center
                            px-5
                            py-2
                            font-sans
                            text-base
                            font-semibold
                            transition-all
                            duration-200
                            bg-transparent
                            border-2
                            rounded-full
                            sm:leading-8
                            text-white
                            border-primary
                            hover:bg-white
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
                            hover:text-black
                            sm:text-lg
                            focus:ring-offset-secondary
                        "
                        role="button"
                    >
                        Learn More
                        <svg className="w-6 h-6 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </a>
                </div>
            </div>

            <div className="lg:col-span-3">
                <div className="grid grid-cols-2 gap-5">
                    <div className="rounded-lg bg-dark-gray">
                        <div className="px-4 py-5 md:p-8 sm:p-6">
                            <p className="font-sans text-3xl font-normal sm:text-5xl md:text-6xl text-white">1,800</p>
                            <h3 className="font-serif text-4xl italic sm:text-6xl sm:block md:text-7xl text-white">students</h3>
                        </div>
                    </div>

                    <div className="rounded-lg bg-dark-gray">
                        <div className="px-4 py-5 md:p-8 sm:p-6">
                            <p className="font-sans text-3xl font-normal sm:text-5xl md:text-6xl text-white">28</p>
                            <h3 className="font-serif text-4xl italic sm:text-6xl sm:block md:text-7xl text-white">teachers</h3>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-5 mt-5 transform lg:-translate-x-16">
                    <div className="rounded-lg bg-dark-gray">
                        <div className="px-4 py-5 md:p-8 sm:p-6">
                            <p className="font-sans text-3xl font-normal sm:text-5xl md:text-6xl text-white">300k</p>
                            <h3 className="font-serif text-4xl italic sm:text-6xl sm:block md:text-7xl text-white">breads</h3>
                        </div>
                    </div>

                    <div className="rounded-lg bg-dark-gray">
                        <div className="px-4 py-5 sm:p-6 md:p-8">
                            <p className="font-sans text-3xl font-normal sm:text-5xl md:text-6xl text-white">30</p>
                            <h3 className="font-serif text-4xl italic sm:text-6xl sm:block md:text-7xl text-white">countries</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

	)
}

export default ten