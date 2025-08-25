import { experiences, projects, skills, awards, extraCurriculars, personalInfo } from '../data/portfolioData';

interface ContentRendererProps {
  section: string;
}

const ContentRenderer = ({ section }: ContentRendererProps) => {
  const renderExperience = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-mono st-neon-text mb-4">
        &gt; PROFESSIONAL EXPERIENCE
      </h2>
      {experiences.map((exp, index) => (
        <div key={index} className="st-terminal p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-mono text-lg st-terminal-text">{exp.role}</h3>
            <span className="font-mono text-sm st-muted">{exp.duration}</span>
          </div>
          <div className="flex justify-between items-center mb-3">
            <p className="font-mono text-sm st-accent">{exp.company}</p>
            <p className="font-mono text-sm st-muted">{exp.location}</p>
          </div>
          <ul className="space-y-1 st-terminal-text">
            {exp.description.map((desc, i) => (
              <li key={i} className="font-mono text-sm leading-relaxed">
                • {desc}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  const renderAbout = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-mono st-neon-text mb-4">
        &gt; PERSONAL DATA
      </h2>
      <div className="st-terminal p-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-mono text-lg st-terminal-text mb-3">CONTACT INFO</h3>
            <div className="space-y-2 font-mono text-sm st-terminal-text">
              <p>📧 {personalInfo.contact.email}</p>
              <p>📱 {personalInfo.contact.phone}</p>
              <p>📍 {personalInfo.contact.location}</p>
            </div>
            
            <h3 className="font-mono text-lg st-terminal-text mt-6 mb-3">SOCIAL LINKS</h3>
            <div className="space-y-2 font-mono text-sm st-terminal-text">
              <p>🔗 LinkedIn: {personalInfo.social.linkedin}</p>
              <p>💻 GitHub: {personalInfo.social.github}</p>
              <p>🐦 Twitter: {personalInfo.social.twitter}</p>
            </div>
          </div>
          
          <div>
            <h3 className="font-mono text-lg st-terminal-text mb-3">EDUCATION</h3>
            <div className="space-y-2 font-mono text-sm st-terminal-text">
              <p className="st-accent">{personalInfo.education.institution}</p>
              <p>{personalInfo.education.degree}</p>
              <p>GPA: {personalInfo.education.gpa}</p>
              <p>Year: {personalInfo.education.year}</p>
              <p>📍 {personalInfo.education.location}</p>
            </div>
            
            <h3 className="font-mono text-lg st-terminal-text mt-6 mb-3">ACHIEVEMENTS</h3>
            <div className="space-y-2">
              {awards.map((award, index) => (
                <div key={index} className="font-mono text-sm st-terminal-text">
                  <p className="st-accent">{award.title} ({award.year})</p>
                  <p className="text-xs">{award.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderProjects = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-mono st-neon-text mb-4">
        &gt; PROJECT ARCHIVE
      </h2>
      {projects.map((project, index) => (
        <div key={index} className="st-terminal p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-mono text-lg st-terminal-text">{project.title}</h3>
            <span className="font-mono text-sm st-muted">{project.date}</span>
          </div>
          <div className="mb-3">
            <p className="font-mono text-sm st-accent mb-2">
              Tools: [{project.tools.join(', ')}]
            </p>
          </div>
          <ul className="space-y-1 st-terminal-text">
            {project.description.map((desc, i) => (
              <li key={i} className="font-mono text-sm leading-relaxed">
                ◦ {desc}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  const renderSkills = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-mono st-neon-text mb-4">
        &gt; SKILL MATRIX
      </h2>
      <div className="grid md:grid-cols-2 gap-4">
        {skills.map((skillGroup, index) => (
          <div key={index} className="st-terminal p-4">
            <h3 className="font-mono text-lg st-terminal-text mb-3">
              {skillGroup.category.toUpperCase()}
            </h3>
            <div className="space-y-1">
              {skillGroup.items.map((skill, i) => (
                <p key={i} className="font-mono text-sm st-terminal-text">
                  ▪ {skill}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderExtra = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-mono st-neon-text mb-4">
        &gt; ADDITIONAL DATA
      </h2>
      
      <div className="space-y-4">
        <div className="st-terminal p-4">
          <h3 className="font-mono text-lg st-terminal-text mb-3">EXTRACURRICULAR ACTIVITIES</h3>
          {extraCurriculars.map((activity, index) => (
            <div key={index} className="mb-4 last:mb-0">
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-mono st-accent">{activity.title}</h4>
                <span className="font-mono text-sm st-muted">{activity.duration}</span>
              </div>
              <p className="font-mono text-sm st-terminal-text mb-1">{activity.organization}</p>
              <p className="font-mono text-sm st-terminal-text">{activity.description}</p>
            </div>
          ))}
        </div>
        
        <div className="st-terminal p-4">
          <h3 className="font-mono text-lg st-terminal-text mb-3">ADDITIONAL INFO</h3>
          <div className="space-y-2 font-mono text-sm st-terminal-text">
            <p><span className="st-accent">Languages:</span> English, Hindi</p>
            <p><span className="st-accent">Interests:</span> Data Science, Machine Learning, Deep Learning, Natural Language Processing, Generative AI, Data Structures and Algorithms</p>
          </div>
        </div>
      </div>
    </div>
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