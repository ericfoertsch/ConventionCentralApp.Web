import { useState, useEffect } from 'react';
import { Convention } from '../types/Convention';
import { fetchConventions } from '../api/ConventionApi';

export const useConventionStore = () => {
    const [conventions, setConventions] = useState<Convention[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadConventions = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await fetchConventions();
                setConventions(data);
            } catch (err) {
                setError('Failed to fetch convention data: ' + err);
            } finally {
                setLoading(false);
            }
        };

        loadConventions();
    }, []);

    return { conventions, loading, error };
}