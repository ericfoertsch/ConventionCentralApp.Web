// src/routes/event-planner-routes.tsx
import { RouteObject } from "react-router-dom";
import EventPlannerSidebar from "../components/EventPlannerSidebar";
import VendorTablePage from "../pages/event-planner/VendorTablePage";
import RoomsPage from "../pages/event-planner/RoomsPage";
import SchedulePage from "../pages/event-planner/SchedulePage";

// This is an array, which is what `useRoutes` expects.
export const eventPlannerRoutes: RouteObject[] = [
  {
    path: "/eventplanner",
    element: <EventPlannerSidebar />,
    children: [
      { index: true, element: <VendorTablePage /> }, // Default route for /eventplanner
      { path: "vendors", element: <VendorTablePage /> },
      { path: "rooms", element: <RoomsPage /> },
      { path: "schedule", element: <SchedulePage /> },
    ],
  },
];
