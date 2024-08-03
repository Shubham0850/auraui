import React from "react";

function Pricing9() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-black">
      <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
        <div className="max-w-lg mx-auto text-left sm:text-center">
          <h2 className="tracking-tighter text-white">
            <span className="font-sans text-4xl font-normal md:text-6xl">
              {" "}
              Pricing{" "}
            </span>
            <span className="font-serif text-5xl italic md:text-7xl">
              {" "}
              Options{" "}
            </span>
          </h2>
          <p className="mt-6 font-sans text-lg font-normal text-opacity-50 text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dolor
            urna, tincidunt sed.
          </p>

          <div className="inline-flex items-center justify-center p-1 mt-8 rounded-full bg-neutral-light bg-opacity-20">
            <button
              type="button"
              className="px-8 py-2 font-sans text-base rounded-full bg-white text-black"
            >
              Yearly
            </button>
            <button
              type="button"
              className="px-8 py-2 font-sans text-base bg-transparent rounded-full text-white"
            >
              Monthly
            </button>
          </div>
        </div>

        <div className="grid max-w-4xl grid-cols-1 gap-6 mx-auto mt-12 text-left sm:gap-8 sm:text-center sm:grid-cols-2">
          <div className="transition-all duration-200 border-2 border-primary rounded-2xl hover:bg-dark-gray">
            <div className="p-6 sm:px-10 sm:py-8">
              <h3 className="font-sans text-2xl font-normal text-white">
                Beginner
              </h3>
              <p className="mt-2 font-sans text-lg font-normal text-opacity-50 text-white lg:px-8">
                Start your journey into baking wonderful bread
              </p>
              <p className="mt-6 font-sans text-6xl font-normal text-white">
                $9.99
              </p>
              <p className="mt-2 font-sans text-base font-normal text-white">
                per month
              </p>
            </div>
          </div>

          <div className="transition-all duration-200 border-2 border-neutral rounded-2xl hover:bg-dark-gray">
            <div className="p-6 sm:px-10 sm:py-8">
              <h3 className="font-sans text-2xl font-normal text-white">Pro</h3>
              <p className="mt-2 font-sans text-lg font-normal text-opacity-50 text-white lg:px-8">
                Learn advanced skills and bake the best bread ever
              </p>
              <p className="mt-6 font-sans text-6xl font-normal text-white">
                $49.99
              </p>
              <p className="mt-2 font-sans text-base font-normal text-white">
                per month
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            title=""
            className="
                    inline-flex
                    items-center
                    justify-center
                    px-5
                    py-2
                    font-sans
                    text-base
                    font-semibold
                    transition-all
                    duration-200
                    border-2 border-transparent
                    rounded-full
                    sm:leading-8
                    bg-white
                    sm:text-lg
                    text-black
                    hover:bg-opacity-90
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary
                "
            role="button"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}

export default Pricing9;
