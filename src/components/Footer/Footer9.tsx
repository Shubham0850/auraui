import Link from "next/link";
import Image from "next/image";
import { BsLinkedin, BsTelegram, BsTwitter } from "react-icons/bs";

function Footer9() {
  const navLinks = ["Home", "Insights", "Career", "About"];
  const socialIcons = [
    { icon: <BsTwitter className="w-5 h-5" />, href: "/" },
    { icon: <BsTelegram className="w-5 h-5" />, href: "/" },
    { icon: <BsLinkedin className="w-5 h-5" />, href: "/" },
  ];

  return (
    <footer className="relative bg-[#0D0D0D] text-white overflow-hidden">
      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-fuchsia-500/10 blur-3xl rounded-full translate-x-1/3 translate-y-1/3"></div>

      {/* Content */}
      <div className="relative z-10 max-w-[1300px] mx-auto px-6">
        <div className="py-16 md:py-24">
          <div className="flex flex-col md:flex-row justify-between gap-14">
            {/* Left Section */}
            <div>
              <Image
                src="https://www.auraui.com/logo-dark.png"
                alt="AuraUI Logo"
                width={120}
                height={36}
                className="mb-4"
              />
              <p className="text-gray-400 text-sm sm:text-base max-w-sm leading-relaxed">
                Thesis-driven digital asset fund empowering innovation with{" "}
                <span className="text-blue-400 font-medium">auraUI</span>.
              </p>

              <div className="flex flex-wrap gap-6 pt-10">
                {navLinks.map((link, i) =>
                  link === "About" ? (
                    <Link key={i} href="/about">
                      <span className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors cursor-pointer">
                        {link}
                      </span>
                    </Link>
                  ) : (
                    <span
                      key={i}
                      className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors cursor-pointer"
                    >
                      {link}
                    </span>
                  ),
                )}
              </div>
            </div>

            {/* Right Section */}
            <div>
              <p className="text-lg font-semibold mb-3">Contact Us</p>
              <Link
                href="mailto:contact@auraui.com"
                className="text-gray-300 hover:text-white text-sm sm:text-base transition-colors"
              >
                contact@auraui.com
              </Link>

              <div className="flex flex-row items-center gap-4 pt-8">
                <p className="text-sm sm:text-base text-gray-400">Follow us:</p>
                <div className="flex gap-3">
                  {socialIcons.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      target="_blank"
                      className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 bg-white/5 backdrop-blur-sm hover:bg-blue-500 hover:border-blue-500 hover:text-white text-gray-300 transition-all duration-300"
                    >
                      {item.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-10">
        <Image
          src="https://www.auraui.com/images/footer-bg.svg"
          alt="Footer Background"
          fill
          className="object-cover"
        />
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-gray-800/70 py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()}{" "}
        <span className="text-gray-300 font-medium">AuraUI</span>. All rights
        reserved.
      </div>
    </footer>
  );
}

export default Footer9;
