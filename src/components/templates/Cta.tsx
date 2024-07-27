import React from 'react'

function TemplateCta() {
	return (
		<div className="border border-customDark">
			<section className="">
				<div className="mx-auto">
					<div className="relative py-12 overflow-hidden sm:py-16 lg:py-20">
						<div className="absolute inset-0">
							<img className="object-contain object-right w-full h-full transform scale-125" src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/3/background-pattern.svg" alt="" />
						</div>

						<div className="relative px-4 mx-auto sm:px-6 lg:px-8">
							<div className="relative">
								<div className="absolute"></div>

								<div className="relative grid grid-cols-1 lg:grid-cols-5 gap-y-12 gap-x-16 xl:gap-x-20">
									<div className="flex flex-col justify-between lg:col-span-3">
										<div className='mb-12'>
											<h1 className="text-4xl font-bold text-white sm:text-5xl">
												Get
												<span className="relative inline">
													<img className="absolute top-0 w-auto h-8 -right-8" src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/3/design-element.svg" alt="" />
													marketing </span
												><br />
												inspirations weekly
											</h1>
											<p className="mt-6 text-base font-normal leading-7 text-white text-opacity-80">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.</p>
										</div>

										<div className="mt-8 lg:mt-auto">
											<div className="flex -space-x-2">
												<img className="inline-block w-10 h-10 rounded-full sm:w-10 sm:h-10 ring-[2px] ring-customDark" src="https://auraui.com/memeimage/akshay1.webp" alt="" />
												<img className="inline-block w-10 h-10 rounded-full sm:w-10 sm:h-10 ring-[2px] ring-customDark" src="https://auraui.com/memeimage/babubhaiya.jpg" alt="" />
												<img className="inline-block w-10 h-10 rounded-full sm:w-10 sm:h-10 ring-[2px] ring-customDark" src="https://auraui.com/memeimage/boy1.jpeg" alt="" />
												<img className="inline-block w-10 h-10 rounded-full sm:w-10 sm:h-10 ring-[2px] ring-customDark" src="https://auraui.com/memeimage/girl2.jpeg" alt="" />
												<img className="inline-block w-10 h-10 rounded-full sm:w-10 sm:h-10 ring-[2px] ring-customDark" src="https://auraui.com/memeimage/girl3.webp" alt="" />
											</div>
											<p className="mt-4 text-base font-medium text-white">Join other 3200+ Marketers now</p>
										</div>
									</div>

									<div className="lg:col-span-2">

										<div className="mt-8 sm:mt-12">
											<p className="text-xs font-bold tracking-widest text-white uppercase text-opacity-70">Used by</p>
											<div className="inline-grid grid-cols-2 gap-8 mt-8 lg:gap-x-12">
												<img className="object-contain w-auto h-6" src="https://www.yoloclub.ai/logo.svg" alt="" />
												<img className="object-contain w-auto h-6" src="https://www.yoloclub.ai/logo.svg" alt="" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div >
	);
}

export default TemplateCta