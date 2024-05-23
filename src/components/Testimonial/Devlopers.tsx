import React from "react";

type Props = {};

const Developers = (props: Props) => {
  return (
    <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            What our customers say
          </h2>
          <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Our customers love Aura UI for its simplicity and ease of use.
            Here's what they have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 px-4 mt-12 sm:px-0 xl:mt-20 xl:grid-cols-4 sm:grid-cols-2">
          <div className="overflow-hidden bg-white rounded-md">
            <div className="px-5 py-6">
              <div className="flex items-center justify-between">
                <img
                  className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                  src="/memeimage/boy1.jpeg"
                  alt=""
                />
                <div className="min-w-0 ml-3 mr-auto">
                  <p className="text-base font-semibold text-black truncate">
                    Rahul Sharma
                  </p>
                  <p className="text-sm text-gray-600 truncate">@rahul_s</p>
                </div>
                <a href="#" title="" className="inline-block text-sky-500">
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                  </svg>
                </a>
              </div>
              <blockquote className="mt-5">
                <p className="text-base text-gray-800">
                  Aura UI made it so simple. My new site is so much faster and
                  easier to work with than my old site.
                  <span className="block text-sky-500">#easy_to_use</span>
                </p>
              </blockquote>
            </div>
          </div>

          <div className="overflow-hidden bg-white rounded-md">
            <div className="px-5 py-6">
              <div className="flex items-center justify-between">
                <img
                  className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-2.jpg"
                  alt=""
                />
                <div className="min-w-0 ml-3 mr-auto">
                  <p className="text-base font-semibold text-black truncate">
                    Abhishek Singh
                  </p>
                  <p className="text-sm text-gray-600 truncate">@priya_singh</p>
                </div>
                <a href="#" title="" className="inline-block text-sky-500">
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                  </svg>
                </a>
              </div>
              <blockquote className="mt-5">
                <p className="text-base text-gray-800">
                  Simply the best. Better than all the rest. I’d recommend Aura
                  UI to beginners and advanced users.
                  <span className="block text-sky-500">#top_quality</span>
                </p>
              </blockquote>
            </div>
          </div>

          <div className="overflow-hidden bg-white rounded-md">
            <div className="px-5 py-6">
              <div className="flex items-center justify-between">
                <img
                  className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                  src="/memeimage/girl2.jpeg"
                  alt=""
                />
                <div className="min-w-0 ml-3 mr-auto">
                  <p className="text-base font-semibold text-black truncate">
                    Ananya Patel
                  </p>
                  <p className="text-sm text-gray-600 truncate">
                    @ananya_patel
                  </p>
                </div>
                <a href="#" title="" className="inline-block text-sky-500">
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                  </svg>
                </a>
              </div>
              <blockquote className="mt-5">
                <p className="text-base text-gray-800">
                  Aura UI is fantastic! It's both fast and efficient, perfect
                  for my needs.
                  <span className="block text-sky-500">#super_fast</span>
                </p>
              </blockquote>
            </div>
          </div>

          <div className="overflow-hidden bg-white rounded-md">
            <div className="px-5 py-6">
              <div className="flex items-center justify-between">
                <img
                  className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                  src="/memeimage/udayshetty.jpg"
                  alt=""
                />
                <div className="min-w-0 ml-3 mr-auto">
                  <p className="text-base font-semibold text-black truncate">
                    Vikram Rao
                  </p>
                  <p className="text-sm text-gray-600 truncate">@vikram_rao</p>
                </div>
                <a href="#" title="" className="inline-block text-sky-500">
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                  </svg>
                </a>
              </div>
              <blockquote className="mt-5">
                <p className="text-base text-gray-800">
                  Couldn’t have asked for a better service. Aura UI is simply
                  amazing.
                  <span className="block text-sky-500">#amazing_service</span>
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Developers;
