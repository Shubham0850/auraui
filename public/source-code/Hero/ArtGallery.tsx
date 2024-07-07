import { FaBars, FaShoppingCart } from 'react-icons/fa';

const ArtGalleryHero = () => {
    return (
        <section>
            <header className="bg-white">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 xl:px-12">
                    <div className="flex items-center justify-between h-16 lg:h-[72px]">
                        <a href="#" className="items-center flex-shrink-0 inline-flex">
                            <img className="w-auto h-8" src="/logo-light.png" alt="Logo" />
                        </a>
                        <div className="hidden lg:flex lg:justify-start lg:ml-16 lg:space-x-8 xl:space-x-14">
                            {['All Artworks', 'All Artists', 'Sell Your Artwork'].map((item) => (
                                <a href="#" key={item} className="text-base font-medium text-gray-900 transition-all duration-200 rounded hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                                    {item}
                                </a>
                            ))}
                        </div>
                        <div className="flex items-center justify-end ml-auto space-x-5">
                            <div className="hidden lg:flex lg:items-center lg:space-x-8">
                                {['Create Free Account', 'Login'].map((item) => (
                                    <a href="#" key={item} className="text-base font-medium text-gray-900 transition-all duration-200 rounded hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                                        {item}
                                    </a>
                                ))}
                            </div>
                            <button type="button" className="p-2 -m-2 text-gray-900 transition-all duration-200 lg:hidden hover:text-gray-700">
                                <FaBars className="w-6 h-6" />
                            </button>
                            <button type="button" className="relative p-2 -m-2 text-gray-900 transition-all duration-200 hover:text-gray-700">
                                <FaShoppingCart className="w-6 h-6" />
                                <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-indigo-600 rounded-full">3</span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <div className="relative py-12 overflow-hidden bg-gray-100 sm:py-16 lg:py-20 xl:py-24">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="flex flex-col">
                        <div className="max-w-md mx-auto text-center xl:max-w-lg lg:mx-0 lg:text-left">
                            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl lg:leading-tight xl:text-6xl">Collect rare ✨ digital artworks</h1>
                            <p className="mt-5 text-lg font-medium text-gray-900 lg:mt-8">Buy & sell NFTs from world’s top artists</p>
                            <div className="mt-8 lg:mt-10">
                                <a href="#" className="inline-flex items-center justify-center px-8 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-600">
                                    Explore all artwork
                                </a>
                            </div>
                            <div className="mt-8 lg:mt-12">
                                <svg className="w-auto h-4 mx-auto text-gray-300 lg:mx-0" viewBox="0 0 172 16" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    {/* SVG path lines */}
                                </svg>
                            </div>
                            <div className="inline-grid grid-cols-2 mt-8 gap-x-8">
                                {[
                                    { label: '50k+', sublabel: 'Artwork' },
                                    { label: '17k+', sublabel: 'Artists' }
                                ].map((item) => (
                                    <div key={item.label}>
                                        <p className="text-4xl font-bold text-gray-900">{item.label}</p>
                                        <p className="mt-2 text-base font-medium text-gray-500">{item.sublabel}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative mt-12 lg:mt-0 lg:absolute lg:-translate-y-1/2 lg:translate-x-1/2 lg:top-1/2 w-full overflow-auto">
                            <div className="flex gap-8 flex-nowrap">
                                {[
                                    { img: 'artwork-1.png', title: 'Ely-The Angry Girl', price: '2.00 ETH', usd: '$9,394' },
                                    { img: 'artwork-2.png', title: 'Jenny-Retro Art', price: '1.67 ETH', usd: '$7,627' },
                                    { img: 'artwork-3.png', title: 'Naila-The Angry Girl', price: '2.40 ETH' }
                                ].map((art, index) => (
                                    <div key={index} className="flex-none w-full sm:w-2/3 lg:w-full lg:flex-1 whitespace-nowrap overflow-hidden bg-white rounded shadow-xl">
                                        <div className="aspect-w-4 aspect-h-3">
                                            <img className="object-cover w-full h-full" src={`https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/hero/2/${art.img}`} alt="" />
                                        </div>
                                        <div className="p-8">
                                            <p className="text-lg font-bold text-gray-900">{art.title}</p>
                                            <p className="mt-6 text-xs font-medium tracking-widest text-gray-500 uppercase">Reserved Price</p>
                                            <div className="flex items-end mt-1">
                                                <p className="text-lg font-bold text-gray-900">{art.price}</p>
                                                {art.usd && <p className="ml-2 text-sm font-medium text-gray-500">{art.usd}</p>}
                                            </div>
                                            <div className="grid grid-cols-2 mt-7 gap-x-4">
                                                <a href="#" className="inline-flex items-center justify-center px-4 py-4 text-sm font-bold text-white transition-all duration-200 bg-gray-900 border border-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-700">
                                                    Place a bid
                                                </a>
                                                <a href="#" className="inline-flex items-center justify-center px-4 py-4 text-sm font-bold text-gray-900 transition-all duration-200 bg-transparent border border-gray-300 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                                                    View artwork
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ArtGalleryHero;
