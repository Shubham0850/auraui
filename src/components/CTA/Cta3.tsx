import { FaApple, FaWindows, FaLinux } from "react-icons/fa";
import { MdCloudDownload } from "react-icons/md";

const CTA3 = () => {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <MdCloudDownload className="mx-auto w-14 h-14 dark:text-gray-500" />
          <h2 className="mt-10 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Download AuraUI
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Unlock Your AuraUI Experience
          </p>
        </div>

        <div className="flex flex-col items-center justify-center mt-8 space-y-4 md:space-y-0 md:space-x-4 md:flex-row lg:mt-12">
          <a
            href="#"
            title=""
            className="inline-flex items-center justify-center px-4 py-4 text-black transition-all duration-200 border-2 border-black rounded-md hover:bg-black hover:text-white focus:bg-black focus:text-white"
            role="button"
          >
            <FaApple className="w-6 h-6 mr-2 -ml-1" />
            Download for Mac
          </a>

          <a
            href="#"
            title=""
            className="inline-flex items-center justify-center px-4 py-4 text-black transition-all duration-200 border-2 border-black rounded-md hover:bg-black hover:text-white focus:bg-black focus:text-white"
            role="button"
          >
            <FaWindows className="w-6 h-6 mr-2 -ml-1" />
            Download for Windows
          </a>

          <a
            href="#"
            title=""
            className="inline-flex items-center justify-center px-4 py-4 text-black transition-all duration-200 border-2 border-black rounded-md hover:bg-black hover:text-white focus:bg-black focus:text-white"
            role="button"
          >
            <FaLinux className="w-6 h-6 mr-2 -ml-1" />
            Download for Linux
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA3;
