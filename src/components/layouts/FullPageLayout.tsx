import React from 'react';
import Layout from './Layout';

interface FullPageLayoutProps {
  children: React.ReactNode;
}

export default function FullPageLayout({ children }: FullPageLayoutProps) {
  return <Layout>{children}</Layout>;
}
