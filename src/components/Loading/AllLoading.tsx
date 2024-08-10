import React, { useState, useEffect } from 'react';

function AllLoading() {
	const [loadingComponents, setLoadingComponents] = useState<JSX.Element[]>([]);

	useEffect(() => {
		const loadComponents = async () => {
			const components = await Promise.all(
				Array.from({ length: 30 }, async (_, i) => {
					const { default: Component } = await import(`./Loading${i + 1}`);
					return (
						<div key={i} className='flex justify-center items-center p-5'>
							<Component color='#272727' />
						</div>
					);
				})
			);
			setLoadingComponents(components);
		};

		loadComponents();
	}, []);

	return (
		<div className='grid grid-cols-6 p-10 gap-10'>
			{loadingComponents}
		</div>
	);
}

export default AllLoading;