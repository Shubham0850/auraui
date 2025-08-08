import React from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import Link from "next/link";

/**
 * Contact2 — Nova style (brand‑new look)
 *
 * Design goals
 * - Distinct from previous: crisp mono + violet accent, soft glass in dark, soft shadow in light
 * - Two‑panel layout: left = pitch + methods, right = form card
 * - Floating labels, pill chips, subtle gradients, tasteful motion
 * - Full light/dark theming via Tailwind `dark:`
 */

// Section background: diagonal noise/gradient (light) and radial tint (dark)
const sectionBg =
  "relative py-18 sm:py-24 bg-[conic-gradient(at_120%_-20%,#f3f4f6_0deg,#ffffff_90deg,#eef2ff_200deg,#ffffff_360deg)] dark:bg-[radial-gradient(80%_80%_at_20%_10%,rgba(124,58,237,.18),transparent_60%)]";

const container = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";

const card =
  "relative overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgba(2,6,23,0.06)] ring-1 ring-slate-900/5 dark:bg-white/10 dark:backdrop-blur-md dark:ring-white/15 dark:shadow-[0_12px_36px_rgba(0,0,0,.35)]";

const label = "text-sm font-medium text-slate-700 dark:text-white/80";
const input =
  "peer block w-full rounded-xl border border-slate-300/70 bg-white/95 px-4 pt-5 pb-2 text-[15px] text-slate-900 placeholder-transparent outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30 dark:border-white/15 dark:bg-white/90";
const textArea = `${input} resize-y min-h-[120px]`;

const floatLabel =
  "pointer-events-none absolute left-3 top-3 z-10 origin-left -translate-y-1 text-[13px] text-slate-500 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-[15px] peer-placeholder-shown:text-slate-500 peer-focus:-translate-y-1 peer-focus:text-[13px] peer-focus:text-violet-600";

const btn =
  "group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3 font-semibold text-white shadow-lg shadow-violet-900/15 transition hover:bg-violet-500 active:scale-[.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40";

const pill =
  "inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white px-3 py-1.5 text-sm text-slate-700 shadow-sm transition hover:border-slate-900/20 dark:bg-white/10 dark:text-white/85 dark:border-white/15 dark:hover:border-white/25";

const methods = [
  {
    icon: FiPhone,
    title: "Call us",
    lines: ["+91-76879-06978", "+91-76879-06878"],
  },
  {
    icon: FiMail,
    title: "Email",
    lines: ["contact@auraui.com", "hr@auraui.com"],
  },
  {
    icon: FiMapPin,
    title: "Office",
    lines: ["8502, Sector 28, Ingle Colony, Patna, India"],
  },
];

function useDemoSubmit() {
  const [loading, setLoading] = React.useState(false);
  const [ok, setOk] = React.useState(false);
  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1100));
    setLoading(false);
    setOk(true);
    (e.currentTarget as HTMLFormElement).reset();
    setTimeout(() => setOk(false), 2200);
  };
  return { loading, ok, submit };
}

export default function Contact2() {
  const { loading, ok, submit } = useDemoSubmit();
  return (
    <section className={sectionBg}>
      <div className={container}>
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
          {/* LEFT: pitch + methods */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-pretty text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
              Talk to a real human. Quickly.
            </h2>
            <p className="mt-3 max-w-xl text-[17px] leading-relaxed text-slate-600 dark:text-white/80">
              Whether it’s a component request, integration help, or partnership
              — we typically reply within a business day.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className={pill}>24h response SLA</span>
              <span className={pill}>India‑first team</span>
              <span className={pill}>No sales fluff</span>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {methods.map((m, i) => (
                <motion.div
                  key={m.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 * i }}
                  className={`${card} p-5`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600 ring-1 ring-violet-100 dark:bg-white/10 dark:text-violet-300 dark:ring-white/10">
                      <m.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-white/60">
                        {m.title}
                      </p>
                      {m.lines.map((l) => (
                        <p
                          key={l}
                          className="mt-1 text-[15px] font-medium text-slate-900 dark:text-white"
                        >
                          {l}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="order-1 lg:order-2"
          >
            <div className={`${card} p-6 sm:p-8 lg:p-10`}>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                    Send us a message
                  </h3>
                  <p className="mt-1 text-sm text-slate-500 dark:text-white/70">
                    We’ll get back within 24h.
                  </p>
                </div>
                <span className="hidden rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-200 sm:block dark:bg-emerald-400/10 dark:text-emerald-300 dark:ring-emerald-400/20">
                  Online now
                </span>
              </div>

              <form
                onSubmit={submit}
                className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2"
              >
                {/* Name */}
                <div className="relative">
                  <input id="name" placeholder="Your name" className={input} />
                  <label htmlFor="name" className={floatLabel}>
                    Your name
                  </label>
                </div>
                {/* Email */}
                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    className={input}
                  />
                  <label htmlFor="email" className={floatLabel}>
                    Email
                  </label>
                </div>
                {/* Phone */}
                <div className="relative">
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Phone"
                    className={input}
                  />
                  <label htmlFor="phone" className={floatLabel}>
                    Phone
                  </label>
                </div>
                {/* Company */}
                <div className="relative">
                  <input id="company" placeholder="Company" className={input} />
                  <label htmlFor="company" className={floatLabel}>
                    Company
                  </label>
                </div>
                {/* Message */}
                <div className="relative sm:col-span-2">
                  <textarea
                    id="message"
                    placeholder="Message"
                    className={textArea}
                  />
                  <label htmlFor="message" className={floatLabel}>
                    Message
                  </label>
                </div>

                <div className="sm:col-span-2">
                  <button type="submit" className={btn} disabled={loading}>
                    {loading ? (
                      <>
                        <svg
                          className="h-4 w-4 animate-spin"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            className="opacity-25"
                          />
                          <path
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                            fill="currentColor"
                            className="opacity-75"
                          />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        Send message
                        <svg
                          className="h-4 w-4 transition group-hover:translate-x-0.5"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M13.293 4.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L17.586 12l-4.293-4.293a1 1 0 010-1.414z" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* toast */}
              <motion.div
                initial={false}
                animate={ok ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
                className="pointer-events-none absolute right-4 top-4"
              >
                <div className="rounded-lg bg-emerald-500/95 px-3 py-2 text-sm font-medium text-white shadow-lg ring-1 ring-white/20">
                  Message sent ✅
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
