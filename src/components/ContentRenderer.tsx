import { skills, awards, extraCurriculars, personalInfo } from '../data/portfolioData';
import Terminal from './Terminal';
import DetailedContentRenderer from './DetailedContentRenderer';

interface ContentRendererProps {
  section: string;
}

const ContentRenderer = ({ section }: ContentRendererProps) => {
  const renderExperience = () => (
    <DetailedContentRenderer section="experience" />
  );

  const generateAboutContent = () => {
    const content = [
      '> PERSONAL DATA',
      '',
      'CONTACT INFO:',
      `📧 ${personalInfo.contact.email}`,
      `📱 ${personalInfo.contact.phone}`,
      `📍 ${personalInfo.contact.location}`,
      '',
      'SOCIAL LINKS:',
      `🔗 LinkedIn: ${personalInfo.social.linkedin}`,
      `💻 GitHub: ${personalInfo.social.github}`,
      `🐦 Twitter: ${personalInfo.social.twitter}`,
      '',
      'EDUCATION:',
      `${personalInfo.education.institution}`,
      `${personalInfo.education.degree}`,
      `GPA: ${personalInfo.education.gpa}`,
      `Year: ${personalInfo.education.year}`,
      `📍 ${personalInfo.education.location}`,
      '',
      'ACHIEVEMENTS:'
    ];

    awards.forEach(award => {
      content.push(`${award.title} (${award.year})`);
      content.push(`  ${award.description}`);
      content.push('');
    });

    return content;
  };

  const renderAbout = () => (
    <Terminal content={generateAboutContent()} typingSpeed={10} />
  );

  const renderProjects = () => (
    <DetailedContentRenderer section="projects" />
  );

  const generateSkillsContent = () => {
    const content = [
      '> SKILL MATRIX',
      ''
    ];

    skills.forEach(skillGroup => {
      content.push(`${skillGroup.category.toUpperCase()}:`);
      skillGroup.items.forEach(skill => {
        content.push(`▪ ${skill}`);
      });
      content.push('');
    });

    return content;
  };

  const renderSkills = () => (
    <Terminal content={generateSkillsContent()} typingSpeed={10} />
  );

  const generateExtraContent = () => {
    const content = [
      '> ADDITIONAL DATA',
      '',
      'EXTRACURRICULAR ACTIVITIES:'
    ];

    extraCurriculars.forEach(activity => {
      content.push(`${activity.title} - ${activity.duration}`);
      content.push(`Organization: ${activity.organization}`);
      content.push(`${activity.description}`);
      content.push('');
    });

    content.push('ADDITIONAL INFO:');
    content.push('Languages: English, Hindi');
    content.push('Interests: Data Science, Machine Learning, Deep Learning, Natural Language Processing, Generative AI, Data Structures and Algorithms');

    return content;
  };

  const renderExtra = () => (
    <Terminal content={generateExtraContent()} typingSpeed={10} />
  );

  const sectionRenderers: Record<string, () => JSX.Element> = {
    experience: renderExperience,
    about: renderAbout,
    projects: renderProjects,
    skills: renderSkills,
    extra: renderExtra,
  };

  const renderFunction = sectionRenderers[section];
  
  if (!renderFunction) {
    return (
      <div className="st-terminal p-6">
        <p className="font-mono st-terminal-text">
          &gt; ERROR: SECTION NOT FOUND
        </p>
      </div>
    );
  }

  return (
    <div className="animate-st-fade-in">
      {renderFunction()}
    </div>
  );
};

export default ContentRenderer;