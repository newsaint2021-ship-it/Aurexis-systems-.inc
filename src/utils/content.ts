export type ContentSection = {
  label: string;
  heading: string;
  body?: string;
  items?: { title: string; text?: string }[];
};

export type ContentMedia = {
  title: string;
  caption: string;
  videoSrc: string;
  posterSrc: string;
  aspect?: string;
};

export type ContentPageData = {
  slug: string;
  kind: "service" | "industry";
  hierarchy?: "primary" | "supporting";
  title: string;
  metaTitle: string;
  metaDescription: string;
  canonicalPath?: string;
  headline: [string, string];
  intro: string;
  audience: string;
  sections: ContentSection[];
  media?: ContentMedia[];
  note?: string;
  related: { title: string; href: string }[];
};

export const servicePages: ContentPageData[] = [
  // 01. PRIMARY SERVICE: Fashion & Brand Websites
  {
    slug: "fashion-websites",
    kind: "service",
    hierarchy: "primary",
    title: "Fashion & Brand Websites",
    metaTitle: "Fashion & Clothing Brand Website Design",
    metaDescription:
      "Considered website design and custom development for independent fashion labels, streetwear and clothing brands. Built around your brand, responsive and search-ready.",
    canonicalPath: "/services/fashion-websites",
    headline: ["Websites built", "around the brand"],
    intro:
      "A fashion website should carry the same intention, art direction and discipline as the garments themselves. We design and build custom websites for independent fashion labels, clothing brands and businesses with a defined visual identity.",
    audience:
      "Independent fashion labels, streetwear brands, apparel studios and clothing businesses establishing or elevating their digital presence.",
    sections: [
      {
        label: "Approach",
        heading: "Tailored to your aesthetic, not a template",
        body:
          "Off-the-shelf templates force distinct brands into identical boxes. We start with your brand identity, lookbooks and typography, creating an interface that feels authentic to your label while keeping interactions effortless.",
        items: [
          {
            title: "Brand-led art direction",
            text: "Layouts, typography and visual pacing tailored to your seasonal collections and brand expression.",
          },
          {
            title: "Lookbooks and campaign features",
            text: "Dedicated storytelling space for editorial shoots, runway drops and seasonal lookbooks.",
          },
          {
            title: "Mobile-first execution",
            text: "More than 70% of fashion discovery happens on mobile. Every transition, image crop and typography scale is refined for handheld screens.",
          },
          {
            title: "Content management freedom",
            text: "A clean CMS setup that allows your team to update campaigns, press features and new collections independently without developer intervention.",
          },
        ],
      },
      {
        label: "Engineering",
        heading: "Why custom development matters",
        items: [
          {
            title: "Custom development & brand identity",
            text: "Unique visual architecture that differentiates your label in a crowded market, free from cookie-cutter theme constraints.",
          },
          {
            title: "Built for commercial growth",
            text: "Scalable architecture designed to accommodate expanding lookbooks, international customer traffic and growing catalogue depth.",
          },
          {
            title: "Performance & rapid page loads",
            text: "Lightweight code, modern asset compression and instant page transitions that hold visitor attention and reduce drop-off.",
          },
          {
            title: "Technical security & reliability",
            text: "Modern web standards, automated deployments and secure infrastructure that keep your digital presence resilient and dependable.",
          },
        ],
      },
      {
        label: "Foundations",
        heading: "Every site includes",
        items: [
          {
            title: "Technical SEO and semantic metadata",
            text: "Structured metadata, Open Graph tags and clean heading hierarchy to establish search visibility across search engines.",
          },
          {
            title: "Responsive performance",
            text: "Carefully compressed imagery, responsive picture sizing and minimal client-side overhead for fast loading on cellular connections.",
          },
          {
            title: "Accessibility standards",
            text: "Readable contrast, semantic HTML landmarks, keyboard navigation and screen-reader compatibility built into every component.",
          },
        ],
      },
    ],
    related: [
      { title: "E-commerce Design & Development", href: "/services/ecommerce" },
      { title: "3D & Interactive Experiences", href: "/services/interactive-3d" },
      { title: "Premium Retail Websites", href: "/services/premium-retail" },
    ],
  },

  // 02. PRIMARY SERVICE: E-commerce Design & Development
  {
    slug: "ecommerce",
    kind: "service",
    hierarchy: "primary",
    title: "E-commerce Design & Development",
    metaTitle: "Fashion E-commerce Design & Development",
    metaDescription:
      "Digital storefronts engineered for fashion and retail brands. Thoughtful collection layouts, product discovery, mobile shopping and frictionless checkout.",
    canonicalPath: "/services/ecommerce",
    headline: ["Where brand expression", "meets digital commerce"],
    intro:
      "An online store shouldn't force you to choose between brand storytelling and commercial efficiency. We build digital storefronts that celebrate your garments while making browsing, sizing and purchasing completely intuitive.",
    audience:
      "Fashion labels, clothing brands and direct-to-consumer businesses launching a new storefront or outgrowing a restrictive pre-made theme.",
    sections: [
      {
        label: "Storefront UX",
        heading: "Designed for how people shop fashion",
        items: [
          {
            title: "Collection navigation & filtering",
            text: "Logical categories, collection filters and fluid transitions that allow customers to explore by season, category or drop.",
          },
          {
            title: "Product detail pages that convert",
            text: "High-resolution garment imagery, clear fabric and fit information, accurate size guides and instant inventory indicators.",
          },
          {
            title: "Mobile checkout simplicity",
            text: "Frictionless cart drawers, accelerated payment options (Apple Pay, Google Pay, local gateways) and clear delivery transparency.",
          },
          {
            title: "Inventory and drop management",
            text: "Support for limited-edition drops, pre-orders, back-in-stock alerts and multi-location inventory synchronization.",
          },
        ],
      },
      {
        label: "Platforms & Stack",
        heading: "Flexible commerce architectures",
        body:
          "We engineer commerce experiences tailored to your operating model — whether building a custom storefront on Shopify, integrating headless commerce with modern web frameworks, or refining an existing setup.",
        items: [
          {
            title: "Shopify & Custom Storefronts",
            text: "Custom theme development and headless frontends tailored to your exact visual system without third-party app bloat.",
          },
          {
            title: "Local & international payments",
            text: "Integration with South African payment gateways (PayFast, Ozow, Yoco, Peach) and international processors (Stripe, PayPal).",
          },
          {
            title: "Shipping & logistics connectivity",
            text: "Direct integration with courier partners, automated rate calculations and clear order tracking.",
          },
        ],
      },
    ],
    related: [
      { title: "Fashion & Brand Websites", href: "/services/fashion-websites" },
      { title: "3D & Interactive Experiences", href: "/services/interactive-3d" },
      { title: "Search & Performance", href: "/services/seo" },
    ],
  },

  // 03. PRIMARY SERVICE: Premium Retail Websites
  {
    slug: "premium-retail",
    kind: "service",
    hierarchy: "primary",
    title: "Premium Retail Websites",
    metaTitle: "Premium Retail Website Design & Development",
    metaDescription:
      "Distinctive digital experiences for luxury and premium retail businesses. Clean product catalogues, enquiry flows and brand storytelling.",
    canonicalPath: "/services/premium-retail",
    headline: ["Considered digital experiences", "for premium retail"],
    intro:
      "Premium products require a digital experience that reflects the in-store standard. That means visual restraint, high-consideration product presentation and an enquiry or purchasing journey that establishes immediate trust.",
    audience:
      "Businesses offering jewellery, leather goods, footwear, luxury accessories, curated home pieces and bespoke goods.",
    sections: [
      {
        label: "Visual Standard",
        heading: "Quality you can see",
        body:
          "Typography, spacing and image treatment are handled with the same care as packaging and retail architecture. Details such as materials, craftsmanship and provenance are given room to breathe.",
        items: [
          {
            title: "Digital catalogues & curation",
            text: "Curated product presentations arranged for browsing, material appreciation and effortless comparison.",
          },
          {
            title: "Enquiry & private consultation journeys",
            text: "Bespoke consultation booking, private viewing requests or direct checkout flows tailored to your sales model.",
          },
          {
            title: "Trust, care & provenance",
            text: "Artisan notes, material care guides, certificate details and clear studio contact information that reassure discerning buyers.",
          },
        ],
      },
      {
        label: "Commercial Impact",
        heading: "Bridging physical and digital",
        body:
          "We help premium retailers unify their physical presence and online storefront — from store locators and private appointment booking to unified customer communication.",
      },
    ],
    related: [
      { title: "Fashion & Brand Websites", href: "/services/fashion-websites" },
      { title: "E-commerce Design & Development", href: "/services/ecommerce" },
      { title: "3D & Interactive Experiences", href: "/services/interactive-3d" },
    ],
  },

  // 04. PRIMARY SERVICE: 3D & Interactive Experiences
  {
    slug: "interactive-3d",
    kind: "service",
    hierarchy: "primary",
    title: "3D & Interactive Experiences",
    metaTitle: "Interactive 3D & Digital Fashion Experiences",
    metaDescription:
      "Immersive 3D product visualisation, web-based environments and interactive fashion lookbooks for clothing labels, luxury and premium retail brands.",
    canonicalPath: "/services/interactive-3d",
    headline: ["Immersive 3D", "brand experiences"],
    intro:
      "Immersive digital experiences that bring brands, products and collections to life. From interactive 3D product visualisation to digitally art-directed fashion lookbooks, we create engaging ways for audiences to explore and experience a brand.",
    audience:
      "Fashion labels, streetwear brands, apparel studios and premium retail businesses seeking to present collections through interactive digital dimensions and elevated lookbooks.",
    media: [
      {
        title: "Interactive 3D Lookbook & Collection Presentation",
        caption:
          "Digitally art-directed lookbook motion and garment inspection designed for collection releases and campaign storytelling.",
        videoSrc: "/brand/interactive-3d-lookbook.mp4",
        posterSrc: "/brand/interactive-3d-lookbook-poster.jpg",
      },
      {
        title: "Interactive Digital Storefront & Mobile Experience",
        caption:
          "Fluid product interaction and direct commerce integration built for seamless mobile browsing.",
        videoSrc: "/brand/interactive-3d-storefront.mp4",
        posterSrc: "/brand/interactive-3d-storefront-poster.jpg",
      },
    ],
    sections: [
      {
        label: "Capabilities",
        heading: "Interactive dimensions for modern collections",
        body:
          "Static imagery captures garments from fixed angles. Interactive 3D and digital presentation allow customers to inspect silhouettes, examine textures and experience collections with genuine digital depth.",
        items: [
          {
            title: "Interactive 3D product visualisation",
            text: "Smooth, responsive product interactions allowing customers to inspect clothing and accessories from every angle in real time.",
          },
          {
            title: "Web-based 3D environments",
            text: "Lightweight, browser-native 3D scenes engineered for fluid performance on mobile devices without heavy plugins or downloads.",
          },
          {
            title: "Interactive fashion lookbooks",
            text: "Editorial digital lookbooks with seamless motion, dynamic pacing and interactive storytelling built around seasonal drops.",
          },
          {
            title: "Digital collection presentations",
            text: "Engaging showcase formats for runway reveals, capsule launches and high-consideration product releases.",
          },
          {
            title: "Immersive brand storytelling",
            text: "Connecting campaign narratives, audio-visual direction and product details into one cohesive brand world.",
          },
          {
            title: "Interactive product experiences",
            text: "Touch-optimised interactions that bridge the tactile reality of physical garments with digital commerce.",
          },
        ],
      },
      {
        label: "Discipline",
        heading: "Art direction meets browser performance",
        body:
          "Interactive 3D on the web only works when it respects user attention and device constraints. We balance visual fidelity with strict asset optimisation to ensure fast initial loads and fluid frame rates.",
        items: [
          {
            title: "Mobile-first performance",
            text: "Optimised geometry, efficient textures and adaptive frame rates ensuring frictionless interaction across smartphones and tablets.",
          },
          {
            title: "Direct commerce integration",
            text: "Interactive visualisations that connect directly to your product catalogue, sizing guides and checkout journey.",
          },
          {
            title: "Reduced motion consideration",
            text: "Accessible fallback states and user controls respecting reduced-motion preferences without breaking the visual hierarchy.",
          },
          {
            title: "Editorial restraint",
            text: "Technology in service of the garment and brand aesthetic—never gratuitous 3D effects that distract from the product.",
          },
        ],
      },
      {
        label: "Foundations",
        heading: "Every experience includes",
        items: [
          {
            title: "Touch & gesture optimisation",
            text: "Natural touch controls calibrated for iOS and Android web browsers with zero lag or accidental scrolling conflicts.",
          },
          {
            title: "Fast asset streaming",
            text: "Progressive geometry and texture streaming to deliver instantaneous visual engagement without blocking page interactivity.",
          },
          {
            title: "SEO and semantic fallbacks",
            text: "Clean HTML markup, schema metadata and crawlable text alternatives ensuring search engines understand your product content.",
          },
        ],
      },
    ],
    related: [
      { title: "Fashion & Brand Websites", href: "/services/fashion-websites" },
      { title: "E-commerce Design & Development", href: "/services/ecommerce" },
      { title: "Premium Retail Websites", href: "/services/premium-retail" },
    ],
  },

  // ALIAS / BACKWARDS-COMPATIBLE SERVICE: Website Development
  {
    slug: "web-development",
    kind: "service",
    hierarchy: "primary",
    title: "Website Development",
    metaTitle: "Custom Website Development for Brands",
    metaDescription:
      "Custom website development for fashion, clothing and premium retail brands. Responsive architecture, clean code, accessibility and technical SEO.",
    canonicalPath: "/services/fashion-websites",
    headline: ["Websites built", "around the brand"],
    intro:
      "Aurexis designs and builds considered websites for fashion labels, clothing brands and businesses with a distinct visual identity.",
    audience:
      "Brands launching online, businesses outgrowing restrictive templates, and studios looking for custom engineering.",
    sections: [
      {
        label: "Focus",
        heading: "Custom design & engineering",
        items: [
          {
            title: "Brand-led websites",
            text: "Custom digital presence built around your brand identity, typography and art direction.",
          },
          {
            title: "Technical foundations",
            text: "Rapid loading speeds, accessibility compliance, clean responsive layouts and search engine readiness.",
          },
        ],
      },
    ],
    related: [
      { title: "Fashion & Brand Websites", href: "/services/fashion-websites" },
      { title: "E-commerce Design & Development", href: "/services/ecommerce" },
      { title: "Premium Retail Websites", href: "/services/premium-retail" },
    ],
  },

  // 04. SUPPORTING CAPABILITY: Search & Performance
  {
    slug: "seo",
    kind: "service",
    hierarchy: "supporting",
    title: "Search & Performance",
    metaTitle: "Technical SEO & Website Performance for Retail",
    metaDescription:
      "Technical SEO, semantic crawlability, structured data and conversion analytics for fashion and retail websites and online stores.",
    canonicalPath: "/services/seo",
    headline: ["Visible, fast", "and search-ready"],
    intro:
      "Great design only succeeds commercially if customers can discover it. We engineer technical SEO, semantic HTML, structured data and performance optimisation directly into our websites so search engines understand your catalogue.",
    audience:
      "Brands wanting organic search visibility, online stores looking to recover or expand rankings, and businesses seeking clear analytics.",
    sections: [
      {
        label: "Technical SEO",
        heading: "Search foundations that matter",
        items: [
          {
            title: "Crawlability and indexation",
            text: "Clean routing, XML sitemaps, canonical links and robots directives that make sure Google indexes the right pages.",
          },
          {
            title: "Schema & structured data",
            text: "JSON-LD schema markup for Organization, Products, Services and Breadcrumbs to earn rich search results.",
          },
          {
            title: "Core Web Vitals & speed",
            text: "Optimised image delivery, modern formats, minimal layout shifts and fast server response times.",
          },
          {
            title: "On-page content architecture",
            text: "Logical H1–H3 hierarchy, semantic HTML landmarks and natural keyword integration for fashion and retail search queries.",
          },
        ],
      },
      {
        label: "Measurement",
        heading: "Clear reporting, not vanity numbers",
        body:
          "We set up Google Search Console and clean analytics tracking so you can see which search queries and pages drive genuine customer enquiries and sales.",
      },
    ],
    related: [
      { title: "Fashion & Brand Websites", href: "/services/fashion-websites" },
      { title: "E-commerce Design & Development", href: "/services/ecommerce" },
      { title: "Connected Systems", href: "/services/integrations-automation" },
    ],
  },

  // 05. SUPPORTING CAPABILITY: Business Intelligence
  {
    slug: "dashboards-analytics",
    kind: "service",
    hierarchy: "supporting",
    title: "Business Intelligence",
    metaTitle: "Retail Dashboards & Business Intelligence",
    metaDescription:
      "Custom reporting interfaces and data visualisation connecting sales, inventory and customer metrics for growing brands.",
    canonicalPath: "/services/dashboards-analytics",
    headline: ["Clarity across", "your commercial data"],
    intro:
      "As an e-commerce or retail business grows, data becomes fragmented across storefronts, payment gateways and inventory sheets. We design and build custom dashboards that provide a single, clear view of your operational metrics.",
    audience:
      "Growing fashion and retail brands that need consolidated reporting on orders, best-selling lines, stock and customer acquisition.",
    sections: [
      {
        label: "Capabilities",
        heading: "Dashboards built for your workflow",
        items: [
          {
            title: "Unified sales reporting",
            text: "Consolidated sales data from your online store, wholesale channels and physical points of sale.",
          },
          {
            title: "Inventory and replenishment alerts",
            text: "Real-time visibility into fast-moving sizes, low stock thresholds and seasonal sell-through rates.",
          },
          {
            title: "Clean, bespoke data visualisation",
            text: "Custom interfaces designed for your team, removing clutter and displaying the exact KPIs you need to make decisions.",
          },
        ],
      },
    ],
    related: [
      { title: "E-commerce Design & Development", href: "/services/ecommerce" },
      { title: "Connected Systems", href: "/services/integrations-automation" },
      { title: "Search & Performance", href: "/services/seo" },
    ],
  },

  // 06. SUPPORTING CAPABILITY: Connected Systems
  {
    slug: "integrations-automation",
    kind: "service",
    hierarchy: "supporting",
    title: "Connected Systems",
    metaTitle: "E-commerce Integrations & Connected Systems",
    metaDescription:
      "API connections, payment gateways, inventory sync and automated workflows connecting your digital storefront to operational tools.",
    canonicalPath: "/services/integrations-automation",
    headline: ["Connected systems,", "smoother operations"],
    intro:
      "Your digital storefront shouldn't operate as an island. We connect websites with payment processors, inventory management tools, CRM platforms and dispatch couriers to eliminate manual data entry and keep operations running smoothly.",
    audience:
      "Retail brands seeking automated order handling, payment synchronization and seamless third-party software connections.",
    sections: [
      {
        label: "Connectivity",
        heading: "Connecting the tools you rely on",
        items: [
          {
            title: "Payment gateway integration",
            text: "Secure connections with South African and international payment providers for cards, instant EFT, and buy-now-pay-later.",
          },
          {
            title: "Inventory and ERP synchronization",
            text: "Real-time stock level synchronization between your online store and warehouse or retail POS systems.",
          },
          {
            title: "Workflow automation",
            text: "Automated customer email notifications, courier booking triggers and order status updates that save team hours.",
          },
        ],
      },
    ],
    related: [
      { title: "E-commerce Design & Development", href: "/services/ecommerce" },
      { title: "Custom Dashboards & BI", href: "/services/dashboards-analytics" },
      { title: "Fashion & Brand Websites", href: "/services/fashion-websites" },
    ],
  },
];

export const industryPages: ContentPageData[] = [
  {
    slug: "fashion",
    kind: "industry",
    title: "Fashion & Clothing Brands",
    metaTitle: "Digital Design for Fashion & Clothing Brands",
    metaDescription:
      "Custom websites and e-commerce for independent clothing labels, streetwear brands and fashion direct-to-consumer businesses.",
    canonicalPath: "/industries/fashion",
    headline: ["Websites for", "fashion & clothing"],
    intro:
      "Fashion is inherently visual and tactile. A digital storefront must convey texture, silhouette, movement and brand attitude. We design websites that give your garments the digital stage they deserve.",
    audience:
      "Independent fashion labels, ready-to-wear designers, streetwear brands and apparel businesses in South Africa and internationally.",
    sections: [
      {
        label: "Aesthetics",
        heading: "Honouring the garments",
        body:
          "We treat lookbooks, campaign imagery and video with the reverence they require. Clean typography and measured spacing ensure your collections remain the absolute focal point.",
        items: [
          {
            title: "Campaign & drop presentation",
            text: "Tailored landing experiences for seasonal collections, limited-run drops and capsule collaborations.",
          },
          {
            title: "Fit and fabric detail",
            text: "Clear garment specifications, fabric compositions and intuitive sizing guides that reduce customer hesitation.",
          },
          {
            title: "Mobile-first discovery",
            text: "Optimised for rapid, immersive browsing on mobile screens where the majority of fashion discovery happens.",
          },
        ],
      },
    ],
    related: [
      { title: "Fashion & Brand Websites", href: "/services/fashion-websites" },
      { title: "E-commerce Design & Development", href: "/services/ecommerce" },
      { title: "Search & Performance", href: "/services/seo" },
    ],
  },
  {
    slug: "luxury-retail",
    kind: "industry",
    title: "Luxury & Premium Retail",
    metaTitle: "Websites for Luxury & Premium Retail",
    metaDescription:
      "Considered digital storefronts, jewellery, accessories and premium product presentation engineered for trust and discovery.",
    canonicalPath: "/industries/luxury-retail",
    headline: ["Considered", "premium retail"],
    intro:
      "Premium products deserve a digital presence that matches the in-store standard. That means editorial restraint, excellent imagery and a buying or enquiry journey that builds confidence.",
    audience:
      "Businesses selling premium accessories, jewellery, fragrances, watches, leather goods and curated lifestyle products.",
    sections: [
      {
        label: "Presentation",
        heading: "Quality you can see",
        body:
          "Typography, spacing and imagery are treated with the same care as packaging and boutique display. Details such as materials, craftsmanship and provenance are given room to be appreciated.",
      },
      {
        label: "Discovery",
        heading: "Helping customers find the right piece",
        items: [
          {
            title: "Catalogues and online stores",
            text: "Whether you sell online or by enquiry, products are organised for effortless browsing and comparison.",
          },
          {
            title: "Enquiry and purchase flows",
            text: "Private appointment, reservation or direct purchase journeys tailored to your commercial model.",
          },
          {
            title: "Trust and credibility",
            text: "Clear provenance, care guidelines and direct studio contact options that reassure higher-value buyers.",
          },
        ],
      },
    ],
    related: [
      { title: "Premium Retail Websites", href: "/services/premium-retail" },
      { title: "E-commerce Design & Development", href: "/services/ecommerce" },
      { title: "Fashion & Brand Websites", href: "/services/fashion-websites" },
    ],
  },
  {
    slug: "ecommerce",
    kind: "industry",
    title: "E-commerce Businesses",
    metaTitle: "E-commerce Storefront Design & Optimisation",
    metaDescription:
      "Storefront redevelopment, mobile usability and technical SEO for active e-commerce brands in South Africa and internationally.",
    canonicalPath: "/industries/ecommerce",
    headline: ["Stronger", "online stores"],
    intro:
      "If your store is already trading, the priority is usually improving what exists: a smoother customer experience, better search visibility and clearer insight into how the business is performing.",
    audience:
      "Established direct-to-consumer and retail brands that need improved usability, storefront redevelopment, technical SEO, integrations or reporting.",
    sections: [
      {
        label: "Experience",
        heading: "Eliminating friction",
        body:
          "We review navigation, collection filtering, product pages and checkout to identify where customers drop off, then prioritise improvements by commercial impact.",
        items: [
          {
            title: "Storefront performance",
            text: "Faster loading speeds, optimised image weights and responsive stability across all devices.",
          },
          {
            title: "Technical SEO & search indexation",
            text: "Structured product data, clean canonical URLs and collection architecture that capture high-intent search traffic.",
          },
          {
            title: "Storefront redevelopment",
            text: "Rebuilding slow or restrictive legacy themes onto modern, high-speed architectures without disrupting current trade.",
          },
        ],
      },
    ],
    related: [
      { title: "E-commerce Design & Development", href: "/services/ecommerce" },
      { title: "Search & Performance", href: "/services/seo" },
      { title: "Custom Dashboards & BI", href: "/services/dashboards-analytics" },
    ],
  },
];

export function getServicePage(slug: string) {
  return servicePages.find((page) => page.slug === slug);
}

export function getIndustryPage(slug: string) {
  return industryPages.find((page) => page.slug === slug);
}
