import { useEffect, useState } from "react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../components/ui/tabs";
import { Card, CardContent } from "../components/ui/card";
import VendorTable from "../components/VendorTable";
import { fetchEvent } from "../api/EventApi";
import { Event } from "../types/Event";
import { ResizablePanelGroup, ResizablePanel } from "../components/ui/resizable";
import { Separator } from "../components/ui/separator";

const EventDetails = () => {
  const [eventData, setEventData] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const eventId = 1;

  useEffect(() => {
    const loadEvent = async () => {
      const result = await fetchEvent(eventId);
      setEventData(result);
      setLoading(false);
    };
    loadEvent();
  }, [eventId]);

  if (loading) return <div className="p-4">Loading event data...</div>;
  if (!eventData) return <div className="p-4">Event not found.</div>;

  const { vendor_count, income } = eventData.metrics;
  const isPositive = income >= 0;

  return (
    <div className="p-4">
      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="vendors">Vendors</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard">
          <div className="mt-4 space-y-4">
            <ResizablePanelGroup direction="horizontal">
              <ResizablePanel defaultSize={50}>
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-lg font-medium mb-2">Booths</h2>
                    <p className="text-4xl font-bold text-primary">{vendor_count}</p>
                  </CardContent>
                </Card>
              </ResizablePanel>

              <Separator orientation="vertical" />

              <ResizablePanel defaultSize={50}>
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-lg font-medium mb-2">Income</h2>
                    <p className={`text-4xl font-bold ${isPositive ? "text-green-600" : "text-red-600"}`}>
                      ${income.toFixed(2)}
                    </p>
                  </CardContent>
                </Card>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        </TabsContent>

        <TabsContent value="vendors">
          <div className="mt-4">
            <VendorTable />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EventDetails;
