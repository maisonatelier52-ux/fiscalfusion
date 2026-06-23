import Link from "next/link";
import { AlertTriangle, Copyright, FileLock2, Gavel, MailQuestion } from "lucide-react";

export default function LegalPolicyPage() {
  const sections = [
    {
      title: "General Information",
      icon: Gavel,
      content:
        "Fiscal Fusion publishes news, analysis, explainers, and related editorial content for general informational purposes. Our reporting should not be treated as legal, financial, medical, investment, or professional advice.",
    },
    {
      title: "Accuracy & Liability",
      icon: AlertTriangle,
      content:
        "We work to keep our content accurate and current, but news can develop quickly and information may change after publication. Fiscal Fusion is not responsible for losses or decisions made solely from information published on the site.",
    },
    {
      title: "Copyright & Use",
      icon: Copyright,
      content:
        "Text, images, graphics, layout, branding, and other site materials may be protected by copyright, trademark, or other intellectual property laws. Readers may not reproduce, republish, scrape, sell, or redistribute our content without permission, except where permitted by law.",
    },
    {
      title: "Third-Party Links",
      icon: FileLock2,
      content:
        "Articles may link to third-party websites, documents, services, or public records for context. Fiscal Fusion does not control those external sites and is not responsible for their accuracy, availability, policies, or practices.",
    },
    {
      title: "Legal Requests",
      icon: MailQuestion,
      content:
        "Legal questions, rights requests, takedown notices, copyright concerns, or formal correspondence should include clear identifying information, the relevant URL, the issue being raised, and supporting documentation when available.",
      cta: true,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="p-5 md:p-10 border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-1 md:mb-3 text-[#2f2f2f]">
            Legal Policy
          </h2>
          <p className="text-[11px] md:text-[15px] text-[#2f2f2f] leading-[1.3] tracking-tight font-serif">
            Important legal information about using Fiscal Fusion, our content,
            external links, intellectual property, and formal requests.
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
                    Contact Us About Legal Requests -&gt;
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
