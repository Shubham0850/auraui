import React from 'react';
import { motion } from 'framer-motion';
import { GrLike } from 'react-icons/gr';
import { FaEye } from 'react-icons/fa';
import { Heart } from 'lucide-react';

const LikeCard = () => {
	return (
		<motion.div
			className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden w-[250px]"
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			whileHover={{ scale: 1.05 }}
			transition={{ type: "spring", stiffness: 400, damping: 10 }}
		>
			<motion.img
				src="https://bs-uploads.toptal.io/blackfish-uploads/components/seo/5992700/og_image/optimized/1005_Design-Patterns-in-React_Cover-9181bdf0d728b73804e11b6344434b0c.png"
				alt="Martin Gray"
				className="w-full object-contain rounded-t-lg"
				initial={{ scale: 0.8 }}
				animate={{ scale: 1 }}
				transition={{ type: "spring", stiffness: 300 }}
			/>
			<div className="p-4">
				<div className="flex items-center mb-2">
					<img
						src="/memeimage/babubhaiya.jpg"
						alt="Kristin Watson"
						className="w-8 h-8 rounded-full"
					/>
					<div className="ml-4">
						<p className="font-bold text-xs text-gray-700">Semi Design Component</p>
						<p className="text-gray-500 text-xs">Babu Rao</p>
					</div>
				</div>
				<div className="flex space-x-5 text-gray-500 border-t border-gray-200 pt-2">
					<div className="flex items-center">
						<Heart className="w-3 h-3 mr-1 text-gray-400" strokeWidth={3} />
						<p className='text-xs'>1052</p>
					</div>
					<div className="flex items-center">
						<FaEye className="w-3 h-3 mr-1 text-gray-400" />
						<p className='text-xs'>33,492</p>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default LikeCard;
