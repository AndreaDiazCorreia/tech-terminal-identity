
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from "lucide-react";
import { getPostBySlug } from "../data/blogPosts";
import CodeBlock from "../components/CodeBlock";

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(getPostBySlug(slug || ""));
  const [readingProgress, setReadingProgress] = useState(0);
  
  useEffect(() => {
    if (!post) {
      navigate("/blog", { replace: true });
      return;
    }
    
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadingProgress(progress);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [post, navigate]);
  
  if (!post) return null;
  
  // Simple markdown-like rendering (in a real app, use a proper markdown parser)
  const renderContent = (content: string | undefined) => {
    if (!content) return <p>No content available</p>;
    
    const lines = content.split('\n');
    const elements: JSX.Element[] = [];
    let codeBlock = '';
    let inCodeBlock = false;
    let codeLanguage = '';
    
    lines.forEach((line, index) => {
      // Code block handling
      if (line.startsWith('```')) {
        if (inCodeBlock) {
          elements.push(
            <CodeBlock 
              key={`code-${index}`} 
              code={codeBlock} 
              language={codeLanguage} 
            />
          );
          codeBlock = '';
          inCodeBlock = false;
        } else {
          inCodeBlock = true;
          codeLanguage = line.slice(3).trim();
        }
        return;
      }
      
      if (inCodeBlock) {
        codeBlock += line + '\n';
        return;
      }
      
      // Heading handling
      if (line.startsWith('# ')) {
        elements.push(<h1 key={index} className="text-3xl font-mono font-bold mt-6 mb-4">{line.slice(2)}</h1>);
      } else if (line.startsWith('## ')) {
        elements.push(<h2 key={index} className="text-2xl font-mono font-bold mt-6 mb-3">{line.slice(3)}</h2>);
      } else if (line.startsWith('### ')) {
        elements.push(<h3 key={index} className="text-xl font-mono font-bold mt-5 mb-2">{line.slice(4)}</h3>);
      } else if (line.trim() === '') {
        elements.push(<div key={index} className="my-4"></div>);
      } else {
        elements.push(<p key={index} className="my-3 text-terminal-foreground leading-relaxed">{line}</p>);
      }
    });
    
    return elements;
  };
  
  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      {/* Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-tech-nostrPurple z-50 transition-all duration-300 ease-out"
        style={{ width: `${readingProgress}%` }}
      ></div>
      
      <Link to="/blog" className="inline-flex items-center text-sm text-terminal-comment hover:text-terminal-foreground transition-colors mb-8 after:hidden">
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back to Articles
      </Link>
      
      <article className="prose prose-invert">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-mono font-bold mb-4">{post.title}</h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-terminal-comment">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{post.readingTime}</span>
            </div>
            <div className="flex items-center space-x-2">
              {post.tags.map((tag) => (
                <Link 
                  key={tag} 
                  to={`/blog?tag=${tag}`}
                  className="text-xs px-2 py-1 rounded font-mono inline-flex items-center after:hidden"
                  style={{
                    backgroundColor: getTagColor(tag).bg,
                    color: getTagColor(tag).text
                  }}
                >
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-b border-tech-nostrPurple/20 mb-8"></div>
        
        <div className="content">{renderContent(post.content)}</div>
        
        <div className="mt-12 pt-6 border-t border-tech-nostrPurple/20">
          <div className="flex items-center justify-between">
            <div className="text-sm text-terminal-comment">
              Tags:&nbsp;
              {post.tags.map((tag, index) => (
                <span key={tag}>
                  <Link 
                    to={`/blog?tag=${tag}`}
                    className="text-tech-nostrPurple hover:text-tech-nostrPurple/80 transition-colors"
                  >
                    {tag}
                  </Link>
                  {index < post.tags.length - 1 ? ', ' : ''}
                </span>
              ))}
            </div>
            <button 
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                // In a real app, show a toast notification
                console.log('URL copied to clipboard');
              }}
              className="text-sm text-terminal-comment hover:text-terminal-foreground flex items-center transition-colors"
            >
              <Share2 className="h-4 w-4 mr-1" />
              Share
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

// Helper function to get tag colors
const getTagColor = (tag: string) => {
  const tagColors: Record<string, { bg: string; text: string }> = {
    bitcoin: { bg: 'rgba(247, 147, 26, 0.2)', text: '#F7931A' },
    lightning: { bg: 'rgba(18, 10, 143, 0.2)', text: '#120A8F' },
    nostr: { bg: 'rgba(151, 71, 255, 0.2)', text: '#9747FF' },
    default: { bg: 'rgba(151, 71, 255, 0.1)', text: '#9747FF' }
  };
  
  return tagColors[tag.toLowerCase()] || tagColors.default;
};

export default BlogDetail;
