"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Download } from "lucide-react";

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
  { n: "01", title: "Browse", desc: "Click any card to open a full live preview — not a screenshot." },
  { n: "02", title: "Sign in", desc: 'Hit "Get Code", sign in with Google, download the ZIP.' },
  { n: "03", title: "Run locally", desc: "npm install → npm run dev → open localhost:3000. Done." },
  { n: "04", title: "Ship it", desc: "Edit colors, copy, images. Deploy to Vercel in one click." },
];

export default function TemplatesGallery() {
  const [selected, setSelected] = useState<(typeof templates)[0] | null>(null);

  return (
    <>
      <section className="not-prose min-h-screen px-4 sm:px-8 py-16">
        <div className="max-w-6xl mx-auto">

          {/* ── Hero header ── */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-center mb-10"
          >
            <span style={{ fontSize: 10, letterSpacing: "0.15em" }} className="font-semibold uppercase text-gray-500">
              Templates
            </span>
            <div style={{ fontSize: 48, lineHeight: "1.1", letterSpacing: "-0.02em" }} className="mt-3 font-bold text-white">
              Ship faster.
            </div>
            <p style={{ fontSize: 14 }} className="mt-3 text-gray-500 max-w-xs mx-auto leading-relaxed">
              Production-ready templates built with AuraUI. Pick one, get the code, launch.
            </p>
          </motion.div>

          {/* ── How it works — ABOVE grid ── */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="rounded-2xl border border-white/[0.07] mb-10 overflow-hidden"
            style={{ background: "#131313" }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-4">
              {steps.map((step, i) => (
                <div
                  key={step.n}
                  className="p-5 flex flex-col gap-2 relative"
                  style={{
                    borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none",
                    borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none",
                  }}
                >
                  <span style={{ fontSize: 10, letterSpacing: "0.1em" }} className="font-bold text-gray-600">
                    {step.n}
                  </span>
                  <span style={{ fontSize: 13 }} className="font-semibold text-white">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {templates.map((template, i) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.14 + i * 0.08 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                onClick={() => setSelected(template)}
                className="group cursor-pointer rounded-2xl border border-white/[0.08] overflow-hidden hover:border-white/[0.18] transition-colors"
                style={{ background: "#131313" }}
              >
                {/* browser chrome + iframe */}
                <div className="relative overflow-hidden" style={{ background: "#0c0c0c" }}>
                  {/* chrome bar */}
                  <div
                    className="absolute top-0 left-0 right-0 z-10 flex items-center gap-1.5"
                    style={{ height: 30, background: "#1c1c1c", borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "0 12px" }}
                  >
                    <div style={{ width: 9, height: 9, borderRadius: "50%", background: "rgba(255,95,86,0.75)" }} />
                    <div style={{ width: 9, height: 9, borderRadius: "50%", background: "rgba(255,188,46,0.75)" }} />
                    <div style={{ width: 9, height: 9, borderRadius: "50%", background: "rgba(39,200,63,0.75)" }} />
                    <div
                      style={{ height: 15, flex: 1, maxWidth: 220, marginLeft: 8, borderRadius: 4, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
                    />
                  </div>

                  {/* iframe scaled to fill card width */}
                  <div
                    className="overflow-hidden"
                    style={{ marginTop: 30, height: 250 }}
                  >
                    <iframe
                      src={template.previewUrl}
                      className="pointer-events-none border-none"
                      style={{
                        width: 1280,
                        height: 860,
                        transform: "scale(0.415)",
                        transformOrigin: "top left",
                        display: "block",
                      }}
                      loading="lazy"
                      tabIndex={-1}
                    />
                  </div>

                  {/* hover overlay */}
                  <div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20"
                    style={{ background: "rgba(0,0,0,0.6)" }}
                  >
                    <span
                      className="bg-white text-black font-semibold rounded-full"
                      style={{ fontSize: 12, padding: "7px 18px" }}
                    >
                      Preview →
                    </span>
                  </div>
                </div>

                {/* info row */}
                <div style={{ padding: "14px 18px 18px" }}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-white font-semibold" style={{ fontSize: 13 }}>
                      {template.name}
                    </span>
                    <span
                      className="text-gray-500 border border-white/10 rounded-full"
                      style={{ fontSize: 10, padding: "2px 9px" }}
                    >
                      {template.category}
                    </span>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {template.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full"
                        style={{
                          fontSize: 10,
                          padding: "2px 9px",
                          background: tag === "Free" ? "rgba(34,197,94,0.1)" : "rgba(255,255,255,0.05)",
                          color: tag === "Free" ? "rgb(74,222,128)" : "rgb(100,110,120)",
                          border: tag === "Free" ? "1px solid rgba(34,197,94,0.2)" : "1px solid rgba(255,255,255,0.07)",
                        }}
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
              transition={{ duration: 0.4, delay: 0.22 }}
              className="rounded-2xl border border-dashed border-white/[0.06] flex flex-col items-center justify-center gap-3"
              style={{ minHeight: 330, background: "rgba(255,255,255,0.01)" }}
            >
              <div
                className="flex items-center justify-center rounded-full border border-white/10 text-gray-600"
                style={{ width: 34, height: 34, fontSize: 18 }}
              >
                +
              </div>
              <span style={{ fontSize: 12 }} className="text-gray-600">More coming soon</span>
            </motion.div>
          </div>

          {/* ── Stack strip ── */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-8 rounded-xl border border-white/[0.07] flex flex-col sm:flex-row sm:items-center gap-4 px-6 py-4"
            style={{ background: "#131313" }}
          >
            <span style={{ fontSize: 12 }} className="text-gray-500 shrink-0">Stack included:</span>
            <div className="flex flex-wrap gap-2">
              {["Next.js 16 App Router", "TypeScript", "Tailwind CSS", "framer-motion", "lucide-react"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/[0.08] text-gray-500"
                  style={{ fontSize: 11, padding: "2px 10px", background: "rgba(255,255,255,0.03)" }}
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── Fullscreen preview overlay ── */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-[100] flex flex-col"
            style={{ background: "#0a0a0a" }}
          >
            {/* top bar */}
            <div
              className="flex items-center justify-between shrink-0 border-b border-white/[0.07]"
              style={{ height: 50, background: "#111", padding: "0 18px" }}
            >
              <div className="flex items-center gap-3">
                <span className="text-white font-semibold" style={{ fontSize: 13 }}>{selected.name}</span>
                <span
                  className="text-gray-500 border border-white/[0.08] rounded-full"
                  style={{ fontSize: 10, padding: "2px 9px" }}
                >
                  {selected.category}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={selected.previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors"
                  style={{ fontSize: 12 }}
                >
                  <ExternalLink size={13} />
                  Open live
                </a>
                <button
                  className="flex items-center gap-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                  style={{ fontSize: 12, padding: "6px 14px" }}
                >
                  <Download size={13} />
                  Get Code
                </button>
                <button
                  onClick={() => setSelected(null)}
                  className="flex items-center justify-center rounded-lg border border-white/[0.08] text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                  style={{ width: 30, height: 30 }}
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
