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
    <section className="py-16 bg-gray-50 sm:py-20 lg:py-28">
      <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Our Exclusive Members
          </h2>
          <p className="mt-4 text-base font-normal leading-7 text-gray-600 lg:text-lg lg:mt-6 lg:leading-8">
            AuraUI brings together an exceptional team of thinkers and doers —
            creative leaders shaping the future of digital design.
          </p>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 gap-8 mt-12 sm:mt-16 lg:mt-20 sm:grid-cols-2 xl:grid-cols-4">
          {members.map((member, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-lg group transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                className="object-cover w-full h-[400px] transition-all duration-500 group-hover:scale-110"
                src={member.image}
                alt={member.name}
                width={320}
                height={400}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-90 group-hover:opacity-80 transition-all duration-300"></div>
              <div className="absolute bottom-0 left-0 w-full px-6 py-6">
                <p className="text-lg font-semibold text-white sm:text-xl">
                  {member.name}
                </p>
                <p className="mt-1 text-sm sm:text-base font-normal text-gray-300">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExclusiveTeam;
