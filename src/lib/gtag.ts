declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export function trackLeadConversion() {
  if (!window.gtag) return;

  window.gtag("event", "conversion", {
    send_to: "AW-17579846282/8rBnCJmk9O8bEIrV3L5B",
    value: 1.0,
    currency: "CAD",
  });
}

export {};
