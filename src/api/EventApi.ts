import { Event } from '../types/Event';

const API_BASE_URL = 'http://localhost:8000/api/event';

export const fetchEvent = async (eventId: number): Promise<Event | null> => {
  try {
    const response = await fetch(`${API_BASE_URL}/${eventId}`);
    if (!response.ok) {
      console.error(`Failed to fetch event ${eventId}. Status: ${response.status}`);
      return null;
    }
    const data: Event = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching event:', error);
    return null;
  }
};
