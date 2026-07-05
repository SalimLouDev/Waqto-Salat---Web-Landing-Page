import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LegalPageLayout } from "./LegalPageLayout";

const sections = [
  {
    title: "Overview",
    body: (
      <>
        <p>
          Waqto Salat is designed as a focused Android prayer companion. This policy explains how the app and website handle privacy in plain language.
        </p>
        <p>
          The app is built around prayer times, salah reminders, Qibla direction, widgets, and related settings. It is not built around advertising, tracking, or selling user data.
        </p>
      </>
    ),
  },
  {
    title: "Information we collect",
    body: (
      <p>
        Waqto Salat does not collect, store, sell, or share personal data through the app. The published Google Play data safety details state that the app does not collect data and does not share data with third parties.
      </p>
    ),
  },
  {
    title: "Location and device permissions",
    body: (
      <>
        <p>
          Prayer times and Qibla direction may require location or device sensor access depending on the features you use and the permissions you grant on Android.
        </p>
        <p>
          These permissions are used to provide app functionality such as local prayer calculations and compass direction. You can manage app permissions from your Android device settings.
        </p>
      </>
    ),
  },
  {
    title: "Ads, analytics, and payments",
    body: (
      <p>
        Waqto Salat is presented as a free app with no ads, no subscriptions, and no locked prayer essentials. The app does not use collected personal data for advertising.
      </p>
    ),
  },
  {
    title: "Third-party services",
    body: (
      <p>
        The app is distributed through Google Play. Your use of Google Play and Android may be governed by Google&apos;s own terms and privacy practices.
      </p>
    ),
  },
  {
    title: "Changes to this policy",
    body: (
      <p>
        This policy may be updated when the app, website, or legal requirements change. The latest version will be available on this page.
      </p>
    ),
  },
  {
    title: "Contact",
    body: (
      <p>
        For privacy questions, support, or correction requests, contact <a className="font-semibold text-islamic-green underline decoration-islamic-gold/40 underline-offset-4" href="mailto:contact@waqtosalat.com">contact@waqtosalat.com</a>.
      </p>
    ),
  },
];

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LegalPageLayout
      eyebrow="Privacy"
      title="Privacy Policy"
      description="How Waqto Salat handles data, permissions, and privacy for the Android app and website."
      lastUpdated="June 15, 2026"
      sections={sections}
    />
  </StrictMode>,
);
