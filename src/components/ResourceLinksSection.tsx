import { Bell, Compass, Clock, LayoutPanelTop, SlidersHorizontal } from "lucide-react";

const resources = [
  {
    href: "/ad-free-prayer-times-app/",
    title: "Ad-free prayer times app",
    body: "Why Waqto Salat keeps the prayer experience quiet, focused, and free from ads.",
    icon: Clock,
  },
  {
    href: "/salah-reminder-app/",
    title: "Salah reminder app",
    body: "How reminders help you plan the day around each prayer without extra noise.",
    icon: Bell,
  },
  {
    href: "/qibla-compass-app/",
    title: "Qibla compass app",
    body: "A clean Qibla direction experience for Android with minimal visual clutter.",
    icon: Compass,
  },
  {
    href: "/prayer-times-widget-android/",
    title: "Prayer times widget",
    body: "Glanceable Android widgets for checking the next salah from the home screen.",
    icon: LayoutPanelTop,
  },
  {
    href: "/how-prayer-times-are-calculated/",
    title: "Prayer time calculation",
    body: "A plain-language guide to location, methods, timezones, and calibration.",
    icon: SlidersHorizontal,
  },
];

export function ResourceLinksSection() {
  return (
    <section id="resources" className="bg-footer-bg px-6 py-24 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-islamic-gold">
            Prayer app resources
          </p>
          <h2 className="font-display text-3xl font-medium leading-tight text-islamic-green md:text-5xl">
            Clear answers for choosing a prayer times app.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {resources.map((resource) => {
            const Icon = resource.icon;

            return (
              <a
                key={resource.href}
                href={resource.href}
                className="group rounded-lg border border-border-light bg-white p-5 shadow-sm transition-[transform,border-color,box-shadow] hover:-translate-y-1 hover:border-islamic-gold/50 hover:shadow-md focus:outline-none focus-visible:ring-4 focus-visible:ring-islamic-gold/30"
              >
                <span className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-islamic-green/8 text-islamic-green transition-colors group-hover:bg-islamic-green group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="mb-3 block text-base font-semibold text-islamic-green">
                  {resource.title}
                </span>
                <span className="block text-sm leading-relaxed text-muted-green">{resource.body}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
