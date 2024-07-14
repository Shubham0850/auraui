import React from 'react'

function ElementPreviewWrapper({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex items-center justify-center py-10 md:py-32 ">
			{children}
		</div>
	)
}

export default ElementPreviewWrapper