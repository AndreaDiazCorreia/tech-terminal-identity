
export interface PostMeta {
  title: string;
  date: string;
  description: string;
  tags: string[];
  slug: string;
  readingTime: string;
  content?: string;
}

export const blogPosts: PostMeta[] = [
  {
    title: "Building Lightning Applications with LDK",
    date: "2023-10-15",
    description: "A deep dive into building applications on top of the Lightning Network using the Lightning Development Kit (LDK).",
    tags: ["Lightning", "Bitcoin", "Tutorial"],
    slug: "building-lightning-applications-ldk",
    readingTime: "10 min",
    content: `
# Building Lightning Applications with LDK

The Lightning Network has emerged as one of the most promising layer-2 scaling solutions for Bitcoin, enabling fast, low-cost transactions and new types of applications. In this article, we'll explore how to use the Lightning Development Kit (LDK) to build applications on top of the Lightning Network.

## What is LDK?

Lightning Development Kit (LDK) is a flexible Lightning implementation designed to be easily integrated into Bitcoin wallets and applications. Unlike other Lightning implementations that come as a complete node, LDK is modular and allows developers to use only the components they need.

## Getting Started

First, you'll need to add LDK to your project:

\`\`\`rust
[dependencies]
lightning = "0.0.104"
lightning-invoice = "0.0.104"
\`\`\`

## Basic Setup

Here's how to initialize a basic Lightning node with LDK:

\`\`\`rust
use lightning::ln::channelmanager::ChannelManager;
use lightning::util::events::EventHandler;

fn main() {
    // Set up your Bitcoin RPC connection
    let bitcoin_rpc = BitcoinRpcClient::new("localhost:8332");
    
    // Initialize the channel manager
    let channel_manager = ChannelManager::new(
        /* parameters */
    );
    
    // Set up event handling
    let event_handler = YourEventHandler::new();
    
    // Start your Lightning node
    start_node(channel_manager, event_handler);
}
\`\`\`

## Opening a Channel

To open a Lightning channel with another node:

\`\`\`rust
let peer_pubkey = PublicKey::from_str("02abc123...").unwrap();
let channel_value_satoshis = 1_000_000; // 0.01 BTC
let push_msat = 0; // How much to push to the counterparty
let user_channel_id = 42;

channel_manager.create_channel(
    peer_pubkey,
    channel_value_satoshis,
    push_msat,
    user_channel_id,
);
\`\`\`

## Conclusion

LDK provides a flexible toolkit for integrating Lightning Network functionality into your applications. By understanding these basics, you're ready to start building the next generation of Lightning-powered applications.
    `
  },
  {
    title: "Decentralized Identity with Nostr",
    date: "2023-09-22",
    description: "Exploring how Nostr's simple protocol can enable powerful decentralized identity solutions.",
    tags: ["Nostr", "Identity", "Web3"],
    slug: "decentralized-identity-nostr",
    readingTime: "8 min",
    content: `
# Decentralized Identity with Nostr

Nostr (Notes and Other Stuff Transmitted by Relays) is an open protocol designed to create a censorship-resistant global social network. One of its most interesting applications is in the realm of decentralized identity.

## The Problem with Centralized Identity

Centralized identity systems have numerous drawbacks:

1. Single points of failure
2. Privacy concerns
3. Censorship risks
4. Account bans and suspensions
5. Data silos

## Nostr's Approach to Identity

Nostr uses public key cryptography at its core. Your identity is simply your public key, and you control it with your private key.

### Key Management

\`\`\`javascript
// Generate a new key pair
const privateKey = generatePrivateKey();
const publicKey = getPublicKey(privateKey);

// Sign a message
const signature = signEvent({
  kind: 1,
  created_at: Math.floor(Date.now() / 1000),
  tags: [],
  content: "Hello, Nostr world!"
}, privateKey);
\`\`\`

## Practical Applications

### Verifiable Credentials

Nostr can be used to issue and verify credentials:

\`\`\`javascript
// Issue a credential
const credential = {
  kind: 1000,
  created_at: Math.floor(Date.now() / 1000),
  tags: [
    ["p", recipientPubkey],
    ["credential", "university-degree"],
  ],
  content: JSON.stringify({
    university: "Bitcoin University",
    degree: "Master of Cryptography",
    graduationDate: "2023-05-15"
  })
};

const signedCredential = signEvent(credential, issuerPrivateKey);
\`\`\`

## Challenges and Considerations

While Nostr provides powerful identity primitives, there are challenges:

1. Key recovery mechanisms
2. User experience for non-technical users
3. Integration with existing systems
4. Standardization of credential formats

## Conclusion

Nostr's simple yet powerful protocol offers a promising foundation for decentralized identity systems. By leveraging public key cryptography and a distributed relay network, it addresses many of the fundamental issues with centralized identity providers.
    `
  },
  {
    title: "Implementing Schnorr Signatures in Bitcoin",
    date: "2023-08-05",
    description: "A technical overview of Schnorr signatures and how they improve Bitcoin's privacy and efficiency.",
    tags: ["Bitcoin", "Cryptography", "Schnorr"],
    slug: "implementing-schnorr-signatures",
    readingTime: "15 min",
    content: `
# Implementing Schnorr Signatures in Bitcoin

The Taproot upgrade activated on Bitcoin in November 2021, bringing with it Schnorr signatures – a cryptographic innovation that enhances Bitcoin's privacy, efficiency, and flexibility. This article explores the technical details of Schnorr signatures and their implementation in Bitcoin.

## What Are Schnorr Signatures?

Schnorr signatures are a type of digital signature scheme invented by Claus Schnorr. They offer several advantages over the ECDSA signatures that Bitcoin used previously:

- They're faster to verify
- They support key aggregation (multiple keys can be combined into a single key)
- They enable signature aggregation (multiple signatures can be combined into a single signature)
- They provide better privacy through indistinguishable signature types

## The Math Behind Schnorr

The basic Schnorr signature algorithm works as follows:

1. Generate a random number \`k\`
2. Calculate point \`R = k * G\` where G is the generator point
3. Calculate \`e = hash(R || P || message)\` where P is the public key
4. Calculate \`s = k + e * privateKey\`
5. The signature is the pair \`(R, s)\`

Verification:
1. Calculate \`e = hash(R || P || message)\`
2. Verify that \`s * G = R + e * P\`

## Implementing Schnorr in Code

Here's a simplified implementation of Schnorr signatures in pseudocode:

\`\`\`python
def generate_keypair():
    private_key = random_scalar()
    public_key = private_key * G
    return private_key, public_key

def sign(message, private_key):
    k = random_scalar()
    R = k * G
    e = hash(bytes(R) + bytes(public_key) + message)
    s = k + e * private_key
    return (R, s)

def verify(message, signature, public_key):
    R, s = signature
    e = hash(bytes(R) + bytes(public_key) + message)
    return s * G == R + e * public_key
\`\`\`

## MuSig: Key Aggregation with Schnorr

One of the most powerful features of Schnorr is key aggregation through the MuSig protocol:

\`\`\`python
def aggregate_keys(public_keys):
    # Simple aggregation (real MuSig is more complex)
    return sum(public_keys)

def aggregate_signatures(signatures, messages, public_keys):
    # Simple aggregation (real MuSig is more complex)
    return sum(signatures)
\`\`\`

## Applications in Bitcoin

Schnorr signatures enable several new features in Bitcoin:

1. **Taproot**: Merging multiple spending conditions into a single key
2. **Multi-signatures**: More efficient multi-sig transactions
3. **Payment channels**: More private and efficient Lightning Network
4. **Cross-input signature aggregation**: Potential future upgrade to further improve efficiency

## Conclusion

Schnorr signatures represent a significant technological improvement for Bitcoin. By enabling more efficient and private transactions, they help Bitcoin continue to evolve as both a settlement layer and a platform for innovation.
    `
  },
  {
    title: "Getting Started with Bitcoin Core Development",
    date: "2023-07-12",
    description: "A beginner's guide to contributing to the Bitcoin Core codebase.",
    tags: ["Bitcoin", "Development", "Open Source"],
    slug: "bitcoin-core-development-guide",
    readingTime: "12 min"
  },
  {
    title: "Building a Nostr Client from Scratch",
    date: "2023-06-28",
    description: "Learn how to build a simple Nostr client using JavaScript and WebSockets.",
    tags: ["Nostr", "JavaScript", "Tutorial"],
    slug: "building-nostr-client",
    readingTime: "18 min"
  },
  {
    title: "Lightning Network Routing Algorithms",
    date: "2023-05-14",
    description: "Exploring the graph theory behind Lightning Network payment routing and optimization strategies.",
    tags: ["Lightning", "Algorithms", "Networking"],
    slug: "lightning-routing-algorithms",
    readingTime: "14 min"
  }
];

export const getPostBySlug = (slug: string): PostMeta | undefined => {
  return blogPosts.find(post => post.slug === slug);
};
