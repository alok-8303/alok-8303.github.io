import { useState } from 'react';
import Terminal from './Terminal';
import { experiences, projects } from '../data/portfolioData';

interface DetailedContentRendererProps {
  section: 'experience' | 'projects';
}

const DetailedContentRenderer = ({ section }: DetailedContentRendererProps) => {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());
  const [showingDetails, setShowingDetails] = useState<number | null>(null);

  const data = section === 'experience' ? experiences : projects;
  const title = section === 'experience' ? '> PROFESSIONAL EXPERIENCE' : '> PROJECT ARCHIVE';

  const generateHeadingsContent = () => {
    const content = [title, ''];
    
    data.forEach((item, index) => {
      if (section === 'experience') {
        const exp = item as any; // Using any temporarily to fix type issues
        content.push(`${index + 1}. ${exp.role} - ${exp.company}`);
        content.push(`   Duration: ${exp.duration} | Location: ${exp.location}`);
      } else {
        const proj = item as any; // Using any temporarily to fix type issues
        content.push(`${index + 1}. ${proj.title}`);
        content.push(`   Date: ${proj.date} | Tools: [${proj.tools.join(', ')}]`);
      }
      content.push('');
    });
    
    content.push('> Select an item number for details...');
    return content;
  };

  const generateDetailContent = (itemIndex: number) => {
    const item = data[itemIndex];
    const content = [];
    
    if (section === 'experience') {
      const exp = item as any; // Using any temporarily to fix type issues
      content.push(`> EXPERIENCE DETAILS: ${exp.role}`);
      content.push('');
      content.push(`Company: ${exp.company}`);
      content.push(`Duration: ${exp.duration}`);
      content.push(`Location: ${exp.location}`);
      content.push('');
      content.push('Key Responsibilities:');
      exp.description.forEach((desc: string) => {
        content.push(`• ${desc}`);
      });
    } else {
      const proj = item as any; // Using any temporarily to fix type issues
      content.push(`> PROJECT DETAILS: ${proj.title}`);
      content.push('');
      content.push(`Date: ${proj.date}`);
      content.push(`Tools: [${proj.tools.join(', ')}]`);
      content.push('');
      content.push('Project Description:');
      proj.description.forEach((desc: string) => {
        content.push(`◦ ${desc}`);
      });
    }
    
    content.push('');
    content.push('> Press [BACK] to return to list...');
    return content;
  };

  const handleItemSelect = (index: number) => {
    setShowingDetails(index);
  };

  const handleBackToList = () => {
    setShowingDetails(null);
  };

  if (showingDetails !== null) {
    return (
      <div className="space-y-4">
        <Terminal 
          content={generateDetailContent(showingDetails)}
          typingSpeed={30}
        />
        <button
          onClick={handleBackToList}
          className="st-button px-4 py-2 font-mono text-sm"
        >
          [BACK TO LIST]
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <Terminal 
        content={generateHeadingsContent()}
        typingSpeed={40}
      />
      <div className="grid gap-2 mt-4">
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => handleItemSelect(index)}
            className="st-button text-left p-3 font-mono text-sm hover:scale-105 transition-transform"
          >
            [GET DETAILS] - Item {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DetailedContentRenderer;