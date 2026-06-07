"use client";

import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import vscDarkPlus from "react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus";

type OnlyCodeViewerProps = {
  code: string;
  language?: string;
  height?: number;
};

export default function OnlyCodeViewer({
  code,
  language = "tsx",
  height = 320,
}: OnlyCodeViewerProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="relative border border-gray-200 dark:border-zinc-800 rounded-md overflow-hidden">
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 z-10 text-xs px-2 py-1 rounded bg-zinc-700 hover:bg-zinc-600 text-white transition-colors"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
      <div
        className="overflow-y-auto bg-[#1e1e1e] text-sm font-mono leading-relaxed"
        style={{ height }}
      >
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          wrapLines
          customStyle={{
            margin: 0,
            padding: "0.75rem 1rem",
            background: "transparent",
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
