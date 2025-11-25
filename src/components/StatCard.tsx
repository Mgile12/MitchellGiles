interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

export default function StatCard({ value, label, className = '' }: StatCardProps) {
  return (
    <div className={`rounded-xl bg-slate-900 text-slate-50 p-6 shadow-lg flex flex-col gap-1 ${className}`}>
      <span className="text-3xl font-bold">{value}</span>
      <span className="text-sm text-slate-300">{label}</span>
    </div>
  );
}
