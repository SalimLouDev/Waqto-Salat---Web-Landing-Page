import { assetPath } from "../lib/assets";
import type { LandingLocale } from "../content/landing";

const playStoreUrl =
  import.meta.env?.VITE_PLAY_STORE_URL ||
  "https://play.google.com/store/apps/details?id=com.salimloudev.waqtosalat";

export function GooglePlayBadge({ className = "", locale = "en" }: { className?: string; locale?: LandingLocale }) {
  return (
    <a
      href={playStoreUrl}
      aria-label={locale === "ar" ? "حمّل وقت الصلاة من Google Play" : "Get Waqto Salat on Google Play"}
      className={`relative inline-flex h-14 w-[11.875rem] shrink-0 items-center justify-center overflow-hidden rounded-lg transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-islamic-gold/40 ${className}`}
    >
      <picture>
        <source srcSet={assetPath("google-play-badge-260.webp")} type="image/webp" />
        <img
          src={assetPath("google-play-badge.png")}
          alt={locale === "ar" ? "متوفر على Google Play" : "Get it on Google Play"}
          width="260"
          height="101"
          className="absolute -left-3.5 -top-3.5 h-[5.25rem] w-auto max-w-none object-contain drop-shadow-sm"
        />
      </picture>
    </a>
  );
}
