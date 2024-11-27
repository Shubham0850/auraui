import React from "react";

const members = [
  {
    name: "Bessie Cooper",
    role: "Marketing Specialist",

    image: "https://auraui.com/memeimage/woman-potrait.webp",
  },
  {
    name: "Annette Black",
    role: "Marketing Manager",
    image: "https://auraui.com/memeimage/no-bg-woman.png",
  },
  {
    name: "Darrell Steward",
    role: "Director of Marketing",
    image: "https://auraui.com/memeimage/woman-potrait-3.jpeg",
  },
  {
    name: "Marvin McKinney",
    role: "COO",
    image: "https://auraui.com/memeimage/gradient-girl.png",
  },
];

const ExclusiveTeam = () => {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20 xl:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Our exclusive members
          </h2>
          <p className="mt-4 text-base font-normal leading-7 text-gray-600 lg:text-lg lg:mt-6 lg:leading-8">
            AuraUI gives you the blocks & components you need to create a truly
            professional website, landing page or admin panel for your SaaS.
          </p>
        </div>
      </div>

      <div className="grid px-5 grid-cols-1 gap-5 pt-4 mt-8 sm:mt-12 lg:mt-16 lg:grid-cols-2 xl:grid-cols-4">
        {members.map((member, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-2xl group ${
              index % 2 === 0 ? "-rotate-1" : "rotate-1"
            }`}
          >
            <img
              className="object-cover w-full transition-all duration-200 group-hover:rotate-2 group-hover:scale-110"
              src={member.image}
              alt={member.name}
              width={320}
              height={400}
            />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 w-full px-6 py-5">
              <p className="text-base font-semibold text-white">{member.name}</p>
              <p className="mt-1 text-sm font-normal text-gray-300">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExclusiveTeam;
