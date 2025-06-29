import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, X, Zap, Phone } from 'lucide-react';

const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className={`transition-all duration-500 ${isExpanded ? 'transform scale-100' : 'transform scale-100'}`}>
        {isExpanded ? (
          // Expanded CTA Card
          <div className="bg-gradient-to-r from-blue-900/90 to-purple-900/90 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-6 max-w-sm glass-card glow-card">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <span className="text-white font-semibold">Ready to Start?</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClose}
                className="w-6 h-6 p-0 text-gray-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            
            <p className="text-gray-300 text-sm mb-4">
              Transform your digital presence with cutting-edge solutions. Let's create something extraordinary together.
            </p>
            
            <div className="space-y-3">
              <Button 
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 glow-button text-sm"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  setIsExpanded(false);
                }}
              >
                Start Your Project
                <Zap className="ml-2 w-4 h-4" />
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full border-blue-500/30 hover:border-blue-400 hover:bg-blue-500/10 glass-button text-sm"
                onClick={() => {
                  // Contact via phone
                  window.open('tel:+994992241288', '_self');
                  setIsExpanded(false);
                }}
              >
                <Phone className="mr-2 w-4 h-4" />
                Call Now
              </Button>
            </div>
            
            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-400 rounded-full animate-float opacity-60"
                  style={{
                    left: `${10 + i * 20}%`,
                    top: `${20 + i * 15}%`,
                    animationDelay: `${i * 0.3}s`,
                    animationDuration: `${2 + i * 0.5}s`
                  }}
                />
              ))}
            </div>
          </div>
        ) : (
          // Sleek floating chat icon
          <div className="relative">
            <Button
              onClick={handleToggle}
              className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 border-0 shadow-2xl glow-button-enhanced animate-bounce-slow relative overflow-hidden group"
            >
              <MessageCircle className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
              
              {/* Enhanced pulse animation rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-ping opacity-20"></div>
              <div className="absolute inset-1 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-pulse opacity-30"></div>
              <div className="absolute inset-3 rounded-full bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 animate-pulse opacity-20 delay-75"></div>
              
              {/* Notification dot with better styling */}
              <div className="absolute -top-2 -right-2 w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center animate-pulse border-2 border-white/20">
                <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
              </div>
            </Button>
            
            {/* Floating contact info tooltip */}
            <div className="absolute bottom-full right-0 mb-4 bg-black/80 backdrop-blur-xl border border-blue-500/30 rounded-lg px-4 py-2 text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              <div className="text-blue-400 font-medium">💬 Chat with us!</div>
              <div className="text-xs text-gray-300">We're online now</div>
            </div>
          </div>
        )}
      </div>
      
      {/* Background overlay for expanded state */}
      {isExpanded && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm -z-10"
          onClick={handleToggle}
        />
      )}
    </div>
  );
};

export default FloatingCTA;