import React from "react";
import TwitterCard from "./TwitterCard"; // Adjust the path as needed

const TwitterCardExample = () => {
	const tweetData = {
		username: "Raju",
		name: "Raju",
		profileImage: "/memeimage/akshay1.webp",
		tweet: "Ekkis din main paise double.",
		organization: "Lakshmi chit fund"
	};

	return (
		<TwitterCard {...tweetData} />
	);
};

export default TwitterCardExample;
