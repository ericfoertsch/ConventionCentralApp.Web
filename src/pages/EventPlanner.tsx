import SidebarPageLayout from '../components/layouts/SideBarPageLayout';
import EventPlannerSidebar from '../components/EventPlannerSidebar';
import { SidebarTrigger } from '../components/ui/sidebar';
import { Separator } from '../components/ui/separator';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../components/ui/breadcrumb';
import { Outlet } from 'react-router-dom';

export default function EventPlannerPage() {
  const header = (
    <>
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mr-2 h-4" />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className="hidden md:block">
            <BreadcrumbLink href="#">Event Planner</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="hidden md:block" />
          <BreadcrumbItem>
            <BreadcrumbPage>Dashboard</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );

  return (
    <SidebarPageLayout sidebar={<EventPlannerSidebar />} header={header}>
      <Outlet />
    </SidebarPageLayout>
  );
}
