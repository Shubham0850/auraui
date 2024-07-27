import { Button } from 'nextra/components';
import React from 'react';

function TemplatesHero() {
	return (
		<section>
			<div className="relative py-12 sm:py-16 lg:py-20 xl:pt-32 xl:pb-44 border border-customDark border-t-0">

				<div className="relative px-4 mx-auto sm:px-6 lg:px-8">
					<div className="max-w-xl mx-auto text-center lg:max-w-md xl:max-w-lg lg:text-left lg:mx-0">
						<h1 className="text-3xl font-bold text-white sm:text-4xl xl:text-5xl xl:leading-tight">Build SaaS Landing Page without Writing a Single Code</h1>
						<p className="mt-8 text-base font-normal leading-7 text-gray-400 lg:max-w-md xl:pr-0 lg:pr-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc nisl eu consectetur. Mi massa elementum odio eu viverra amet.</p>

						<div className="flex items-center justify-center mt-8 space-x-5 xl:mt-16 lg:justify-start">
							<Button>Get UI Kit Now</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default TemplatesHero