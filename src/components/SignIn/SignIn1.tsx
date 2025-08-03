import {
  FaCheckCircle,
  FaEnvelope,
  FaLock,
  FaGoogle,
  FaFacebook,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const commonStyles = {
  inputWrapper:
    "relative group flex items-center w-full rounded-full overflow-hidden shadow-sm transition-all duration-300",
  input:
    "w-full py-3.5 pl-12 pr-4 text-sm text-black placeholder-transparent bg-white/70 backdrop-blur-md border border-gray-200 rounded-full focus:outline-none focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500 peer transition-all duration-300",
  inputIcon:
    "absolute left-4 text-gray-900 peer-focus:text-fuchsia-500 transition-colors",
  label:
    "absolute left-12 text-gray-500 text-sm transition-all duration-200 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-fuchsia-500",
  button:
    "w-full py-3.5 px-6 font-semibold rounded-full bg-gradient-to-r from-fuchsia-600 to-blue-600 text-white shadow-lg hover:opacity-90 hover:shadow-fuchsia-500/30 transition-all duration-300",
  socialButton:
    "relative w-full py-3.5 px-6 rounded-full bg-white text-gray-700 border border-gray-200 shadow-sm flex items-center justify-center gap-3 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300",
  link: "font-medium text-fuchsia-600 hover:text-fuchsia-700 transition-colors hover:underline",
};

const SignIn1 = () => {
  return (
    <section className="relative bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left Hero Section */}
        <div className="relative flex items-end px-6 pb-16 pt-60 lg:pb-24 bg-gray-900/90">
          <Image
            src="https://www.auraui.com/memeimage/girl-working.jpg"
            alt="Women working"
            fill
            className="object-cover object-top opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="relative z-10 max-w-lg">
            <h3 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg">
              Join 35k+ web professionals & <br className="hidden xl:block" />
              build your website
            </h3>
            <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
              {[
                "Commercial License",
                "Unlimited Exports",
                "120+ Coded Blocks",
                "Design Files Included",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-white text-lg font-medium"
                >
                  <FaCheckCircle className="text-fuchsia-500 w-5 h-5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="flex items-center justify-center px-6 py-16 lg:py-24 bg-gradient-to-br from-white via-gray-50 to-white relative">
          <div className="w-full max-w-md bg-white/70 backdrop-blur-xl shadow-xl rounded-2xl p-8 lg:p-10">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Sign in to <span className="text-fuchsia-600">AuraUI</span>
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Don’t have an account?{" "}
              <Link href="#" className={commonStyles.link}>
                Create a free account
              </Link>
            </p>

            {/* Form */}
            <form className="mt-8 space-y-6">
              {/* Email */}
              <div className={commonStyles.inputWrapper}>
                <FaEnvelope className={commonStyles.inputIcon} />
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className={`${commonStyles.input} peer`}
                />
                <label htmlFor="email" className={commonStyles.label}>
                  Email Address
                </label>
              </div>

              {/* Password */}
              <div className={commonStyles.inputWrapper}>
                <FaLock className={commonStyles.inputIcon} />
                <input
                  type="password"
                  id="password"
                  placeholder="Enter password"
                  className={`${commonStyles.input} peer`}
                />
                <label htmlFor="password" className={commonStyles.label}>
                  Password
                </label>
              </div>

              <div className="flex justify-end">
                <Link href="#" className={`${commonStyles.link} text-sm`}>
                  Forgot password?
                </Link>
              </div>

              <button className={commonStyles.button}>Log in</button>
            </form>

            {/* Social Buttons */}
            <div className="mt-6 space-y-3">
              <button type="button" className={commonStyles.socialButton}>
                <FaGoogle className="text-rose-500 w-5 h-5" />
                Sign in with Google
              </button>
              <button type="button" className={commonStyles.socialButton}>
                <FaFacebook className="text-blue-600 w-5 h-5" />
                Sign in with Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn1;
