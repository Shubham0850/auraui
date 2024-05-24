import React, { useEffect, useState } from 'react'
import { fetchSourceCode } from './getSourceCode';

function SourceCodeViewer({ componentPath }: { componentPath: string }) {
  const [sourceCode, setSourceCode] = useState('');

  useEffect(() => {
    fetchSourceCode(componentPath)
      .then(setSourceCode)
      .catch(console.error);
  }, [componentPath]);

	console.log()

  return (
    <pre>
      <code>
        {sourceCode}
      </code>
    </pre>
  );
}

export default SourceCodeViewer;

