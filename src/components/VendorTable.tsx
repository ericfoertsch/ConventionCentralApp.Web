import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { useVendorStore } from "../stores/VendorStore";
import { Vendor } from "../types/Vendor";
import { VendorDialog } from "./VendorDialog";
import { useState } from "react";
import { Eye, Pencil } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";

const ITEMS_PER_PAGE = 5;

const VendorTable: React.FC = () => {
  const { vendors, loading, error } = useVendorStore();
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(vendors.length / ITEMS_PER_PAGE);
  const paginatedVendors = vendors.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  if (loading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

  return (
    <Card className="p-4 shadow-xl">
      <h2 className="text-xl font-semibold mb-4">Vendors</h2>
      <Table>
        <TableCaption>Your current vendor records.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Capacity</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedVendors.map((vendor: Vendor) => (
            <TableRow key={vendor.id_vendor} className="border">
              <TableCell>{vendor.name}</TableCell>
              <TableCell>{vendor.email || "N/A"}</TableCell>
              <TableCell>
                {vendor.requests_open === null
                  ? "N/A"
                  : vendor.requests_open
                  ? "Open"
                  : "Closed"}
              </TableCell>
              <TableCell>{vendor.capacity ?? "N/A"}</TableCell>
              <TableCell className="flex justify-end space-x-2">
                <VendorDialog vendor={vendor}>
                  <Button size="icon" variant="ghost">
                    <Eye className="h-4 w-4" />
                  </Button>
                </VendorDialog>
                <Button size="icon" variant="ghost" disabled>
                  <Pencil className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex justify-between items-center mt-4">
        <span className="text-sm text-muted-foreground">
          Page {currentPage} of {totalPages}
        </span>
        <div className="space-x-2">
          <Button
            variant="outline"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default VendorTable;
