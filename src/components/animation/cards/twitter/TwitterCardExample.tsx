import React from "react";
import TwitterCard from "./TwitterCard"; // Adjust the path as needed

const TwitterCardExample = () => {
  const tweetData = {
    username: "Raju",
    name: "Raju",
    profileImage: "/memeimage/akshay1.webp",
    tweet:
      "Ek zamana tha jab ham bhi garib hua karte the, rato rat crorepati ho gaye ham, Ekkis din mein paisa double.",
    organization: "Lakshmi chit fund",
  };

  return <TwitterCard {...tweetData} />;
};

export default TwitterCardExample;
