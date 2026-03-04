export default function ThemeToggle({ dark, setDark }) {
  return (
    <button
      onClick={() => setDark(!dark)}
      className="fixed top-4 right-4 z-50 bg-[#0CC8A8] text-white px-4 py-2 rounded-lg shadow"
    >
      {dark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
