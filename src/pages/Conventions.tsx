// src/pages/Conventions.tsx
import ConventionCard from "../components/ConventionCard";
import { useConventionStore } from '../stores/ConventionStore';  // You named it this, not VendorStore

const Conventions = () => {
  const { conventions, loading, error } = useConventionStore();

  if (loading) {
    return <div className="p-4 text-lg">Loading conventions...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Conventions Page</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {conventions.map((convention) => (
          <ConventionCard key={convention.name} convention={convention} />
        ))}
      </div>
    </div>
  );
};

export default Conventions;
