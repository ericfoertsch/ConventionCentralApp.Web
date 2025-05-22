import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../components/ui/dialog";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Checkbox } from "../components/ui/checkbox";
import { Vendor } from "../types/Vendor";
import { useState } from "react";

interface VendorDialogProps {
  vendor: Vendor;
}

export function VendorDialog({ vendor }: VendorDialogProps) {
  const [formData, setFormData] = useState({ ...vendor });

const handleChange = <K extends keyof Vendor>(field: K, value: Vendor[K]) => {
  setFormData((prev) => ({
    ...prev,
    [field]: value,
  }));
};

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">View</Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Edit Vendor</DialogTitle>
          <DialogDescription>
            View or edit vendor details below.
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
          <div>
            <Label htmlFor="id_vendor">ID</Label>
            <Input id="id_vendor" type="number" value={formData.id_vendor} disabled />
          </div>

          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" value={formData.name} onChange={(e) => handleChange("name", e.target.value)} />
          </div>

          <div className="md:col-span-2">
            <Label htmlFor="description">Description</Label>
            <Input id="description" value={formData.description || ""} onChange={(e) => handleChange("description", e.target.value)} />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={formData.email || ""} onChange={(e) => handleChange("email", e.target.value)} />
          </div>

          <div>
            <Label htmlFor="capacity">Capacity</Label>
            <Input id="capacity" type="number" value={formData.capacity || ""} onChange={(e) => handleChange("capacity", Number(e.target.value))} />
          </div>

          <div>
            <Label htmlFor="id_image">Image ID</Label>
            <Input id="id_image" type="number" value={formData.id_image || ""} onChange={(e) => handleChange("id_image", Number(e.target.value))} />
          </div>

          <div>
            <Label htmlFor="id_person">Person ID</Label>
            <Input id="id_person" type="number" value={formData.id_person} onChange={(e) => handleChange("id_person", Number(e.target.value))} />
          </div>

          <div>
            <Label htmlFor="id_status">Status ID</Label>
            <Input id="id_status" type="number" value={formData.id_status || ""} onChange={(e) => handleChange("id_status", Number(e.target.value))} />
          </div>

          <div>
            <Label htmlFor="id_video">Video ID</Label>
            <Input id="id_video" type="number" value={formData.id_video || ""} onChange={(e) => handleChange("id_video", Number(e.target.value))} />
          </div>

          <div>
            <Label htmlFor="link">Link</Label>
            <Input id="link" value={formData.link || ""} onChange={(e) => handleChange("link", e.target.value)} />
          </div>

          <div className="flex items-center gap-2 mt-6">
            <Checkbox
              id="requests_open"
              checked={formData.requests_open || false}
              onCheckedChange={(checked) => handleChange("requests_open", !!checked)}
            />
            <Label htmlFor="requests_open">Requests Open</Label>
          </div>

          <div className="md:col-span-2">
            <Label htmlFor="utc_timestamp">Timestamp</Label>
            <Input id="utc_timestamp" value={new Date(formData.utc_timestamp).toLocaleString()} disabled />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline">Close</Button>
          <Button disabled>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default VendorDialog;
