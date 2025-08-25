import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('INITIALIZING...');

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        
        // Update loading text based on progress
        if (prev < 20) {
          setLoadingText('SCANNING NETWORK...');
        } else if (prev < 40) {
          setLoadingText('ACCESSING DATABASE...');
        } else if (prev < 60) {
          setLoadingText('LOADING PROFILE...');
        } else if (prev < 80) {
          setLoadingText('ESTABLISHING CONNECTION...');
        } else {
          setLoadingText('READY.');
        }
        
        // Simulate realistic loading with variable speed
        const increment = Math.random() * 3 + 1;
        return Math.min(prev + increment, 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="st-loading-overlay">
      <div className="max-w-md w-full px-8">
        {/* Main Loading Text */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-mono mb-4 st-neon-text st-flicker">
            STRANGER BYTES
          </h1>
          <p className="text-lg font-mono st-terminal-text">
            ACCESSING ALOK MAURYA'S PORTFOLIO
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="st-progress-bar">
            <div 
              className="st-progress-fill animate-st-pulse-glow"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Progress Percentage */}
        <div className="text-center mb-4">
          <span className="text-2xl font-mono st-terminal-text">
            {Math.floor(progress)}%
          </span>
        </div>

        {/* Loading Status Text */}
        <div className="text-center">
          <p className="font-mono st-terminal-text animate-st-flicker">
            {loadingText}
          </p>
        </div>

        {/* Animated Dots */}
        <div className="text-center mt-4">
          <span className="font-mono st-terminal-text">
            <span className="animate-pulse">▌</span>
            <span className="animate-pulse delay-100">▌</span>
            <span className="animate-pulse delay-200">▌</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;