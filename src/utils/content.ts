export type ContentSection = {
  label: string;
  heading: string;
  body?: string;
  items?: { title: string; text?: string }[];
};

export type ContentPageData = {
  slug: string;
  kind: "service" | "industry";
  title: string;
  metaTitle: string;
  metaDescription: string;
  headline: [string, string];
  intro: string;
  audience: string;
  sections: ContentSection[];
  note?: string;
  related: { title: string; href: string }[];
};

export const servicePages: ContentPageData[] = [
  {
    slug: "web-development",
    kind: "service",
    title: "Website Development",
    metaTitle: "Website Design & Development",
    metaDescription:
      "Brand-led marketing websites and website redevelopment for fashion, retail and consumer businesses. Responsive design, performance, accessibility and SEO foundations built in.",
    headline: ["Websites built", "around your brand"],
    intro:
      "A website is often the first serious impression a customer has of your business. We design and build brand-led websites that look considered, load quickly and are easy to manage after launch.",
    audience:
      "Brands launching online for the first time, businesses outgrowing a template, and companies whose current site no longer reflects the quality of what they sell.",
    sections: [
      {
        label: "What we build",
        heading: "Marketing and brand websites",
        items: [
          {
            title: "Brand-led marketing websites",
            text: "Single or multi-page sites that present your brand, collections or services with clarity and character.",
          },
          {
            title: "Multi-page business websites",
            text: "Structured sites with clear navigation for businesses with several services, ranges or audiences.",
          },
          {
            title: "Launch and campaign pages",
            text: "Focused landing pages for a collection drop, product launch or seasonal campaign.",
          },
          {
            title: "Website redevelopment",
            text: "Rebuilding an existing site on a faster, more maintainable foundation while protecting what already works, including search visibility.",
          },
        ],
      },
      {
        label: "Included",
        heading: "Foundations, not extras",
        items: [
          {
            title: "Responsive UI and UX",
            text: "Designed for mobile first, then refined for tablet and desktop.",
          },
          {
            title: "Content management",
            text: "Where you need to update content yourself, we recommend a CMS that suits your team and budget rather than a one-size-fits-all choice.",
          },
          {
            title: "Performance, accessibility and SEO",
            text: "Semantic markup, optimised images, sensible metadata and accessible interactions from the start.",
          },
          {
            title: "Testing, launch and handover",
            text: "Cross-device testing before launch, followed by a walkthrough so your team knows how everything works.",
          },
        ],
      },
      {
        label: "Website or app?",
        heading: "Knowing what you actually need",
        body: "A marketing website presents your business and helps customers take a next step. A custom application handles accounts, data and business logic. Many businesses need the first; some need both. We will tell you which applies to your situation before anything is quoted.",
      },
    ],
    note: "Ongoing maintenance and improvement can be arranged after launch. Scope and timelines are agreed per project.",
    related: [
      { title: "E-commerce development", href: "/services/ecommerce" },
      { title: "SEO and optimisation", href: "/services/seo" },
      { title: "Fashion brands", href: "/industries/fashion" },
    ],
  },
  {
    slug: "ecommerce",
    kind: "service",
    title: "E-commerce Development",
    metaTitle: "E-commerce Website Design & Development",
    metaDescription:
      "Online stores for fashion labels and premium retailers: storefront design, product and collection pages, variants, mobile shopping, checkout considerations, product SEO and analytics.",
    headline: ["Online stores", "designed to sell"],
    intro:
      "Good e-commerce is more than a product grid. We design and build storefronts that present products properly, make variants and sizing easy to understand, and keep the path to checkout short.",
    audience:
      "Clothing labels and premium retailers launching a store, and established online stores that need a better customer experience or a more reliable foundation.",
    sections: [
      {
        label: "Storefront",
        heading: "Presentation and discovery",
        items: [
          {
            title: "Storefront design",
            text: "A store that feels like your brand rather than a theme with a logo on it.",
          },
          {
            title: "Product and collection pages",
            text: "Imagery, descriptions, sizing and details laid out so customers can decide with confidence.",
          },
          {
            title: "Variants and navigation",
            text: "Colours, sizes and ranges organised so customers find the right item without friction.",
          },
          {
            title: "Mobile shopping",
            text: "Most browsing happens on a phone. Layouts, filters and the cart are designed for it first.",
          },
        ],
      },
      {
        label: "Operations",
        heading: "Checkout, payments and shipping",
        body: "Cart and checkout flows are planned around how your customers buy. Payment gateways and shipping providers are selected and confirmed during scoping, based on your platform, region and volumes. We only commit to an integration once we have confirmed it is feasible for your setup.",
      },
      {
        label: "Growth",
        heading: "Product SEO and measurement",
        items: [
          {
            title: "Product SEO",
            text: "Structured product and category pages, clean URLs and accurate metadata.",
          },
          {
            title: "Analytics and conversion tracking",
            text: "Measurement of the events that matter, such as product views, add-to-cart and completed orders.",
          },
          {
            title: "Redevelopment and migration",
            text: "Moving an existing store to a new build or platform, with redirects planned to protect existing search traffic. Feasibility depends on your current platform and data.",
          },
        ],
      },
    ],
    related: [
      { title: "SEO and optimisation", href: "/services/seo" },
      { title: "Dashboards and analytics", href: "/services/dashboards-analytics" },
      { title: "E-commerce businesses", href: "/industries/ecommerce" },
    ],
  },
  {
    slug: "seo",
    kind: "service",
    title: "SEO & Optimisation",
    metaTitle: "Technical SEO & E-commerce Optimisation",
    metaDescription:
      "Technical and on-page SEO for websites and online stores: crawlability, indexation, metadata, structured data, product page optimisation, performance and ongoing reporting.",
    headline: ["Found by the", "right customers"],
    intro:
      "Search visibility is built on solid technical foundations and useful pages. We fix what holds a site back, improve the pages that matter most, and report on progress honestly.",
    audience:
      "Businesses with an existing site or store that is underperforming in search, and new sites that want to launch on the right footing.",
    sections: [
      {
        label: "Technical",
        heading: "Making your site easy to crawl and understand",
        items: [
          { title: "Crawlability and indexation", text: "Sitemaps, robots directives, status codes, redirects and canonical URLs configured correctly." },
          { title: "Metadata and internal linking", text: "Unique titles and descriptions, logical heading structure and links that connect related pages." },
          { title: "Structured data", text: "Markup that reflects what is actually on the page, such as organisation, breadcrumbs and genuine product information." },
          { title: "Performance and mobile usability", text: "Faster pages and layouts that work properly on phones." },
        ],
      },
      {
        label: "On-page",
        heading: "Product and category pages",
        body: "For online stores, product and category pages are usually where search traffic is won or lost. We improve their structure, content and internal linking so they are more useful to customers and clearer to search engines.",
      },
      {
        label: "Ongoing",
        heading: "Reporting and prioritised improvements",
        body: "We set up Search Console and analytics where they are missing, then report on what changed and what we recommend next, in plain language and in order of likely impact.",
      },
    ],
    note: "SEO is ongoing work. Rankings depend on competition, content and factors outside anyone's direct control, so no particular position or traffic level is guaranteed.",
    related: [
      { title: "E-commerce development", href: "/services/ecommerce" },
      { title: "Website development", href: "/services/web-development" },
      { title: "E-commerce businesses", href: "/industries/ecommerce" },
    ],
  },
  {
    slug: "dashboards-analytics",
    kind: "service",
    title: "Custom Dashboards & Analytics",
    metaTitle: "Custom Business Dashboards & Analytics",
    metaDescription:
      "Custom dashboards for growing businesses: sales and order visibility, inventory reporting, lead tracking, e-commerce performance and consolidated operational KPIs.",
    headline: ["Clearer view of", "your business"],
    intro:
      "As a business grows, the numbers end up spread across a store, spreadsheets and several tools. A custom dashboard brings the figures you rely on into one place, built around the decisions you actually make.",
    audience:
      "Growing retail and e-commerce businesses that spend too much time assembling reports by hand or switching between systems to answer simple questions.",
    sections: [
      {
        label: "Use cases",
        heading: "What a dashboard can show",
        items: [
          { title: "Sales and order visibility", text: "Daily, weekly and seasonal views of orders and revenue." },
          { title: "Inventory reporting", text: "Stock levels, sell-through and items that need attention." },
          { title: "Customer and lead tracking", text: "Where enquiries and customers come from and how they progress." },
          { title: "E-commerce performance", text: "Conversion, average order value and product performance." },
          { title: "Operational KPIs", text: "The handful of measures your team checks most often." },
          { title: "Consolidated data", text: "Figures from several systems combined into a single view." },
        ],
      },
      {
        label: "Scope",
        heading: "Feasibility comes first",
        body: "Every dashboard depends on what data is available, which systems hold it and whether those systems allow access. We start with a feasibility assessment, then propose a scope based on what is practical for your business.",
      },
    ],
    note: "This is a custom engineering service, not an off-the-shelf product. Any demonstrations we share use synthetic data and are clearly labelled as such.",
    related: [
      { title: "Integrations and automation", href: "/services/integrations-automation" },
      { title: "E-commerce development", href: "/services/ecommerce" },
      { title: "E-commerce businesses", href: "/industries/ecommerce" },
    ],
  },
  {
    slug: "integrations-automation",
    kind: "service",
    title: "Integrations & Automation",
    metaTitle: "API Integrations & Business Automation",
    metaDescription:
      "Website and CRM integrations, API connections, data synchronisation, lead workflows, reporting pipelines and practical operational automation.",
    headline: ["Systems that", "work together"],
    intro:
      "Many small operational problems come from systems that do not talk to each other. We connect the tools you already use so information moves where it needs to, without manual copying.",
    audience:
      "Businesses whose website, store, CRM and internal tools operate in isolation, creating repeated admin work or inconsistent data.",
    sections: [
      {
        label: "Project types",
        heading: "Practical connections",
        items: [
          { title: "Website and CRM integrations", text: "Enquiries and customer details delivered to the right place automatically." },
          { title: "API connections", text: "Connecting your website or store to third-party services." },
          { title: "Data synchronisation", text: "Keeping product, stock or customer data consistent across systems." },
          { title: "Form and lead workflows", text: "Routing, notifications and follow-ups for new enquiries." },
          { title: "Reporting pipelines", text: "Moving data into a format that supports reporting and dashboards." },
          { title: "Operational automation", text: "Removing repetitive manual steps from everyday processes." },
        ],
      },
      {
        label: "Approach",
        heading: "Scoped around your tools",
        body: "What can be integrated depends on the systems involved and the access they provide. We review your current setup, confirm what is technically possible and recommend the simplest solution that solves the problem.",
      },
    ],
    related: [
      { title: "Dashboards and analytics", href: "/services/dashboards-analytics" },
      { title: "Website development", href: "/services/web-development" },
    ],
  },
];

export const industryPages: ContentPageData[] = [
  {
    slug: "fashion",
    kind: "industry",
    title: "Fashion & Clothing Brands",
    metaTitle: "Websites & Online Stores for Fashion Brands",
    metaDescription:
      "Websites and e-commerce for independent fashion labels, streetwear and direct-to-consumer clothing brands. Collections, lookbooks, sizing, mobile shopping and launch campaigns.",
    headline: ["Built for", "fashion labels"],
    intro:
      "A clothing brand lives or dies on identity. Your website should carry the same attention to detail as your garments, and make buying them straightforward.",
    audience:
      "Independent fashion labels, streetwear brands, contemporary clothing businesses and direct-to-consumer labels.",
    sections: [
      {
        label: "Identity",
        heading: "Your brand, not a theme",
        body: "We design around your art direction, photography and tone of voice, so the site feels like an extension of the brand rather than a generic store with your logo applied.",
      },
      {
        label: "Collections",
        heading: "Presenting the product properly",
        items: [
          { title: "Collections and lookbooks", text: "Editorial layouts that let imagery lead while staying easy to shop." },
          { title: "Product variants and sizing", text: "Clear colour and size selection, size guides and stock visibility." },
          { title: "Mobile-first shopping", text: "Fast product pages, simple filters and a cart that works one-handed." },
        ],
      },
      {
        label: "Launches",
        heading: "Drops and campaigns",
        body: "Dedicated landing pages for new collections and limited releases, built to handle attention and point customers straight to the products.",
      },
      {
        label: "Growth",
        heading: "Visibility and reporting",
        body: "Product SEO and analytics set up from launch, so you can see which collections and channels are working and where customers drop off.",
      },
    ],
    related: [
      { title: "E-commerce development", href: "/services/ecommerce" },
      { title: "Website development", href: "/services/web-development" },
      { title: "SEO and optimisation", href: "/services/seo" },
    ],
  },
  {
    slug: "luxury-retail",
    kind: "industry",
    title: "Luxury & Premium Retail",
    metaTitle: "Websites for Luxury & Premium Retail Brands",
    metaDescription:
      "Digital experiences for premium accessories, jewellery, fragrance, watch, leather goods and lifestyle brands. Considered presentation, product discovery and trust.",
    headline: ["Considered", "premium retail"],
    intro:
      "Premium products deserve a digital experience that matches the in-store standard. That means restraint, excellent imagery and a buying or enquiry journey that builds confidence.",
    audience:
      "Businesses selling premium accessories, jewellery, fragrances, watches, leather goods and lifestyle products.",
    sections: [
      {
        label: "Presentation",
        heading: "Quality you can see",
        body: "Typography, spacing and imagery are treated with the same care as packaging and display. Details such as materials, craftsmanship and provenance are given room to be read.",
      },
      {
        label: "Discovery",
        heading: "Helping customers find the right piece",
        items: [
          { title: "Catalogues and online stores", text: "Whether you sell online or by enquiry, products are organised for browsing and comparison." },
          { title: "Enquiry and purchase flows", text: "Appointment, reservation or direct purchase journeys, depending on how you sell." },
          { title: "Trust and credibility", text: "Clear policies, care information and contact options that reassure higher-value buyers." },
        ],
      },
      {
        label: "Performance",
        heading: "Fast, visible and measured",
        body: "High-quality imagery delivered efficiently, sound technical SEO and measurement that shows how customers move from discovery to enquiry or sale.",
      },
    ],
    related: [
      { title: "Website development", href: "/services/web-development" },
      { title: "E-commerce development", href: "/services/ecommerce" },
      { title: "SEO and optimisation", href: "/services/seo" },
    ],
  },
  {
    slug: "ecommerce",
    kind: "industry",
    title: "E-commerce Businesses",
    metaTitle: "Redevelopment, SEO & Reporting for Online Stores",
    metaDescription:
      "Support for established online stores: usability improvements, redevelopment, technical SEO, integrations and clearer reporting on business performance.",
    headline: ["Stronger", "online stores"],
    intro:
      "If your store is already trading, the priority is usually improving what exists: a smoother customer experience, better search visibility and clearer insight into how the business is performing.",
    audience:
      "Established e-commerce businesses that need improved usability, redevelopment, technical SEO, integrations or reporting.",
    sections: [
      {
        label: "Experience",
        heading: "Fixing friction",
        body: "We review navigation, product pages, search and checkout to identify where customers struggle, then prioritise improvements by likely impact and effort.",
      },
      {
        label: "Foundations",
        heading: "Performance and search",
        items: [
          { title: "Storefront performance", text: "Faster pages, lighter assets and more stable layouts." },
          { title: "Technical SEO", text: "Indexation, structured data and category and product page improvements." },
          { title: "Redevelopment", text: "A rebuild where the current platform or codebase is holding the business back." },
        ],
      },
      {
        label: "Operations",
        heading: "Visibility into the business",
        body: "Integrations between your store and other systems, and custom dashboards that bring sales, stock and customer data together, scoped after a feasibility assessment.",
      },
    ],
    related: [
      { title: "SEO and optimisation", href: "/services/seo" },
      { title: "Dashboards and analytics", href: "/services/dashboards-analytics" },
      { title: "Integrations and automation", href: "/services/integrations-automation" },
    ],
  },
];

export function getServicePage(slug: string) {
  return servicePages.find((page) => page.slug === slug);
}

export function getIndustryPage(slug: string) {
  return industryPages.find((page) => page.slug === slug);
}
