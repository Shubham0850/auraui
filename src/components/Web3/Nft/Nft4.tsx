import React from "react";
import Image from "next/image";
import { FaEthereum } from "react-icons/fa";
import Link from "next/link";

const nftItems = [
  {
    id: 1,
    title: "Auraui Art 1",
    imageUrl: "/web3Images/nft/nft16.jpeg",
    priceEth: 3.4,
    priceUsd: 6652,
    avatarUrl: "/web3Images/nft/nft4.jpeg",
  },
  {
    id: 2,
    title: "Auraui Art 2",
    imageUrl: "/web3Images/nft/nft17.jpeg",
    priceEth: 1.4,
    priceUsd: 2352,
    avatarUrl: "/web3Images/nft/nft3.jpeg",
  },
  {
    id: 3,
    title: "Auraui Art 3",
    imageUrl: "/web3Images/nft/nft18.jpeg",
    priceEth: 2.4,
    priceUsd: 4552,
    avatarUrl: "/web3Images/nft/nft1.png",
  },
];

const Nft4: React.FC = () => {
  return (
    <section className="relative py-12 bg-green-200 sm:py-16 lg:py-20">
    

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto text-center lg:max-w-lg">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Discover, Collect & Sell Exclusive NFTs on Auraui
          </h1>
          <p className="mt-4 text-lg font-normal text-gray-500 sm:text-xl">
            Explore a curated selection of artworks and collectibles. Auction
            ends soon!
          </p>
        </div>

        <div className="mt-12">
          <div className="flex w-full max-w-4xl gap-6 py-4 mx-auto -my-4 overflow-x-auto md:justify-center snap-x">
            {nftItems.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden transition-all duration-200 transform bg-white border border-gray-200 rounded-md snap-start scroll-ml-6 shrink-0 hover:shadow-lg hover:-translate-y-1 group"
              >
                <Link
                  href="#"
                  title={item.title}
                  className="block overflow-hidden aspect-w-1 aspect-h-1"
                >
                  <Image
                    className="object-cover w-full h-full transition-all duration-200 group-hover:scale-110"
                    src={item.imageUrl}
                    alt={item.title}
                    layout="responsive"
                    width={500}
                    height={500}
                  />
                </Link>
                <div className="p-4">
                  <div className="flex items-center justify-between space-x-6">
                    <p className="flex-1 text-base font-medium text-gray-900">
                      <Link href="#" title={item.title}>
                        {item.title}
                      </Link>
                    </p>
                    <Link
                      href="#"
                      title="Avatar"
                      className="relative inline-flex items-center justify-center shrink-0 w-7 h-7"
                    >
                      <div className="absolute inset-0">
                        <Image
                          className="w-full h-full object-cover"
                          src={item.avatarUrl}
                          alt="Avatar"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div className="relative text-xs font-bold text-white uppercase">
                        <FaEthereum />
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="p-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-500">Price</p>
                    <p className="text-sm font-medium text-gray-900">
                      {item.priceEth} ETH{" "}
                      <span className="text-gray-500">
                        ({item.priceUsd} USD)
                      </span>
                    </p>
                  </div>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center w-full px-4 py-2 mt-4 text-xs font-bold tracking-widest text-gray-900 uppercase transition-all duration-200 bg-transparent border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:border-gray-900 hover:bg-gray-900 hover:text-white"
                  >
                    Place Bid
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="#"
            title="Explore all NFTs"
            className="pb-2 text-sm font-medium text-gray-900 transition-all duration-200 border-b border-gray-900"
          >
            Explore all NFTs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Nft4;
