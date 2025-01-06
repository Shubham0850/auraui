import Link from "next/link";
import Image from "next/image";
import { BsLinkedin, BsTelegram, BsTwitter } from "react-icons/bs";

function Footer9() {
  return (
    <div className="relative bg-[#1A1A1A]">
      <div className="relative z-10 max-w-[1300px] mx-auto px-6">
        <div className="py-20">
          <div className="flex flex-col md:flex-row justify-between">
            {/* Left Section */}
            <div>
              <div>
                <Image
                  src="https://www.auraui.com/logo-dark.png"
                  alt="asva logo"
                  width={100}
                  height={100}
                />
                <p className="text-[#888888] pt-2 text-base">
                  Thesis Driven Digital Asset fund
                </p>
              </div>

              <div className="flex flex-row gap-4 md:gap-10 pt-20 mb-4 md:mb-0">
                <Link href="/">
                  <span className="text-xl text-white font-['PowerGrotesk']">
                    Home
                  </span>
                </Link>
                <Link href="/#insights">
                  <span className="text-xl text-white font-['PowerGrotesk']">
                    Insights
                  </span>
                </Link>
                <Link
                  href="https://asvaventures.notion.site/Hirings-677d85023d594689978acba8f3cbc8b6"
                  target="_blank"
                >
                  <span className="text-xl text-white font-['PowerGrotesk']">
                    Career
                  </span>
                </Link>
                <Link href="/about">
                  <span className="text-xl text-white font-['PowerGrotesk']">
                    About
                  </span>
                </Link>
              </div>
            </div>

            {/* Right Section */}
            <div className="pr-8">
              <div>
                <p className="py-2 text-xl text-white">Contact Us</p>
                <Link href="mailto:contact@asvaventures.com">
                  <span className="text-xl text-white underline pb-4 md:pb-0">
                    contact@auraui.com
                  </span>
                </Link>
              </div>

              <div className="flex flex-row items-center gap-6 text-white pt-4 md:pt-20">
                <p className="text-xl">Follow Us :</p>
                <Link href="/" target="_blank">
                  <BsTwitter className="text-2xl text-white bg-transparent" />
                </Link>
                <Link href="/" target="_blank">
                  <BsTelegram className="text-2xl text-white bg-transparent" />
                </Link>
                <Link href="/" target="_blank">
                  <BsLinkedin className="text-2xl text-white bg-transparent" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://www.auraui.com/images/footer-bg.svg"
          alt="bg"
          layout="fill"
          objectFit="cover"
          className="opacity-10"
        />
      </div>
    </div>
  );
}

export default Footer9;
