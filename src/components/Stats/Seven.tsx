import React from 'react'

type Props = {}

const seven = (props: Props) => {
	return (
		<section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center xl:max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">The only platform that creates unique & rare UI Kits with TailwindCSS</h2>
        </div>

        <div className="relative mt-12 lg:mt-20 lg:max-w-5xl lg:mx-auto">
            <div className="absolute -inset-2">
                <div className="w-full h-full mx-auto opacity-30 blur-lg filter" style={{background: "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)"}}></div>
            </div>

            <div className="relative grid grid-cols-1 px-16 py-12 overflow-hidden text-center bg-white sm:grid-cols-2 gap-y-12 lg:grid-cols-4 rounded-2xl gap-x-20">
                <div className="flex flex-col items-center">
                    <p className="text-5xl font-bold text-gray-900 lg:mt-3 lg:order-2 font-pj">110+</p>
                    <h3 className="mt-5 text-sm font-bold tracking-widest text-gray-600 uppercase lg:mt-0 lg:order-1 font-pj">Blocks</h3>
                </div>

                <div className="flex flex-col items-center">
                    <p className="text-5xl font-bold text-gray-900 lg:mt-3 lg:order-2 font-pj">29</p>
                    <h3 className="mt-5 text-sm font-bold tracking-widest text-gray-600 uppercase lg:mt-0 lg:order-1 font-pj">Templates</h3>
                </div>

                <div className="flex flex-col items-center">
                    <p className="text-5xl font-bold text-gray-900 lg:mt-3 lg:order-2 font-pj">3400+</p>
                    <h3 className="mt-5 text-sm font-bold tracking-widest text-gray-600 uppercase lg:mt-0 lg:order-1 font-pj">Customers</h3>
                </div>

                <div className="flex flex-col items-center">
                    <p className="text-5xl font-bold text-gray-900 lg:mt-3 lg:order-2 font-pj">2844</p>
                    <h3 className="mt-5 text-sm font-bold tracking-widest text-gray-600 uppercase lg:mt-0 lg:order-1 font-pj">Support Tickets</h3>
                </div>
            </div>
        </div>
    </div>
</section>

	)
}

export default seven