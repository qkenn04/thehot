"use client";

import Script from "next/script";
import { GA_ID } from "@/lib/analytics";

const PRODUCTION_HOSTS = ["thehot.vn", "www.thehot.vn"];

export function GoogleAnalytics() {
  if (!GA_ID) return null;
  return (
    <Script id="ga4" strategy="lazyOnload">
      {`if (${JSON.stringify(PRODUCTION_HOSTS)}.includes(location.hostname)) {
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { dataLayer.push(arguments); };
  gtag("js", new Date());
  gtag("config", "${GA_ID}", { allow_google_signals: false, allow_ad_personalization_signals: false });
  var s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=${GA_ID}";
  document.head.appendChild(s);
}`}
    </Script>
  );
}
