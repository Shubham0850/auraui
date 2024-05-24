// utils/fetchSourceCode.js
export const fetchSourceCode = async (componentPath: string) => {
  const res = await fetch(`/api/sourceCode?componentPath=${componentPath}`);
  if (!res.ok) {
    throw new Error('Failed to fetch source code');
  }
  const data = await res.json();
  return data.sourceCode;
};
