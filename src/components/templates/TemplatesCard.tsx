"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Download, Eye, LogIn, Terminal, Rocket } from "lucide-react";

const templates = [
  {
    id: "saas-landing",
    name: "SaaS Landing Page",
    category: "Landing Page",
    previewUrl: "https://auraui-sass-landing-template.vercel.app/",
    tags: ["Next.js 16", "Tailwind", "Free"],
  },
];

const steps = [
  { icon: Eye,      n: "01", title: "Browse",     desc: "Click any card to open a full live preview — not a screenshot, the actual running page." },
  { icon: LogIn,    n: "02", title: "Sign in",     desc: 'Hit "Get Code", sign in with Google, and instantly download the full source ZIP.' },
  { icon: Terminal, n: "03", title: "Run locally", desc: "npm install → npm run dev → open localhost:3000. Everything works out of the box." },
  { icon: Rocket,   n: "04", title: "Ship it",     desc: "Edit colors, copy, images. Deploy to Vercel with one click — no config needed." },
];

function ScaledIframe({ src }: { src: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.44);

  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        setScale(containerRef.current.offsetWidth / 1280);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div ref={containerRef} style={{ height: 250, overflow: "hidden" }}>
      <iframe
        src={src}
        style={{
          width: 1280,
          height: Math.ceil(250 / scale),
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          pointerEvents: "none",
          border: "none",
          display: "block",
        }}
        loading="lazy"
        tabIndex={-1}
      />
    </div>
  );
}

export default function TemplatesGallery() {
  const [selected, setSelected] = useState<(typeof templates)[0] | null>(null);

  return (
    <>
      <section className="not-prose min-h-screen px-4 sm:px-8 py-16">
        <div className="max-w-6xl mx-auto">

          {/* ── Header ── */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-center mb-10"
          >
            <span style={{ fontSize: 10, letterSpacing: "0.15em" }} className="font-semibold uppercase text-gray-500">
              Templates
            </span>
            <div style={{ fontSize: 46, lineHeight: 1.1, letterSpacing: "-0.02em" }} className="mt-3 font-bold text-gray-900 dark:text-white">
              Ship faster.
            </div>
            <p style={{ fontSize: 14 }} className="mt-3 text-gray-500 max-w-xs mx-auto leading-relaxed">
              Production-ready templates built with AuraUI. Pick one, get the code, launch.
            </p>
          </motion.div>

          {/* ── How it works ── */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="rounded-2xl border border-gray-200 dark:border-white/[0.07] mb-10 overflow-hidden bg-gray-50 dark:bg-[#131313]"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-gray-200 dark:divide-white/[0.06]">
              {steps.map((step, i) => (
                <div key={step.n} className="p-5 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gray-200/70 dark:bg-white/[0.06] border border-gray-300/50 dark:border-white/[0.08]">
                      <step.icon size={14} className="text-gray-500 dark:text-gray-400" />
                    </div>
                    <span style={{ fontSize: 10, letterSpacing: "0.1em" }} className="font-bold text-gray-400 dark:text-gray-600 font-mono">
                      {step.n}
                    </span>
                  </div>
                  <span style={{ fontSize: 13 }} className="font-semibold text-gray-900 dark:text-white">
                    {step.title}
                  </span>
                  <span style={{ fontSize: 11 }} className="text-gray-500 leading-relaxed">
                    {step.desc}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Template grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {templates.map((template, i) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.18 + i * 0.08 }}
                whileHover={{ y: -3, transition: { duration: 0.18 } }}
                onClick={() => setSelected(template)}
                className="group cursor-pointer rounded-2xl border border-gray-200 dark:border-white/[0.08] overflow-hidden hover:border-gray-300 dark:hover:border-white/[0.18] transition-colors bg-white dark:bg-[#131313]"
              >
                {/* browser chrome + iframe */}
                <div className="relative bg-gray-100 dark:bg-[#0c0c0c]">
                  {/* chrome bar */}
                  <div className="flex items-center gap-1.5 border-b border-gray-300/60 dark:border-white/[0.05] bg-gray-200/80 dark:bg-[#1c1c1c]"
                    style={{ height: 30, padding: "0 12px" }}
                  >
                    <div style={{ width: 9, height: 9, borderRadius: "50%", background: "rgba(255,95,86,0.75)" }} />
                    <div style={{ width: 9, height: 9, borderRadius: "50%", background: "rgba(255,188,46,0.75)" }} />
                    <div style={{ width: 9, height: 9, borderRadius: "50%", background: "rgba(39,200,63,0.75)" }} />
                    <div className="flex-1 rounded bg-gray-300/60 dark:bg-white/[0.04] border border-gray-400/20 dark:border-white/[0.06]"
                      style={{ height: 15, maxWidth: 220, marginLeft: 8 }}
                    />
                  </div>

                  {/* scaled iframe — fills exact card width */}
                  <ScaledIframe src={template.previewUrl} />

                  {/* hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20 bg-black/50">
                    <span className="bg-white text-black font-semibold rounded-full" style={{ fontSize: 12, padding: "7px 18px" }}>
                      Preview →
                    </span>
                  </div>
                </div>

                {/* card info */}
                <div style={{ padding: "14px 18px 18px" }}>
                  <div className="flex items-center justify-between mb-3">
                    <span style={{ fontSize: 13 }} className="font-semibold text-gray-900 dark:text-white">
                      {template.name}
                    </span>
                    <span style={{ fontSize: 10, padding: "2px 9px" }}
                      className="text-gray-500 border border-gray-300 dark:border-white/10 rounded-full bg-transparent"
                    >
                      {template.category}
                    </span>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {template.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{ fontSize: 10, padding: "2px 9px" }}
                        className={
                          tag === "Free"
                            ? "rounded-full text-green-600 dark:text-green-400 border border-green-300 dark:border-green-500/20 bg-green-50 dark:bg-green-500/10"
                            : "rounded-full text-gray-500 border border-gray-200 dark:border-white/[0.07] bg-gray-100 dark:bg-white/[0.05]"
                        }
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* coming soon */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.26 }}
              className="rounded-2xl border border-dashed border-gray-300 dark:border-white/[0.07] flex flex-col items-center justify-center gap-3 bg-gray-50/50 dark:bg-white/[0.01]"
              style={{ minHeight: 280 }}
            >
              <div className="flex items-center justify-center rounded-full border border-gray-300 dark:border-white/10 text-gray-400 dark:text-gray-600"
                style={{ width: 34, height: 34, fontSize: 18 }}
              >
                +
              </div>
              <span style={{ fontSize: 12 }} className="text-gray-400 dark:text-gray-600">More coming soon</span>
            </motion.div>
          </div>

          {/* ── Stack strip ── */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-6 rounded-xl border border-gray-200 dark:border-white/[0.07] flex flex-col sm:flex-row sm:items-center gap-4 px-5 py-4 bg-gray-50 dark:bg-[#131313]"
          >
            <span style={{ fontSize: 12 }} className="text-gray-500 shrink-0">Stack included:</span>
            <div className="flex flex-wrap gap-2">
              {["Next.js 16 App Router", "TypeScript", "Tailwind CSS", "framer-motion", "lucide-react"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-gray-200 dark:border-white/[0.08] text-gray-500 bg-white dark:bg-white/[0.03]"
                  style={{ fontSize: 11, padding: "2px 10px" }}
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── Fullscreen overlay ── */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-[100] flex flex-col bg-black"
          >
            <div className="flex items-center justify-between shrink-0 border-b border-white/[0.07] bg-[#111]"
              style={{ height: 50, padding: "0 18px" }}
            >
              <div className="flex items-center gap-3">
                <span style={{ fontSize: 13 }} className="font-semibold text-white">{selected.name}</span>
                <span style={{ fontSize: 10, padding: "2px 9px" }}
                  className="text-gray-500 border border-white/[0.08] rounded-full"
                >
                  {selected.category}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <a href={selected.previewUrl} target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: 12 }}
                  className="hidden sm:flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors"
                >
                  <ExternalLink size={13} /> Open live
                </a>
                <button style={{ fontSize: 12, padding: "6px 14px" }}
                  className="flex items-center gap-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Download size={13} /> Get Code
                </button>
                <button onClick={() => setSelected(null)} style={{ width: 30, height: 30 }}
                  className="flex items-center justify-center rounded-lg border border-white/[0.08] text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                >
                  <X size={14} />
                </button>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.22, delay: 0.08 }}
              className="flex-1 overflow-hidden"
            >
              <iframe src={selected.previewUrl} className="w-full h-full border-none" loading="lazy" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
