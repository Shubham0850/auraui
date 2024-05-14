import React from "react";

export default function ContactForm(): JSX.Element {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10  md:py-20">
      <h1 className="pt-20 text-[32px] ">Contact Us</h1>
      <form className="pt-4 mt-4 flex flex-col gap-5">
        <div className="flex flex-col md:flex-row justify-between md:items-center">
          <label htmlFor="fullname" className="md:w-[140px]">
            Full Name
          </label>
          <input
            type="text"
            id="fullname"
            placeholder="John Doe"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between md:items-center">
          <label htmlFor="email" className="md:w-[140px]">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="john@gmail.com"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between md:items-center">
          <label htmlFor="message" className="md:w-[140px]">
            Your Message
          </label>
          <textarea
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            id="message"
            placeholder="Type your message here..."
          ></textarea>
        </div>

        <button
        style={{backgroundColor:'green'}}
          className="bg-green-700 md:w-1/3 md:mx-auto rounded-md p-3 text-white font-bold"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
}
