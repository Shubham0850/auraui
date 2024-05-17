import React from 'react'

type Props = {}

const eight = (props: Props) => {
	return (
		<section className="py-12 sm:py-16 lg:py-20 bg-black">
    <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
        <div className="text-left lg:text-center">
            <h2 className="tracking-tighter text-white">
                <span className="font-sans text-4xl font-normal sm:text-5xl md:text-6xl"> Frequently Asked </span>
                <span className="font-serif text-5xl italic sm:text-6xl md:text-7xl"> Questions </span>
            </h2>
            <p className="max-w-2xl mx-auto mt-6 font-sans text-lg text-opacity-50 text-white">Nunc aenean risus nam risus neque lacus quis aliquam. Pulvinar dignissim id sem habitant. Mi, sed proin non venenatis nam.</p>
        </div>

        <div className="grid grid-cols-1 mt-20 gap-y-16 gap-x-24 lg:grid-cols-2">
            <div>
                <p className="font-serif text-2xl font-semibold text-white">Cras quis nulla commodo, aliquam lectus sed, blandit augue?</p>
                <p className="mt-5 font-sans text-xl font-normal text-opacity-50 text-white">Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula.</p>
            </div>

            <div>
                <p className="font-serif text-2xl font-semibold text-white">Cras quis nulla commodo, aliquam lectus sed, blandit augue?</p>
                <p className="mt-5 font-sans text-xl font-normal text-opacity-50 text-white">Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula.</p>
            </div>

            <div>
                <p className="font-serif text-2xl font-semibold text-white">Cras quis nulla commodo, aliquam lectus sed, blandit augue?</p>
                <p className="mt-5 font-sans text-xl font-normal text-opacity-50 text-white">Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula.</p>
            </div>

            <div>
                <p className="font-serif text-2xl font-semibold text-white">Cras quis nulla commodo, aliquam lectus sed, blandit augue?</p>
                <p className="mt-5 font-sans text-xl font-normal text-opacity-50 text-white">Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula.</p>
            </div>
        </div>
    </div>
</section>

	)
}

export default eight