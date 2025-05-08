// src/components/HeaderBar.tsx
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "../components/ui/navigation-menu";

export default function HeaderBar() {
  return (
    <header className="border-b border-gray-200 shadow-sm sticky top-0 z-50 bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white dark:border-gray-700">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">

        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600 dark:text-teal-300">
          Convention Central
        </div>

        {/* Nav links */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to="/admin"
                  className="px-4 py-2 transition text-gray-800 hover:text-blue-600 hover:underline underline-offset-4
                            dark:text-gray-200 dark:hover:text-teal-400"
                >
                  Admin
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to="/conventions"
                  className="px-4 py-2 transition text-gray-800 hover:text-blue-600 hover:underline underline-offset-4
                            dark:text-gray-200 dark:hover:text-teal-400"
                >
                  Conventions
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to="/reports"
                  className="px-4 py-2 transition text-gray-800 hover:text-blue-600 hover:underline underline-offset-4
                            dark:text-gray-200 dark:hover:text-teal-400"
                >
                  Reports
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Call to action */}
        <Button className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-teal-600 dark:hover:bg-teal-700 rounded-md px-4 py-2 text-sm">
          Login
        </Button>
      </div>
    </header>

  );
}
