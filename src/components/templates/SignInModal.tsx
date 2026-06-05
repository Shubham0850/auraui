"use client";

import { signIn } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
  templateName: string;
}

export default function SignInModal({ open, onClose, templateName }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 8 }}
            transition={{ duration: 0.18 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-sm mx-4 rounded-2xl border border-white/[0.08] bg-[#111] p-8 shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 flex items-center justify-center w-7 h-7 rounded-lg border border-white/[0.08] text-gray-500 hover:text-white transition-colors"
            >
              <X size={13} />
            </button>

            <div className="text-center mb-6">
              <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center mx-auto mb-4">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" fill="none" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
              </div>
              <div style={{ fontSize: 17 }} className="font-semibold text-white mb-1">
                Get the source code
              </div>
              <p style={{ fontSize: 12 }} className="text-gray-500 leading-relaxed">
                Sign in to download <span className="text-gray-300">{templateName}</span> — free, full source, no strings attached.
              </p>
            </div>

            <button
              onClick={() => signIn("google")}
              className="w-full flex items-center justify-center gap-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-100 transition-colors"
              style={{ height: 44, fontSize: 13 }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Continue with Google
            </button>

            <p style={{ fontSize: 10 }} className="text-center text-gray-600 mt-4">
              We only store your email to manage access. No spam, ever.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
