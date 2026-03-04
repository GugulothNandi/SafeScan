import { useNavigate } from "react-router-dom";

export default function ScanTable({ scans }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white dark:bg-[#1A1A1A] rounded-xl shadow overflow-hidden">
      <div className="grid grid-cols-7 p-4 text-sm font-semibold border-b text-gray-400">
        <p>Scan Name</p>
        <p>Type</p>
        <p>Status</p>
        <p>Progress</p>
        <p>Critical</p>
        <p>High</p>
        <p>Last Scan</p>
      </div>

      {scans.map((scan) => (
        <div
          key={scan.id}
          onClick={() => navigate(`/scan/${scan.id}`)}
          className="grid grid-cols-7 p-4 text-sm border-b transition-all duration-200 hover:bg-gray-50 dark:hover:bg-[#222] hover:scale-[1.01] cursor-pointer"
        >
          <p className="text-white">{scan.name}</p>
          <p className="text-white">{scan.type}</p>
          <p
            className={
              scan.status === "Completed"
                ? "text-green-500"
                : scan.status === "Failed"
                  ? "text-red-500"
                  : "text-gray-400"
            }
          >
            {scan.status}
          </p>
          <p className="text-white">{scan.progress}%</p>
          <p className="text-red-500">{scan.critical}</p>
          <p className="text-orange-500">{scan.high}</p>
          <p className="text-white">{scan.lastScan}</p>
        </div>
      ))}
    </div>
  );
}
