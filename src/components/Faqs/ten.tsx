import React from 'react'

type Props = {}

const ten = (props: Props) => {
	return (
		<section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-md">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="mt-4 text-base font-medium text-gray-500">In a creative workplace, employees with responsibly try different solutions</p>
        </div>

        <div className="grid grid-cols-1 gap-10 mt-12 sm:mt-16 lg:gap-12 lg:mt-20 lg:grid-cols-3">
            <div>
                <p className="text-lg font-bold text-gray-900">What exactly the NFT is?</p>
                <p className="mt-4 text-base font-medium text-gray-900">An NFT is a digital asset that represents real-world objects like art, music, in-game items and videos.</p>
                <p className="mt-4 text-base font-medium text-gray-900">They are bought and sold online, frequently with cryptocurrency, and they are generally encoded with the same underlying software as many cryptos.</p>
            </div>

            <div>
                <p className="text-lg font-bold text-gray-900">How can I collect NFT?</p>
                <p className="mt-4 text-base font-medium text-gray-900">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo sed eu nec vulputate accumsan, ultrices ipsum.</p>
                <p className="mt-4 text-base font-medium text-gray-900">Varius laoreet in sit viverra augue nulla gravida platea feugiat.</p>
            </div>

            <div>
                <p className="text-lg font-bold text-gray-900">When will be craft available?</p>
                <p className="mt-4 text-base font-medium text-gray-900">Lorem ipsum dolor sit amet, ipsum consectetur adipiscing elit.</p>
                <p className="mt-4 text-base font-medium text-gray-900">Commodo sed eu nec vulputate accumsan, ultrices ipsum.</p>
            </div>
        </div>
    </div>
</section>

	)
}

export default ten