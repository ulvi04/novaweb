import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactElement<LucideIcon>;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = () => {
    // Scroll to contact section when service card is clicked
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Card
      className={`relative group cursor-pointer transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 glass-card border-white/10 hover:border-blue-500/50 ${
        isHovered ? 'glow-card' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <CardHeader className="relative z-10">
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-4 transition-all duration-300 ${
          isHovered ? 'scale-110 shadow-lg shadow-blue-500/25' : ''
        }`}>
          <div className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
            {icon}
          </div>
        </div>
        
        <CardTitle className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
          {title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="relative z-10 space-y-4">
        <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {features.map((feature, index) => (
            <Badge
              key={index}
              variant="outline"
              className="text-xs border-blue-500/30 text-blue-300 hover:border-blue-400 hover:text-blue-200 transition-all duration-300"
            >
              {feature}
            </Badge>
          ))}
        </div>
        
        <div className={`w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform origin-left transition-transform duration-500 ${
          isHovered ? 'scale-x-100' : 'scale-x-0'
        }`} />
      </CardContent>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
              isHovered ? 'animate-float' : ''
            }`}
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`,
              animationDelay: `${i * 0.2}s`
            }}
          />
        ))}
      </div>
    </Card>
  );
};

export default ServiceCard;