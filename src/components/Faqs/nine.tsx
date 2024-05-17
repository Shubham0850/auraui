import React from 'react'

type Props = {}

const nine = (props: Props) => {
	return (
<section className="relative bg-dark-gray">
    <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-black"></div>
    </div>

    <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
        <div className="py-12 sm:py-16 bg-black lg:col-span-2 lg:py-20">
            <div className="px-6 sm:px-8 lg:px-12 xl:pr-16">
                <h2 className="font-sans text-2xl font-normal text-white">Frequently Asked Questions</h2>
                <p className="mt-6 font-sans text-lg text-opacity-50 text-white">Nunc aenean risus nam risus neque lacus quis aliquam. Pulvinar dignissim id sem habitant. Mi, sed proin non venenatis nam.</p>
            </div>
        </div>

        <div className="py-12 sm:py-16 bg-dark-gray lg:col-span-3 lg:py-20">
            <div className="px-6 sm:px-8 lg:px-12 xl:pl-16">
                <ul className="space-y-12">
                    <li className="flex items-start">
                        <div className="w-2.5 h-2.5 flex-shrink-0 mt-4 rounded-full bg-neutral"></div>
                        <div className="ml-9">
                            <p className="font-sans text-3xl font-normal sm:text-4xl text-white">Cras quis nulla commodo, aliquam lectus sed, blandit augue?</p>
                            <p className="mt-4 font-sans text-xl font-normal text-opacity-50 text-white">Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula.</p>
                        </div>
                    </li>

                    <li className="flex items-start">
                        <div className="w-2.5 h-2.5 flex-shrink-0 mt-4 rounded-full bg-neutral"></div>
                        <div className="ml-9">
                            <p className="font-sans text-3xl font-normal sm:text-4xl text-white">Cras quis nulla commodo, aliquam lectus sed, blandit augue?</p>
                            <p className="mt-4 font-sans text-xl font-normal text-opacity-50 text-white">Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula.</p>
                        </div>
                    </li>

                    <li className="flex items-start">
                        <div className="w-2.5 h-2.5 flex-shrink-0 mt-4 rounded-full bg-neutral"></div>
                        <div className="ml-9">
                            <p className="font-sans text-3xl font-normal sm:text-4xl text-white">Cras quis nulla commodo, aliquam lectus sed, blandit augue?</p>
                            <p className="mt-4 font-sans text-xl font-normal text-opacity-50 text-white">Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula.</p>
                        </div>
                    </li>

                    <li className="flex items-start">
                        <div className="w-2.5 h-2.5 flex-shrink-0 mt-4 rounded-full bg-neutral"></div>
                        <div className="ml-9">
                            <p className="font-sans text-3xl font-normal sm:text-4xl text-white">Cras quis nulla commodo, aliquam lectus sed, blandit augue?</p>
                            <p className="mt-4 font-sans text-xl font-normal text-opacity-50 text-white">Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>

	)
}

export default nine