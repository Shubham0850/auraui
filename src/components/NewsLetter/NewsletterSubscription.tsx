import React from "react";
import Image from "next/image";

// Define common styles
const style = {
  section: "py-12 bg-gray-50 sm:py-16 lg:py-20 xl:py-24",
  container: "px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl",
  gridContainer:
    "grid items-center max-w-5xl grid-cols-1 mx-auto lg:grid-cols-2 gap-y-12 lg:gap-x-24",
  textContainer: "lg:order-2 text-center lg:text-left",
  title: "text-base font-semibold text-blue-600",
  headline:
    "mt-6 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl lg:mt-8",
  form: "flex flex-col justify-between mt-8 rounded-xl sm:items-center sm:border sm:border-gray-300 sm:p-1 sm:flex-row sm:mt-12 sm:focus-within:border-blue-600 sm:focus-within:ring-1 sm:focus-within:ring-blue-600",
  input:
    "block w-full px-6 py-4 text-base font-normal text-gray-900 placeholder-gray-500 focus:border-none bg-transparent border border-gray-300 rounded-xl focus:outline-none sm:border-transparent  sm:focus:ring-0 sm:focus:border-transparent",
  button:
    "inline-flex items-center justify-center w-full px-6 py-4 mt-4 text-base font-medium transition-all duration-200 border rounded-lg border-transparent sm:mt-0 sm:w-auto text-white focus:outline-none focus:ring-2 focus:ring-offset-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-700",
  subscribers: "flex items-center mt-8 justify-center lg:justify-start",
  avatars: "relative z-0 flex -space-x-3 overflow-hidden",
  avatar: "relative z-30 inline-block w-12 h-12 rounded-full ring-2 ring-white",
  subscriberText: "ml-4 text-base font-medium text-gray-500",
  strongText: "text-gray-900",
  imageContainer: "lg:order-1",
  image: "w-full rounded-md max-w-sm mx-auto",
};

const NewsletterSubscription: React.FC = () => {
  return (
    <section className={style.section}>
      <div className={style.container}>
        <div className={style.gridContainer}>
          <div className={style.textContainer}>
            <p className={style.title}>Stay Updated, Stay Ahead</p>
            <h2 className={style.headline}>
              Get the latest tips directly in your inbox.
            </h2>

            <form action="#" method="POST" className={style.form}>
              <div className="flex-1">
                <label className="sr-only">Email address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email address"
                  className={style.input}
                />
              </div>
              <button className={style.button}>Subscribe Now</button>
            </form>

            <div className={style.subscribers}>
              <div className={style.avatars}>
                <Image
                  className={style.avatar}
                  src="https://i.pravatar.cc/150?img=1"
                  alt="Subscriber 1"
                  width={48}
                  height={48}
                />
                <Image
                  className={style.avatar}
                  src="https://i.pravatar.cc/150?img=2"
                  alt="Subscriber 2"
                  width={48}
                  height={48}
                />
                <Image
                  className={style.avatar}
                  src="https://i.pravatar.cc/150?img=3"
                  alt="Subscriber 3"
                  width={48}
                  height={48}
                />
              </div>

              <p className={style.subscriberText}>
                <span className={style.strongText}>Over 20K professionals</span>
                <br /> have already subscribed
              </p>
            </div>
          </div>

          <div className={style.imageContainer}>
            <Image
              className={style.image}
              src="https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Newsletter Illustration"
              width={500}
              height={300}
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSubscription;
