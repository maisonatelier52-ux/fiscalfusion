import Link from "next/link";
import { BadgeInfo, Building2, CircleDollarSign, FileText, Scale } from "lucide-react";

export default function OwnershipFundingPage() {
  const sections = [
    {
      title: "Ownership",
      icon: Building2,
      content:
        "Fiscal Fusion is operated as an independent digital news publication. Our ownership structure is maintained separately from newsroom decision-making so editors can make coverage choices based on news value, accuracy, and public interest.",
    },
    {
      title: "Funding Sources",
      icon: CircleDollarSign,
      content:
        "Our publication may be supported by advertising, sponsorships, affiliate relationships, and other commercial partnerships. These funding sources help sustain our reporting, site operations, technology, and audience services.",
    },
    {
      title: "Editorial Independence",
      icon: Scale,
      content:
        "Funding partners, advertisers, sponsors, and outside organizations do not control our editorial agenda, article conclusions, headlines, or reporting standards. Commercial relationships are handled separately from editorial judgment.",
    },
    {
      title: "Disclosures",
      icon: FileText,
      content:
        "When content includes a paid relationship, sponsorship, partnership, or other material commercial connection, we aim to disclose it clearly. Readers should be able to distinguish independent editorial work from promotional or sponsored material.",
    },
    {
      title: "Questions About Funding",
      icon: BadgeInfo,
      content:
        "Readers, partners, and organizations may contact Fiscal Fusion with questions about ownership, funding, advertising, sponsorships, or potential conflicts of interest. We review inquiries with attention to transparency and reader trust.",
      cta: true,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="p-5 md:p-10 border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-1 md:mb-3 text-[#2f2f2f]">
            Ownership &amp; Funding
          </h2>
          <p className="text-[11px] md:text-[15px] text-[#2f2f2f] leading-[1.3] tracking-tight font-serif">
            How Fiscal Fusion explains its ownership, funding model, editorial
            independence, and disclosure practices.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 md:py-12 py-6 space-y-7">
        {sections.map((section, idx) => {
          const Icon = section.icon;

          return (
            <div
              key={idx}
              className="flex flex-col md:flex-row items-start gap-6 md:gap-8 bg-[#f9f9f9] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0 bg-[#2f2f2f] text-white rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
                <Icon className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl md:text-2xl font-semibold text-[#2f2f2f] mb-2">
                  {section.title}
                </h3>
                <p className="text-[#4a4a4a] text-[11px] md:text-[15px] leading-[1.3] tracking-tight font-serif">
                  {section.content}
                </p>
                {section.cta && (
                  <Link
                    title="contact"
                    href="/contact"
                    aria-label="contact"
                    className="inline-block mt-3 text-gray-900 text-sm font-medium underline underline-offset-4 hover:opacity-70 transition duration-200"
                  >
                    Contact Us About Ownership -&gt;
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
