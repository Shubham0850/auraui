import React from "react";
import IosToggle from "./IosToggle"; // Adjust the path as needed

const IosToggleExample = () => {
	const handleToggle = (state: "off" | "on") => {
		console.log("Toggle state:", state);
	};

	return (
		<IosToggle initialState="off" onToggle={handleToggle} />
	);
};

export default IosToggleExample;
