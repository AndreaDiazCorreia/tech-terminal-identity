
import { useState, useEffect, useRef } from "react";

interface TerminalProps {
  lines: string[];
  typingSpeed?: number;
  prompt?: string;
  className?: string;
  onComplete?: () => void;
}

const Terminal = ({
  lines,
  typingSpeed = 50,
  prompt = "$",
  className = "",
  onComplete
}: TerminalProps) => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentLine >= lines.length) {
      setIsTyping(false);
      if (onComplete) onComplete();
      return;
    }

    if (currentChar < lines[currentLine].length) {
      const timer = setTimeout(() => {
        setDisplayedLines(prev => {
          const newLines = [...prev];
          if (newLines.length <= currentLine) {
            newLines.push(lines[currentLine].substring(0, currentChar + 1));
          } else {
            newLines[currentLine] = lines[currentLine].substring(0, currentChar + 1);
          }
          return newLines;
        });
        setCurrentChar(currentChar + 1);
      }, typingSpeed);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setCurrentLine(currentLine + 1);
        setCurrentChar(0);
      }, typingSpeed * 4);
      return () => clearTimeout(timer);
    }
  }, [currentLine, currentChar, lines, typingSpeed, onComplete]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [displayedLines]);

  return (
    <div className={`terminal-window ${className}`}>
      <div className="terminal-header">
        <div className="terminal-button bg-red-500"></div>
        <div className="terminal-button bg-yellow-500"></div>
        <div className="terminal-button bg-green-500"></div>
        <span className="text-xs text-terminal-comment ml-2 font-mono">~/terminal</span>
      </div>
      <div 
        ref={terminalRef}
        className="terminal-content"
        style={{ minHeight: "150px", maxHeight: "500px", overflowY: "auto" }}
      >
        {displayedLines.map((line, index) => (
          <div key={index} className="terminal-line mb-1">
            {index === displayedLines.length - 1 && isTyping ? (
              <div className="flex">
                <span className="text-terminal-green mr-2">{prompt}</span>
                <span>{line}</span>
                <span className="cursor"></span>
              </div>
            ) : (
              <div className="flex">
                <span className="text-terminal-green mr-2">{prompt}</span>
                <span>{line}</span>
              </div>
            )}
          </div>
        ))}
        {!isTyping && <div className="cursor mt-1 text-terminal-green"></div>}
      </div>
    </div>
  );
};

export default Terminal;
