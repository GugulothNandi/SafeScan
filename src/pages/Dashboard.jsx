import { useState } from "react";
import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import ScanTable from "../components/ScanTable";
import { scans } from "../data/mockData";

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filtered = scans.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="flex dark:bg-[#1A1A1A] min-h-screen">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex-1 p-6 md:ml-64">
        <div className="md:hidden flex items-center justify-between mb-4">
          <button
            onClick={() => setIsOpen(true)}
            className="text-2xl text-white"
          >
            ☰
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <StatCard title="Critical" value="86" color="text-red-500" />
          <StatCard title="High" value="16" color="text-orange-500" />
          <StatCard title="Medium" value="26" color="text-yellow-500" />
          <StatCard title="Low" value="16" color="text-green-500" />
        </div>

        <input
          className="w-full md:w-1/3 p-3 border rounded-lg mb-4 text-gray-300"
          placeholder="Search scans..."
          onChange={(e) => setSearch(e.target.value)}
        />

        <ScanTable scans={filtered} />

        <p className="text-sm text-gray-500 mt-4">
          Showing {filtered.length} of 100 Scans
        </p>
      </div>
    </div>
  );
}
