
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  // Sample tech stacks with colors
  const bitcoinTech = [
    { name: "Bitcoin", color: "#F7931A" },
    { name: "Rust", color: "#FF4500" },
    { name: "C++", color: "#00599C" }
  ];
  
  const nostrTech = [
    { name: "Nostr", color: "#9747FF" },
    { name: "TypeScript", color: "#3178C6" },
    { name: "React", color: "#61DAFB" }
  ];
  
  const lightningTech = [
    { name: "Lightning", color: "#120A8F" },
    { name: "Go", color: "#00ADD8" },
    { name: "WebSocket", color: "#4353FF" }
  ];

  // Sample code snippets
  const bitcoinSnippet = {
    code: `// Bitcoin transaction validation example
pub fn validate_signature(tx: &Transaction, 
                         input_index: usize, 
                         script_pubkey: &Script, 
                         flags: u32) -> bool {
    let tx_to_check = tx.signature_hash(input_index, 
                                       script_pubkey, 
                                       flags);
    let signature = tx.input[input_index].script_sig;
    
    // Verify the signature
    secp256k1::verify(&tx_to_check, &signature, 
                     &script_pubkey.public_key())
}`,
    language: "rust"
  };

  const nostrSnippet = {
    code: `// Nostr event signing example
import { signEvent, getPublicKey } from 'nostr-tools';

const privateKey = '...'; // your private key
const publicKey = getPublicKey(privateKey);

const event = {
  kind: 1,
  created_at: Math.floor(Date.now() / 1000),
  tags: [],
  content: 'Hello, Nostr world!',
  pubkey: publicKey
};

// Sign the event
const signedEvent = signEvent(event, privateKey);
console.log(signedEvent);`,
    language: "typescript"
  };

  const lightningSnippet = {
    code: `// LDK channel opening example
func openChannel(nodePubkey string, amount uint64) (*lnrpc.ChannelPoint, error) {
    ctx := context.Background()
    req := &lnrpc.OpenChannelRequest{
        NodePubkey:         []byte(nodePubkey),
        LocalFundingAmount: amount,
        PushSat:            0,
        Private:            true,
    }
    
    return client.OpenChannelSync(ctx, req)
}`,
    language: "go"
  };

  return (
    <div className="max-w-6xl mx-auto animate-fade-in">
      <div className="mb-12">
        <div className="inline-block px-3 py-1 rounded-full bg-tech-nostrPurple/10 text-tech-nostrPurple text-xs font-mono mb-4">
          Projects
        </div>
        <h1 className="text-3xl md:text-4xl font-mono font-bold">
          Open Source Contributions & Projects
        </h1>
        <p className="text-terminal-comment mt-2 max-w-2xl">
          A showcase of my work on Bitcoin, Nostr, and Lightning Network technologies. All projects are open-source and available on GitHub.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="Bitcoin Wallet Library"
          description="A lightweight library for creating Bitcoin wallets with BIP39 seed phrase support and advanced UTXO management."
          githubUrl="https://github.com/"
          demoUrl="https://demo.com/"
          technologies={bitcoinTech}
          codeSnippet={bitcoinSnippet}
        />
        
        <ProjectCard
          title="Nostr Client"
          description="A minimal, privacy-focused Nostr client with support for multiple identities and custom relay configurations."
          githubUrl="https://github.com/"
          demoUrl="https://demo.com/"
          technologies={nostrTech}
          codeSnippet={nostrSnippet}
        />
        
        <ProjectCard
          title="Lightning Payment Gateway"
          description="A self-hosted Lightning Network payment processor for e-commerce platforms with webhook support."
          githubUrl="https://github.com/"
          demoUrl="https://demo.com/"
          technologies={lightningTech}
          codeSnippet={lightningSnippet}
        />
        
        <ProjectCard
          title="Taproot Explorer"
          description="A web-based explorer for Taproot transactions that visualizes the script path spending options."
          githubUrl="https://github.com/"
          technologies={[
            { name: "Bitcoin", color: "#F7931A" },
            { name: "TypeScript", color: "#3178C6" },
            { name: "D3.js", color: "#F9A03C" }
          ]}
        />
        
        <ProjectCard
          title="Nostr Data Analysis"
          description="Tools for analyzing Nostr social graphs and content propagation across relays."
          githubUrl="https://github.com/"
          technologies={[
            { name: "Nostr", color: "#9747FF" },
            { name: "Python", color: "#3776AB" },
            { name: "Pandas", color: "#150458" }
          ]}
        />
        
        <ProjectCard
          title="Lightning Node Monitor"
          description="A dashboard for monitoring Lightning Network node health, channel balances, and routing performance."
          githubUrl="https://github.com/"
          technologies={[
            { name: "Lightning", color: "#120A8F" },
            { name: "TypeScript", color: "#3178C6" },
            { name: "Node.js", color: "#339933" }
          ]}
        />
      </div>

      <div className="mt-16 text-center">
  <h2 className="text-2xl font-mono font-medium mb-6">Github Stats</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    <div className="tech-card">
      <div className="text-4xl font-mono font-bold text-tech-nostrPurple mb-2">490</div>
      <div className="text-terminal-comment text-sm">Contributions</div>
    </div>
    <div className="tech-card">
      <div className="text-4xl font-mono font-bold text-tech-nostrPurple mb-2">39</div>
      <div className="text-terminal-comment text-sm">Pull Requests</div>
    </div>
    <div className="tech-card">
      <div className="text-4xl font-mono font-bold text-tech-nostrPurple mb-2">203</div>
      <div className="text-terminal-comment text-sm">Commits (2023)</div>
    </div>
    <div className="tech-card">
      <div className="text-4xl font-mono font-bold text-tech-nostrPurple mb-2">11</div>
      <div className="text-terminal-comment text-sm">Stars Earned</div>
    </div>
  </div>
  
  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
    <div className="tech-card">
      <h3 className="text-lg font-mono font-medium mb-3">Most Used Languages</h3>
      <div className="flex flex-wrap gap-2 justify-center">
        <span className="text-xs px-2 py-1 rounded font-mono bg-blue-500/20 text-blue-400">TypeScript 67.39%</span>
        <span className="text-xs px-2 py-1 rounded font-mono bg-green-500/20 text-green-400">Makefile 24.65%</span>
        <span className="text-xs px-2 py-1 rounded font-mono bg-orange-500/20 text-orange-400">Rust 5.14%</span>
        <span className="text-xs px-2 py-1 rounded font-mono bg-purple-500/20 text-purple-400">Solidity 1.17%</span>
      </div>
    </div>
    <div className="tech-card">
      <h3 className="text-lg font-mono font-medium mb-3">Activity Streaks</h3>
      <div className="flex justify-around">
        <div>
          <div className="text-3xl font-mono font-bold text-tech-nostrPurple">2</div>
          <div className="text-terminal-comment text-xs">Current Streak</div>
        </div>
        <div>
          <div className="text-3xl font-mono font-bold text-tech-nostrPurple">13</div>
          <div className="text-terminal-comment text-xs">Longest Streak</div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Projects;
