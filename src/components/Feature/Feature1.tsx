import React from "react";
import Image from "next/image";
import Link from "next/link";

function Feature1() {
  const commonStyles = {
    section: "py-12 bg-white sm:py-16 lg:py-20 xl:py-24",
    container: "px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl",
    heading:
      "text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl",
    paragraph:
      "mt-4 text-base font-normal leading-7 text-gray-600 lg:text-lg lg:mt-6 lg:leading-8",
    navLink:
      "pb-2 text-xs font-semibold tracking-widest uppercase transition-all duration-200 border-b",
    activeLink: "text-blue-600 border-blue-600",
    inactiveLink: "text-gray-400 border-transparent hover:text-gray-900",
  };

  return (
    <section className={commonStyles.section}>
      <div className={commonStyles.container}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className={commonStyles.heading}>
            Grow your projects with AuraUI
          </h2>
          <p className={commonStyles.paragraph}>
            AuraUI provides the components you need to build a professional
            website, landing page, or admin panel for your SaaS. Enhance your
            development with our comprehensive toolkit.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mt-12 sm:mt-16">
          <nav className="flex flex-col items-center justify-center space-y-5 text-center sm:flex-row sm:space-y-0 sm:space-x-10 md:space-x-16">
            <Link
              href="#"
              title="One click analytics"
              className={`${commonStyles.navLink} ${commonStyles.activeLink}`}
            >
              One click analytics
            </Link>

            <Link
              href="#"
              title="Create Products"
              className={`${commonStyles.navLink} ${commonStyles.inactiveLink}`}
            >
              Create Products
            </Link>

            <Link
              href="#"
              title="Sales Alert"
              className={`${commonStyles.navLink} ${commonStyles.inactiveLink}`}
            >
              Sales Alert
            </Link>

            <Link
              href="#"
              title="File Storages"
              className={`${commonStyles.navLink} ${commonStyles.inactiveLink}`}
            >
              File Storages
            </Link>
          </nav>

          <div className="mt-6 sm:mt-8">
            <Image
              className="w-full shadow-2xl rounded-2xl"
              src="https://www.auraui.com/images/analytic_image.avif"
              alt="Dashboard Mockup"
              width={800}
              height={600}
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature1;
