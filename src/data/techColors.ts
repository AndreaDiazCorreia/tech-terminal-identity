export interface Technology {
    name: string;
    color: string;
  }
  
  export const techColors: Record<string, string> = {
    // Programming Languages
    TypeScript: "#3178C6",
    JavaScript: "#F7DF1E",
    Python: "#3776AB",
    Rust: "#FF4500",
    Go: "#00ADD8",
    "C++": "#00599C",
    Java: "#007396",
    Solidity: "#2F80ED", // Changed to blue
  
    // Blockchain & Crypto
    Bitcoin: "#F7931A",
    Lightning: "#F9D423", // Changed to yellow
    Blockchain: "#5851DB", // Changed to blue
    Taproot: "#F7931A",
    Nostr: "#9747FF",
    NWC: "#FF9A00",
    
    // Frameworks & Libraries
    React: "#61DAFB",
    "Next.js": "#000000",
    "Node.js": "#339933",
    "D3.js": "#F9A03C",
    Pandas: "#150458",
    
    // Tools & Infrastructure
    Docker: "#2496ED",
    PNPM: "#F69220",
    WebSocket: "#4353FF",
    
    // Others
    AI: "#00A67E"
  };
  
  export const getTechObject = (techName: string): Technology => {
    return {
      name: techName,
      color: techColors[techName] || "#6e7681" // Default gray color if tech not found
    };
  };
  
  export const getTechObjects = (techNames: string[]): Technology[] => {
    return techNames.map(name => getTechObject(name));
  };