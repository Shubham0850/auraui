import React from "react";

const Project: React.FC = () => {
  const phases = [
    {
      title: "Phase 1",
      name: "Launch",
      description:
        "Initiate the project with essential resources and define key milestones to ensure a strong start.",
    },
    {
      title: "Phase 2",
      name: "Investment",
      description:
        "Secure funding and invest in critical areas to drive growth and innovation.",
    },
    {
      title: "Phase 3",
      name: "Connection",
      description:
        "Establish partnerships and connect with stakeholders to expand our reach and impact.",
    },
    {
      title: "Phase 4",
      name: "Growth",
      description:
        "Scale the project by leveraging resources, optimizing processes, and reaching new markets.",
    },
  ];

  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-stretch grid-cols-1 gap-y-12 lg:grid-cols-12 gap-x-16">
          <div className="lg:col-span-4">
            <div className="aspect-w-4 aspect-h-3  lg:aspect-none">
              <img
                className="object-cover w-full rounded-md h-full"
                src="https://source.unsplash.com/random/800x1000?business"
                alt="Roadmap Illustration"
              />
            </div>
          </div>

          <div className="flex flex-col justify-between lg:col-span-8">
            <div className="max-w-md">
              <h2 className="text-3xl font-bold text-gray-900">
                Our Roadmap to Success
              </h2>
              <p className="mt-4 text-base font-medium text-gray-500">
                Explore our strategic roadmap to achieve our vision and goals,
                ensuring a creative and collaborative journey.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-12 mt-12 sm:grid-cols-2 sm:mt-16 xl:gap-x-16">
              {phases.map((phase, index) => (
                <div key={index}>
                  <p className="text-sm font-medium text-gray-500">
                    {phase.title}
                  </p>
                  <p className="mt-4 text-xl font-bold text-gray-900">
                    {phase.name}
                  </p>
                  <p className="mt-4 text-base font-medium text-gray-500">
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
