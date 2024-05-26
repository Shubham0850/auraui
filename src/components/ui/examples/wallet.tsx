import React, { useState } from 'react';
import { motion } from 'framer-motion';

const WalletModal = () => {

	return (
		<div className={`inset-0 flex items-center justify-center`}>
			<div className="inset-0 bg-gray-900 bg-opacity-50"></div>
			<motion.div
				className="relative bg-white rounded-lg shadow-lg w-96 p-6"
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<button
					className="absolute top-4 right-4 text-gray-600"
				>
					<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
						<line x1="18" y1="6" x2="6" y2="18"></line>
						<line x1="6" y1="6" x2="18" y2="18"></line>
					</svg>
				</button>
				<h2 className="text-xl font-bold mb-1">Connect your wallet</h2>
				<p className="text-gray-600 mb-4">AuraUI WalletConnecter</p>
				<h3 className="text-lg font-semibold mb-1">Choose Wallet</h3>
				<p className="text-gray-600 mb-4">Choose Best Aura wallet Connector</p>
				<div className="flex justify-around">
					<div className="flex flex-col items-center border p-4 rounded-lg">
						<img src="/path/to/metamask-logo.png" alt="Metamask" className="w-12 h-12 mb-2" />
						<p className="font-semibold">Metamask</p>
					</div>
					<div className="flex flex-col items-center border p-4 rounded-lg">
						<img src="/path/to/coinbase-logo.png" alt="Coinbase Wallet" className="w-12 h-12 mb-2" />
						<p className="font-semibold">Coinbase Wallet</p>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default WalletModal;
