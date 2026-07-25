import type { FeatureIcon } from "@/data/products";

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function WatchIcon() {
  return (
    <svg viewBox="0 0 24 24" {...strokeProps}>
      <rect x="7" y="6.5" width="10" height="11" rx="2.5" />
      <path d="M9 6.5V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2.5" />
      <path d="M9 17.5V20a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2.5" />
      <path d="M12 9.5v2.5l1.8 1.8" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" {...strokeProps}>
      <path d="M12 20.25c-.3 0-.6-.1-.85-.3C7.4 16.9 3 13.3 3 9.3 3 6.4 5.2 4 8 4c1.6 0 3.1.8 4 2.1.9-1.3 2.4-2.1 4-2.1 2.8 0 5 2.4 5 5.3 0 4-4.4 7.6-8.15 10.65-.25.2-.55.3-.85.3z" />
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg viewBox="0 0 24 24" {...strokeProps}>
      <path d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-2.472 0" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <rect x="4" y="13" width="3.2" height="7" rx="0.6" />
      <rect x="10.4" y="8" width="3.2" height="12" rx="0.6" />
      <rect x="16.8" y="4" width="3.2" height="16" rx="0.6" />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg viewBox="0 0 24 24" {...strokeProps}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg viewBox="0 0 24 24" {...strokeProps}>
      <circle cx="18" cy="5" r="2.5" />
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="19" r="2.5" />
      <path d="M8.3 10.7l7.4-4.4M8.3 13.3l7.4 4.4" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" {...strokeProps}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M20 20l-4.35-4.35" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg viewBox="0 0 24 24" {...strokeProps}>
      <path d="M17 20v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1" />
      <circle cx="9" cy="8" r="4" />
      <path d="M23 20v-1a4 4 0 0 0-3-3.87" />
      <path d="M16 4.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function ReceiptIcon() {
  return (
    <svg viewBox="0 0 24 24" {...strokeProps}>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M9 8h6M9 12h6M9 16h4" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" {...strokeProps}>
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M3.5 9.5h17" />
      <path d="M8 3v4M16 3v4" />
      <path d="M9 14l2 2 4-4" />
    </svg>
  );
}

const icons: Record<FeatureIcon, () => React.ReactNode> = {
  watch: WatchIcon,
  heart: HeartIcon,
  trophy: TrophyIcon,
  chart: ChartIcon,
  share: ShareIcon,
  target: TargetIcon,
  search: SearchIcon,
  users: UsersIcon,
  calendar: CalendarIcon,
  receipt: ReceiptIcon,
};

export default function FeatureIconBadge({ icon }: { icon: FeatureIcon }) {
  const Icon = icons[icon];
  return (
    <div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-blue-500 p-2 text-white">
      <Icon />
    </div>
  );
}
