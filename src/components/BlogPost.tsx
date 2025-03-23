
import { useState, useEffect } from "react";
import { Calendar, Clock, Tag } from "lucide-react";
import { Link } from "react-router-dom";

interface PostMeta {
  title: string;
  date: string;
  description: string;
  tags: string[];
  slug: string;
  readingTime: string;
}

interface BlogPostProps {
  post: PostMeta;
  featured?: boolean;
}

const BlogPost = ({ post, featured = false }: BlogPostProps) => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);
  
  if (!mounted) return null;
  
  if (featured) {
    return (
      <Link to={`/blog/${post.slug}`} className="block after:hidden">
        <div className="tech-card group h-full">
          <div className="flex flex-col h-full">
            <div className="mb-3 flex items-center space-x-2 text-xs text-terminal-comment">
              <div className="flex items-center">
                <Calendar className="h-3 w-3 mr-1" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                <span>{post.readingTime}</span>
              </div>
            </div>
            
            <h2 className="text-xl font-mono font-medium text-tech-nostrPurple mb-3 group-hover:text-tech-nostrPurple/80 transition-colors">
              {post.title}
            </h2>
            
            <p className="text-terminal-comment text-sm flex-grow mb-4">
              {post.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {post.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="text-xs px-2 py-1 rounded font-mono flex items-center"
                  style={{
                    backgroundColor: getTagColor(tag).bg,
                    color: getTagColor(tag).text
                  }}
                >
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    );
  }
  
  return (
    <Link to={`/blog/${post.slug}`} className="block after:hidden">
      <div className="flex items-center p-3 border-b border-tech-nostrPurple/10 hover:bg-tech-nostrPurple/5 transition-colors">
        <div className="font-mono text-xs text-terminal-comment w-28">
          {post.date}
        </div>
        <div className="flex-1">
          <h3 className="font-mono text-terminal-foreground">{post.title}</h3>
        </div>
        <div className="flex items-center space-x-2">
          {post.tags.slice(0, 2).map((tag) => (
            <span 
              key={tag} 
              className="text-xs px-1.5 py-0.5 rounded font-mono"
              style={{
                backgroundColor: getTagColor(tag).bg,
                color: getTagColor(tag).text
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
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

export default BlogPost;
