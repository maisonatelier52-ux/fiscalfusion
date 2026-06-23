import Link from "next/link";
import { ClipboardCheck, FileSearch, Landmark, RefreshCw, ShieldCheck } from "lucide-react";

export default function SourceMethodologyPage() {
  const methods = [
    {
      title: "Source Selection",
      icon: FileSearch,
      content:
        "Fiscal Fusion prioritizes primary records, official statements, verified public documents, direct interviews, reputable wire services, and established subject-matter sources. We identify the origin of claims whenever possible and avoid relying on unsupported social posts or anonymous aggregation.",
    },
    {
      title: "Verification Process",
      icon: ClipboardCheck,
      content:
        "Before publication, editors review names, dates, locations, figures, quotes, and context against available source material. Developing stories are updated as new information becomes available, and uncertain details are clearly attributed rather than presented as confirmed fact.",
    },
    {
      title: "Attribution Standards",
      icon: Landmark,
      content:
        "We attribute material facts to the clearest available source, especially in politics, business, finance, public safety, and legal coverage. When a report depends on another news organization, agency, document, or public official, readers should be able to understand where the information came from.",
    },
    {
      title: "Anonymous Sources",
      icon: ShieldCheck,
      content:
        "Anonymous sourcing is used only when the information is newsworthy, cannot reasonably be obtained on the record, and the source has direct knowledge. Editors evaluate the source's access, motive, and reliability before any anonymously sourced information appears in a story.",
    },
    {
      title: "Updates & Corrections",
      icon: RefreshCw,
      content:
        "When source material changes or a verified correction is needed, we update the article promptly and follow our correction process. Reader feedback is reviewed by the editorial team and can be submitted through our contact page.",
      cta: true,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="p-5 md:p-10 border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-1 md:mb-3 text-[#2f2f2f]">
            Source Methodology
          </h2>
          <p className="text-[11px] md:text-[15px] text-[#2f2f2f] leading-[1.3] tracking-tight font-serif">
            How Fiscal Fusion evaluates, verifies, attributes, and updates the
            information behind our reporting.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 md:py-12 py-6 space-y-7">
        {methods.map((method, idx) => {
          const Icon = method.icon;

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
                  {method.title}
                </h3>
                <p className="text-[#4a4a4a] text-[11px] md:text-[15px] leading-[1.3] tracking-tight font-serif">
                  {method.content}
                </p>
                {method.cta && (
                  <Link
                    title="contact"
                    href="/contact"
                    aria-label="contact"
                    className="inline-block mt-3 text-gray-900 text-sm font-medium underline underline-offset-4 hover:opacity-70 transition duration-200"
                  >
                    Contact Us to Share Feedback -&gt;
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
