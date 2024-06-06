import React, { useEffect, useState } from "react";
import { fetchSourceCode } from "./getSourceCode";
import { CopyToClipboard } from "nextra/components";

function SourceCodeViewer({ componentPath }: { componentPath: string }) {
  const [sourceCode, setSourceCode] = useState("");

  useEffect(() => {
    fetchSourceCode(componentPath).then(setSourceCode).catch(console.error);
  }, [componentPath]);

  const getValue = () => sourceCode;

  return (
    <pre className="relative h-[500px]  overflow-y-auto">
      <div className="">
        <div className="bg-transparent sticky float-right -mb-4   top-2  ">
          <CopyToClipboard getValue={getValue} />
        </div>
        <code>{sourceCode}</code>
      </div>
    </pre>
  );
}

export default SourceCodeViewer;
