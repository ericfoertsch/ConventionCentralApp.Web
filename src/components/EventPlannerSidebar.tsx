import { SidebarProvider } from '../components/ui/sidebar';
import { AppSidebar } from '../components/AppSidebar';

export default function EventPlannerSidebar() {
  return (
    <SidebarProvider>
      <AppSidebar />
    </SidebarProvider>
  );
}
