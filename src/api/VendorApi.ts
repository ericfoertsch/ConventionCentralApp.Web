import { Vendor } from '../types/Vendor'; // Import the Vendor type definition

const API_URL = 'http://localhost:8000/api/vendors/'; // Replace with your actual API URL

// Function to fetch vendors from the backend API
export const fetchVendors = async (): Promise<Vendor[]> => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch vendors');
    }
    const data: Vendor[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching vendors:', error);
    return [];
  }
};