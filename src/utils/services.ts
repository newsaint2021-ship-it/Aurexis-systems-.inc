import { Services } from "@/types/type";
import Image1 from "../../public/images/services/list/serviceList_1.jpg";
import Image2 from "../../public/images/services/list/serviceList_2.jpg";
import Image3 from "../../public/images/services/list/serviceList_3.jpg";
import Image4 from "../../public/images/services/list/serviceList_4.jpg";
import Image3D from "../../public/images/services/list/serviceList_3D.jpg";

// PRIMARY SERVICES — WHAT WE SELL
// 01. Fashion & Brand Websites
// 02. E-commerce Design & Development
// 03. Premium Retail Websites
// 04. 3D & Interactive Experiences
export const allServices: Services[] = [
  {
    id: 1,
    title: "Fashion & Brand Websites",
    href: "/services/fashion-websites",
    technologies: [
      "Custom development",
      "Brand expression",
      "Lookbooks & campaigns",
      "Mobile-first UI/UX",
      "CMS integration",
      "Accessible architecture",
    ],
    description:
      "Custom websites for fashion labels, clothing brands and businesses with a defined visual identity. Designed around your aesthetic, responsive across all screen sizes and engineered without template limits.",
    image: Image2,
  },
  {
    id: 2,
    title: "E-commerce Design & Development",
    href: "/services/ecommerce",
    technologies: [
      "Digital storefronts",
      "Collection architecture",
      "Product discovery",
      "Variants & sizing",
      "Mobile checkout",
      "E-commerce SEO",
    ],
    description:
      "Digital storefronts designed to bring products, brand storytelling and purchasing together seamlessly. Fast product pages, intuitive sizing and frictionless paths to checkout.",
    image: Image1,
  },
  {
    id: 3,
    title: "Premium Retail Websites",
    href: "/services/premium-retail",
    technologies: [
      "Digital catalogues",
      "Enquiry & reservation flows",
      "High-consideration detail",
      "Product curation",
      "Brand credibility",
      "Store locator & contact",
    ],
    description:
      "Considered digital experiences for premium retail businesses that need a stronger online presence. Editorial clarity, refined product detail and enquiry journeys that build lasting client trust.",
    image: Image4,
  },
  {
    id: 4,
    title: "3D & Interactive Experiences",
    href: "/services/interactive-3d",
    technologies: [
      "Interactive 3D visualisation",
      "Web-based 3D environments",
      "Interactive fashion lookbooks",
      "Digital collection presentations",
      "Immersive brand storytelling",
      "Interactive product experiences",
    ],
    description:
      "Immersive digital experiences that bring brands, products and collections to life. From interactive 3D product visualisation to digitally art-directed fashion lookbooks, we create engaging ways for audiences to explore and experience a brand.",
    image: Image3D,
  },
];

// SUPPORTING CAPABILITIES — WHAT STRENGTHENS THE WORK
export type SupportingCapability = {
  id: string;
  number: string;
  title: string;
  href: string;
  capabilities: string[];
  description: string;
};

export const supportingCapabilities: SupportingCapability[] = [
  {
    id: "search-performance",
    number: "05",
    title: "Search & Performance",
    href: "/services/seo",
    capabilities: [
      "Technical SEO",
      "On-page SEO",
      "Search visibility",
      "Analytics",
      "Performance reporting",
    ],
    description:
      "Technical SEO, semantic crawlability, structured data, Core Web Vitals and conversion analytics that keep your digital storefront fast, visible and measurable.",
  },
  {
    id: "business-intelligence",
    number: "06",
    title: "Business Intelligence",
    href: "/services/dashboards-analytics",
    capabilities: [
      "Custom business dashboards",
      "Reporting interfaces",
      "Data visualisation",
      "Sales channel metrics",
      "Stock & order visibility",
    ],
    description:
      "Custom dashboards and reporting interfaces providing consolidated visibility into orders, sales channels, stock levels and customer acquisition.",
  },
  {
    id: "connected-systems",
    number: "07",
    title: "Connected Systems",
    href: "/services/integrations-automation",
    capabilities: [
      "API integrations",
      "E-commerce integrations",
      "Workflow automation",
      "Payment gateways",
      "Business process connectivity",
    ],
    description:
      "API connections linking your digital storefront to payment gateways, inventory management, logistics feeds and automated operational workflows.",
  },
];
