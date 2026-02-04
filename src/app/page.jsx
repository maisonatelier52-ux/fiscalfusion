import Card from "../components/Card";
import HeroSection from "../components/Herosection";
import PostGrid from "../components/PostGrid";
import Section from "../components/Section";
import businessData from '../../public/data/business.json'
import financeData from '../../public/data/finance.json';
import usData from '../../public/data/us.json';
import entertainmentData from '../../public/data/entertainment.json';
import politicsData from '../../public/data/politics.json';
import worldData from '../../public/data/world.json';
import sportsData from '../../public/data/sports.json';
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://www.fiscalfusion.org"),

  title:"Fiscal Fusion | Latest Business & Global Financial News Today",

  description:
 "Stay ahead with Fiscal Fusion. Get real-time market updates, breaking business news, U.S. politics, and world affairs backed by expert financial insights.",
  keywords:
    "Breaking global financial news, Real-time market updates, World economic reports, International business trends.,US political coverage, White House policy updates, Federal court news, Political campaign finance insights.,Breaking entertainment stories, Global sports updates, Emerging market trends",
  openGraph: {
    title: "Fiscal Fusion | Real-Time Global Markets & Business News",
    description:
      "Fiscal Fusion delivers trusted news across business, finance, global affairs, politics, entertainment, and sports.",
    url: "https://www.fiscalfusion.org",
    siteName: "Fiscal Fusion",
    images: [
      {
        url: "https://www.fiscalfusion.org/images/fiscalfusion-logo.webp",
        width: 1200,
        height: 630,
        alt: "Fiscal Fusion – Global News & Political Analysis"
      }
    ],
    locale: "en_US",
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "Fiscal Fusion – Breaking Business, Political & Finance News",
    description:
      "Fiscal Fusion delivers breaking headlines and insights across business, finance, politics, global events, entertainment, and sports in real time.",
       images: "https://www.fiscalfusion.org/images/fiscalfusion-logo.webp",
    site: "@fiscalfusion"
  },

  alternates: {
    canonical: "https://www.fiscalfusion.org",
    languages: {
      en: "https://www.fiscalfusion.org",
      "x-default": "https://www.fiscalfusion.org"
    }
  },

  authors: [
    { name: "Marcus Bennett" }
  ],

  category: "News",

  icons: {
    icon: "/favicon.ico"
  }
};

export default function Home() {
  return (
    <main>
   <>
  {/* Organization - Enhanced with Contact & Ethics */}
  <Script
    id="schema-newsmediaorganization"
    type="application/ld+json"
    strategy="beforeInteractive"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "NewsMediaOrganization",
        "@id": "https://www.fiscalfusion.org/#organization",
        "name": "Fiscal Fusion",
        "url": "https://www.fiscalfusion.org",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.fiscalfusion.org/images/fiscalfusion-logo.webp",
          "width": 1024,
          "height": 1024
        },
        "sameAs": [
          "https://substack.com/@fiscalfusion1",
          "https://medium.com/@intuitive_maize_hornet_150"
          
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "editorial",
          "email": "contact@fiscalfusion.org" 
        }
      })
    }}
  />

  {/* WebSite - Added Search Box capability */}
  <Script
    id="schema-website"
    type="application/ld+json"
    strategy="beforeInteractive"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://www.fiscalfusion.org/#website",
        "url": "https://www.fiscalfusion.org",
        "name": "Fiscal Fusion",
        "publisher": { "@id": "https://www.fiscalfusion.org/#organization" },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.fiscalfusion.org/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      })
    }}
  />

  {/* Site Navigation - Fixed Array Structure */}
  <Script
    id="schema-sitenavigation"
    type="application/ld+json"
    strategy="beforeInteractive"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": [
          { "@type": "SiteNavigationElement", "position": 1, "name": "Business", "url": "https://www.fiscalfusion.org/business" },
          { "@type": "SiteNavigationElement", "position": 2, "name": "Finance", "url": "https://www.fiscalfusion.org/finance" },
          { "@type": "SiteNavigationElement", "position": 3, "name": "Politics", "url": "https://www.fiscalfusion.org/politics" },
          { "@type": "SiteNavigationElement", "position": 4, "name": "U.S.", "url": "https://www.fiscalfusion.org/us" },
          { "@type": "SiteNavigationElement", "position": 5, "name": "World", "url": "https://www.fiscalfusion.org/world" },
          { "@type": "SiteNavigationElement", "position": 5, "name": "World", "url": "https://www.fiscalfusion.org/sports" },
          { "@type": "SiteNavigationElement", "position": 5, "name": "World", "url": "https://www.fiscalfusion.org/entertainment" }

        ]
      })
    }}
  />
</>

      <HeroSection data={[businessData[8], politicsData[0], sportsData[3]]} />
      {/* <PressviewHero />  */}
      <PostGrid data={[politicsData[1], politicsData[2], politicsData[3], businessData[0]]} />
      {/* <LatestReviews /> */}
      <Card data={[businessData[3], sportsData[1], worldData[0]]} />
      <Section data={[entertainmentData[0], worldData[1], usData[0], financeData[0]]} />
    </main>
  );
}
