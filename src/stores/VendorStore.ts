import { useState, useEffect } from 'react';
import { fetchVendors } from '../api/VendorApi';  // Import the function from vendorApi.ts
import { Vendor } from '../types/Vendor';      // Import the Vendor type

export const useVendorStore = () => {
  const [vendors, setVendors] = useState<Vendor[]>([]);  // Initialize the vendors state
  const [loading, setLoading] = useState<boolean>(false); // To track loading state
  const [error, setError] = useState<string | null>(null); // To track errors

  useEffect(() => {
    const loadVendors = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchVendors();
        setVendors(data);
      } catch (err) {
        setError('Failed to fetch vendor data: ' + err);
      } finally {
        setLoading(false);
      }
    };

    loadVendors();
  }, []);

  return { vendors, loading, error };
};
