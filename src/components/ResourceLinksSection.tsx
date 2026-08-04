import { Bell, Compass, Clock, LayoutPanelTop, SlidersHorizontal } from "lucide-react";
import { landingCopy, type LandingLocale } from "../content/landing";

const resourceIcons = [Clock, Bell, Compass, LayoutPanelTop, SlidersHorizontal];

export function ResourceLinksSection({ locale = "en" }: { locale?: LandingLocale }) {
  const copy = landingCopy[locale].resources;
  return (
    <section id="resources" className="bg-footer-bg px-6 py-24 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-islamic-gold">
            {copy.label}
          </p>
          <h2 className="font-display text-3xl font-medium leading-tight text-islamic-green md:text-5xl">
            {copy.title}
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {copy.items.map((resource, index) => {
            const Icon = resourceIcons[index];

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
