import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const SaasHero = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div>
            <header className="py-4 bg-gray-900 sm:py-5">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between">
                    <a href="#" className="shrink-0">
                        <img className="w-auto h-8" src="/logo-dark.png" alt="Logo" />
                    </a>
                    <div className="hidden lg:flex lg:items-center lg:space-x-4 lg:ml-12">
                        {['Products', 'Features', 'Pricing', 'Support'].map((item) => (
                            <a
                                href="#"
                                key={item}
                                className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-white transition-all duration-200 border border-transparent rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-700"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                    <div className="hidden sm:flex sm:items-center sm:justify-end sm:space-x-4 sm:ml-auto">
                        <a
                            href="#"
                            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white transition-all duration-200 border border-white rounded-full hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-gray-900"
                        >
                            Start free trial
                        </a>
                    </div>
                    <div className="flex ml-4 lg:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center p-2.5 text-white duration-200 border border-white rounded-full hover:bg-white hover:text-gray-900 transiton-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-gray-900"
                            onClick={() => setExpanded(!expanded)}
                            aria-expanded={expanded}
                        >
                            {expanded ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </header>

            <section className="pt-12 pb-48 overflow-hidden bg-gray-900 sm:pb-80 sm:pt-16 lg:pt-20 xl:pt-24 xl:pb-96">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-xl mx-auto text-center">
                        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl xl:text-6xl sm:tracking-tight">Grow SaaS Fast</h1>
                        <p className="mt-6 text-lg leading-7 text-white lg:leading-8 lg:text-xl">
                            Clarity gives you the blocks & components you need to create a truly professional website.
                        </p>
                        <div className="mt-8">
                            <a
                                href="#"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
                            >
                                Get 14 Days Free Trial
                            </a>
                        </div>
                        <p className="mt-8 text-sm font-normal text-gray-400">No credit card required • Cancel anytime</p>
                    </div>
                    <div className="relative mt-12 sm:mt-16 lg:mt-20">
                        <img
                            className="absolute top-auto w-full max-w-5xl mx-auto -mb-48 -translate-x-1/2 left-1/2"
                            src="https://landingfoliocom.imgix.net/store/collection/saasui/images/hero/2/video-mockup.svg"
                            alt="Video Mockup"
                        />
                        <div className="absolute inset-0 grid w-full h-full mt-20 sm:mt-36 lg:mt-40 xl:mt-44 place-items-center">
                            <button
                                type="button"
                                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white transition-all duration-200 border border-white lg:text-base lg:py-4 lg:px-8 rounded-xl bg-white/10 backdrop-blur-lg hover:bg-white/20"
                            >
                                <svg className="w-auto h-4 mr-3 -ml-1 lg:h-5" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1 3.80425V14.1958C1 15.7666 2.7279 16.7243 4.06 15.8917L12.3732 10.696C13.6265 9.91266 13.6265 8.08734 12.3732 7.304L4.06 2.10825C2.7279 1.27569 1 2.23338 1 3.80425Z"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                Play 1 min video
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SaasHero;
