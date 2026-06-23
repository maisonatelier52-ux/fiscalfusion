import React from "react";
import { notFound } from "next/navigation";
import businessData from "../../../../public/data/business.json";
import sportsData from "../../../../public/data/sports.json";
import politicsData from "../../../../public/data/politics.json";
import worldData from "../../../../public/data/world.json";
import usData from "../../../../public/data/us.json";
import entertainmentData from "../../../../public/data/entertainment.json";
import financeData from "../../../../public/data/finance.json";
import Article from "../../../components/Article";
import Breadcrumb from "../../../components/BreadCrump";
import DetailTitle from "../../../components/DetailTitle";
import Script from "next/script";
import { sortArticlesByDate } from "../../../utils/newsSort";

export async function generateStaticParams() {
  const allData = [
    { category: "world", articles: worldData },
    { category: "us", articles: usData },
    { category: "business", articles: businessData },
    { category: "politics", articles: politicsData },
    { category: "finance", articles: financeData },
    { category: "sports", articles: sportsData },
    { category: "entertainment", articles: entertainmentData },
  ];

  return allData.flatMap(({ category, articles }) =>
    articles.map((article) => ({
      category,
      slug: article.slug,
    })),
  );
}

const allData = {
  business: businessData,
  world: worldData,
  sports: sportsData,
  us: usData,
  politics: politicsData,
  finance: financeData,
  entertainment: entertainmentData,
};



export async function generateMetadata({ params }) {
  const { category, slug } = await params;

  const allDataMap = {
    politics: politicsData,
    business: businessData,
    world: worldData,
    sports: sportsData,
    us: usData,
    finance: financeData,
    entertainment: entertainmentData,
  };

  const articles = allDataMap[category?.toLowerCase()] || [];
  const article = articles.find((a) => a.slug === slug);

  const siteUrl = "https://www.fiscalfusion.org";
  const currentUrl = `${siteUrl}/${category}/${slug}`;

  const imageUrl =
    article?.image?.startsWith("http") ? article.image : `${siteUrl}${article?.image || "/images/fiscalfusion-logo.webp"}`;

  if (!article) {
    return {
      title: "Article Not Found – Fiscal Fusion",
      description: "The requested article could not be found.",
      robots: { index: false, follow: false },
    };
  }

  const slugOverride = allData[slug] || {};

  const readableDescription =
    slugOverride.description || article.shortdescription || `${article.title} — Latest news update from Fiscal Fusion.`;

  const keywords = [
    article.category,
    "Fiscal Fusion",
    "news",
    article.title.replace(/[^\w\s]/g, ""),
  ]
    .filter(Boolean)
    .join(", ");

  return {
    title: slugOverride.title || `${article.title}`,
    description: readableDescription,
    keywords: keywords,

    authors: [{ name: article.author || article.creator }],

    alternates: {
      canonical: currentUrl,
    },

    openGraph: {
      title: slugOverride.title || article.title,
      description: readableDescription,
      url: currentUrl,
      siteName: "Fiscal Fusion",
      locale: "en_US",
      type: "article",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: slugOverride.title || article.title,
      description: readableDescription,
      images: [imageUrl],
      site: "@FiscalFusion",
      creator: article.creator || article.author,
    },

    other: {
      "script:ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        headline: slugOverride.title || article.title,
        description: readableDescription,
        articleSection: category,
        datePublished: article.date,
        dateModified: article.updatedAt || article.date,
        author: {
          "@type": "Person",
          name: article.creator || article.author,
        },
        publisher: {
          "@type": "Organization",
          name: "Fiscal Fusion",
          logo: {
            "@type": "ImageObject",
            url: `${siteUrl}/images/fiscalfusion-logo.webp`,
            width: 600,
            height: 600,
          },
        },
        mainEntityOfPage: currentUrl,
        image: {
          "@type": "ImageObject",
          url: imageUrl,
          width: 1200,
          height: 630,
        },
        url: currentUrl,
        keywords: keywords,
        articleBody: article.description?.slice(0, 180) || readableDescription || article.title,
      }),
    },
  };
}

export default async function DetailPage({ params }) {
  const { category, slug } = await params;
  const data = allData[category?.toLowerCase()];

  if (!data) return notFound();

  const article = data.find((item) => item.slug === slug);
  if (!article) return notFound();

  const otherArticles = sortArticlesByDate(data.filter((item) => item.slug !== slug));


  return (
    <main>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://www.fiscalfusion.org/${article.category}/${article.slug}/`,
            },
            headline: article.title,
            description: article.shortdescription,
            image: {
              "@type": "ImageObject",
              url: article.image.startsWith("http")
                ? article.image
                : `https://www.fiscalfusion.org${article.image}`,
              width: 1200,
              height: 630,
            },
            author: {
              "@type": "Organization",
              name: "Fiscal Fusion",
              url: "https://www.fiscalfusion.org/",
            },
            publisher: {
              "@type": "Organization",
              name: "Fiscal Fusion",
              logo: {
                "@type": "ImageObject",
                url: "https://www.fiscalfusion.org/images/fiscalfusion-logo.webp",
                width: 628,
                height: 116,
              },
            },
            datePublished: article.date,
            dateModified: article.date,
          }),
        }}
      />
    

      <Breadcrumb category={article.category} title={article.title} />
      <div className="w-full px-4 sm:px-2 lg:px-4 xl:px-12 space-y- mb-10">
        <DetailTitle
          title={article.category}
          description={article.shortdescription}
        />
        <Article article={article} otherArticles={otherArticles} />
      </div>
    </main>
  );
}
