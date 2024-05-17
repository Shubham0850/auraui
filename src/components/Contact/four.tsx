import React from 'react'

type Props = {}

const four = (props: Props) => {
	return (
		<section className="py-12 overflow-hidden bg-gray-900 sm:py-16 lg:py-20 xl:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid max-w-6xl grid-cols-1 mx-auto gap-y-12 lg:grid-cols-2 lg:gap-x-16 xl:gap-x-24">
            <div className="relative flex flex-col justify-between max-w-lg lg:py-12 lg:max-w-none">
                <div className="flex-1">
                    <p className="text-sm font-normal tracking-widest uppercase">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500"> Have a project in mind? </span>
                    </p>
                </div>

                <div className="mt-6 lg:mt-auto">
                    <h2 className="text-3xl font-normal text-white sm:text-4xl lg:text-5xl xl:text-6xl">We help you to grow your business faster & easier.</h2>
                    <p className="mt-4 text-base font-normal text-gray-400 lg:max-w-xs sm:text-lg sm:mt-6">Amet minim mollit non deserunt ullamco est sit aliqua dolor.</p>
                </div>
            </div>

            <div className="relative flex items-center justify-center">
                <div className="absolute right-0 transform translate-x-4 -translate-y-1/2 top-1/2">
                    <svg className="filter blur-3xl" width="619" height="371" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M355.661 40.206C507.908 40.206 619-61.411 619 58.454 619 178.319 219.912 371 67.665 371s0-192.681 0-312.546c0-119.865 135.749-18.248 287.996-18.248Z" fill="url(#e)" />
                        <defs>
                            <linearGradient id="e" x1="0" y1="371" x2="36.57" y2="-50.529" gradientUnits="userSpaceOnUse">
                                <stop offset="0%" style={{stopColor: 'var(--color-cyan-500)'}} />
                                <stop offset="100%" style={{stopColor: 'var(--color-purple-500)'}} />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <div className="relative overflow-hidden bg-black rounded-xl">
                    <div className="p-6 sm:py-8 sm:px-9">
                        <p className="text-xl font-normal text-white">Let us know about your project & we will help you grow your business from scratch.</p>

                        <form action="#" method="POST" className="mt-8 space-y-4">
                            <div>
                                <label htmlFor="" className="sr-only"> Full name </label>
                                <div>
                                    <input type="text" name="" id="" placeholder="First & Last name" className="block w-full px-5 py-4 text-base text-white placeholder-gray-500 bg-black rounded-md focus:border-white focus:ring-1 focus:ring-white" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="" className="sr-only"> Email address </label>
                                <div>
                                    <input type="email" name="" id="" placeholder="Email address" className="block w-full px-5 py-4 text-base text-white placeholder-gray-500 bg-black rounded-md focus:border-white focus:ring-1 focus:ring-white" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="" className="sr-only"> Phone number </label>
                                <div>
                                    <input type="tel" name="" id="" placeholder="Phone number" className="block w-full px-5 py-4 text-base text-white placeholder-gray-500 bg-black rounded-md focus:border-white focus:ring-1 focus:ring-white" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="" className="sr-only"> Message </label>
                                <div>
                                    <textarea name="" id="" placeholder="Write your message" rows={4} className="block w-full px-5 py-4 text-base text-white placeholder-gray-500 bg-black rounded-md resize-y focus:border-white focus:ring-1 focus:ring-white"></textarea>
                                </div>
                            </div>

                            <div>
                                <div className="relative inline-flex mt-2 group">
                                    <div className="absolute transition-all duration-200 rounded-md -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                                    <button type="button" className="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white bg-black border border-transparent rounded-md" role="button">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

	)
}

export default four