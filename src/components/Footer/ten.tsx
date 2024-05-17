import React from 'react'

type Props = {}

const ten = (props: Props) => {
	return (
<footer className="relative py-12 overflow-hidden bg-black lg:py-20 sm:py-16">
    <div className="absolute bottom-0 transform -translate-x-1/2 translate-y-96 left-1/2">
        <svg className="opacity-50 blur-3xl filter" style={{filter: 'blur(64px)'}} width="643" height="408" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M183.151 216.787C86.498 123.868-62.309 137.493 30.03 41.445c92.337-96.049 494.126-6.876 590.779 86.043 96.652 92.919-148.432 154.396-240.769 250.445-92.338 96.048-100.237-68.228-196.889-161.146Z" fill="url(#a)" />
            <defs>
                <linearGradient id="a" x1="663.766" y1="168.785" x2="303.65" y2="469.667" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" style={{stopColor: 'var(--color-cyan-500)'}} />
                    <stop offset="100%" style={{stopColor: 'var(--color-purple-500)'}} />
                </linearGradient>
            </defs>
        </svg>
    </div>

    <div className="absolute inset-0">
        <img className="object-cover w-full h-full opacity-50" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png" alt="" />
    </div>

    <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="items-center space-y-8 text-center lg:justify-between lg:flex lg:text-left lg:space-y-0 lg:space-x-8">
            <div>
                <a href="#" title="" className="flex">
                    <img className="w-auto mx-auto h-9 lg:mx-0" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/logo.svg" alt="" />
                </a>
            </div>

            <div className="max-w-md mx-auto lg:mx-0">
                <p className="text-lg font-normal text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, ipsum nibh felis neque hendrerit.</p>
            </div>

            <div className="flex items-center justify-center space-x-10 lg:justify-end">
                <a href="#" title="" className="pb-2 text-base font-normal transition-all duration-200 border-b border-gray-600 text-gray-50 hover:text-white hover:border-white"> Terms & Conditions </a>

                <a href="#" title="" className="pb-2 text-base font-normal transition-all duration-200 border-b border-gray-600 text-gray-50 hover:text-white hover:border-white"> Privacy Policy </a>
            </div>
        </div>
    </div>
</footer>

	)
}

export default ten