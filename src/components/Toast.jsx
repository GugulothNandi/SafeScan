import { useEffect } from "react";

export default function Toast({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 bg-[#0CC8A8] text-white px-6 py-3 rounded-lg shadow-lg animate-bounce">
      {message}
    </div>
  );
}
