// src/routes.tsx
import { RouteObject } from 'react-router-dom';
import Admin from '../pages/Admin';
import Conventions from '../pages/Conventions';
import Reports from '../pages/Reports';
import Settings from '../pages/Settings';
import User from '../pages/User';
import Login from '../pages/Login';
import Unauthorized from '../pages/Unauthorized';
import { eventPlannerRoutes } from './event-planner-routes';

export const routes: RouteObject[] = [
  { path: "/admin", element: <Admin /> },
  { path: "/conventions", element: <Conventions /> },
  { path: "/reports", element: <Reports /> },
  { path: "/settings", element: <Settings /> },
  { path: "/user", element: <User /> },
  { path: "/login", element: <Login /> },
  { path: "/unauthorized", element: <Unauthorized /> },

  // Directly integrate eventPlannerRoutes (spread inside the route array)
  ...eventPlannerRoutes,
];
