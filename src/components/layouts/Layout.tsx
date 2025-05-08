// src/components/ui/Layout.tsx
import React from 'react';
import AppBar from '../HeaderBar';

interface LayoutProps {
  children: React.ReactNode;
  sidebar?: React.ReactNode;  // Optional sidebar
}

export default function Layout({ children, sidebar }: LayoutProps) {
  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden bg-darker-grey">
      
      {/* Fixed Top AppBar */}
      <header className="fixed top-0 left-0 w-full h-16 z-50">
        <AppBar />
      </header>

      {/* Main scrollable content below AppBar */}
      <div className="flex flex-1 pt-16 overflow-hidden">
        {sidebar && (
          <aside className="w-64 bg-grey border-r overflow-y-auto">
            {sidebar}
          </aside>
        )}

        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
