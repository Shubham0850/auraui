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

export default function TemplatesGallery() {
  const [selected, setSelected] = useState<(typeof templates)[0] | null>(null);

  return (
    <>
      <section className="min-h-screen bg-[#0a0a0a] px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
              Templates
            </span>
            <h1 className="mt-4 text-5xl sm:text-6xl font-bold text-white tracking-tight">
              Ship faster.
            </h1>
            <p className="mt-4 text-gray-500 max-w-md mx-auto text-base leading-relaxed">
              Production-ready full-page templates built with AuraUI. Pick one, get the code, launch.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template, i) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                onClick={() => setSelected(template)}
                className="group cursor-pointer rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:border-white/20 transition-colors"
              >
                {/* thumbnail */}
                <div className="relative h-48 bg-[#111] overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-7 bg-[#1a1a1a] border-b border-white/5 flex items-center px-3 gap-1.5 z-10">
                    <div className="w-2 h-2 rounded-full bg-red-500/60" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                    <div className="w-2 h-2 rounded-full bg-green-500/60" />
                  </div>
                  <div className="absolute top-7 left-0 right-0 bottom-0 overflow-hidden">
                    <iframe
                      src={template.previewUrl}
                      className="pointer-events-none border-none"
                      style={{
                        width: "1280px",
                        height: "900px",
                        transform: "scale(0.235)",
                        transformOrigin: "top left",
                      }}
                      loading="lazy"
                      tabIndex={-1}
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100 z-20">
                    <span className="bg-white text-black text-xs font-semibold px-4 py-2 rounded-full">
                      Preview →
                    </span>
                  </div>
                </div>

                {/* info */}
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-semibold text-sm">{template.name}</h3>
                    <span className="text-xs text-gray-500 border border-white/10 px-2 py-0.5 rounded-full">
                      {template.category}
                    </span>
                  </div>
                  <div className="flex gap-2 mt-3 flex-wrap">
                    {template.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          tag === "Free"
                            ? "bg-green-500/10 text-green-400 border border-green-500/20"
                            : "bg-white/5 text-gray-500"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* coming soon placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: templates.length * 0.1 }}
              className="rounded-2xl border border-dashed border-white/10 bg-white/[0.02] flex flex-col items-center justify-center text-center min-h-[260px] gap-3"
            >
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white text-xl">
                +
              </div>
              <p className="text-gray-600 text-sm">More templates coming soon</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* fullscreen preview overlay */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/95 flex flex-col"
          >
            {/* top bar */}
            <div className="h-14 bg-[#111] border-b border-white/10 flex items-center justify-between px-5 shrink-0">
              <div className="flex items-center gap-3">
                <span className="text-white font-semibold text-sm">{selected.name}</span>
                <span className="text-xs border border-white/10 px-2 py-0.5 rounded-full text-gray-500">
                  {selected.category}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={selected.previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors"
                >
                  <ExternalLink size={14} />
                  Open live
                </a>
                <button className="flex items-center gap-2 bg-white text-black text-xs font-semibold px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                  <Download size={13} />
                  Get Code
                </button>
                <button
                  onClick={() => setSelected(null)}
                  className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* iframe */}
            <motion.div
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex-1 overflow-hidden"
            >
              <iframe
                src={selected.previewUrl}
                className="w-full h-full border-none"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
