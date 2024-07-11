import React from "react";
import { FaTimes } from "react-icons/fa";

const wallets = [
  {
    name: "Metamask",
    logo: "https://www.auraui.com/web3Images/metamask-logo.png",
    borderColor: "border-gray-900",
  },
  {
    name: "Coinbase Wallet",
    logo: "https://www.auraui.com/web3Images/coinbase-logo.png",
    borderColor: "border-gray-200",
  },
  {
    name: "Wallet Connect",
    logo: "https://www.auraui.com/web3Images/wallet-connect-logo.png",
    borderColor: "border-gray-200",
  },
];

const CryptoConnector = () => {
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
                AuraUI WalletConnecter
              </p>
            </div>
            <button
              type="button"
              className="p-1 -m-1 text-gray-400 transition-all duration-200 bg-white rounded-md hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            >
              <span className="sr-only">Close</span>
              <FaTimes className="w-6 h-6" />
            </button>
          </div>

          <div className="mt-8 space-y-6 sm:mt-16">
            <div className="text-center sm:text-left">
              <p className="text-lg font-bold text-gray-900">Choose Wallet</p>
              <p className="mt-1 text-sm font-medium text-gray-500">
                Choose Best Aura wallet Connector
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
              {wallets.map((wallet, index) => (
                <div
                  key={index}
                  className={`overflow-hidden transition-all duration-200 bg-white border ${wallet.borderColor} cursor-pointer rounded-xl hover:border-gray-400 hover:bg-gray-50`}
                >
                  <div className="px-4 py-5">
                    <img
                      className="w-auto h-8 mx-auto"
                      src={wallet.logo}
                      alt={wallet.name}
                    />
                    <p className="mt-3 text-sm font-bold text-gray-900">
                      {wallet.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              className="inline-flex items-center justify-center w-full px-6 py-4 text-xs font-bold tracking-widest text-white uppercase transition-all duration-200 bg-gray-900 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-700"
            >
              Connect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoConnector;
