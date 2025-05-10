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
    <header className="border-b border-layout-border-light dark:border-layout-border-dark shadow-sm sticky top-0 z-50 bg-layout-background-light text-gray-900 dark:bg-layout-background-dark dark:text-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">

        {/* Logo */}
        <div className="text-2xl font-bold text-accent-light dark:text-accent-dark">
          Convention Central
        </div>

        {/* Nav links */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to="/admin"
                  className="px-4 py-2 transition text-gray-800 hover:text-accent-light hover:underline underline-offset-4
                            dark:text-gray-200 dark:hover:text-accent-dark"
                >
                  Admin
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to="/conventions"
                  className="px-4 py-2 transition text-gray-800 hover:text-accent-light hover:underline underline-offset-4
                            dark:text-gray-200 dark:hover:text-accent-dark"
                >
                  Conventions
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to="/reports"
                  className="px-4 py-2 transition text-gray-800 hover:text-accent-light hover:underline underline-offset-4
                            dark:text-gray-200 dark:hover:text-accent-dark"
                >
                  Reports
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Call to action */}
        <Button className="bg-accent-light text-white hover:bg-accent-dark dark:bg-accent-dark dark:hover:bg-accent-light rounded-md px-4 py-2 text-sm">
          Login
        </Button>
      </div>
    </header>
  );
}
