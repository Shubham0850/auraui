"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Download, Eye, Terminal, Rocket, ArrowLeft, Lock, KeyRound, BarChart2, CreditCard, Files, Moon, Zap } from "lucide-react";
// LogIn removed — sign-in step hidden
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
  {
    id: "restau-club",
    name: "Restaurant & Club",
    category: "Landing Page",
    previewUrl: "https://auraui-templates.vercel.app/",
    tags: ["Next.js 16", "Tailwind", "Free"],
  },
];

const proTemplates = [
  {
    id: "saas-pro",
    name: "SaaS Starter Pro",
    category: "Full Stack",
    desc: "Auth · Dashboard · Billing · Settings",
    accentFrom: "rgba(139,92,246,0.12)",
    accentTo: "rgba(99,102,241,0.04)",
    border: "rgba(139,92,246,0.2)",
  },
  {
    id: "ecom-pro",
    name: "E-commerce Pro",
    category: "Full Stack",
    desc: "Store · Cart · Checkout · Auth",
    accentFrom: "rgba(16,185,129,0.12)",
    accentTo: "rgba(20,184,166,0.04)",
    border: "rgba(16,185,129,0.2)",
  },
  {
    id: "agency-pro",
    name: "Agency Pro",
    category: "Multi-page",
    desc: "Portfolio · Blog · CMS · Contact",
    accentFrom: "rgba(236,72,153,0.12)",
    accentTo: "rgba(244,63,94,0.04)",
    border: "rgba(236,72,153,0.2)",
  },
];

const proFeatures = [
  { Icon: KeyRound,   color: "#f59e0b", bg: "rgba(245,158,11,0.12)",   label: "Authentication",  desc: "Google, Email, Magic Link" },
  { Icon: BarChart2,  color: "#6366f1", bg: "rgba(99,102,241,0.12)",   label: "Dashboard",       desc: "Analytics & user management" },
  { Icon: CreditCard, color: "#10b981", bg: "rgba(16,185,129,0.12)",   label: "Payments",        desc: "Stripe · billing · webhooks" },
  { Icon: Files,      color: "#a78bfa", bg: "rgba(167,139,250,0.12)",  label: "Multi-page",      desc: "Full routing, not just a landing" },
  { Icon: Moon,       color: "#94a3b8", bg: "rgba(148,163,184,0.12)",  label: "Dark mode",       desc: "System + manual toggle" },
  { Icon: Zap,        color: "#fbbf24", bg: "rgba(251,191,36,0.12)",   label: "Deploy-ready",    desc: "One click to Vercel" },
];

const steps = [
  { icon: Eye,      n: "01", title: "Browse",      desc: "Click any card to open a full live preview — not a screenshot, the actual running page." },
  // { icon: LogIn, n: "02", title: "Sign in", desc: 'Hit "Get Code", sign in with Google, and instantly download the full source ZIP.' },
  { icon: Terminal, n: "02", title: "Run locally",  desc: "npm install → npm run dev → open localhost:3000. Everything works out of the box." },
  { icon: Rocket,   n: "03", title: "Ship it",      desc: "Edit colors, copy, images. Deploy to Vercel with one click — no config needed." },
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
  const [proMode, setProMode] = useState(false);
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [waitlistDone, setWaitlistDone] = useState(false);
  const [waitlistLoading, setWaitlistLoading] = useState(false);
  const [notifyEmail, setNotifyEmail] = useState("");
  const [notifyDone, setNotifyDone] = useState(false);
  const [notifyLoading, setNotifyLoading] = useState(false);
  const { data: session } = useSession();

  const filtered = templates.filter((t) => {
    const matchCat = activeCategory === "All" || t.category === activeCategory;
    const matchTag = !activeTag || t.tags.includes(activeTag);
    return matchCat && matchTag;
  });

  useEffect(() => {
    if (!selected) return;
    window.history.pushState({ templateOverlay: selected.id }, "");
    const handlePop = () => setSelected(null);
    window.addEventListener("popstate", handlePop);
    return () => window.removeEventListener("popstate", handlePop);
  }, [selected]);

  useEffect(() => {
    if (!session) return;
    const pending = localStorage.getItem("pendingDownload");
    if (!pending) return;
    localStorage.removeItem("pendingDownload");
    handleDownload(pending);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  function closeOverlay() {
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

  const handleNotify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!notifyEmail.trim() || notifyLoading) return;
    setNotifyLoading(true);
    try {
      await fetch("/api/template-notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: notifyEmail }),
      });
      setNotifyDone(true);
    } finally {
      setNotifyLoading(false);
    }
  };

  const handleWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!waitlistEmail.trim() || waitlistLoading) return;
    setWaitlistLoading(true);
    try {
      await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: waitlistEmail }),
      });
      setWaitlistDone(true);
    } finally {
      setWaitlistLoading(false);
    }
  };

  return (
    <>
      <section className="not-prose min-h-screen px-4 sm:px-8 py-16 relative overflow-hidden">

        {/* Pro ambient glow — absolute, behind everything */}
        <AnimatePresence>
          {proMode && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 pointer-events-none"
              aria-hidden
            >
              <div style={{
                position: "absolute", top: -300, left: "50%", transform: "translateX(-50%)",
                width: 900, height: 600,
                background: "radial-gradient(ellipse, rgba(212,168,71,0.09) 0%, transparent 65%)",
              }} />
              <div style={{
                position: "absolute", bottom: 0, right: -100,
                width: 500, height: 500,
                background: "radial-gradient(ellipse, rgba(212,168,71,0.04) 0%, transparent 65%)",
              }} />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="max-w-6xl mx-auto relative">

          {/* ── Header ── */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-10"
          >
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                {/* Eyebrow + Toggle */}
                <div className="flex items-center gap-3 mb-3">
                  <motion.span
                    key={proMode ? "pro-label" : "free-label"}
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25 }}
                    style={{ fontSize: 10, letterSpacing: "0.15em" }}
                    className={`font-semibold uppercase transition-colors ${proMode ? "text-amber-500/80" : "text-gray-500"}`}
                  >
                    {proMode ? "Templates · Pro" : "Templates"}
                  </motion.span>

                  {/* Free | Pro ✦ toggle */}
                  <div className="inline-flex items-center rounded-lg border border-gray-200 dark:border-white/[0.08] p-0.5 bg-gray-100/80 dark:bg-white/[0.03]">
                    <button
                      onClick={() => setProMode(false)}
                      style={{ fontSize: 11 }}
                      className={`font-semibold px-3 py-1 rounded-[6px] transition-all duration-200 ${
                        !proMode
                          ? "bg-white dark:bg-white/[0.1] text-gray-900 dark:text-white shadow-sm"
                          : "text-gray-500 dark:text-gray-600 hover:text-gray-700 dark:hover:text-gray-300"
                      }`}
                    >
                      Free
                    </button>
                    <button
                      onClick={() => setProMode(true)}
                      style={{ fontSize: 11 }}
                      className={`font-semibold px-3 py-1 rounded-[6px] transition-all duration-200 flex items-center gap-1 ${
                        proMode
                          ? "bg-gradient-to-r from-amber-500/20 to-amber-400/10 text-amber-400 border border-amber-500/20"
                          : "text-gray-500 dark:text-gray-600 hover:text-amber-400"
                      }`}
                    >
                      Pro <span style={{ fontSize: 9 }} className="text-amber-400">✦</span>
                    </button>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={proMode ? "pro-heading" : "free-heading"}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.28 }}
                  >
                    {proMode ? (
                      <>
                        <div
                          style={{ fontSize: 40, lineHeight: 1.1, letterSpacing: "-0.02em" }}
                          className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/60"
                        >
                          Don&apos;t build the boilerplate.
                        </div>
                        <div
                          style={{ fontSize: 40, lineHeight: 1.15, letterSpacing: "-0.02em" }}
                          className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-200"
                        >
                          Build the business.
                        </div>
                      </>
                    ) : (
                      <div
                        style={{ fontSize: 40, lineHeight: 1.1, letterSpacing: "-0.02em" }}
                        className="font-bold text-gray-900 dark:text-white"
                      >
                        Ship faster.
                      </div>
                    )}
                    <p style={{ fontSize: 14 }} className="mt-2 text-gray-500 leading-relaxed max-w-lg">
                      {proMode
                        ? "Pro templates ship as complete products — auth, dashboard, payments, all wired. Paste your credentials, push to Vercel, you're live."
                        : "Production-ready templates. Pick one, get the code, launch."}
                    </p>
                  </motion.div>
                </AnimatePresence>
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

          {/* ── Mode content ── */}
          <AnimatePresence mode="wait">

            {/* ════════════ FREE MODE ════════════ */}
            {!proMode && (
              <motion.div
                key="free-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                {/* Filters */}
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
                  {allTags.length > 0 && <div className="w-px h-4 bg-gray-200 dark:bg-white/[0.08] mx-1" />}
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

                {/* How it works */}
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.08 }}
                  className="rounded-2xl border border-gray-200 dark:border-white/[0.07] mb-10 overflow-hidden bg-gray-50 dark:bg-[#131313]"
                >
                  <div className="grid grid-cols-2 sm:grid-cols-3 divide-x divide-y sm:divide-y-0 divide-gray-200 dark:divide-white/[0.06]">
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

                {/* Template grid */}
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
                                : "rounded-full text-gray-500 border border-gray-200 dark:border-white/[0.07] bg-gray-100 dark:bg-white/[0.05]"}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {/* Notify card */}
                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.26 }}
                    className="rounded-2xl border border-dashed border-gray-300 dark:border-white/[0.07] flex flex-col justify-center gap-5 bg-gray-50/50 dark:bg-white/[0.01] p-6"
                    style={{ minHeight: 280 }}
                  >
                    <div>
                      <div style={{ fontSize: 13 }} className="font-semibold text-gray-900 dark:text-white mb-1">More coming soon</div>
                      <p style={{ fontSize: 11 }} className="text-gray-500 leading-relaxed">Get notified when new templates drop — no spam, just the release.</p>
                    </div>
                    {notifyDone ? (
                      <div style={{ fontSize: 12 }} className="text-green-500 font-medium">✓ You&apos;re on the list</div>
                    ) : (
                      <form onSubmit={handleNotify} className="flex flex-col gap-2">
                        <input
                          type="email"
                          value={notifyEmail}
                          onChange={(e) => setNotifyEmail(e.target.value)}
                          placeholder="you@example.com"
                          required
                          style={{ fontSize: 12, height: 36 }}
                          className="w-full bg-white dark:bg-white/[0.04] border border-gray-200 dark:border-white/[0.1] rounded-lg px-3 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 outline-none focus:border-gray-400 dark:focus:border-white/20 transition-colors"
                        />
                        <button
                          type="submit"
                          disabled={notifyLoading}
                          style={{ fontSize: 11, height: 32 }}
                          className="w-full bg-gray-900 dark:bg-white text-white dark:text-black font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                        >
                          {notifyLoading ? "Saving..." : "Notify me →"}
                        </button>
                      </form>
                    )}
                  </motion.div>
                </div>

                {/* Stack strip */}
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
              </motion.div>
            )}

            {/* ════════════ PRO MODE ════════════ */}
            {proMode && (
              <motion.div
                key="pro-content"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
              >
                {/* "In Development" badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.05 }}
                  className="inline-flex items-center gap-2 border border-amber-500/20 bg-amber-500/[0.06] rounded-full px-3.5 py-1.5 mb-8"
                >
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-60" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-400" />
                  </span>
                  <span style={{ fontSize: 11, letterSpacing: "0.1em" }} className="text-amber-400/80 font-semibold uppercase">
                    In Development &middot; Early Access Soon
                  </span>
                </motion.div>

                {/* What Pro includes */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.1 }}
                  className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10"
                >
                  {proFeatures.map((f, i) => (
                    <motion.div
                      key={f.label}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.12 + i * 0.05 }}
                      whileHover={{ y: -2, transition: { duration: 0.15 } }}
                      className="p-4 rounded-xl border border-white/[0.06] hover:border-white/[0.12] transition-all duration-200 cursor-default group"
                      style={{ background: "rgba(255,255,255,0.02)" }}
                    >
                      {/* Icon */}
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center mb-3.5"
                        style={{ background: f.bg }}
                      >
                        <f.Icon size={16} style={{ color: f.color }} />
                      </div>
                      {/* Label */}
                      <div style={{ fontSize: 13 }} className="font-semibold text-gray-900 dark:text-white/90 mb-1">
                        {f.label}
                      </div>
                      {/* Desc */}
                      <div style={{ fontSize: 11 }} className="text-gray-500 leading-relaxed">
                        {f.desc}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Waitlist */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.22 }}
                  className="mb-12 p-6 rounded-2xl relative overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, rgba(212,168,71,0.07) 0%, rgba(212,168,71,0.02) 50%, transparent 100%)",
                    border: "1px solid rgba(212,168,71,0.15)",
                  }}
                >
                  <div style={{ fontSize: 16 }} className="font-bold text-gray-900 dark:text-white mb-1">
                    Be first in line.
                  </div>
                  <p style={{ fontSize: 13 }} className="text-gray-500 mb-5 max-w-md leading-relaxed">
                    Early access opens to the first 500 builders. Drop your email — we&apos;ll reach out the moment Pro drops.
                  </p>

                  {waitlistDone ? (
                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2.5"
                    >
                      <div className="w-6 h-6 rounded-full border border-amber-500/30 bg-amber-500/10 flex items-center justify-center shrink-0">
                        <span style={{ fontSize: 11 }} className="text-amber-400">✦</span>
                      </div>
                      <div>
                        <div style={{ fontSize: 13 }} className="font-semibold text-amber-400">You&apos;re on the list.</div>
                        <div style={{ fontSize: 11 }} className="text-gray-500 mt-0.5">We&apos;ll reach out when Pro drops.</div>
                      </div>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleWaitlist} className="flex items-center gap-2.5 max-w-md">
                      <input
                        type="email"
                        value={waitlistEmail}
                        onChange={(e) => setWaitlistEmail(e.target.value)}
                        placeholder="you@company.com"
                        required
                        style={{ fontSize: 13, height: 44 }}
                        className="flex-1 min-w-0 bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 text-gray-900 dark:text-white placeholder:text-gray-500 outline-none focus:border-amber-500/40 transition-colors"
                      />
                      <button
                        type="submit"
                        disabled={waitlistLoading}
                        style={{ fontSize: 12, height: 44, background: "linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)" }}
                        className="shrink-0 px-5 font-semibold rounded-xl transition-all whitespace-nowrap disabled:opacity-60 text-black"
                      >
                        {waitlistLoading ? "Saving..." : "Notify me →"}
                      </button>
                    </form>
                  )}

                  {/* decorative corner glow */}
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full pointer-events-none"
                    style={{ background: "radial-gradient(ellipse, rgba(212,168,71,0.12) 0%, transparent 70%)" }}
                  />
                </motion.div>

                {/* Section label */}
                <div style={{ fontSize: 11, letterSpacing: "0.14em" }} className="uppercase text-gray-500 dark:text-gray-600 font-semibold mb-5">
                  Coming in Pro
                </div>

                {/* Locked template cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {proTemplates.map((t, i) => (
                    <motion.div
                      key={t.id}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.28 + i * 0.08 }}
                      className="relative rounded-2xl overflow-hidden cursor-not-allowed select-none"
                      style={{ minHeight: 290, border: `1px solid ${t.border}` }}
                    >
                      {/* Gradient background */}
                      <div className="absolute inset-0" style={{
                        background: `linear-gradient(135deg, ${t.accentFrom} 0%, ${t.accentTo} 100%)`
                      }} />

                      {/* Fake app UI — blurred */}
                      <div className="absolute inset-0 p-5 blur-sm opacity-40 pointer-events-none">
                        <div className="flex items-center gap-1.5 mb-5">
                          <div style={{ width: 7, height: 7, borderRadius: "50%", background: "rgba(255,95,86,0.5)" }} />
                          <div style={{ width: 7, height: 7, borderRadius: "50%", background: "rgba(255,188,46,0.5)" }} />
                          <div style={{ width: 7, height: 7, borderRadius: "50%", background: "rgba(39,200,63,0.5)" }} />
                          <div className="flex-1 h-3 rounded bg-white/10 ml-2" style={{ maxWidth: 160 }} />
                        </div>
                        <div className="space-y-2.5">
                          <div className="h-6 rounded-md bg-white/[0.15] w-3/5" />
                          <div className="h-2.5 rounded bg-white/[0.07] w-full" />
                          <div className="h-2.5 rounded bg-white/[0.07] w-4/5" />
                          <div className="h-2.5 rounded bg-white/[0.07] w-5/6" />
                          <div className="flex gap-2 mt-4">
                            <div className="h-7 rounded-lg bg-white/[0.18] w-24" />
                            <div className="h-7 rounded-lg bg-white/[0.07] w-20" />
                          </div>
                          <div className="mt-6 grid grid-cols-3 gap-2">
                            <div className="h-14 rounded-lg bg-white/[0.07]" />
                            <div className="h-14 rounded-lg bg-white/[0.07]" />
                            <div className="h-14 rounded-lg bg-white/[0.07]" />
                          </div>
                        </div>
                      </div>

                      {/* Lock overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex flex-col items-center gap-2.5">
                          <div className="w-11 h-11 rounded-full flex items-center justify-center border border-amber-500/30 bg-amber-500/10 backdrop-blur-sm">
                            <Lock size={15} className="text-amber-400" />
                          </div>
                          <span style={{ fontSize: 10, letterSpacing: "0.12em" }} className="text-amber-400/50 font-semibold uppercase">
                            Pro only
                          </span>
                        </div>
                      </div>

                      {/* Pro badge */}
                      <div className="absolute top-3 right-3">
                        <span style={{ fontSize: 10 }} className="font-bold text-amber-400 bg-amber-500/15 border border-amber-500/20 rounded-full px-2.5 py-1 backdrop-blur-sm">
                          Pro ✦
                        </span>
                      </div>

                      {/* Bottom info */}
                      <div className="absolute bottom-0 left-0 right-0 p-4"
                        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)" }}
                      >
                        <div style={{ fontSize: 13 }} className="font-semibold text-white mb-0.5">{t.name}</div>
                        <div style={{ fontSize: 11 }} className="text-gray-400">{t.desc}</div>
                      </div>
                    </motion.div>
                  ))}

                  {/* More in Pro */}
                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.52 }}
                    className="rounded-2xl flex flex-col items-center justify-center gap-3"
                    style={{
                      minHeight: 290,
                      border: "1px dashed rgba(212,168,71,0.15)",
                      background: "rgba(212,168,71,0.02)",
                    }}
                  >
                    <span style={{ fontSize: 22 }} className="text-amber-500/20">✦</span>
                    <span style={{ fontSize: 12 }} className="text-amber-500/30">More templates in Pro</span>
                  </motion.div>
                </div>

                {/* Bottom line */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="mt-10 text-center"
                >
                  <p style={{ fontSize: 12 }} className="text-gray-600 dark:text-gray-700">
                    Pro templates include everything Free has, plus a complete product foundation.
                  </p>
                </motion.div>
              </motion.div>
            )}

          </AnimatePresence>
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

              <div className="hidden md:flex items-center gap-2 bg-white/[0.04] border border-white/[0.07] rounded-lg px-3"
                style={{ height: 30, minWidth: 260 }}
              >
                <div className="w-2 h-2 rounded-full bg-green-500/60 shrink-0" />
                <span style={{ fontSize: 11 }} className="text-gray-500 truncate">
                  {selected.previewUrl.replace("https://", "")}
                </span>
              </div>

              <div className="flex items-center gap-2">
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
                  onClick={() => handleDownload(selected.id)}
                  // onClick={() => session ? handleDownload(selected.id) : setSignInOpen(true)}
                  disabled={downloading}
                  style={{ fontSize: 12, padding: "6px 14px" }}
                  className="flex items-center gap-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-60"
                >
                  <Download size={12} />
                  {downloading ? "Preparing..." : "Get Code"}
                  {/* {downloading ? "Preparing..." : session ? "Get Code" : "Sign in to download"} */}
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

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.22, delay: 0.06 }}
              className="flex-1 overflow-hidden"
            >
              <iframe src={selected.previewUrl} className="w-full h-full border-none" loading="lazy" />
            </motion.div>

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
