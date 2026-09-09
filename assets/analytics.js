(() => {
  "use strict";

  const measurementId = "G-5Q86K8TXZN";
  const firstPartyTags = window.google_tags_first_party;

  // Cloudflare Google Tag Gateway may already own this page view.
  if (Array.isArray(firstPartyTags) && firstPartyTags.includes(measurementId)) {
    return;
  }

  const start = () => {
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () {
      window.dataLayer.push(arguments);
    };

    window.gtag("js", new Date());
    window.gtag("config", measurementId);

    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://www.googletagmanager.com/gtag/js?id=" +
      encodeURIComponent(measurementId);
    document.head.appendChild(script);
  };

  // Analytics is intentionally outside the critical rendering path.
  window.setTimeout(start, 3500);
})();
