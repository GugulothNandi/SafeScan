import { useState, useRef, useEffect } from "react";

export default function Tabs({ logs }) {
  const [active, setActive] = useState("activity");
  const consoleRef = useRef();

  useEffect(() => {
    if (consoleRef.current) {
      consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
    }
  }, [logs, active]);

  return (
    <div>
      <div className="flex border-b border-gray-200 dark:border-[#222] mb-4">
        {["activity", "loops"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-4 py-2 text-sm transition ${
              active === tab
                ? "border-b-2 border-[#0CC8A8] text-[#0CC8A8]"
                : "text-gray-500"
            }`}
          >
            {tab === "activity" ? "Activity Log" : "Verification Loops"}
          </button>
        ))}
      </div>

      <div
        ref={consoleRef}
        className="bg-black text-green-400 p-4 rounded-lg h-80 overflow-y-auto text-xs font-mono"
      >
        {active === "activity" ? (
          logs.map((l, i) => (
            <p key={i} className="mb-1 opacity-90">
              {l}
            </p>
          ))
        ) : (
          <p>No verification loops detected.</p>
        )}
      </div>
    </div>
  );
}
