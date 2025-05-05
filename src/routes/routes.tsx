// src/routes.tsx
import { Route } from 'react-router-dom'
import Admin from '../pages/Admin';
import Conventions from '../pages/Conventions';
import Reports from '../pages/Reports';
import Settings from '../pages/Settings';
import User from '../pages/User';
import Login from '../pages/Login';
import Unauthorized from '../pages/Unauthorized';

export const routes = (
  <>
    <Route path="/admin" element={<Admin />} />
    <Route path="/conventions" element={<Conventions />} />
    <Route path="/reports" element={<Reports />} />
    <Route path="/settings" element={<Settings />} />
    <Route path="/user" element={<User />} />
    <Route path="/login" element={<Login />} />
    <Route path="/unauthorized" element={<Unauthorized />} />
  </>
)
