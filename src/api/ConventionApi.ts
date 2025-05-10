import { Convention } from '../types/Convention'; // Import the Vendor type definition

const API_URL = 'http://localhost:8000/api/conventions/'; // Replace with your actual API URL

export const fetchConventions = async (): Promise<Convention[]> => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch conventions');
    }
    const data: Convention[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching conventions:', error);
    return [];
  }
};