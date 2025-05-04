// src/components/HeaderBar.tsx
import { Button } from "../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "../components/ui/navigation-menu";

export default function HeaderBar() {
  return (
    <header className="bg-tealz border-b shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          Convention Central
        </div>

        {/* Nav links */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink className="px-4 py-2 text-gray-700 hover:text-blue-600 transition">
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="px-4 py-2 text-gray-700 hover:text-blue-600 transition">
                Events
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="px-4 py-2 text-gray-700 hover:text-blue-600 transition">
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Call to action */}
        <Button>Get Started</Button>
      </div>
    </header>
  );
}
