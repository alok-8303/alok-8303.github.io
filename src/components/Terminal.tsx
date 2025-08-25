import { useState, useEffect, useRef } from 'react';

interface TerminalProps {
  content: string[];
  onComplete?: () => void;
  showCursor?: boolean;
  typingSpeed?: number;
}

const Terminal = ({ 
  content, 
  onComplete, 
  showCursor = true, 
  typingSpeed = 50 
}: TerminalProps) => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentLineIndex >= content.length) {
      setIsComplete(true);
      onComplete?.();
      return;
    }

    const currentLine = content[currentLineIndex];
    
    if (currentCharIndex >= currentLine.length) {
      // Line complete, move to next line
      setTimeout(() => {
        setCurrentLineIndex(prev => prev + 1);
        setCurrentCharIndex(0);
      }, 200);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayedLines(prev => {
        const newLines = [...prev];
        const partialLine = currentLine.substring(0, currentCharIndex + 1);
        newLines[currentLineIndex] = partialLine;
        return newLines;
      });
      setCurrentCharIndex(prev => prev + 1);
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentLineIndex, currentCharIndex, content, onComplete, typingSpeed]);

  useEffect(() => {
    // Auto-scroll to bottom
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [displayedLines]);

  return (
    <div 
      ref={containerRef}
      className="st-terminal p-6 h-96 overflow-y-auto"
    >
      <div className="st-terminal-text">
        {displayedLines.map((line, index) => (
          <div key={index} className="mb-2 leading-relaxed">
            {line}
            {index === currentLineIndex && !isComplete && showCursor && (
              <span className="st-typewriter"></span>
            )}
          </div>
        ))}
        {isComplete && showCursor && (
          <div className="mt-2">
            <span className="st-terminal-text">&gt; </span>
            <span className="animate-st-cursor-blink">█</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Terminal;