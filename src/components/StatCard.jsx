export default function StatCard({ title, value, color }) {
  return (
    <div className="bg-white   dark:bg-[#1A1A1A] p-6 rounded-xl border border-gray-200 dark:border-[#222] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <p className="text-sm text-gray-500">{title}</p>
      <p className={`text-3xl font-semibold mt-2 ${color}`}>{value}</p>
      <p className="text-xs text-gray-400 mt-1">
        +0.9% increase than yesterday
      </p>
    </div>
  );
}
