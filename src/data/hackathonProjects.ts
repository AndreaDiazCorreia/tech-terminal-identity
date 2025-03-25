import { Technology, getTechObjects } from "./techColors";

export interface HackathonProject {
  title: string;
  date: string;
  teamSize: number;
  achievement: string;
  technologies: Technology[];
  description: string;
  githubUrl: string;
  demoUrl?: string;
}

export const hackathonProjects: HackathonProject[] = [
  {
    title: "Zkard",
    date: "August 2024",
    teamSize: 4,
    achievement: "Best Overall app ZKSync",
    technologies: getTechObjects(["Blockchain", "TypeScript", "Next.js", "Solidity"]),
    description: "ZKard is an innovative payment system built on zkSync, enabling fast, permissionless, and anonymous payments.",
    githubUrl: "https://github.com/zkard-org/zkard-monorepo"
  },
  {
    title: "Avax-Cableway",
    date: "October 2024",
    teamSize: 5,
    achievement: "2nd place Infrastructure",
    technologies: getTechObjects(["Blockchain", "TypeScript", "Next.js", "Solidity"]),
    description: "Platform that allows users to deploy their own relayers and manage them easily.",
    githubUrl: "https://github.com/418labs/Avax-Cableway",
    demoUrl: "https://www.avaxcableway.com/"
  },
  {
    title: "Optimism-pay",
    date: "December 2024",
    teamSize: 3,
    achievement: "1st Place",
    technologies: getTechObjects(["Blockchain", "TypeScript", "Next.js", "Solidity"]),
    description: "Cross-chain transactions combining multiple smart contracts and Zama's FHE to ensure private, gasless, and cross-chain token transfers.",
    githubUrl: "https://github.com/AndreaDiazCorreia/Optimism-pay"
  },
  {
    title: "Zaplit",
    date: "February 2025",
    teamSize: 3,
    achievement: "Best NWC in new app",
    technologies: getTechObjects(["TypeScript", "Next.js", "Lightning", "NWC", "Nostr", "Bitcoin"]),
    description: "Zaplit is a web application that simplifies group expenses at conferences and events by enabling easy bill splitting with Bitcoin Lightning payments with NWC.",
    githubUrl: "https://github.com/lacrypta/zaplit"
  },
  {
    title: "Burro Speech",
    date: "March 2025",
    teamSize: 3,
    achievement: "2nd place",
    technologies: getTechObjects(["TypeScript", "Next.js", "AI"]),
    description: "AI-powered live translation for events, meetings or workshops.",
    githubUrl: "https://github.com/418labs/burro-speech",
    demoUrl: "https://www.burrospeech.online/"
  }
];