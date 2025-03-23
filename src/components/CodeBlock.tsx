
import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language: string;
  filename?: string;
}

const CodeBlock = ({ code, language, filename }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-block group" data-language={language}>
      {filename && (
        <div className="code-filename flex items-center justify-between text-xs px-4 py-2 bg-tech-darkCharcoal border-b border-tech-nostrPurple/20">
          <span className="text-terminal-comment">{filename}</span>
          <button
            onClick={handleCopy}
            className="text-terminal-comment hover:text-terminal-foreground transition-colors focus:outline-none"
            aria-label="Copy code"
          >
            {copied ? (
              <Check className="h-4 w-4 text-terminal-green" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </button>
        </div>
      )}
      <pre className="overflow-x-auto px-4 py-3">
        <code>{code}</code>
      </pre>
      {!filename && (
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity text-terminal-comment hover:text-terminal-foreground"
          aria-label="Copy code"
        >
          {copied ? (
            <Check className="h-4 w-4 text-terminal-green" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </button>
      )}
    </div>
  );
};

export default CodeBlock;
