const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;

// Production domain is https://aurexis-systems-inc.vercel.app
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (productionHost ? `https://${productionHost}` : "https://aurexis-systems-inc.vercel.app");

export const siteConfig = {
  name: "Aurexis Digital Studio",
  shortName: "Aurexis",
  url: siteUrl.replace(/\/$/, ""),
  tagline: "Where brand meets commerce.",
  positioning:
    "Aurexis designs and builds considered websites and e-commerce experiences for fashion, clothing and premium retail brands.",
  description:
    "Aurexis is an independent Cape Town digital design studio creating considered websites and e-commerce experiences for fashion, clothing and premium retail brands.",
  founder: "P. Midas",
  city: "Cape Town",
  region: "Western Cape",
  country: "South Africa",
  countryCode: "ZA",
  phone: "+27 61 820 2622",
  phoneHref: "tel:+27618202622",
  contactEmail: "aurexiscorp@gmail.com",
  contactEmailHref: "mailto:aurexiscorp@gmail.com",
};

export const primaryNav = [
  { route: "/", title: "home" },
  { route: "/services", title: "services" },
  { route: "/work", title: "work" },
  { route: "/about", title: "about" },
  { route: "/contact", title: "contact" },
];

export const footerNav = [
  { title: "Services", href: "/services" },
  { title: "Fashion websites", href: "/services/fashion-websites" },
  { title: "E-commerce", href: "/services/ecommerce" },
  { title: "Premium retail", href: "/services/premium-retail" },
  { title: "Work", href: "/work" },
  { title: "Insights", href: "/insights" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

export const legalNav = [
  { title: "Privacy", href: "/privacy" },
  { title: "Terms", href: "/terms" },
];
