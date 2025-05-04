import React from 'react'
import AppBar from './HeaderBar'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-darker-grey">
      <AppBar />
      <main className="flex-1 p-6">{children}</main>
    </div>
  )
}
