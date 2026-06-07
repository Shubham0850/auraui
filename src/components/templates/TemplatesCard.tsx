"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Download, Eye, LogIn, Terminal, Rocket, ArrowLeft } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import SignInModal from "./SignInModal";

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
      if (containerRef.current) setScale(containerRef.current.offsetWidth / 1280);
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

const allCategories = ["All", ...Array.from(new Set(templates.map((t) => t.category)))];
const allTags = Array.from(new Set(templates.flatMap((t) => t.tags))).filter((t) => t !== "Free");

export default function TemplatesGallery() {
  const [selected, setSelected] = useState<(typeof templates)[0] | null>(null);
  const [signInOpen, setSignInOpen] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const { data: session } = useSession();

  const filtered = templates.filter((t) => {
    const matchCat = activeCategory === "All" || t.category === activeCategory;
    const matchTag = !activeTag || t.tags.includes(activeTag);
    return matchCat && matchTag;
  });

  // Push history state when overlay opens so browser back closes it
  useEffect(() => {
    if (!selected) return;
    window.history.pushState({ templateOverlay: selected.id }, "");
    const handlePop = () => setSelected(null);
    window.addEventListener("popstate", handlePop);
    return () => window.removeEventListener("popstate", handlePop);
  }, [selected]);

  // After Google sign-in redirects back, auto-trigger pending download
  useEffect(() => {
    if (!session) return;
    const pending = localStorage.getItem("pendingDownload");
    if (!pending) return;
    localStorage.removeItem("pendingDownload");
    handleDownload(pending);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  function closeOverlay() {
    // go back in history → triggers popstate → setSelected(null)
    window.history.back();
  }

  async function handleDownload(templateId: string) {
    setDownloading(true);
    try {
      const res = await fetch(`/api/download/${templateId}`);
      const data = await res.json();
      if (data.url) window.location.href = data.url;
    } finally {
      setDownloading(false);
    }
  }

  return (
    <>
      <section className="not-prose min-h-screen px-4 sm:px-8 py-16">
        <div className="max-w-6xl mx-auto">

          {/* ── Header ── */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-10"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span style={{ fontSize: 10, letterSpacing: "0.15em" }} className="font-semibold uppercase text-gray-500">
                  Templates
                </span>
                <div style={{ fontSize: 40, lineHeight: 1.1, letterSpacing: "-0.02em" }} className="mt-2 font-bold text-gray-900 dark:text-white">
                  Ship faster.
                </div>
                <p style={{ fontSize: 14 }} className="mt-2 text-gray-500 leading-relaxed">
                  Production-ready templates. Pick one, get the code, launch.
                </p>
              </div>

              {/* Signed-in badge */}
              {session?.user && (
                <div className="shrink-0 flex items-center gap-2.5 border border-gray-200 dark:border-white/[0.08] rounded-full px-3 py-1.5 bg-white dark:bg-white/[0.03]">
                  {session.user.image ? (
                    <Image src={session.user.image} alt="avatar" width={20} height={20} className="rounded-full" />
                  ) : (
                    <div className="w-5 h-5 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-[9px] font-bold text-gray-600 dark:text-gray-300">
                      {session.user.name?.[0]}
                    </div>
                  )}
                  <span style={{ fontSize: 12 }} className="text-gray-600 dark:text-gray-400 font-medium">
                    {session.user.name?.split(" ")[0]}
                  </span>
                  <span style={{ fontSize: 10 }} className="text-green-500 font-semibold">✓ ready to download</span>
                </div>
              )}
            </div>
          </motion.div>

          {/* ── Filters ── */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.06 }}
            className="flex flex-wrap items-center gap-2 mb-8"
          >
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{ fontSize: 12, padding: "5px 14px" }}
                className={`rounded-full border transition-colors font-medium ${
                  activeCategory === cat
                    ? "bg-gray-900 dark:bg-white border-gray-900 dark:border-white text-white dark:text-black"
                    : "border-gray-200 dark:border-white/[0.1] text-gray-600 dark:text-gray-400 hover:border-gray-300 dark:hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
            {allTags.length > 0 && (
              <div className="w-px h-4 bg-gray-200 dark:bg-white/[0.08] mx-1" />
            )}
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                style={{ fontSize: 12, padding: "5px 14px" }}
                className={`rounded-full border transition-colors ${
                  activeTag === tag
                    ? "bg-gray-900 dark:bg-white border-gray-900 dark:border-white text-white dark:text-black"
                    : "border-gray-200 dark:border-white/[0.1] text-gray-500 dark:text-gray-500 hover:border-gray-300 dark:hover:border-white/20"
                }`}
              >
                {tag}
              </button>
            ))}
            <span style={{ fontSize: 11 }} className="ml-auto text-gray-400 dark:text-gray-600">
              {filtered.length} template{filtered.length !== 1 ? "s" : ""}
            </span>
          </motion.div>

          {/* ── How it works ── */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="rounded-2xl border border-gray-200 dark:border-white/[0.07] mb-10 overflow-hidden bg-gray-50 dark:bg-[#131313]"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-gray-200 dark:divide-white/[0.06]">
              {steps.map((step) => (
                <div key={step.n} className="p-5 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gray-200/70 dark:bg-white/[0.06] border border-gray-300/50 dark:border-white/[0.08]">
                      <step.icon size={14} className="text-gray-500 dark:text-gray-400" />
                    </div>
                    <span style={{ fontSize: 10, letterSpacing: "0.1em" }} className="font-bold text-gray-400 dark:text-gray-600 font-mono">
                      {step.n}
                    </span>
                  </div>
                  <span style={{ fontSize: 13 }} className="font-semibold text-gray-900 dark:text-white">{step.title}</span>
                  <span style={{ fontSize: 11 }} className="text-gray-500 leading-relaxed">{step.desc}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Template grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((template, i) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.18 + i * 0.08 }}
                whileHover={{ y: -3, transition: { duration: 0.18 } }}
                onClick={() => setSelected(template)}
                className="group cursor-pointer rounded-2xl border border-gray-200 dark:border-white/[0.08] overflow-hidden hover:border-gray-300 dark:hover:border-white/[0.18] transition-colors bg-white dark:bg-[#131313]"
              >
                <div className="relative bg-gray-100 dark:bg-[#0c0c0c]">
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
                  <ScaledIframe src={template.previewUrl} />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20 bg-black/50">
                    <span className="bg-white text-black font-semibold rounded-full" style={{ fontSize: 12, padding: "7px 18px" }}>
                      Preview →
                    </span>
                  </div>
                </div>
                <div style={{ padding: "14px 18px 18px" }}>
                  <div className="flex items-center justify-between mb-3">
                    <span style={{ fontSize: 13 }} className="font-semibold text-gray-900 dark:text-white">{template.name}</span>
                    <span style={{ fontSize: 10, padding: "2px 9px" }}
                      className="text-gray-500 border border-gray-300 dark:border-white/10 rounded-full"
                    >
                      {template.category}
                    </span>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {template.tags.map((tag) => (
                      <span key={tag} style={{ fontSize: 10, padding: "2px 9px" }}
                        className={tag === "Free"
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
                <span key={item} className="rounded-full border border-gray-200 dark:border-white/[0.08] text-gray-500 bg-white dark:bg-white/[0.03]"
                  style={{ fontSize: 11, padding: "2px 10px" }}
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── Sign-in modal ── */}
      <SignInModal
        open={signInOpen}
        onClose={() => setSignInOpen(false)}
        templateName={selected?.name ?? "this template"}
        templateId={selected?.id ?? ""}
      />

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
            {/* Top bar */}
            <div className="shrink-0 flex items-center justify-between border-b border-white/[0.06] px-4"
              style={{ height: 52, background: "#111" }}
            >
              {/* Left */}
              <div className="flex items-center gap-3">
                <button
                  onClick={closeOverlay}
                  className="flex items-center gap-1.5 text-gray-500 hover:text-white transition-colors"
                  style={{ fontSize: 12 }}
                >
                  <ArrowLeft size={13} />
                  <span className="hidden sm:inline">Templates</span>
                </button>
                <div className="w-px h-4 bg-white/[0.08]" />
                <span style={{ fontSize: 13 }} className="font-semibold text-white">{selected.name}</span>
                <span style={{ fontSize: 10, padding: "2px 9px" }}
                  className="text-gray-500 border border-white/[0.08] rounded-full hidden sm:inline"
                >
                  {selected.category}
                </span>
              </div>

              {/* Center — fake URL bar */}
              <div className="hidden md:flex items-center gap-2 bg-white/[0.04] border border-white/[0.07] rounded-lg px-3"
                style={{ height: 30, minWidth: 260 }}
              >
                <div className="w-2 h-2 rounded-full bg-green-500/60 shrink-0" />
                <span style={{ fontSize: 11 }} className="text-gray-500 truncate">
                  {selected.previewUrl.replace("https://", "")}
                </span>
              </div>

              {/* Right */}
              <div className="flex items-center gap-2">
                {/* User info */}
                {session?.user && (
                  <div className="hidden sm:flex items-center gap-2 border border-white/[0.07] rounded-full px-2.5 py-1 bg-white/[0.03]">
                    {session.user.image ? (
                      <Image src={session.user.image} alt="avatar" width={16} height={16} className="rounded-full" />
                    ) : (
                      <div className="w-4 h-4 rounded-full bg-gray-600 flex items-center justify-center text-[8px] font-bold text-gray-300">
                        {session.user.name?.[0]}
                      </div>
                    )}
                    <span style={{ fontSize: 11 }} className="text-gray-400">{session.user.name?.split(" ")[0]}</span>
                  </div>
                )}

                <a href={selected.previewUrl} target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: 12, padding: "5px 12px" }}
                  className="hidden sm:flex items-center gap-1.5 text-gray-400 hover:text-white border border-white/[0.08] rounded-lg hover:bg-white/[0.04] transition-all"
                >
                  <ExternalLink size={12} /> Open live
                </a>

                <button
                  onClick={() => session ? handleDownload(selected.id) : setSignInOpen(true)}
                  disabled={downloading}
                  style={{ fontSize: 12, padding: "6px 14px" }}
                  className="flex items-center gap-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-60"
                >
                  <Download size={12} />
                  {downloading ? "Preparing..." : session ? "Get Code" : "Sign in to download"}
                </button>

                <button
                  onClick={closeOverlay}
                  style={{ width: 30, height: 30 }}
                  className="flex items-center justify-center rounded-lg border border-white/[0.08] text-gray-400 hover:text-white hover:bg-white/[0.05] transition-colors"
                >
                  <X size={13} />
                </button>
              </div>
            </div>

            {/* iframe */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.22, delay: 0.06 }}
              className="flex-1 overflow-hidden"
            >
              <iframe src={selected.previewUrl} className="w-full h-full border-none" loading="lazy" />
            </motion.div>

            {/* Bottom status bar */}
            <div className="shrink-0 flex items-center justify-between border-t border-white/[0.05] px-4"
              style={{ height: 28, background: "#0d0d0d" }}
            >
              <div className="flex items-center gap-3">
                {selected.tags.map((tag) => (
                  <span key={tag} style={{ fontSize: 10 }}
                    className={tag === "Free" ? "text-green-500" : "text-gray-600"}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span style={{ fontSize: 10 }} className="text-gray-700">
                Press <kbd className="font-mono">Esc</kbd> or click ← to go back
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
