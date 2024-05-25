import React from "react";
import { ArrowRight } from "lucide-react";

interface Integration {
  name: string;
  logo: string;
  description: string;
}

const integrations: Integration[] = [
  {
    name: "Google Drive",
    logo: "https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/gmail-logo.png",
    description:
      "Easily manage your files and documents with seamless Google Drive integration.",
  },
  {
    name: "Dropbox",
    logo: "https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/slack-logo.png",
    description:
      "Access and share your files anytime, anywhere with Dropbox integration.",
  },
  {
    name: "Asana",
    logo: "https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/shopify-logo.png",
    description:
      "Streamline your project management process with Asana integration.",
  },
  {
    name: "Trello",
    logo: "https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/sketch-logo.png",
    description:
      "Organize your tasks and collaborate efficiently with Trello integration.",
  },
  {
    name: "Zoom",
    logo: "https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/twitter-logo.png",
    description: "Conduct virtual meetings effortlessly with Zoom integration.",
  },
  {
    name: "Notion",
    logo: "https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/intercom-logo.png",
    description:
      "Boost your productivity with comprehensive note-taking and collaboration using Notion.",
  },
];

const Seamless: React.FC = () => {
  return (
    <div>
      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Seamless Integrations
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
              Effortlessly connect with your favorite tools and services to
              enhance your workflow and productivity.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-12 lg:mt-16 xl:gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {integrations.map((integration) => (
              <div
                key={integration.name}
                className="overflow-hidden bg-white rounded shadow"
              >
                <div className="p-8">
                  <div className="flex items-center">
                    <img
                      className="flex-shrink-0 w-12 h-auto"
                      src={integration.logo}
                      alt={integration.name}
                    />
                    <div className="ml-5 mr-auto">
                      <p className="text-xl font-semibold text-black">
                        {integration.name}
                      </p>
                      <p className="mt-px text-sm text-gray-600">
                        Direct Integration
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-blue-600" />
                  </div>
                  <p className="text-base leading-relaxed text-gray-600 mt-7">
                    {integration.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="#"
              title=""
              className="inline-flex p-3 font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
            >
              Check all integrations
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Seamless;
