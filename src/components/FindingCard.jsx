export default function FindingCard({
  severity,
  title,
  endpoint,
  description,
  time,
}) {
  const colors = {
    Critical: "bg-red-500",
    High: "bg-orange-500",
    Medium: "bg-yellow-500",
    Low: "bg-green-500",
  };

  return (
    <div className="bg-white dark:bg-[#1A1A1A] p-5 rounded-xl border border-gray-200 dark:border-[#222]">
      <div className="flex justify-between items-center mb-2">
        <span
          className={`text-white text-xs px-2 py-1 rounded ${colors[severity]}`}
        >
          {severity}
        </span>
        <span className="text-xs text-gray-400">{time}</span>
      </div>

      <h3 className="font-semibold">{title}</h3>
      <p className="text-xs text-gray-400 mt-1">{endpoint}</p>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
        {description}
      </p>
    </div>
  );
}
