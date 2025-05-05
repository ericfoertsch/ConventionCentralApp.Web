// src/App.tsx
import { useRoutes } from 'react-router-dom';
import AppBar from './components/HeaderBar';
import { routes } from './routes/routes';  // Import your routes here

export default function App() {
  const element = useRoutes(routes); // This generates the route elements

  return (
    <div className="min-h-screen flex flex-col">
      <AppBar />
      <main className="flex-1">
        {element}  {/* Render the routed elements here */}
      </main>
    </div>
  );
}
