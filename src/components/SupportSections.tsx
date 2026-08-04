import { CheckCircle2, Mail, MessageSquareText, ShieldCheck, Smartphone, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { GooglePlayBadge } from "./GooglePlayBadge";
import { landingCopy, type LandingLocale } from "../content/landing";

const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || "contact@waqtosalat.com";
const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${contactEmail}`;

export function SupportSections({ locale = "en" }: { locale?: LandingLocale }) {
  const copy = landingCopy[locale].support;
  return (
    <>
      <section id="download" className="px-6 md:px-12 py-24 bg-off-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_0.8fr] gap-10 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-lg border border-border-light bg-white p-8 md:p-12 shadow-sm"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-islamic-green/10 px-4 py-2 text-sm font-semibold text-islamic-green mb-8">
              <Smartphone className="h-4 w-4" />
              {copy.appLabel}
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-medium text-islamic-green leading-tight mb-6">
              {copy.title}
            </h2>
            <p className="text-lg text-muted-green leading-relaxed max-w-2xl mb-8">
              {copy.body}
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <GooglePlayBadge locale={locale} />
              <a
                href={`mailto:${contactEmail}`}
                className={`rounded-full border border-border-light text-islamic-green px-7 py-3.5 font-bold text-xs sm:text-sm inline-flex items-center justify-center gap-3 hover:border-islamic-green transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-islamic-gold/30 sm:min-h-14 ${locale === "ar" ? "" : "uppercase tracking-widest"}`}
              >
                <Mail className="w-5 h-5" />
                {copy.contactSupport}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-lg bg-islamic-green text-white p-8 md:p-10 flex flex-col justify-between"
          >
            <div>
              <Sparkles className="h-8 w-8 text-islamic-gold mb-8" />
              <h3 className="text-2xl font-display font-medium mb-4">{copy.prayerTitle}</h3>
              <p className="text-white/75 leading-relaxed">
                {copy.prayerBody}
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mt-10 text-center text-xs uppercase tracking-widest text-white/70">
              {copy.prayerNames.map((prayer) => (
                <span key={prayer} className="rounded-lg border border-white/15 px-2 py-3">
                  {prayer}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="privacy" className="px-6 md:px-12 py-20 bg-footer-bg border-y border-border-light">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-islamic-green mb-6">
              <ShieldCheck className="h-4 w-4" />
              {copy.legalLabel}
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-medium text-islamic-green leading-tight">
              {copy.legalTitle}
            </h2>
          </div>
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            <PolicyCard
              id="privacy-policy"
              title={copy.privacyTitle}
              body={copy.privacyBody}
              href={locale === "ar" ? "/ar/privacy-policy/" : "/privacy-policy/"}
              linkLabel={copy.privacyLink}
            />
            <PolicyCard
              id="terms"
              title={copy.termsTitle}
              body={copy.termsBody}
              href={locale === "ar" ? "/ar/terms-of-service/" : "/terms-of-service/"}
              linkLabel={copy.termsLink}
            />
            <ContactCard locale={locale} />
            <PolicyCard
              title={copy.freeTitle}
              body={copy.freeBody}
            />
          </div>
        </div>
      </section>
    </>
  );
}

function ContactCard({ locale }: { locale: LandingLocale }) {
  const copy = landingCopy[locale].support;

  return (
    <div id="contact" className="rounded-lg border border-islamic-green/18 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-start gap-3">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-islamic-green text-white">
          <MessageSquareText className="h-5 w-5" />
        </span>
        <div>
          <h3 className="text-lg font-semibold text-islamic-green">{copy.contactTitle}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-green">
            {copy.contactBody}
          </p>
        </div>
      </div>

      <a
        href={`mailto:${contactEmail}`}
        className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-border-light bg-off-white px-5 py-3 text-sm font-bold text-islamic-green transition-[background-color,border-color,box-shadow] hover:border-islamic-green hover:bg-white hover:shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-islamic-gold/30"
      >
        <Mail className="h-4 w-4" />
        {contactEmail}
      </a>
      <a
        href={gmailComposeUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-islamic-green px-5 py-3 text-sm font-bold text-white transition-[background-color,box-shadow] hover:bg-islamic-green-hover hover:shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-islamic-gold/30"
      >
        {copy.openGmail}
      </a>

      <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted-green">
        {copy.supportTopics.map((topic) => (
          <li key={topic} className="flex gap-3">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-islamic-gold" />
            <span>{topic}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PolicyCard({
  id,
  title,
  body,
  href,
  linkLabel,
}: {
  id?: string;
  title: string;
  body: string;
  href?: string;
  linkLabel?: string;
}) {
  return (
    <div id={id} className="rounded-lg border border-border-light bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-islamic-green mb-3">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-green">{body}</p>
      {href && linkLabel && (
        <a
          href={href}
          className="mt-5 inline-flex rounded-sm text-sm font-semibold text-islamic-green underline decoration-islamic-gold/40 underline-offset-4 hover:text-islamic-green-hover focus:outline-none focus-visible:ring-4 focus-visible:ring-islamic-gold/30"
        >
          {linkLabel}
        </a>
      )}
    </div>
  );
}
