import { NavLink } from "react-router-dom";

export default function Sidebar({ isOpen, setIsOpen }) {
  return (
    <>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
        />
      )}

      <div
        className={`fixed top-0 left-0 z-40 h-screen w-64 
        bg-black text-white transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0`}
      >
        <div className="h-full flex flex-col p-6">
          <h1 className="text-2xl font-bold mb-10 tracking-wide">aps</h1>

          <nav className="space-y-2 flex-1">
            <NavLink
              to="/dashboard"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-2 rounded-lg transition-all duration-200
                ${
                  isActive
                    ? "bg-white/15"
                    : "hover:bg-white/10 hover:translate-x-1"
                }`
              }
            >
              Dashboard
            </NavLink>

            {["Projects", "Scans", "Schedule", "Settings", "Support"].map(
              (item, index) => (
                <div
                  key={index}
                  className="px-4 py-2 rounded-lg transition-all duration-200 hover:bg-white/10 hover:translate-x-1 cursor-pointer"
                >
                  {item}
                </div>
              ),
            )}
          </nav>

          <div className="border-t border-gray-700 pt-4">
            <p className="text-sm">admin@edu.com</p>
            <p className="text-xs text-gray-400">Security Lead</p>
          </div>
        </div>
      </div>
    </>
  );
}
