import type { Metadata, Viewport } from "next";
import { satoshiRegular } from "@/fonts/font";
import { Provider } from "@/components/Provider";
import "./globals.css";
import LenisScroll from "@/components/LenisScroll";
import Scroll from "@/components/Scroll";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/utils/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Fashion Website Design & E-commerce Studio | Aurexis",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.founder }, { name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: "Fashion Website Design & E-commerce Studio | Aurexis",
    description: siteConfig.description,
    url: siteConfig.url,
    locale: "en_ZA",
    images: [
      {
        url: "/brand/aurexis-logo.png",
        width: 1200,
        height: 630,
        alt: "Aurexis Digital Studio — Where Brand Meets Commerce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fashion Website Design & E-commerce Studio | Aurexis",
    description: siteConfig.description,
    images: ["/brand/aurexis-logo.png"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F5E7D3" },
    { media: "(prefers-color-scheme: dark)", color: "#1D1C1C" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ZA" suppressHydrationWarning>
      <body
        className={`${satoshiRegular.className} scrollbar scrollLight dark:scrollDark duration-300 bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText`}
        suppressHydrationWarning
      >
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": ["Organization", "ProfessionalService"],
                "@id": `${siteConfig.url}/#organization`,
                name: siteConfig.name,
                url: siteConfig.url,
                description: siteConfig.description,
                logo: `${siteConfig.url}/brand/aurexis-logo.png`,
                telephone: siteConfig.phone,
                email: siteConfig.contactEmail,
                founder: {
                  "@type": "Person",
                  name: siteConfig.founder,
                },
                address: {
                  "@type": "PostalAddress",
                  addressLocality: siteConfig.city,
                  addressRegion: siteConfig.region,
                  addressCountry: siteConfig.countryCode,
                },
                priceRange: "$$$",
                knowsAbout: [
                  "Fashion Website Design",
                  "E-commerce Web Development",
                  "Premium Retail Websites",
                  "Technical SEO",
                  "Core Web Vitals",
                  "Brand Expression & Art Direction",
                ],
              },
              {
                "@type": "WebSite",
                "@id": `${siteConfig.url}/#website`,
                name: siteConfig.name,
                url: siteConfig.url,
                publisher: { "@id": `${siteConfig.url}/#organization` },
                inLanguage: "en-ZA",
              },
            ],
          }}
        />
        <LenisScroll>
          <Scroll>
            <Provider>
              <div>{children}</div>
            </Provider>
          </Scroll>
        </LenisScroll>
      </body>
    </html>
  );
}
