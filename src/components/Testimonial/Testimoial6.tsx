import React from "react";

function Testimoial6() {
  return (
    <section className="py-12 bg-black sm:py-16 lg:py-20 xl:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-normal tracking-widest text-white uppercase">
            In the media
          </p>
        </div>

        <div className="grid max-w-6xl grid-cols-1 mx-auto mt-12 md:grid-cols-2 gap-x-24 sm:mt-16 lg:mt-20 gap-y-16">
          <div>
            <img
              className="w-auto h-8"
              src="https://landingfoliocom.imgix.net/store/collection/dusk/images/testimonial/5/techcrunch-logo.svg"
              alt=""
            />
            <blockquote>
              <p className="mt-10 text-xl font-normal text-white">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                vitae et ultricies sapien mauris, urna. Arcu justo, tellus in
                tellus, sed sed venenatis velit. Nisl nam augue elit at viverra
                euismod vitae. Est praesent mattis.”
              </p>
            </blockquote>
            <div className="inline-flex flex-col mt-6 md:mt-10">
              <a href="#" title="" className="text-base font-normal text-white">
                {" "}
                Read the article{" "}
              </a>
              <div className="w-full h-px mt-1 bg-gradient-to-r from-cyan-500 to-purple-500"></div>
            </div>
          </div>

          <div>
            <img
              className="w-auto h-8"
              src="https://landingfoliocom.imgix.net/store/collection/dusk/images/testimonial/5/new-york-times-logo.svg"
              alt=""
            />
            <blockquote>
              <p className="mt-10 text-xl font-normal text-white">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                vitae et ultricies sapien mauris, urna. Arcu justo, tellus in
                tellus, sed sed venenatis velit. Nisl nam augue elit at viverra
                euismod vitae. Est praesent mattis.”
              </p>
            </blockquote>
            <div className="inline-flex flex-col mt-6 md:mt-10">
              <a href="#" title="" className="text-base font-normal text-white">
                {" "}
                Read the article{" "}
              </a>
              <div className="w-full h-px mt-1 bg-gradient-to-r from-cyan-500 to-purple-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimoial6;
