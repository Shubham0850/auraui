"use client";

import { useSession, signOut } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function NavbarAuth() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  if (!session?.user) return null;

  const { name, email, image } = session.user;

  return (
    <div ref={ref} className="relative flex items-center">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-7 h-7 rounded-full overflow-hidden ring-2 ring-transparent hover:ring-gray-300 dark:hover:ring-white/20 transition-all focus:outline-none"
      >
        {image ? (
          <Image src={image} alt={name ?? "avatar"} width={28} height={28} className="rounded-full object-cover" />
        ) : (
          <div className="w-7 h-7 rounded-full bg-gray-400 flex items-center justify-center text-white text-xs font-bold">
            {name?.[0]?.toUpperCase() ?? "?"}
          </div>
        )}
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-52 rounded-xl border border-gray-200 dark:border-white/[0.09] bg-white dark:bg-[#111] shadow-xl shadow-black/10 dark:shadow-black/40 z-50 overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-100 dark:border-white/[0.07]">
            <p className="text-xs font-semibold text-gray-900 dark:text-white truncate">{name}</p>
            <p className="text-[11px] text-gray-400 truncate mt-0.5">{email}</p>
          </div>
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="w-full text-left px-4 py-2.5 text-xs text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/[0.05] hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}
