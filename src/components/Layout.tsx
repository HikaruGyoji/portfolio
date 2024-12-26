import React from 'react';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100">
      <Navigation />
      <main>{children}</main>
    </div>
  );
};

export default Layout;