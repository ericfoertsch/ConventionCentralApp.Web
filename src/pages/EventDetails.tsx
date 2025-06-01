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
import {
  ResizablePanelGroup,
  ResizablePanel,
} from "../components/ui/resizable";
import { Separator } from "../components/ui/separator";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";

const EventDetails = () => {
  const [eventData, setEventData] = useState<Event | null>(null);
  const [vendorCost, setVendorCost] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const eventId = 1;

  useEffect(() => {
    const loadEvent = async () => {
      const result = await fetchEvent(eventId);
      setEventData(result);
      if (result?.settings?.vendor_cost) {
        setVendorCost(result.settings.vendor_cost);
      }
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
      <h1 className="text-2xl font-bold mb-4">
        {eventData.name ?? "Unnamed Event"}
      </h1>
      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="vendors">Vendors</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        {/* Dashboard Tab */}
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
                      ${income.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                  </CardContent>
                </Card>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        </TabsContent>

        {/* Vendors Tab */}
        <TabsContent value="vendors">
          <div className="mt-4">
            <VendorTable />
          </div>
        </TabsContent>

        {/* Settings Tab */}
        <TabsContent value="settings">
          <div className="mt-4">
            <ResizablePanelGroup direction="horizontal">
              <ResizablePanel defaultSize={100}>
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <h2 className="text-lg font-semibold">Event Settings</h2>
                    <div className="space-y-2">
                      <Label htmlFor="vendor_cost">Vendor Cost ($)</Label>
                      <Input
                        id="vendor_cost"
                        type="number"
                        value={vendorCost}
                        onChange={(e) => setVendorCost(parseFloat(e.target.value))}
                      />
                      <Button disabled className="mt-2" variant="secondary">
                        Save (coming soon)
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EventDetails;
