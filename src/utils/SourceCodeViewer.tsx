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
    <pre className="pt-3 ">
      <code>
        <div className="bg-transparent absolute right-1 top-1 ">
          {" "}
          <CopyToClipboard getValue={getValue} />
        </div>
        {sourceCode}
      </code>
    </pre>
  );
}

export default SourceCodeViewer;
