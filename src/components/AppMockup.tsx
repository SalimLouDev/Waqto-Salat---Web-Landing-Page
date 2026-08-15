import { assetPath } from "../lib/assets";

function webpFromPng(src: string) {
  return src.endsWith(".png") ? src.replace(".png", ".webp") : src;
}

function smallWebpFromPng(src: string) {
  return webpFromPng(src).replace(".webp", "-320.webp");
}

export function AppMockup({ imageSrc, alt }: { imageSrc?: string; alt?: string }) {
  return (
    <div
      className="relative w-[min(20rem,82vw)] aspect-[941/1672] rounded-[2rem] border-[8px] border-border-light shadow-2xl overflow-hidden bg-islamic-green shrink-0 flex items-center justify-center"
    >
      {imageSrc ? (
        <picture className="block h-full w-full">
          <source
            srcSet={`${assetPath(smallWebpFromPng(imageSrc))} 320w, ${assetPath(webpFromPng(imageSrc))} 640w`}
            sizes="(min-width: 640px) 320px, 82vw"
            type="image/webp"
          />
          <img
            src={assetPath(imageSrc)}
            alt={alt || "Waqto Salat app screenshot"}
            width="640"
            height="1137"
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-top"
          />
        </picture>
      ) : (
        <div className="text-white/50 font-medium p-6 text-center">
          Screenshot Placeholder
        </div>
      )}
    </div>
  );
}
