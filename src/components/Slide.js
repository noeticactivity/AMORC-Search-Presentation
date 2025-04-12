import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import mermaid from 'mermaid';
import '../styles/Slide.css';

// Initialize mermaid
mermaid.initialize({
  startOnLoad: true,
  theme: 'dark',
  securityLevel: 'loose',
  fontFamily: 'Roboto, sans-serif',
});

const Slide = ({ content }) => {
  // Process any mermaid diagrams after the component mounts
  useEffect(() => {
    mermaid.contentLoaded();
  }, [content]);

  // Custom components for ReactMarkdown
  const components = {
    // Handle code blocks (including mermaid)
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '');
      const lang = match && match[1] ? match[1] : '';
      
      // Handle Mermaid diagrams
      if (lang === 'mermaid') {
        const diagramId = `mermaid-diagram-${Math.random().toString(36).substr(2, 9)}`;
        return (
          <div className="mermaid-container">
            <div id={diagramId} className="mermaid">
              {String(children).replace(/\n$/, '')}
            </div>
          </div>
        );
      }
      
      // For other code blocks, use syntax highlighting
      return !inline ? (
        <SyntaxHighlighter
          style={vscDarkPlus}
          language={lang}
          PreTag="div"
          {...props}
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
    
    // Custom image component with fullscreen capability
    img({ node, ...props }) {
      return (
        <div className="image-container">
          <img 
            {...props} 
            alt={props.alt || 'Slide image'} 
            onClick={(e) => {
              document.body.classList.toggle('fullscreen-mode');
              e.target.classList.toggle('fullscreen');
            }}
          />
        </div>
      );
    },
    
    // Custom table styling
    table({ node, ...props }) {
      return (
        <div className="table-container">
          <table {...props} />
        </div>
      );
    },
    
    // Enhance headings with animation
    h1: ({ node, ...props }) => <h1 className="slide-title animate-in" {...props} />,
    h2: ({ node, ...props }) => <h2 className="slide-heading animate-in" {...props} />,
    h3: ({ node, ...props }) => <h3 className="slide-subheading animate-in" {...props} />,
  };

  return (
    <div className="slide-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default Slide; 