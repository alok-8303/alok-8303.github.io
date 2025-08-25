import { useState } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import Terminal from '../components/Terminal';
import NavigationButtons from '../components/NavigationButtons';
import ContentRenderer from '../components/ContentRenderer';
import { getIntroContent } from '../data/portfolioData';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showIntro, setShowIntro] = useState(true);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isTyping, setIsTyping] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handleIntroComplete = () => {
    setIsTyping(false);
  };

  const handleSectionSelect = (section: string) => {
    setIsTyping(true);
    setActiveSection(section);
    setShowIntro(false);
    
    // Simulate typing delay
    setTimeout(() => {
      setIsTyping(false);
    }, 1000);
  };

  const handleBackToIntro = () => {
    setShowIntro(true);
    setActiveSection(null);
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-st-background p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 
            className="text-4xl md:text-6xl font-mono st-neon-text animate-st-flicker cursor-pointer"
            onClick={handleBackToIntro}
          >
            STRANGER BYTES
          </h1>
          <p className="font-mono st-terminal-text mt-2">
            &gt; PORTFOLIO INTERFACE v2.0
          </p>
        </header>

        {/* Main Content */}
        <main className="space-y-8">
          {/* Terminal Display */}
          <section>
            {showIntro ? (
              <Terminal
                content={getIntroContent()}
                onComplete={handleIntroComplete}
                typingSpeed={30}
              />
            ) : activeSection && !isTyping ? (
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-4">
                  <button
                    onClick={handleBackToIntro}
                    className="st-button text-sm"
                  >
                    ← BACK TO MAIN
                  </button>
                  <div className="font-mono text-sm st-muted">
                    CURRENT SESSION: {activeSection.toUpperCase()}
                  </div>
                </div>
                <ContentRenderer section={activeSection} />
              </div>
            ) : (
              <div className="st-terminal p-6 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="animate-pulse font-mono st-terminal-text">
                    LOADING SECTION DATA...
                  </div>
                  <div className="mt-4">
                    <span className="animate-st-cursor-blink font-mono st-terminal-cursor">█</span>
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* Navigation */}
          {showIntro && !isTyping && (
            <section>
              <NavigationButtons
                onSectionSelect={handleSectionSelect}
                disabled={isTyping}
                activeSection={activeSection || undefined}
              />
            </section>
          )}

          {/* Footer */}
          <footer className="text-center mt-12 pt-8 border-t border-st-border">
            <p className="font-mono text-sm st-muted">
              &gt; CONNECTION SECURED | UPSIDE DOWN PROTOCOL ACTIVE
            </p>
            <div className="mt-2 flex justify-center gap-4 text-xs font-mono st-muted">
              <span>NEURAL LINK: STABLE</span>
              <span>|</span>
              <span>ENCRYPTION: ENABLED</span>
              <span>|</span>
              <span>STATUS: ONLINE</span>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default Index;
