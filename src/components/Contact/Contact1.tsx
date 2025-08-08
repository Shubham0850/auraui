import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

/**
 * Contact1 — modernized
 * - Subtle animated gradient background + grain
 * - Glassy card with gradient border
 * - Framer Motion entrance/stagger
 * - Micro-interactions: inputs focus ring, button shimmer, stars twinkle
 * - Accessible labels + basic client-side validation demo (non-blocking)
 * - 100% Tailwind + Framer Motion; no extra UI libs required
 */

const bgGrid =
  "before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(40%_40%_at_30%_20%,rgba(255,140,0,0.18),rgba(255,140,0,0)_60%),radial-gradient(40%_40%_at_70%_60%,rgba(0,130,255,0.18),rgba(0,130,255,0)_60%)] after:absolute after:inset-0 after:-z-10 after:[background-image:linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] after:[background-size:24px_24px] after:opacity-40";

const glass =
  "relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.35)] ring-1 ring-white/20";

const gradientBorder =
  "relative rounded-2xl p-[1px] bg-gradient-to-br from-orange-500 via-rose-500 to-amber-400";

const inputBase =
  "block w-full rounded-lg border border-white/20 bg-white/90 px-4 py-3 text-[15px] text-gray-900 placeholder-gray-500 shadow-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/40";

const buttonBase =
  "group inline-flex items-center justify-center rounded-lg bg-gradient-to-tr from-orange-600 to-amber-500 px-5 py-3 text-base font-semibold text-white shadow-lg shadow-orange-900/20 transition hover:from-orange-500 hover:to-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 active:scale-[.98]";

const shimmer =
  "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent";

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const child = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.45 } },
};

const StarRating = () => (
  <div className="flex items-center gap-1">
    {[...Array(5)].map((_, i) => (
      <motion.span
        key={i}
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{
          scale: [0.9, 1, 0.95],
          opacity: 1,
        }}
        transition={{
          duration: 1.6,
          delay: 0.15 * i,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        className="text-yellow-400 drop-shadow-[0_1px_6px_rgba(251,191,36,.45)]"
      >
        <FaStar className="h-5 w-5" />
      </motion.span>
    ))}
  </div>
);

const Testimonial = () => (
  <motion.div variants={stagger} className="relative">
    <motion.div
      variants={child}
      className="flex items-center gap-3 text-white/90"
    >
      <StarRating />
      <span className="text-sm">Loved by 1,200+ builders</span>
    </motion.div>

    <motion.blockquote variants={child} className="mt-4">
      <p className="text-lg leading-relaxed text-white/90">
        Building my new site with <span className="font-semibold">AuraUI</span>{" "}
        was a breeze! I just pick a page, tweak it, and hit save. Done.
      </p>
    </motion.blockquote>

    <motion.div variants={child} className="mt-6 flex items-center">
      <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-white/50">
        <Image
          src="https://www.auraui.com/memeimage/babubhaiya.jpg"
          alt="Babu Bhaiya"
          fill
          sizes="48px"
          className="object-cover"
        />
      </div>
      <div className="ml-3">
        <p className="text-base font-semibold text-white">Babu Bhaiya</p>
        <p className="-mt-0.5 text-sm text-white/60">UI Developer</p>
      </div>
    </motion.div>
  </motion.div>
);

function useFormState() {
  const [loading, setLoading] = React.useState(false);
  const [ok, setOk] = React.useState(false);
  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const brief = String(form.get("brief") || "").trim();
    if (!name || !email || !brief) {
      alert("Please fill all fields ✍️");
      return;
    }
    setLoading(true);
    // Simulate request
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setOk(true);
    (e.currentTarget as HTMLFormElement).reset();
    setTimeout(() => setOk(false), 2500);
  };
  return { loading, ok, submit };
}

const Form = () => {
  const { loading, ok, submit } = useFormState();

  return (
    <motion.div variants={child} className={`${gradientBorder}`}>
      <div className={`${glass} p-6 sm:p-8 lg:p-10`}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-white">
              Get a free quote
            </h3>
            <p className="mt-1.5 text-sm text-white/70">
              Tell us about your project and we’ll get back within 24h.
            </p>
          </div>
          <motion.div
            initial={{ rotate: -10, scale: 0.9, opacity: 0 }}
            whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="hidden shrink-0 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 ring-1 ring-white/20 sm:block"
          >
            <span className="mr-1.5 inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Typically replies fast
          </motion.div>
        </div>

        <form onSubmit={submit} className="mt-6 space-y-5">
          <div>
            <label
              htmlFor="name"
              className="mb-1.5 block text-sm font-medium text-white/80"
            >
              Your name
            </label>
            <input
              id="name"
              name="name"
              placeholder="e.g. Aman Kumar"
              className={inputBase}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-medium text-white/80"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@company.com"
              className={inputBase}
            />
          </div>
          <div>
            <label
              htmlFor="brief"
              className="mb-1.5 block text-sm font-medium text-white/80"
            >
              Project brief
            </label>
            <textarea
              id="brief"
              name="brief"
              rows={4}
              placeholder="What are you building?"
              className={`${inputBase} resize-y`}
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className={`${buttonBase} ${shimmer} w-full`}
              disabled={loading}
            >
              <span className="relative z-10 flex items-center gap-2">
                {loading ? (
                  <>
                    <svg
                      className="h-4 w-4 animate-spin"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      />
                    </svg>
                    Sending…
                  </>
                ) : (
                  <>
                    <span>Get Free Quote</span>
                    <svg
                      className="h-4 w-4 transition group-hover:translate-x-0.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M13.293 4.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L17.586 12l-4.293-4.293a1 1 0 010-1.414z" />
                    </svg>
                  </>
                )}
              </span>
            </button>
          </div>
        </form>

        {/* Success toast */}
        <motion.div
          initial={false}
          animate={ok ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          className="pointer-events-none absolute right-4 top-4 z-10"
        >
          <div className="rounded-lg bg-emerald-500/95 px-3 py-2 text-sm font-medium text-white shadow-lg shadow-emerald-900/30 ring-1 ring-white/20">
            Request sent ✅
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Contact1 = () => {
  return (
    <section className={`relative ${bgGrid} py-16 sm:py-20 lg:py-28`}>
      {/* Decorative orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-orange-500/20 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl"
        />
      </div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          variants={stagger}
          className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16"
        >
          {/* Left: copy + testimonial */}
          <motion.div
            variants={child}
            className="flex flex-col justify-between"
          >
            <div>
              <h2 className="text-balance text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl">
                It&apos;s time to build something{" "}
                <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-rose-400 bg-clip-text text-transparent">
                  exciting
                </span>
                !
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80">
                Use <span className="font-semibold">AuraUI</span> and start
                shipping faster. Copy, paste, tweak — your new default workflow.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/70">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/15">
                  <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                  99.9% developer happiness
                </div>
                <Link
                  href="#"
                  className="underline decoration-orange-400/70 underline-offset-4 hover:text-white"
                >
                  View components
                </Link>
              </div>
            </div>

            <div className="mt-10 hidden md:block">
              <Testimonial />
            </div>
          </motion.div>

          {/* Right: form */}
          <div className="lg:pl-6">
            <Form />
          </div>

          <div className="md:hidden">
            <Testimonial />
          </div>
        </motion.div>
      </motion.div>

      <style jsx global>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
};

export default Contact1;
