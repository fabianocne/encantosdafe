import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  bg?: 'white' | 'offWhite';
  containerSize?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Section: React.FC<SectionProps> = ({ 
  id, 
  className = "", 
  children, 
  bg = 'white',
  containerSize = 'lg'
}) => {
  const bgColor = bg === 'offWhite' ? 'bg-brand-offWhite' : 'bg-white';
  
  const maxWidth = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl'
  }[containerSize];

  return (
    <section id={id} className={`py-20 md:py-24 ${bgColor} ${className}`}>
      <div className={`${maxWidth} mx-auto px-6`}>
        {children}
      </div>
    </section>
  );
};