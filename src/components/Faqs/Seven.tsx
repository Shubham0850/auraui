import React from 'react'

type Props = {}

const seven = (props: Props) => {
	return (
		<section className="relative overflow-hidden bg-white">
    <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-blue-600"></div>
    </div>

    <div className="absolute top-0 left-0 -translate-x-[60%] -translate-y-[75%] z-10">
        <div className="border-[8px] border-white rounded-full w-80 h-80 opacity-20 lg:opacity-100"></div>
    </div>

    <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
        <div className="relative px-4 py-16 bg-blue-600 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24">
            <div className="absolute bottom-0 right-0 translate-x-[25%] translate-y-[75%]">
                <div className="border-[8px] border-white rounded-full w-96 h-96 opacity-20 lg:opacity-100"></div>
            </div>

            <div className="relative max-w-lg mx-auto lg:mr-auto lg:max-w-md">
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">Frequently asked questions</h2>
                <p className="mt-4 text-base font-normal leading-7 text-blue-300 lg:text-lg lg:mt-6 lg:leading-8">Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.</p>
            </div>
        </div>

        <div className="px-4 py-16 bg-white sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
            <div className="max-w-lg mx-auto xl:max-w-xl">
                <div className="flow-root">
                    <div className="-my-10 divide-y divide-gray-200">
                        <div className="py-10">
                            <h3 className="text-xl font-semibold text-gray-900">Q. How this theme is different from others in market?</h3>
                            <p className="mt-3 text-base font-normal text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
                        </div>

                        <div className="py-10">
                            <h3 className="text-xl font-semibold text-gray-900">Q. What payment method do you support?</h3>
                            <p className="mt-3 text-base font-normal text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
                        </div>

                        <div className="py-10">
                            <h3 className="text-xl font-semibold text-gray-900">Q. Will I get money back if I am not satisfied?</h3>
                            <p className="mt-3 text-base font-normal text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
                        </div>

                        <div className="py-10">
                            <h3 className="text-xl font-semibold text-gray-900">Q. How do you provide supports plugins?</h3>
                            <p className="mt-3 text-base font-normal text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

	)
}

export default seven