export interface Project {
    title: string;
    description: string;
    githubUrl: string;
    demoUrl?: string;
    technologies: { name: string; color: string }[];
    codeSnippet?: {
      code: string;
      language: string;
    };
  }
  
  export const projectsData: Project[] = [
    {
      title: "Taproot Assets Playground",
      description: "Interactive development environment designed to help you explore and experiment with the Taproot Assets protocol.",
      githubUrl: "https://github.com/AndreaDiazCorreia/taproot-assets-playground",
      technologies: [
        { name: "TypeScript", color: "#3178C6" },
        { name: "Lightning", color: "#120A8F" },
        { name: "Taproot", color: "#F7931A" },
        { name: "Next.js", color: "#000000" },
        { name: "Docker", color: "#2496ED" }
      ],
      codeSnippet: {
        code: `// Example code for interacting with Taproot Assets
  import { TaprootAssetsClient } from 'taproot-assets';
  
  async function mintAsset() {
    // Initialize the client
    const client = new TaprootAssetsClient({
      host: 'localhost:10029',
      macaroonPath: './admin.macaroon',
      tlsCertPath: './tls.cert'
    });
    
    // Define the asset properties
    const assetOpts = {
      name: "ExampleAsset",
      assetType: "NORMAL",
      amount: 1000n,
      newGroupedAsset: true,
      groupKey: Buffer.alloc(32, 1)
    };
    
    // Mint the asset
    const { assetGenesis, groupKey } = await client.mint(assetOpts);
    
    console.log("Asset minted successfully!");
    console.log("Genesis:", assetGenesis);
    console.log("Group Key:", groupKey?.toString('hex'));
  }`,
        language: "typescript"
      }
    },
    {
      title: "Mostro Tools",
      description: "@mostrop2p/mostro-tools is a modern TypeScript library that simplifies building applications on the Mostro P2P protocol.",
      githubUrl: "https://github.com/MostroP2P/mostro-tools",
      technologies: [
        { name: "TypeScript", color: "#3178C6" },
        { name: "Lightning", color: "#120A8F" },
        { name: "Nostr", color: "#9747FF" },
        { name: "PNPM", color: "#F69220" }
      ],
      codeSnippet: {
        code: `// Example using Mostro Tools library
  import { NostrEvent, Order, CreateOrderResponse } from '@mostrop2p/mostro-tools';
  
  // Initialize Mostro client with your keys
  const mostro = new MostroClient({
    privateKey: 'your_private_key_here',
    relays: ['wss://relay.example.com']
  });
  
  // Create a new buy order
  async function createBuyOrder() {
    const orderDetails = {
      type: 'BUY',
      amount: 50000, // satoshis
      fiatAmount: 10, // in your local currency
      fiatCode: 'USD',
      paymentMethod: 'BANK_TRANSFER',
      status: 'PENDING'
    };
    
    try {
      const response = await mostro.createOrder(orderDetails);
      console.log('Order created successfully!');
      console.log('Order ID:', response.id);
      
      // Listen for order updates
      mostro.subscribeToOrderUpdates(response.id, (event) => {
        console.log('Order update received:', event);
      });
      
    } catch (error) {
      console.error('Failed to create order:', error);
    }
  }`,
        language: "typescript"
      }
    }
  ];