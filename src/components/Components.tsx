import { useState } from 'react'
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
    "Stats",
    "Teams",
    "Contact",
    // "Button",
    // "Card",
    // "Modal",
    // "Accordion",
    // "Tabs",
    // "Dropdown",
    // "Input",
    // "Checkbox",
    // "Radio",
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
		if (tag === "" || tag === activeTag) {
			setActiveTag("");
			setFilteredComponents(components);
			return;
		}
		setActiveTag(tag);
		setFilteredComponents(components.filter(c => c.tag.toLowerCase().includes(tag.toLowerCase())));
	};

	return (
		<div>
			<div className=''>
				<div className="py-12 border border-t-0 border-customDark">
					<div className="flex flex-col justify-center items-center px-4">
						<h1 className='text-2xl font-bold mb-4'>Browse 189+ Components</h1>
						<PlaceholdersAndVanishInput
							placeholders={placeholders}
							onChange={handleChange}
							onSubmit={onSubmit}
						/>
						<div className="flex flex-wrap gap-2 mt-4">
							<button
								type="button"
								onClick={() => handleTagClick("")}
								className={`border border-customDark px-2 py-1 rounded-md ${activeTag === '' ? 'bg-black' : 'bg-customDark'}`}
							>
								<p className='text-[#b9b9b9] text-xs'>All</p>
							</button>
							{tags.map((tag) => (
								<button
									type="button"
									onClick={() => handleTagClick(tag)}
									key={tag}
									className={`border border-customDark px-2 py-1 rounded-md ${activeTag === tag ? 'bg-black' : 'bg-customDark'}`}
								>
									<p className='text-[#b9b9b9] text-xs'>{tag}</p>
								</button>
							))}
						</div>
					</div>
				</div>

			</div>
			<div className="mt-10   gap-4 md:columns-2 lg:columns-3 space-y-4 ">
				{filteredComponents.map((component) => (
					<a
						key={component.id}
						href={component.link}
						className="flex flex-col gap-1.5 cursor-pointer group"
					>
						<div className="w-full p-2 bg-gray-100 dark:bg-[#282829] rounded-2xl group-hover:ring-1 group-hover:ring-gray-300 dark:group-hover:ring-white/10 transition-all">
							<Image
								src={component.imgSrc}
								alt={component.name}
								width={1000}
								height={500}
								className="w-full rounded-xl"
							/>
						</div>
						<span className="text-xs text-gray-500 dark:text-gray-500 px-1">{component.name}</span>
					</a>
				))}
			</div>
		</div>
	)
}

export default Components