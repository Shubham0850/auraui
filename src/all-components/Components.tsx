import React, { useState } from 'react'
import { components } from './Data'
import Image from 'next/image'
import { PlaceholdersAndVanishInput } from '@/components/ui/animated-search'

function Components() {
	const [filteredComponents, setFilteredComponents] = useState(components);
	const [activeTag, setActiveTag] = useState('');
	const placeholders = [
		"Hero",
		"Navbar",
		"Footer",
		"Testimonial",
		"Pricing",
	];
	const tags = [
		"Hero",
		"Navbar",
		"Footer",
		"Testimonial",
		"Pricing",
		"Nft",
		"Cta",
		"Blog",
		"Gallery",
		"Feature",
		"Faqs",
		"Integration",
		"Logocloud",
		"Newsletter",
		"Steps",
		"Teams",
		"Button",
		"Card",
		"Modal",
		"Accordion",
		"Tabs",
		"Dropdown",
		"Input",
		"Checkbox",
		"Radio",
	];

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tag = e.target.value.toLowerCase();
    const filteredComponents = components.filter(component => component.tag.toLowerCase().includes(tag));
    setFilteredComponents(filteredComponents);
};

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	const handleTagClick = (tag: string) => {
		setActiveTag(tag);
		const filteredComponents = components.filter(component => component.tag.toLowerCase().includes(tag.toLowerCase()));
		setFilteredComponents(filteredComponents);
	};

	return (
		<div>
			<div className=''>
				<div className="py-12 border border-t-0 border-customDark">
					<div className="flex flex-col justify-center items-center px-4">
						<h1 className='text-2xl font-bold mb-4'>Search from 100+ Components</h1>
						<PlaceholdersAndVanishInput
							placeholders={placeholders}
							onChange={handleChange}
							onSubmit={onSubmit}
						/>
						<div className="flex flex-wrap gap-2 mt-4">
							{tags.map((tag, index) => (
								<button onClick={() => handleTagClick(tag)} key={index} className={`border border-customDark px-2 py-1 rounded-md ${activeTag === tag ? 'bg-black' : 'bg-customDark'}`}>
									<p className='text-[#b9b9b9] text-xs'>{tag}</p>
								</button>
							))}
						</div>
					</div>
				</div>

			</div>
			<div className="mt-10   gap-4 md:columns-2 lg:columns-3 space-y-4 ">
				{filteredComponents.map((component, index) => (
					<a
						key={index}
						href={component.link}
						className="flex flex-col items-left cursor-pointer"
					>
						<div className="w-[100%] p-2 bg-gray-100 dark:bg-[#282829] rounded-2xl ">
							<Image
								src={component.imgSrc}
								alt="Image"
								width={1000}
								height={500}
								className="w-full rounded-xl"
							/>
						</div>
					</a>
				))}
			</div>
		</div>
	)
}

export default Components