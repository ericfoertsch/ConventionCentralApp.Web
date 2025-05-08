import React from 'react';
import Layout from './Layout';

interface SidebarPageLayoutProps {
  sidebar: React.ReactNode;
  header?: React.ReactNode;
  children: React.ReactNode;
}

export default function SidebarPageLayout({ sidebar, header, children }: SidebarPageLayoutProps) {
  return (
    <Layout>
      <div className="flex flex-1 overflow-hidden">
        {sidebar}
        <div className="flex flex-col flex-1 overflow-hidden">
          {header && (
            <header className="flex sticky top-0 bg-background h-16 shrink-0 items-center gap-2 border-b px-4 z-10">
              {header}
            </header>
          )}
          <div className="flex-1 overflow-auto p-4">
            {children}
          </div>
        </div>
      </div>
    </Layout>
  );
}
