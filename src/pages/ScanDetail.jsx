import { useParams } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import ProgressCircle from "../components/ProgressCircle";
import Tabs from "../components/Tabs";
import FindingCard from "../components/FindingCard";
import { scans } from "../data/mockData";

export default function ScanDetail() {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const scan = scans.find((s) => s.id === Number(id));

  const logs = [
    "[09:00:00] Beginning reconnaissance on helpdesk.democorp.com...",
    "[09:01:12] Target is online. Initiating port scan...",
    "[09:02:45] Apache httpd 2.4.65 detected on port 80.",
    "[09:03:10] Discovered login endpoint at /auth/login",
    "[09:04:20] Testing default credentials...",
    "[09:05:33] Potential IDOR vulnerability identified.",
    "[09:06:41] Verifying injection vectors...",
    "[09:07:55] SQL injection confirmed on authentication endpoint.",
  ];

  if (!scan) {
    return <div className="p-10">Scan not found</div>;
  }

  return (
    <div className="flex bg-gray-100 dark:bg-[#0F0F0F] min-h-screen">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex-1 p-6 md:ml-64 space-y-8">
        <div className="md:hidden flex items-center justify-between mb-4">
          <button onClick={() => setIsOpen(true)} className="text-2xl">
            ☰
          </button>
          <h2 className="font-semibold">{scan.name}</h2>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2 hidden md:block">
            {scan.name}
          </h2>
          <p className="text-sm text-gray-500">
            Scan Private Assets | Export Report | Stop Scan
          </p>
        </div>

        <div className="bg-white dark:bg-[#1A1A1A] p-6 rounded-xl border border-gray-200 dark:border-[#222]">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <ProgressCircle progress={scan.progress} />

            <div className="space-y-2">
              <p className="font-semibold text-lg">
                {scan.progress}% In Progress
              </p>
              <p className="text-sm text-gray-500">Scan Type: {scan.type}</p>
              <p className="text-sm text-gray-500">Targets: google.com</p>
              <p className="text-sm text-gray-500">
                Started at: Nov 22, 09:00AM
              </p>
            </div>
          </div>

          <div className="flex gap-8 text-sm mt-8 justify-center md:justify-start">
            {["Spidering", "Mapping", "Testing", "Validating", "Reporting"].map(
              (step, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-[#0CC8A8] mb-2"></div>
                  <span className="text-gray-500">{step}</span>
                </div>
              ),
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white dark:bg-[#1A1A1A] p-6 rounded-xl border border-gray-200 dark:border-[#222]">
          <div>
            <p className="text-xs text-gray-400">Scan Type</p>
            <p className="font-medium">Grey Box</p>
          </div>

          <div>
            <p className="text-xs text-gray-400">Targets</p>
            <p className="font-medium">google.com</p>
          </div>

          <div>
            <p className="text-xs text-gray-400">Started at</p>
            <p className="font-medium">Nov 22, 09:00AM</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Tabs logs={logs} />

          <div className="space-y-4">
            <FindingCard
              severity="Critical"
              title="SQL Injection in Authentication Endpoint"
              endpoint="/api/users/profile"
              time="10:45:23"
              description="Time-based blind SQL injection confirmed on user-controlled input during authentication flow."
            />

            <FindingCard
              severity="High"
              title="Unauthorized Access to User Metadata"
              endpoint="/api/auth/login"
              time="10:46:10"
              description="Authenticated low-privilege user was able to access metadata of other users due to missing access control."
            />

            <FindingCard
              severity="Medium"
              title="Broken Authentication Rate Limiting"
              endpoint="/api/search"
              time="10:47:42"
              description="No effective rate limiting detected on login attempts, enabling automated brute-force attacks."
            />
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 md:left-64 right-0 bg-white dark:bg-[#1A1A1A] border-t border-gray-200 dark:border-[#222] p-3 flex flex-col md:flex-row justify-between text-sm gap-2 md:gap-0">
        <div className="flex flex-wrap gap-6">
          <span>Sub-agents: 0</span>
          <span>Parallel Executions: 2</span>
          <span>Operations: 1</span>
        </div>

        <div className="flex flex-wrap gap-6">
          <span className="text-red-500">Critical: 2</span>
          <span className="text-orange-500">High: 1</span>
          <span className="text-yellow-500">Medium: 1</span>
          <span className="text-green-500">Low: 0</span>
        </div>
      </div>
    </div>
  );
}
