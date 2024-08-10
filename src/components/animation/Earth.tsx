import React from 'react'

function Earth() {
	return (
		<div className="relative flex w-[250px] max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border border-gray-100 dark:border-customDark bg-white dark:bg-customDark md:shadow-md h-[250px]">
			<div className="absolute top-0 -bottom-24 left-0 right-0">
			<iframe src='https://my.spline.design/earthdayandnight-c9b41f0254791867e05e30096d6494ee/' width="100%" height="100%"/>
			</div>
		</div>
	)
}

export default Earth