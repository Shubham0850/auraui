import React, { useEffect, useState } from "react";
import { fetchSourceCode } from "./getSourceCode";
import { CopyToClipboard } from "nextra/components";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import vscDarkPlus from "react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus";
import SkeletonLoader from "@/components/Theme/SkeletonLoader";

function SourceCodeViewer({ componentPath }: { componentPath: string }) {
  const [sourceCode, setSourceCode] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); // Set loading to true when component path changes
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

  const getValue = () => sourceCode;

  return (
    <pre className="relative h-[500px] overflow-y-auto custom-scrollbar p-0 m-0">
      <div className="">
        <div className="bg-transparent z-20 sticky float-right -mb-4 top-2">
          <CopyToClipboard getValue={getValue} />
        </div>
        {loading ? (
          <SkeletonLoader />
        ) : (
          <code>
            <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLines>
              {sourceCode}
            </SyntaxHighlighter>
          </code>
        )}
      </div>
    </pre>
  );
}

export default SourceCodeViewer;
