"use client";

import { CopyToClipboard } from "nextra/components";
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
  height = 320, // reduced height
}: OnlyCodeViewerProps) {
  return (
    <div className="relative border border-gray-200 dark:border-zinc-800 rounded-md overflow-hidden">
      <div className="absolute top-2 right-2 z-10">
        <CopyToClipboard getValue={() => code} />
      </div>
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
            padding: "0.75rem 1rem", // tighter padding
            background: "transparent",
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
