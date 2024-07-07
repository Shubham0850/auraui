import React from "react";
import { FaUser, FaUsers } from "react-icons/fa";

type Props = {};

const CollaborateCTA: React.FC<Props> = () => {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-6">
            <div className="w-20 h-20 overflow-hidden bg-gray-300 rounded-full">
              <img
                className="object-cover w-full h-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/2/female-avatar-1.jpg"
                alt="Avatar 1"
              />
            </div>
            <div className="relative overflow-hidden bg-gray-300 border-4 border-white rounded-full w-28 h-28">
              <img
                className="object-cover w-full h-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/2/male-avatar-1.jpg"
                alt="Avatar 2"
              />
            </div>
            <div className="w-20 h-20 overflow-hidden bg-gray-300 rounded-full">
              <img
                className="object-cover w-full h-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/2/female-avatar-2.jpg"
                alt="Avatar 3"
              />
            </div>
          </div>

          <h2 className="mt-8 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Join <span className="border-b-4 border-yellow-300">10,000+</span>{" "}
            developers
          </h2>
          <p className="max-w-xl mx-auto mt-6 text-xl text-gray-600 md:mt-10">
            Discover the best practices, tools, and frameworks in web
            development with our community.
          </p>

          <a
            href="#"
            title="Get instant access"
            className="inline-flex items-center justify-center px-6 py-3 mt-8 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:mt-12 hover:bg-blue-700 focus:bg-blue-700"
          >
            <FaUsers className="w-5 h-5 mr-2" />
            Get instant access
          </a>
        </div>
      </div>
    </section>
  );
};

export default CollaborateCTA;
