import React from "react";

function Testimoial9() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-black">
      <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
        <div className="text-center">
          <h2 className="tracking-tighter text-white">
            <span className="font-sans text-4xl font-normal sm:text-5xl md:text-6xl">
              {" "}
              See what{" "}
            </span>
            <span className="block font-serif text-5xl italic sm:inline sm:text-6xl md:text-7xl">
              {" "}
              our members{" "}
            </span>
            <span className="block font-sans text-4xl font-normal sm:inline sm:text-5xl md:text-6xl">
              {" "}
              are saying.{" "}
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-16 mt-12 lg:grid-cols-2 md:mt-16 lg:gap-y-20">
          <div className="sm:flex sm:items-start">
            <img
              className="flex-shrink-0 object-cover w-24 h-24 rounded-full"
              src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/testimonials/1/avatar-male-1.png"
              alt=""
            />
            <div className="mt-6 sm:ml-6 sm:mt-0">
              <blockquote>
                <p className="font-sans text-xl font-normal text-opacity-50 text-white">
                  Cras quis nulla commodo, aliquam lectus sed, blandit augue.
                  Cras ullamcorper bibendum bibendum. Duis tincidunt urna non
                  pretium porta. Nam condimentum vitae ligula.
                </p>
              </blockquote>
              <p className="mt-6 font-sans text-2xl font-normal text-white">
                Stanley Taber
              </p>
              <p className="mt-1.5 text-white text-sm font-sans font-normal text-opacity-50">
                Director at Lorem Ipsum
              </p>
            </div>
          </div>

          <div className="sm:flex sm:items-start">
            <img
              className="flex-shrink-0 object-cover w-24 h-24 rounded-full"
              src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/testimonials/1/avatar-female-1.png"
              alt=""
            />
            <div className="mt-6 sm:ml-6 sm:mt-0">
              <blockquote>
                <p className="font-sans text-xl font-normal text-opacity-50 text-white">
                  Donec facilisis tortor ut augue lacinia, at viverra est
                  semper. Sed sapien metus, scelerisque nec pharetra id, tempor
                  a tortor. Pellentesque non dignissim neque.
                </p>
              </blockquote>
              <p className="mt-6 font-sans text-2xl font-normal text-white">
                Ruveyda Crutzen
              </p>
              <p className="mt-1.5 text-white text-sm font-sans font-normal text-opacity-50">
                Project Manager at Lorem Ipsum
              </p>
            </div>
          </div>

          <div className="sm:flex sm:items-start">
            <img
              className="flex-shrink-0 object-cover w-24 h-24 rounded-full"
              src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/testimonials/1/avatar-female-2.png"
              alt=""
            />
            <div className="mt-6 sm:ml-6 sm:mt-0">
              <blockquote>
                <p className="font-sans text-xl font-normal text-opacity-50 text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  pretium pretium tempor. Ut eget imperdiet neque. In volutpat
                  ante semper diam molestie.
                </p>
              </blockquote>
              <p className="mt-6 font-sans text-2xl font-normal text-white">
                Sophie Lambert
              </p>
              <p className="mt-1.5 text-white text-sm font-sans font-normal text-opacity-50">
                CEO at Lorem Ipsum Dolor
              </p>
            </div>
          </div>

          <div className="sm:flex sm:items-start">
            <img
              className="flex-shrink-0 object-cover w-24 h-24 rounded-full"
              src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/testimonials/1/avatar-male-2.png"
              alt=""
            />
            <div className="mt-6 sm:ml-6 sm:mt-0">
              <blockquote>
                <p className="font-sans text-xl font-normal text-opacity-50 text-white">
                  Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel
                  rhoncus nibh, ut tincidunt turpis. Integer ac enim
                  pellentesque, adipiscing metus id.
                </p>
              </blockquote>
              <p className="mt-6 font-sans text-2xl font-normal text-white">
                Robert S. McCully
              </p>
              <p className="mt-1.5 text-white text-sm font-sans font-normal text-opacity-50">
                Employee at Lorem Ipsum
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimoial9;
