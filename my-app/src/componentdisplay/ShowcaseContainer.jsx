import React, { useState } from "react";

const ShowcaseContainer = ({ title, children, code }) => {
  const [activeTab, setActiveTab] = useState("preview");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full mb-12 flex flex-col gap-3">
      {/* Title */}
      <h3 className="text-lg font-semibold">{title}</h3>

      {/* Tabs */}
      <div className="flex mb-4 gap-6">
        <button
          className={`px-4 py-2 font-medium transition-colors ${
            activeTab === "preview"
              ? "border-b-2 border-gray-800 dark:border-white"
              : "text-gray-500 dark:text-gray-300"
          }`}
          onClick={() => setActiveTab("preview")}
        >
          Preview
        </button>
        <button
          className={`px-4 py-2 font-medium transition-colors ${
            activeTab === "code"
              ? "border-b-2 border-gray-800 dark:border-white"
              : "text-gray-500 dark:text-gray-300"
          }`}
          onClick={() => setActiveTab("code")}
        >
          Code
        </button>
      </div>

      {/* Content */}
      <div>
        {activeTab === "preview" ? (
          <div className="flex gap-2 flex-wrap">{children}</div>
        ) : (
          <div className="relative">
            <button
              onClick={handleCopy}
              className="absolute top-2 right-2 px-2 py-1 text-xs rounded bg-gray-200 dark:bg-gray-700 dark:text-white text-gray-800 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
            <pre className="showcase-code p-4 rounded overflow-x-auto whitespace-pre-wrap text-sm">
              {code}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowcaseContainer;
