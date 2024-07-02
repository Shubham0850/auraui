import React, { useEffect, useState } from "react";
import { fetchSourceCode } from "./getSourceCode";
import { CopyToClipboard } from "nextra/components";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import vscDarkPlus from 'react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus';

function SourceCodeViewer({ componentPath }: { componentPath: string }) {
  const [sourceCode, setSourceCode] = useState("");

  useEffect(() => {
    fetchSourceCode(componentPath).then(setSourceCode).catch(console.error);
  }, [componentPath]);

  const getValue = () => sourceCode;

  return (
    <pre className="relative h-[500px] overflow-y-auto custom-scrollbar p-0 m-0">
      <div className="">
        <div className="bg-transparent sticky float-right -mb-4 top-2">
          <CopyToClipboard getValue={getValue} />
        </div>
        <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLines>
          {sourceCode}
        </SyntaxHighlighter>
      </div>
    </pre>
  );
}

export default SourceCodeViewer;
