// src/App.tsx
import { BrowserRouter, Routes } from 'react-router-dom'
import AppBar from './components/HeaderBar'
import { routes } from './routes/routes'

export default function App() {
  return (
    <BrowserRouter>
      <main>
        <div className="min-h-screen flex flex-col">
          <AppBar />
          <Routes>{routes}</Routes>
        </div>
      </main>
    </BrowserRouter>
  )
}
