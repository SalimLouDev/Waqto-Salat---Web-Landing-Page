import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LegalPageLayout } from "./LegalPageLayout";

const sections = [
  {
    title: "Agreement",
    body: (
      <p>
        By using Waqto Salat, you agree to these terms. If you do not agree, you should not use the app or website.
      </p>
    ),
  },
  {
    title: "App purpose",
    body: (
      <p>
        Waqto Salat provides prayer times, salah reminders, Qibla direction, widgets, calibration tools, and related prayer utility features for Android users.
      </p>
    ),
  },
  {
    title: "Prayer time accuracy",
    body: (
      <>
        <p>
          Prayer time calculations can vary by location, timezone, calculation method, device settings, and local authority guidance.
        </p>
        <p>
          Waqto Salat is provided as a practical companion. You are responsible for choosing settings that match your community and for following local religious guidance where applicable.
        </p>
      </>
    ),
  },
  {
    title: "Acceptable use",
    body: (
      <p>
        You agree not to misuse the app or website, interfere with its operation, attempt unauthorized access, or use Waqto Salat in a way that violates applicable laws.
      </p>
    ),
  },
  {
    title: "Availability and changes",
    body: (
      <p>
        Waqto Salat may change, improve, pause, or discontinue features over time. We aim to keep the app calm, useful, and available, but we cannot guarantee uninterrupted service.
      </p>
    ),
  },
  {
    title: "No warranties",
    body: (
      <p>
        Waqto Salat is provided as is, without warranties of any kind to the fullest extent permitted by law.
      </p>
    ),
  },
  {
    title: "Contact",
    body: (
      <p>
        For terms, support, or feedback questions, contact <a className="font-semibold text-islamic-green underline decoration-islamic-gold/40 underline-offset-4" href="mailto:contact@waqtosalat.com">contact@waqtosalat.com</a>.
      </p>
    ),
  },
];

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LegalPageLayout
      eyebrow="Terms"
      title="Terms of Service"
      description="The terms for using Waqto Salat, including prayer time accuracy, acceptable use, and app availability."
      lastUpdated="June 15, 2026"
      sections={sections}
    />
  </StrictMode>,
);
