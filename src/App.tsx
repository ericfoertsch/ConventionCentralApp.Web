// src/App.tsx
import { BrowserRouter, Routes } from 'react-router-dom'
import AppBar from './components/AppBar'
import { routes } from './routes/routes'

export default function App() {
  return (
    <BrowserRouter>
      <main>
        <div className="min-h-screen flex flex-col bg-dark-grey text-white">
          <AppBar />  {/* AppBar stays at the top */}
          <Routes>{routes}</Routes>  {/* Use the routes from routes.tsx */}
        </div>
        <div className="test-bg">
  This should have a red background
</div>
      </main>
    </BrowserRouter>
  )
}
