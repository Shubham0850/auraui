import React, { useState, useEffect } from 'react';

function AllButtons() {
	const [buttonComponents, setButtonComponents] = useState<JSX.Element[]>([]);

	useEffect(() => {
		const loadComponents = async () => {
			const components = await Promise.all(
				Array.from({ length: 10 }, async (_, i) => {
					const { default: Component } = await import(`./Button${i + 1}`);
					return (
						<div key={`button-${i}`} className='flex justify-center items-center p-5'>
							<Component />
						</div>
					);
				})
			);
			setButtonComponents(components);
		};

		loadComponents();
	}, []);

	return (
		<div className='grid grid-cols-6 p-10 gap-10'>
			{buttonComponents}
		</div>
	);
}

export default AllButtons;