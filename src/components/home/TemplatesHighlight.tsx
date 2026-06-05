"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function TemplatesHighlight() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      className="not-prose flex justify-center pb-8 px-4 z-500"
    >
      <Link
        href="/templates"
        className="inline-flex items-center gap-2.5 border border-gray-200 dark:border-white/[0.1] rounded-full px-4 py-2 bg-white dark:bg-white/[0.03] hover:border-gray-300 dark:hover:border-white/[0.18] transition-colors group"
      >
        <span className="flex items-center gap-1.5 bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide">
          <span className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
          New
        </span>
        <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">
          Full templates are live
        </span>
        <span className="text-gray-300 dark:text-white/20">·</span>
        <span className="text-xs font-semibold text-gray-800 dark:text-white group-hover:underline underline-offset-2">
          Browse Templates →
        </span>
      </Link>
    </motion.div>
  );
}
