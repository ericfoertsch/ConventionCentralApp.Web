import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "../components/ui/table";
import { useVendorStore } from '../stores/VendorStore';  // Import the store hook
import { Vendor } from '../types/Vendor';         // Import the Vendor type
import { VendorDialog } from "./VendorDialog";
  
  const VendorTable: React.FC = () => {
    const { vendors, loading, error } = useVendorStore();  // Destructure the state from the store
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error}</div>;
    }
  
    return (
      <Table>
        <TableCaption>A list of your recent vendors.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Capacity</TableHead>
            <TableHead>Image ID</TableHead>
            <TableHead>Person ID</TableHead>
            <TableHead>Status ID</TableHead>
            <TableHead>Video ID</TableHead>
            <TableHead>Link</TableHead>
            <TableHead>Requests Open</TableHead>
            <TableHead>Timestamp</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {vendors.map((vendor: Vendor) => (
            <TableRow key={vendor.id_vendor}>
              <TableCell className="font-medium">{vendor.id_vendor}</TableCell>
              <TableCell>{vendor.name}</TableCell>
              <TableCell>{vendor.description || 'N/A'}</TableCell>
              <TableCell>{vendor.email || 'N/A'}</TableCell>
              <TableCell>{vendor.capacity !== null ? vendor.capacity : 'N/A'}</TableCell>
              <TableCell>{vendor.id_image || 'N/A'}</TableCell>
              <TableCell>{vendor.id_person}</TableCell>
              <TableCell>{vendor.id_status || 'N/A'}</TableCell>
              <TableCell>{vendor.id_video || 'N/A'}</TableCell>
              <TableCell>{vendor.link || 'N/A'}</TableCell>
              <TableCell>{vendor.requests_open === null ? 'N/A' : vendor.requests_open ? 'Open' : 'Closed'}</TableCell>
              <TableCell className="text-right">{new Date(vendor.utc_timestamp).toLocaleString()}</TableCell>
              <TableCell><VendorDialog vendor={vendor} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={11}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell> {/* Adjust as per your data */}
          </TableRow>
        </TableFooter>
      </Table>
    );
  };
  
  export default VendorTable;
  