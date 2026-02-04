import businessData from "../../../public/data/business.json";
import financeData from "../../../public/data/finance.json";
import sportsData from "../../../public/data/sports.json";
import usData from "../../../public/data/us.json";
import politicsData from "../../../public/data/politics.json";
import worldData from "../../../public/data/world.json";
import entertainmentData from "../../../public/data/entertainment.json";
import PaginatedGrid from "../../components/PaginatedGrid";
import Breadcrumb from "../../components/BreadCrump";
import SectionTitle from "../../components/SectionTitle";

const allData = {
  business: businessData,
  us: usData,
  sports: sportsData,
  world: worldData,
  politics: politicsData,
  finance: financeData,
  entertainment: entertainmentData,
};

export async function generateMetadata({ params }) {
  const { category } = await params;
  
const categoryMeta = {
  business: {
    title: "Business News | Market Trends & Corporate Updates",
    description:
      "Get the latest business news, market trends, corporate strategies, and industry insights shaping the global economy.",
  },

  finance: {
    title: "Finance News | Investment Tips & Economic Updates",
    description:
      "Stay updated on finance news, investment strategies, banking, stock markets, and global economic developments.",
  },

  world: {
    title: "World News | Global Affairs & International Events",
    description:
      "Explore world news, global affairs, geopolitics, and international events impacting nations worldwide.",
  },

  us: {
    title: "U.S. News | Politics, Economy & National Updates",
    description:
      "Follow U.S. news on politics, national policies, economy, social issues, and major domestic events.",
  },

  politics: {
    title: "Politics News | Elections, Policy & Government",
    description:
      "Read politics news covering elections, government policies, reforms, leadership changes, and power shifts.",
  },

  entertainment: {
    title: "Entertainment News | Movies, Celebs & Pop Culture",
    description:
      "Catch entertainment news on movies, TV shows, celebrities, streaming, pop culture trends, and media highlights.",
  },

  sports: {
    title: "Sports News | Live Scores, Matches & Analysis",
    description:
      "Get sports news with live scores, match results, player stats, tournaments, and expert game analysis.",
  },
};


  const meta =
    categoryMeta[category] || {
      title: `${category.charAt(0).toUpperCase() + category.slice(1)} News – Fiscal Fusion`,
      description: `Latest breaking updates and major headlines in ${category}.`,
    };

  const siteUrl = "https://www.fiscalfusion.org";
  const categoryUrl = `${siteUrl}/${category}`;

  const firstArticle = allData[category]?.[0];
  const firstArticleImage =
    firstArticle?.image?.startsWith("http")
      ? firstArticle.image
      : `${siteUrl}${firstArticle?.image || "/images/fiscalfusion-logo.webp"}`;


  return {
    title: meta.title,
    description: meta.description,

    alternates: {
      canonical: categoryUrl,
    },

    openGraph: {
      title: meta.title,
      description: meta.description,
      url: categoryUrl,
      siteName: "Fiscal Fusion",
      images: [
        {
          url: firstArticleImage,
          width: 1200,
          height: 630,
          alt: `${category} news – Fiscal Fusion`,
        },
      ],
      locale: "en_US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [firstArticleImage],
      site: "@fiscalfusion",
    },
  };
}


export async function generateStaticParams() {
  return Object.keys(allData).map((category) => ({
    category,
  }));
}

export default async function CategoryPage({ params }) {
  const resolvedParams = await params;

  const category = resolvedParams.category;
  const data = allData[category];

  if (!data) return <div>Category not found</div>;

  return (
    <>
      <Breadcrumb category={category} />
      <SectionTitle title={category} />
      <div >
        <PaginatedGrid data={data} />
      </div>
    </>
  );
}

