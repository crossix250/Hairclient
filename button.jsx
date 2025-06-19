export function Button({ children, className, variant='default' }) {
  const base = 'px-4 py-2 font-semibold rounded-2xl';
  const styles = variant==='outline' ? 'border border-gray-300 text-gray-700' : 'bg-[#1F968B] text-white';
  return <button className={`${base} ${styles} ${className}`}>{children}</button>;
}
