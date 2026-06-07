"use client";

import React, { useEffect, useState } from "react";
import { fetchSourceCode } from "./getSourceCode";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import vscDarkPlus from "react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus";
import SkeletonLoader from "@/components/Theme/SkeletonLoader";

function SourceCodeViewer({ componentPath }: { componentPath: string }) {
  const [sourceCode, setSourceCode] = useState("");
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetchSourceCode(componentPath)
      .then((code) => {
        setSourceCode(code);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [componentPath]);

  const handleCopy = () => {
    navigator.clipboard.writeText(sourceCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <pre className="relative h-[500px] overflow-y-auto custom-scrollbar p-0 m-0">
      {loading ? (
        <SkeletonLoader />
      ) : (
        <div className="">
          <div className="bg-transparent z-20 sticky float-right -mb-4 top-2">
            <button
              onClick={handleCopy}
              className="text-xs px-2 py-1 rounded bg-zinc-700 hover:bg-zinc-600 text-white transition-colors"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
          <code>
            <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLines>
              {sourceCode}
            </SyntaxHighlighter>
          </code>
        </div>
      )}
    </pre>
  );
}

export default SourceCodeViewer;
