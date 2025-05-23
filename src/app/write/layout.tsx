import Header from '@/components/Header/Header';
import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header pagename='Write' />
      {children}
    </div>
  );
};

export default layout;