const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;

// The canonical domain is not defined anywhere in the repository yet.
// Set NEXT_PUBLIC_SITE_URL once the production domain is confirmed.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (productionHost ? `https://${productionHost}` : "http://localhost:3000");

export const siteConfig = {
  name: "Aurexis Systems Inc.",
  shortName: "Aurexis",
  url: siteUrl.replace(/\/$/, ""),
  tagline: "Premium digital experiences, engineered for real businesses.",
  description:
    "Aurexis Systems is a digital design and engineering studio building premium websites and e-commerce experiences for fashion labels, clothing brands and premium retailers.",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
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
  { title: "Fashion", href: "/industries/fashion" },
  { title: "Luxury retail", href: "/industries/luxury-retail" },
  { title: "E-commerce", href: "/industries/ecommerce" },
  { title: "Work", href: "/work" },
  { title: "Insights", href: "/insights" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

export const legalNav = [
  { title: "Privacy", href: "/privacy" },
  { title: "Terms", href: "/terms" },
];
