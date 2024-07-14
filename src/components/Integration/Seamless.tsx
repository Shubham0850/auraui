import React from "react";
import { LuArrowRight } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";

// Define common styles
const style = {
  section: "py-10 bg-gray-50 sm:py-16 lg:py-24",
  container: "px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl",
  headerContainer: "max-w-2xl mx-auto text-center",
  title: "text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl",
  subtitle: "max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600",
  grid: "grid grid-cols-1 gap-6 mt-12 lg:mt-16 xl:gap-10 sm:grid-cols-2 lg:grid-cols-3",
  card: "overflow-hidden bg-white rounded-2xl shadow",
  cardContent: "p-8",
  cardHeader: "flex items-center",
  cardImage: "flex-shrink-0 w-12 h-auto",
  cardTitleContainer: "ml-5 mr-auto",
  cardTitle: "text-xl font-semibold text-black",
  cardSubtitle: "mt-px text-sm text-gray-600",
  cardDescription: "text-base leading-relaxed text-gray-600 mt-7",
  arrowIcon: "w-5 h-5 text-blue-600",
  linkContainer: "mt-12 text-center",
  link: "inline-flex p-3 font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline",
};

const integrations = [
  {
    name: "Google Drive",
    logo: "/images/google-drive-logo.png", // Update the path to your image
    description: "Easily manage your files and documents with seamless Google Drive integration.",
  },
  {
    name: "Dropbox",
    logo: "/images/dropbox-logo.png", // Update the path to your image
    description: "Access and share your files anytime, anywhere with Dropbox integration.",
  },
  {
    name: "Asana",
    logo: "/images/asana-logo.png", // Update the path to your image
    description: "Streamline your project management process with Asana integration.",
  },
  {
    name: "Trello",
    logo: "/images/trello-logo.png", // Update the path to your image
    description: "Organize your tasks and collaborate efficiently with Trello integration.",
  },
  {
    name: "Zoom",
    logo: "/images/zoom-logo.png", // Update the path to your image
    description: "Conduct virtual meetings effortlessly with Zoom integration.",
  },
  {
    name: "Notion",
    logo: "/images/notion-logo.png", // Update the path to your image
    description: "Boost your productivity with comprehensive note-taking and collaboration using Notion.",
  },
];

const Seamless: React.FC = () => {
  return (
    <div>
      <section className={style.section}>
        <div className={style.container}>
          <div className={style.headerContainer}>
            <h2 className={style.title}>Seamless Integrations</h2>
            <p className={style.subtitle}>
              Effortlessly connect with your favorite tools and services to enhance your workflow and productivity.
            </p>
          </div>

          <div className={style.grid}>
            {integrations.map((integration) => (
              <div key={integration.name} className={style.card}>
                <div className={style.cardContent}>
                  <div className={style.cardHeader}>
                    <Image
                      className={style.cardImage}
                      src={integration.logo}
                      alt={integration.name}
                      width={48}
                      height={48}
                    />
                    <div className={style.cardTitleContainer}>
                      <p className={style.cardTitle}>{integration.name}</p>
                      <p className={style.cardSubtitle}>Direct Integration</p>
                    </div>
                    <LuArrowRight className={style.arrowIcon} />
                  </div>
                  <p className={style.cardDescription}>
                    {integration.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className={style.linkContainer}>
            <Link href="#" title="Check all integrations" className={style.link}>
              Check all integrations
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Seamless;
