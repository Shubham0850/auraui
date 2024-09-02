import { fetchSourceCode } from "@/utils/getSourceCode";
import React, { useState, useEffect } from "react";
import { FaCheck, FaCode, FaCopy, FaSpinner } from "react-icons/fa6";
import { FiCopy } from "react-icons/fi";
import { toast } from "sonner";

function AllLoading() {
  const [loadingComponents, setLoadingComponents] = useState<JSX.Element[]>([]);
  const [loadingIndex, setLoadingIndex] = useState<number | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const fetchAndCopyCode = async (componentPath: string, index: number) => {
    setLoadingIndex(index);
    setCopiedIndex(null);

    try {
      const code = await fetchSourceCode(componentPath);
      await navigator.clipboard.writeText(code);
      toast.success("Copied code to clipboard!", {});
      setLoadingIndex(null);
      setCopiedIndex(index);

      setTimeout(() => {
        setCopiedIndex(null);
      }, 2000);
    } catch (error) {
      console.error("Failed to fetch and copy code:", error);
      setLoadingIndex(null);
    }
  };

  useEffect(() => {
    const loadComponents = async () => {
      const components = await Promise.all(
        Array.from({ length: 30 }, async (_, i) => {
          const { default: Component } = await import(`./Loading${i + 1}`);
          return (
            <div
              key={i}
              className="flex justify-center items-center p-5"
            >
              <div className="flex flex-col items-center gap-y-6 h-max">
                <Component color="#272727" />
                <div className="bg-gray-200 pr-3 py-1 font-medium flex items-center dark:bg-customDark rounded-lg">
                  <button
                    className="text-black dark:text-white flex items-center justify-center px-4 py-1"
                    onClick={() => fetchAndCopyCode(`Loading/Loading${i + 1}.tsx`, i)}
                  >
                    <FiCopy className="mr-2" />
                    code
                  </button>
                </div>
              </div>
            </div>
          );
        })
      );
      setLoadingComponents(components);
    };
    loadComponents();
  }, []);

  return <div className="grid grid-cols-6 p-10 gap-10">{loadingComponents}</div>;
}

export default AllLoading;
