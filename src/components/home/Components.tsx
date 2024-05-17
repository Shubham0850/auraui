// components/ComponentSection.js
import React from 'react';

const CallToAction = () => {
	return (
		<div className="flex items-center justify-center">
			<div className="">
				<div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-md w-full max-w-md mx-auto">
					<div className="scale-50">
						<h2 className="text-center text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
							Join the mailing list
						</h2>
						<form className="flex flex-col space-y-4">
							<input
								type="email"
								placeholder="Email address"
								className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
							/>
							<button
								type="submit"
								className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
							>
								Subscribe
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

const categories = [
	{ name: 'Call To Action', items: 57 },
	{ name: 'Feature', items: 57 },
	{ name: 'Hero', items: 37 },
	{ name: 'Testimonial', items: 34 },
	{ name: 'Pricing', items: 31 },
	{ name: 'Footer', items: 31 },
	{ name: 'Blog sidebar', items: 26 },
	{ name: 'Team', items: 25 },
	{ name: 'Header', items: 23 },
	{ name: 'Stats', items: 22 },
	{ name: 'Steps', items: 22 },
	{ name: 'FAQ', items: 22 },
	{ name: 'Signup', items: 21 },
	{ name: 'Signin', items: 21 },
	{ name: 'Logo Cloud', items: 20 },
	{ name: 'Contact', items: 17 },
	{ name: 'Text Input', items: 15 },
	{ name: 'Featured Drops', items: 15 },
];

const ComponentSection = () => {
	return (
		<div className="py-20 ">
			<div className="max-w-7xl mx-auto">
				<div className="text-center">
					<h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">
						More components in these categories
					</h2>
				</div>
				<div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
					{categories.map((category) => (
						<div
							key={category.name}
							className="flex flex-col items-left cursor-pointer"
						>
							<div className="w-full h-[200px] bg-gray-200 dark:bg-gray-900 rounded-md mb-4"></div>
							{/* <CallToAction /> */}
							<h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">{category.name}</h3>
							<p className="text-sm text-gray-600 dark:text-gray-400">{category.items} items available</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ComponentSection;