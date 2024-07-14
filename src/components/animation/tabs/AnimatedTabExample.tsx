import React from "react";
import { FaHome, FaUser, FaCog } from "react-icons/fa";
import AnimatedTab from "./AnimatedTab"; // Adjust the path as needed

const HomeContent = () => <div>Home Content</div>;
const ProfileContent = () => <div>Profile Content</div>;
const SettingsContent = () => <div>Settings Content</div>;

const tabs = [
  { name: "home", label: "Home", icon: <FaHome />, component: <HomeContent /> },
  { name: "profile", label: "Profile", icon: <FaUser />, component: <ProfileContent /> },
  { name: "settings", label: "Settings", icon: <FaCog />, component: <SettingsContent /> },
];

const AnimatedTabExample = () => {
  return (
    <AnimatedTab tabs={tabs} />
  );
};

export default AnimatedTabExample;
