import React from "react";
import { FaCloud, FaCode, FaComments } from "react-icons/fa";

const commonStyles = {
  container: "py-12 bg-gray-50 sm:py-16 lg:py-20",
  innerContainer: "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8",
  header: "text-center",
  headerContent: "flex items-center justify-center",
  headerIcon:
    "inline-flex items-center justify-center text-lg bg-gray-900 rounded-full w-9 h-9",
  headerTitle: "ml-3 text-4xl font-bold text-gray-900 font-pj",
  headerDescription: "mt-4 text-base font-medium text-gray-600 font-pj",
  cardContainer: "relative max-w-sm mx-auto mt-8 md:mt-12 md:max-w-3xl",
  cardBackground: "absolute -inset-4",
  cardBackgroundOverlay: "w-full h-full mx-auto opacity-30 blur-lg filter",
  cardBackgroundStyle:
    "background: linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
  card: "relative overflow-hidden bg-white border border-gray-200 rounded-2xl",
  cardContent: "p-6 md:px-10 md:py-9",
  gridContainer:
    "grid items-center grid-cols-1 md:grid-cols-7 gap-y-9 md:gap-y-0",
  featuresContainer: "md:col-span-3 xl:pr-2 space-y-9",
  featureItem: "flex items-center",
  featureIconContainer:
    "inline-flex items-center justify-center flex-shrink-0 w-10 h-10 bg-white border border-gray-200 rounded-full",
  featureIcon: "w-5 h-5 text-gray-900",
  featureText: "ml-4",
  featureTitle: "text-lg font-bold text-gray-900 font-pj",
  featureDescription: "mt-1 text-sm font-normal text-gray-600 font-pj",
  separatorDesktop: "hidden md:block",
  separatorMobile: "block md:hidden",
  separatorLine: "w-4 h-auto mx-auto text-gray-300",
};

function Pricing12() {
  return (
    <section className={commonStyles.container}>
      <div className={commonStyles.innerContainer}>
        <div className={commonStyles.header}>
          <div className={commonStyles.headerContent}>
            <div className={commonStyles.headerIcon}>
              <FaCloud />
            </div>
            <h2 className={commonStyles.headerTitle}>Discover Auraui</h2>
          </div>
          <p className={commonStyles.headerDescription}>
            Experience the future of decentralized innovation.
          </p>
        </div>

        <div className={commonStyles.cardContainer}>
          <div className={commonStyles.cardBackground}>
            <div
              className={commonStyles.cardBackgroundOverlay}
              style={{ background: commonStyles.cardBackgroundStyle }}
            ></div>
          </div>

          <div className={commonStyles.card}>
            <div className={commonStyles.cardContent}>
              <div className={commonStyles.gridContainer}>
                <div className={commonStyles.featuresContainer}>
                  <div className={commonStyles.featureItem}>
                    <div className={commonStyles.featureIconContainer}>
                      <FaCloud className={commonStyles.featureIcon} />
                    </div>
                    <div className={commonStyles.featureText}>
                      <p className={commonStyles.featureTitle}>Cloud Storage</p>
                      <p className={commonStyles.featureDescription}>
                        Up to 100GB for your assets
                      </p>
                    </div>
                  </div>

                  <div className={commonStyles.featureItem}>
                    <div className={commonStyles.featureIconContainer}>
                      <FaCode className={commonStyles.featureIcon} />
                    </div>
                    <div className={commonStyles.featureText}>
                      <p className={commonStyles.featureTitle}>API Access</p>
                      <p className={commonStyles.featureDescription}>
                        Integrate with our powerful APIs
                      </p>
                    </div>
                  </div>

                  <div className={commonStyles.featureItem}>
                    <div className={commonStyles.featureIconContainer}>
                      <FaComments className={commonStyles.featureIcon} />
                    </div>
                    <div className={commonStyles.featureText}>
                      <p className={commonStyles.featureTitle}>Live Support</p>
                      <p className={commonStyles.featureDescription}>
                        24/7 support for all your needs
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className={commonStyles.separatorDesktop}>
                    {/* Add any additional desktop separator or visual elements here */}
                  </div>

                  <div className={commonStyles.separatorMobile}>
                    {/* Add any additional mobile separator or visual elements here */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing12;
