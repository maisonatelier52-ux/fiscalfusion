import businessData from '../../public/data/business.json';
import financeData from '../../public/data/finance.json';
import usData from '../../public/data/us.json';
import entertainmentData from '../../public/data/entertainment.json';
import politicsData from '../../public/data/politics.json';
import worldData from '../../public/data/world.json';
import sportsData from '../../public/data/sports.json';
import Link from 'next/link';
import { sortArticlesByDate } from '../utils/newsSort';

export default function Footer() {
  const siteLinks = [
    { href: "/about", label: "about" },
    { href: "/contact", label: "contact" },
    { href: "/editorial-policy", label: "editorial policy" },
    { href: "/correction-policy", label: "correction policy" },
    { href: "/source-methodology", label: "source methodology" },
    { href: "/advertising-sponsored-policy", label: "advertising & sponsored policy" },
    { href: "/ownership-funding", label: "ownership & funding" },
    { href: "/right-of-reply-policy", label: "right of reply policy" },
    { href: "/legal-policy", label: "legal policy" },
    { href: "/our-team", label: "our team" },
    { href: "/faq", label: "faq" },
    { href: "/terms-and-conditions", label: "Terms and conditions" },
  ];

  const categories = [
    { href: "/world", label: "World" },
    { href: "/us", label: "U.S." },
    { href: "/business", label: "Business" },
    { href: "/politics", label: "Politics" },
    { href: "/finance", label: "Finance" },
    { href: "/sports", label: "Sports" },
    { href: "/entertainment", label: "Entertainment" },
  ];

  const allData = [
    ...businessData,
    ...financeData,
    ...usData,
    ...entertainmentData,
    ...politicsData,
    ...worldData,
    ...sportsData
  ];

  const latestNews = sortArticlesByDate(allData).slice(0, 2);

  return (
    <footer className="border-t-3 border-[#2f2f2f]">
      <div className="bg-[#2f2f2f] text-[#c1c0b4]">
        <div className="border-t border-white"></div>
        <div className="py-6 md:py-16 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1.25fr_1.25fr_1fr_1fr] gap-8 md:gap-10 text-left">
            <div>
              <span className="text-xl md:text-xl font-semibold tracking-wide mb-2 block">ABOUT US</span>
              <div className="w-12 h-[2px] bg-[#c1c0b4] mb-6"></div>
              <p className="text-sm leading-[1.3] tracking-tight mb-3 font-serif">
                Fiscal Fusion brings you accurate, timely, and engaging news from around the world, keeping you informed and connected to the stories that matter most.
              </p>
              <div className="space-y-3 text-sm font-serif">
                <div><span>*</span></div>
              </div>
            </div>

            <div>
              <span className="text-xl md:text-xl font-semibold tracking-wide mb-2 block">LATEST NEWS</span>
              <div className="w-12 h-[2px] bg-[#c1c0b4] mb-6"></div>

              {latestNews.map((item, i) => (
                <div key={i} className="mb-3 font-serif">
                  <p className="font-medium text-sm">{item.date}</p>
                  <Link href={`/${item.category}/${item.slug}`} className="text-decoration-none hover:underline" aria-label={item.title} title={item.title}>
                    <p className="text-sm mt-1 leading-[1.3] tracking-tight">{item.title}</p>
                  </Link>
                  {i !== 1 && (
                    <div className="mt-3">
                      <span>*</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div>
              <span className="text-xl md:text-xl font-semibold tracking-wide mb-2 block">TRANSPARENCY & POLICIES</span>
              <div className="w-12 h-[2px] bg-[#c1c0b4] mb-6"></div>
              <ul className="space-y-2 text-sm leading-[1.25] font-serif">
                {siteLinks.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} title={item.label} aria-label={item.label} className="hover:underline uppercase">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="text-xl md:text-xl font-semibold tracking-wide mb-2 block">SECTIONS</span>
              <div className="w-12 h-[2px] bg-[#c1c0b4] mb-6"></div>
              <ul className="space-y-2 text-sm leading-[1.25] font-serif">
                {categories.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} title={item.label} aria-label={item.label} className="hover:underline uppercase">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#7c7c79] text-center text-[10px] text-[#c1c0b4] bg-[#2f2f2f]">
        <div className="border-t-2 border-[#7c7c79] mt-0.5 p-3">
          <p className="text-[8px] md:text-[10px]">Copyright &copy; 2026. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
