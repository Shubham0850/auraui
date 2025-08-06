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
    image:
      "https://images.unsplash.com/photo-1514626585111-9aa86183ac98?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const ExclusiveTeam = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Elegant gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-200 via-white to-blue-200"></div>

      <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Our Exclusive Members
          </h2>
          <p className="mt-4 text-base font-normal leading-7 text-gray-600 lg:text-lg lg:mt-6 lg:leading-8">
            AuraUI gives you the blocks & components you need to create a truly
            professional website, landing page, or admin panel for your SaaS.
          </p>
        </div>
      </div>

      <div className="relative grid px-5 mx-auto max-w-7xl grid-cols-1 gap-6 pt-4 mt-12 sm:mt-16 lg:mt-20 sm:grid-cols-2 xl:grid-cols-4">
        {members.map((member, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-2xl group transform transition duration-300 ${
              index % 2 === 0 ? "-rotate-1" : "rotate-1"
            } hover:rotate-0`}
          >
            <img
              className="object-cover w-full h-[400px] transition-all duration-500 group-hover:scale-110"
              src={member.image}
              alt={member.name}
              width={320}
              height={400}
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full px-6 py-5">
              <p className="text-lg font-semibold text-white">{member.name}</p>
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
