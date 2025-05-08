// src/pages/EventPlanner.tsx
import SidebarPageLayout from '../components/layouts/SideBarPageLayout';
import EventPlannerSidebar from '../components/EventPlannerSidebar';

export default function EventPlanner() {
  return (
    <SidebarPageLayout sidebar={<EventPlannerSidebar />}>
      <h1 className="text-xl font-bold">Admin</h1>
      <p>Admin content goes here...</p>
    </SidebarPageLayout>
  );
}
