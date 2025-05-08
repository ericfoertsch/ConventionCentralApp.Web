// src/pages/AdminPage.tsx
import { useTheme } from "../context/ThemeContext";

export default function AdminPage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Settings</h1>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        Toggle {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
}
