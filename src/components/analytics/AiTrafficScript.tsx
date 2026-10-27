import Script from "next/script";
import { AEO_TRACKING_CODE } from "@/lib/analytics";

export function AiTrafficScript() {
  if (!AEO_TRACKING_CODE) return null;
  return <Script src="https://aeo-api.qkenn.cloud/t.js" strategy="afterInteractive" data-t={AEO_TRACKING_CODE} />;
}
