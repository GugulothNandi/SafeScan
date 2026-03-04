export default function Button({ children, onClick, variant = "primary" }) {
  const base =
    "px-5 py-2.5 rounded-lg font-medium transition-all duration-200 active:scale-95";

  const styles = {
    primary: "bg-[#0CC8A8] text-white hover:shadow-lg hover:shadow-[#0CC8A855]",
    secondary:
      "bg-gray-200 :bg-[#222] hover:bg-gray-300 dark:hover:bg-[#2a2a2a]",
  };

  return (
    <button onClick={onClick} className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
}
