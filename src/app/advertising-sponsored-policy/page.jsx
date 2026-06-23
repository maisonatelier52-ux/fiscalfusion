import Link from "next/link";
import { BadgeDollarSign, Eye, FileCheck, Handshake, ShieldAlert } from "lucide-react";

export default function AdvertisingSponsoredPolicyPage() {
  const policies = [
    {
      title: "Editorial Independence",
      icon: ShieldAlert,
      content:
        "Fiscal Fusion maintains a clear separation between editorial coverage and advertising relationships. Advertisers, sponsors, and commercial partners do not control our newsroom decisions, story selection, reporting, headlines, or editorial conclusions.",
    },
    {
      title: "Sponsored Content Labeling",
      icon: BadgeDollarSign,
      content:
        "Paid, sponsored, partner, or promotional content is labeled so readers can distinguish it from independent editorial reporting. We aim to make commercial relationships clear at the point where readers encounter the content.",
    },
    {
      title: "Advertising Review",
      icon: FileCheck,
      content:
        "Advertisements may be reviewed for basic quality, relevance, and compliance with our standards. We may reject or remove advertising that is misleading, harmful, discriminatory, deceptive, or inconsistent with reader trust.",
    },
    {
      title: "Transparency With Readers",
      icon: Eye,
      content:
        "When a page, placement, newsletter mention, or feature includes a paid relationship, we disclose that relationship in plain language. Sponsored material should not imitate independent reporting in a way that confuses readers.",
    },
    {
      title: "Partner Inquiries",
      icon: Handshake,
      content:
        "Organizations interested in advertising or sponsorship opportunities may contact Fiscal Fusion. All partnerships are considered with attention to audience relevance, brand safety, and our commitment to independent journalism.",
      cta: true,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="p-5 md:p-10 border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-1 md:mb-3 text-[#2f2f2f]">
            Advertising &amp; Sponsored Policy
          </h2>
          <p className="text-[11px] md:text-[15px] text-[#2f2f2f] leading-[1.3] tracking-tight font-serif">
            How Fiscal Fusion handles advertising, sponsorships, partner content,
            and the separation between commercial activity and editorial judgment.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 md:py-12 py-6 space-y-7">
        {policies.map((policy, idx) => {
          const Icon = policy.icon;

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
                  {policy.title}
                </h3>
                <p className="text-[#4a4a4a] text-[11px] md:text-[15px] leading-[1.3] tracking-tight font-serif">
                  {policy.content}
                </p>
                {policy.cta && (
                  <Link
                    title="contact"
                    href="/contact"
                    aria-label="contact"
                    className="inline-block mt-3 text-gray-900 text-sm font-medium underline underline-offset-4 hover:opacity-70 transition duration-200"
                  >
                    Contact Us for Advertising -&gt;
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
