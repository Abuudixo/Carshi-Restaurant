
import React from 'react';

const Logo = ({ className = "h-12 w-12" }: { className?: string }) => {
  return (
    <div className={`flex items-center justify-center rounded-full bg-stone-900 border-2 border-dashed border-stone-200 overflow-hidden ${className}`}>
      <span className="text-white font-black text-xs uppercase tracking-tighter italic">Carshi</span>
    </div>
  );
};

export default Logo;
