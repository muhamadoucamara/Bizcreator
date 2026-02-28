import React from 'react';

export const AdSlot: React.FC<{ position: 'header' | 'middle' | 'footer' }> = ({ position }) => {
  const styles = {
    header: "w-full h-24 bg-slate-100 border border-dashed border-slate-300 flex items-center justify-center text-slate-400 text-sm mb-8",
    middle: "w-full h-64 bg-slate-100 border border-dashed border-slate-300 flex items-center justify-center text-slate-400 text-sm my-12",
    footer: "w-full h-32 bg-slate-100 border border-dashed border-slate-300 flex items-center justify-center text-slate-400 text-sm mt-12",
  };

  return (
    <div className={styles[position]} id={`ad-slot-${position}`}>
      <div className="text-center">
        <p className="font-mono uppercase tracking-widest text-[10px] mb-1">Publicidad</p>
        <p>Espacio reservado para Google AdSense</p>
      </div>
    </div>
  );
};
