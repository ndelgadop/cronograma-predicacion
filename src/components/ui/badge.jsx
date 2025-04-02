export function Badge({ children }) {
  return (
    <span className="inline-block px-2 py-1 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full">
      {children}
    </span>
  );
}
