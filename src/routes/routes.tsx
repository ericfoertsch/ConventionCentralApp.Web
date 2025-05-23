// src/routes.tsx
import { RouteObject } from 'react-router-dom';
import Home from '../pages/Home';
import Admin from '../pages/Admin';
import Conventions from '../pages/Conventions';
import Reports from '../pages/Reports';
import Settings from '../pages/Settings';
import User from '../pages/User';
import Login from '../pages/Login';
import Unauthorized from '../pages/Unauthorized';
import EventDetails from '../pages/EventDetails';

export const routes: RouteObject[] = [
  { path: "/", element: <Home /> },
  { path: "/admin", element: <Admin /> },
  { path: "/conventions", element: <Conventions /> },
  { path: "/event/:eventId", element: <EventDetails /> },
  { path: "/reports", element: <Reports /> },
  { path: "/settings", element: <Settings /> },
  { path: "/user", element: <User /> },
  { path: "/login", element: <Login /> },
  { path: "/unauthorized", element: <Unauthorized /> }
];
