
import React from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  index?: number;
}

const FeatureCard = ({ title, description, icon, className, index = 0 }: FeatureCardProps) => {
  return (
    <div 
      className={cn(
        "group relative p-6 rounded-2xl transition-all duration-300 hover:shadow-card",
        className
      )}
      style={{ 
        animationDelay: `${index * 100}ms`,
      }}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/80 to-white/40 backdrop-blur-xs group-hover:backdrop-blur-sm border border-white/30 shadow-subtle transition-all duration-300 -z-10" />
      
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold mb-3 transition-colors">{title}</h3>
      
      <p className="text-sm text-foreground/70">{description}</p>
    </div>
  );
};

export default FeatureCard;
