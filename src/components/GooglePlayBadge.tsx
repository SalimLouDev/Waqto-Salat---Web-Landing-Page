import { assetPath } from "../lib/assets";

const playStoreUrl =
  import.meta.env.VITE_PLAY_STORE_URL ||
  "https://play.google.com/store/apps/details?id=com.salimloudev.waqtosalat";

export function GooglePlayBadge({ className = "" }: { className?: string }) {
  return (
    <a
      href={playStoreUrl}
      aria-label="Get Waqto Salat on Google Play"
      className={`inline-flex h-14 items-center justify-center rounded-lg transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-islamic-gold/40 ${className}`}
    >
      <img
        src={assetPath("google-play-badge.png")}
        alt="Get it on Google Play"
        width="646"
        height="250"
        className="h-14 w-auto max-w-full drop-shadow-sm"
      />
    </a>
  );
}
