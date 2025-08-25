interface NavigationButtonsProps {
  onSectionSelect: (section: string) => void;
  disabled?: boolean;
  activeSection?: string;
}

const NavigationButtons = ({ onSectionSelect, disabled = false, activeSection }: NavigationButtonsProps) => {
  const sections = [
    { id: 'experience', label: 'EXPERIENCE', icon: '💼' },
    { id: 'about', label: 'ABOUT', icon: '👨‍💻' },
    { id: 'projects', label: 'PROJECTS', icon: '🚀' },
    { id: 'skills', label: 'SKILLS', icon: '⚡' },
    { id: 'extra', label: 'EXTRA CURRICULAR', icon: '🏆' }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => onSectionSelect(section.id)}
          disabled={disabled}
          className={`st-button text-left p-4 transition-all duration-300 ${
            activeSection === section.id 
              ? 'border-st-active text-st-active' 
              : ''
          } ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`}
        >
          <div className="flex items-center gap-3">
            <span className="text-xl filter grayscale">{section.icon}</span>
            <div>
              <div className="font-mono text-sm uppercase tracking-wider">
                {section.label}
              </div>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default NavigationButtons;