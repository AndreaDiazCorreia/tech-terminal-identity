
import { useState, useEffect, KeyboardEvent, FormEvent } from "react";

interface Command {
  command: string;
  description: string;
  action: () => void;
}

interface CommandPromptProps {
  availableCommands: Command[];
  prompt?: string;
  className?: string;
  initialOutput?: string[];
}

const CommandPrompt = ({
  availableCommands,
  prompt = "$",
  className = "",
  initialOutput = ["Type 'help' to see available commands."],
}: CommandPromptProps) => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [output, setOutput] = useState<string[]>(initialOutput);
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    // Add command to output
    setOutput(prev => [...prev, `${prompt} ${input}`]);
    
    // Add to history
    setHistory(prev => [input, ...prev]);
    setHistoryIndex(-1);
    
    // Process command
    const commandParts = input.trim().split(" ");
    const commandName = commandParts[0].toLowerCase();
    
    const command = availableCommands.find(cmd => cmd.command === commandName);
    
    if (command) {
      command.action();
    } else if (commandName === "help") {
      setOutput(prev => [
        ...prev,
        "Available commands:",
        ...availableCommands.map(cmd => `${cmd.command.padEnd(15)} - ${cmd.description}`),
      ]);
    } else if (commandName === "clear") {
      setOutput([]);
    } else {
      setOutput(prev => [...prev, `Command not found: ${commandName}. Type 'help' for available commands.`]);
    }
    
    setInput("");
  };
  
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(history[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(history[newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      if (input) {
        // Simple auto-completion
        const matchingCommands = availableCommands
          .map(cmd => cmd.command)
          .filter(cmd => cmd.startsWith(input));
        
        if (matchingCommands.length === 1) {
          setInput(matchingCommands[0]);
        }
      }
    }
  };
  
  return (
    <div className={`terminal-window ${className}`}>
      <div className="terminal-header">
        <div className="terminal-button bg-red-500"></div>
        <div className="terminal-button bg-yellow-500"></div>
        <div className="terminal-button bg-green-500"></div>
        <span className="text-xs text-terminal-comment ml-2 font-mono">~/console</span>
      </div>
      <div className="terminal-content">
        {output.map((line, idx) => (
          <div key={idx} className="mb-1 terminal-line text-sm">
            {line}
          </div>
        ))}
        
        <form onSubmit={handleSubmit} className="flex mt-2">
          <span className="text-terminal-green mr-2">{prompt}</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-none outline-none terminal-text"
            autoFocus
          />
        </form>
      </div>
    </div>
  );
};

export default CommandPrompt;
