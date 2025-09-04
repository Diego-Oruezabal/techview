import { MetricCardProps } from "./MetricCard.types";

export function MetricCard(props: MetricCardProps) {

    const { icon, title, value } = props;

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white/10 rounded-lg border border-white/20 shadow-sm hover:shadow-sm transition-shadow duration-300">
        <div className="mb-2">{icon}</div>
        <span className="text-3xl font-extrabold">{value}</span>
        <p className="text-sm text-gray-300 mt-1">{title}</p>
      
    </div>
  )
}
