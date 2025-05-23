import Title from '@/components/Title/Title';
import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', margin: "16px" }}><Title title="TODAY's Pieces" /></div>
      {children}
    </div>
  );
};

export default layout;