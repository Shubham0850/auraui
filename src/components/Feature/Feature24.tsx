import React from "react";

function Feature24() {
  return (
    <section className="relative bg-gray-900 overflow-hidden pt-20 pb-0 sm:pt-24">
      {/* Decorative Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="https://www.auraui.com/images/bgline.png"
          alt="Decorative lines"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      {/* Text Content */}
      <div className="relative z-10 px-6 mx-auto max-w-4xl text-center">
        <h2 className="text-white text-6xl font-bold tracking-tight">
          Enhance Your Development Experience with Auraui
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-300 leading-relaxed">
          Auraui provides expert insights and a comprehensive set of tools
          designed to help developers grow their skills efficiently.
        </p>

        <a
          href="#"
          className="inline-flex items-center justify-center px-6 py-3 mt-8 text-base font-semibold text-white transition bg-white/10 border border-white rounded-lg hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white"
        >
          Get started now
        </a>
      </div>

      {/* Feature Image */}
      <div className="relative z-10 mt-16">
        <div className="max-w-3xl mx-auto overflow-hidden rounded-t-[60px] shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Team working with Auraui"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}

export default Feature24;
