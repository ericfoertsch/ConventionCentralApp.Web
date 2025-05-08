// src/App.tsx
import { useRoutes } from 'react-router-dom';
import { routes } from './routes/routes';
import Layout from './components/layouts/Layout';

export default function App() {
  const element = useRoutes(routes); // Route elements

  return (
    <Layout>   {/* Wrap ALL routes in Layout */}
      {element}
    </Layout>
  );
}
