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
    title: "Business News, Corporate Strategy & Market Trends – Fiscal Fusion",
    description:
      "Discover in-depth business news covering corporate strategy, market shifts, startup growth, and industry trends shaping the global economy.",
  },

  finance: {
    title: "Finance News, Investments & Economic Insights – Fiscal Fusion",
    description:
      "Stay updated with financial news, investment strategies, banking developments, economic indicators, and expert insights from global markets.",
  },

  world: {
    title: "World News, Global Affairs & International Updates – Fiscal Fusion",
    description:
      "Get comprehensive coverage of world news, international affairs, geopolitical events, and global stories influencing nations worldwide.",
  },

  us: {
    title: "U.S. News, Politics & National Affairs – Fiscal Fusion",
    description:
      "Follow the latest U.S. news including national politics, policy decisions, social issues, economic updates, and major domestic developments.",
  },

  politics: {
    title: "Politics News, Policy Decisions & Government Affairs – Fiscal Fusion",
    description:
      "Read timely political coverage on elections, government actions, policy reforms, leadership changes, and power dynamics shaping nations.",
  },

  entertainment: {
    title: "Entertainment News, Celebrity Stories & Culture Trends – Fiscal Fusion",
    description:
      "Catch up on entertainment news featuring movies, television, celebrities, streaming platforms, pop culture trends, and media highlights.",
  },

  sports: {
    title: "Sports News, Live Scores & Match Analysis – Fiscal Fusion",
    description:
      "Stay connected to sports news with match results, player performances, league updates, major tournaments, and expert game analysis.",
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

