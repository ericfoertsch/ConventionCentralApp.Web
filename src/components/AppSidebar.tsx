// src/components/app-sidebar.tsx
import { Sidebar } from "../components/ui/sidebar";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../components/ui/accordion";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";

export function AppSidebar() {

  return (
    <Sidebar>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="vendors">
          <AccordionTrigger>Vendors</AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-1">
              <li>
                <NavLinkItem to="/eventplanner/vendors">Manage Vendors</NavLinkItem>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="rooms">
          <AccordionTrigger>Rooms</AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-1">
              <li>
                <NavLinkItem to="/eventplanner/rooms">Manage Rooms</NavLinkItem>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="schedule">
          <AccordionTrigger>Schedule</AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-1">
              <li>
                <NavLinkItem to="/eventplanner/schedule">Manage Schedule</NavLinkItem>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Sidebar>
  );
}

function NavLinkItem({ to, children }: { to: string; children: React.ReactNode }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link
      to={to}
      className={cn(
        'block rounded px-2 py-1 text-sm hover:bg-gray-200 transition',
        isActive ? 'bg-blue-100 text-blue-600 font-semibold' : 'text-gray-700'
      )}
    >
      {children}
    </Link>
  );
}
