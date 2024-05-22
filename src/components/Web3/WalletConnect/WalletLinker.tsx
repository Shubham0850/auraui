import React from "react";

const blockchains = [
  {
    name: "Ethereum",
    description: "Best BLockchain Network ",
    logo: "https://landingfoliocom.imgix.net/store/collection/niftyui/images/connect-wallet/2/ethereum-logo.png",
    selected: true,
  },
  {
    name: "Polygon",
    description: "Layer2 Blockchain Network",
    logo: "https://landingfoliocom.imgix.net/store/collection/niftyui/images/connect-wallet/2/polygon-logo.png",
  },
  {
    name: "Tezos",
    description: "Also,A Best blockchain Network. ",
    logo: "https://landingfoliocom.imgix.net/store/collection/niftyui/images/connect-wallet/2/tezos-logo.png",
  },
  {
    name: "Binance Chain",
    description: "Good Blockchain Network. ",
    logo: "https://landingfoliocom.imgix.net/store/collection/niftyui/images/connect-wallet/2/binance-logo.png",
  },
];

const wallets = [
  {
    name: "Metamask",
    logo: "https://landingfoliocom.imgix.net/store/collection/niftyui/images/connect-wallet/2/metamask-logo.png",
  },
  {
    name: "Coinbase Wallet",
    logo: "https://landingfoliocom.imgix.net/store/collection/niftyui/images/connect-wallet/2/coinbase-logo.png",
  },
  {
    name: "Wallet Connect",
    logo: "https://landingfoliocom.imgix.net/store/collection/niftyui/images/connect-wallet/2/wallet-connect-logo.png",
  },
];

const WalletLinker = () => {
  return (
    <div className="grid px-4 py-24 bg-gray-600 sm:px-6 lg:px-8 place-items-center">
      <div className="relative w-full max-w-xl mx-auto overflow-hidden bg-white rounded-xl">
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-xl font-bold text-gray-900">
                Connect your wallet
              </p>
              <p className="mt-1 text-base font-medium text-gray-500">
               This is the Best AuraUI Component
              </p>
            </div>
            <button
              type="button"
              className="p-1.5 text-gray-400 transition-all duration-200 bg-white border border-gray-200 rounded-full hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            >
              <span className="sr-only">Close</span>
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <hr className="mt-8 border-gray-200" />

          <div className="mt-6">
            <p className="text-base font-bold text-gray-900">
              Choose Blockchain
            </p>
            <div className="grid grid-cols-1 gap-4 mt-5 sm:grid-cols-2">
              {blockchains.map((blockchain, index) => (
                <div
                  key={index}
                  className={`relative overflow-hidden transition-all duration-200 bg-white border ${
                    blockchain.selected
                      ? "border-gray-900"
                      : "border-gray-200 opacity-60"
                  } cursor-pointer rounded-xl hover:bg-gray-50`}
                >
                  {blockchain.selected && (
                    <div className="absolute top-0 right-0 p-2">
                      <svg
                        className="w-6 h-6 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                  <div className="px-4 py-5">
                    <div className="flex items-start">
                      <img
                        className="object-contain w-8 h-8 shrink-0"
                        src={blockchain.logo}
                        alt={blockchain.name}
                      />
                      <div className="ml-4">
                        <p className="text-sm font-bold text-gray-900">
                          {blockchain.name}
                        </p>
                        <p className="mt-1 text-sm font-medium text-gray-500">
                          {blockchain.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <p className="text-base font-bold text-gray-900">Choose Wallet</p>
            <div className="grid grid-cols-1 gap-4 mt-5">
              {wallets.map((wallet, index) => (
                <div
                  key={index}
                  className="overflow-hidden transition-all duration-200 bg-white border border-gray-200 cursor-pointer opacity-60 rounded-xl hover:border-gray-400 hover:bg-gray-50"
                >
                  <div className="p-4">
                    <div className="flex items-center">
                      <img
                        className="w-auto h-6 shrink-0"
                        src={wallet.logo}
                        alt={wallet.name}
                      />
                      <p className="flex-1 ml-4 text-sm font-bold text-gray-900">
                        {wallet.name}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletLinker;
