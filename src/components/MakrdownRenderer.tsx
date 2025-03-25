import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import CodeBlock from './CodeBlock';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <ReactMarkdown
      components={{
        // Custom rendering for code blocks
        code({ inline, className, children, ...props }: { inline?: boolean; className?: string; children: React.ReactNode }) {
          const match = /language-(\w+)/.exec(className || '');
          if (!inline && match) {
            const language = match[1];
            return (
              <CodeBlock
                code={String(children).replace(/\n$/, '')}
                language={language}
              />
            );
          }
          
          return (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
        // Custom rendering for links
        a({ node, href, children, ...props }) {
          // Internal links (start with /) should use the Link component
          if (href && href.startsWith('/')) {
            return (
              <Link to={href} {...props}>
                {children}
              </Link>
            );
          }
          
          // External links should open in a new tab
          return (
            <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
              {children}
            </a>
          );
        },
        // Custom rendering for headings
        h1: ({ children }) => <h1 className="text-3xl font-mono font-bold mt-6 mb-4">{children}</h1>,
        h2: ({ children }) => <h2 className="text-2xl font-mono font-bold mt-6 mb-3">{children}</h2>,
        h3: ({ children }) => <h3 className="text-xl font-mono font-bold mt-5 mb-2">{children}</h3>,
        // Custom rendering for paragraphs
        p: ({ children }) => <p className="my-3 text-terminal-foreground leading-relaxed">{children}</p>,
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;