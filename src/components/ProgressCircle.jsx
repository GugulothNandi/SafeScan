import { useEffect, useState } from "react";

export default function ProgressCircle({ progress }) {
  const [animated, setAnimated] = useState(0);

  useEffect(() => {
    setTimeout(() => setAnimated(progress), 300);
  }, [progress]);

  const radius = 60;
  const stroke = 8;
  const normalized = radius - stroke * 0.5;
  const circumference = normalized * 2 * Math.PI;
  const offset = circumference - (animated / 100) * circumference;

  return (
    <div className="relative">
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#2a2a2a"
          fill="transparent"
          strokeWidth={stroke}
          r={normalized}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#0CC8A8"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 1s ease" }}
          r={normalized}
          cx={radius}
          cy={radius}
        />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center text-[#0CC8A8] font-semibold">
        {animated}%
      </div>
    </div>
  );
}
