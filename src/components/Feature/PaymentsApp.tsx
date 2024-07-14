import React from "react";
import { FaFingerprint } from "react-icons/fa";
import { RxLightningBolt } from "react-icons/rx";
import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";

type Props = {};

const PaymentsApp = (props: Props) => {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 text-center sm:grid-cols-2 md:grid-cols-3 lg:gap-y-16">
          {/* Feature 1 */}
          <div>
            <div className="relative flex items-center justify-center mx-auto">
              <svg
                className="text-blue-100"
                width="72"
                height="75"
                viewBox="0 0 72 75"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M63.6911 28.8569C68.0911 48.8121 74.6037 61.2674 53.2349 65.9792C31.8661 70.6909 11.6224 61.2632 7.22232 41.308C2.82229 21.3528 3.6607 12.3967 25.0295 7.68503C46.3982 2.97331 59.2911 8.90171 63.6911 28.8569Z" />
              </svg>
              {/* Fingerprint icon */}
              <FaFingerprint className="absolute  text-blue-600  w-7 h-7 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">
              Reliable Transfers
            </h3>
            <p className="mt-4 text-base text-gray-600">
              Enjoy seamless and secure money transfers with our
              state-of-the-art technology ensuring your transactions are always
              safe and efficient.
            </p>
          </div>

          {/* Feature 2 */}
          <div>
            <div className="relative flex items-center justify-center mx-auto">
              <svg
                className="text-orange-100"
                width="62"
                height="64"
                viewBox="0 0 62 64"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M62 13.001C62 33.4355 53.9345 64.001 33.5 64.001C13.0655 64.001 0 50.435 0 30.0005C0 9.56596 2.56546 4.00021 23 4.00021C43.4345 4.00021 62 -7.43358 62 13.001Z" />
              </svg>
              <RxLightningBolt className="absolute text-orange-600 w-8 h-8" />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">
              Instant Notifications
            </h3>
            <p className="mt-4 text-base text-gray-600">
              Stay informed with instant notifications on your account activity,
              ensuring you are always aware of your financial transactions.
            </p>
          </div>

          {/* Feature 3 */}
          <div>
            <div className="relative flex items-center justify-center mx-auto">
              <svg
                className="text-green-100"
                width="66"
                height="68"
                viewBox="0 0 66 68"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M65.5 30C65.5 50.4345 46.4345 68 26 68C5.56546 68 0 50.4345 0 30C0 9.56546 12.5655 0 33 0C53.4345 0 65.5 9.56546 65.5 30Z" />
              </svg>
              <IoMoonOutline className="absolute text-green-600 w-8 h-8" />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">
              User-Friendly Interface
            </h3>
            <p className="mt-4 text-base text-gray-600">
              Experience our intuitive and easy-to-use interface designed to
              provide a smooth and enjoyable user experience for all your
              payment needs.
            </p>
          </div>

          {/* Feature 4 */}
          <div>
            <div className="relative flex items-center justify-center mx-auto">
              <svg
                className="text-purple-100"
                width="66"
                height="68"
                viewBox="0 0 66 68"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M65.5 30C65.5 50.4345 46.4345 68 26 68C5.56546 68 0 50.4345 0 30C0 9.56546 12.5655 0 33 0C53.4345 0 65.5 9.56546 65.5 30Z" />
              </svg>
              <IoMoonOutline className="absolute text-purple-600 w-8 h-8" />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">
              24/7 Support
            </h3>
            <p className="mt-4 text-base text-gray-600">
              Get assistance anytime with our dedicated 24/7 support team,
              always ready to help you with any issues or inquiries you may
              have.
            </p>
          </div>

          {/* Feature 5 */}
          <div>
            <div className="relative flex items-center justify-center mx-auto">
              <svg
                className="text-gray-100"
                width="65"
                height="70"
                viewBox="0 0 65 70"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M64.5 26C64.5 46.4345 56.4345 70 36 70C15.5655 70 0 53.9345 0 33.5C0 13.0655 10.5655 0 31 0C51.4345 0 64.5 5.56546 64.5 26Z" />
              </svg>
              <svg
                className="absolute text-gray-600 w-9 h-9"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M15 10l4.553-2.276A2 2 0 0122 9.618v4.764a2 2 0 01-2.447 1.894L15 14m0-4v8m0-8L9.447 7.724A2 2 0 008 9.618v4.764a2 2 0 001.553 1.894L15 14m0-4H9m6 0v8m0-8L9 14"
                />
              </svg>
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">
              Customizable Plans
            </h3>
            <p className="mt-4 text-base text-gray-600">
              Choose from a variety of plans and customize them to suit your
              specific business needs, ensuring you only pay for what you use.
            </p>
          </div>

          {/* Feature 6 */}
          <div>
            <div className="relative flex items-center justify-center mx-auto">
              <svg
                className="text-yellow-100"
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M64 32C64 49.6731 49.6731 64 32 64C14.3269 64 0 49.6731 0 32C0 14.3269 10.3269 0 28 0C45.6731 0 64 14.3269 64 32Z" />
              </svg>
              <MdOutlineSecurity className="absolute text-yellow-600 w-8 h-8" />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">
              Advanced Security
            </h3>
            <p className="mt-4 text-base text-gray-600">
              Protect your transactions with our advanced security protocols and
              encryption, ensuring your data is always secure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentsApp;
