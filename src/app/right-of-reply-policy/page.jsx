import Link from "next/link";
import { ClipboardList, MailCheck, MessageSquareReply, SearchCheck, TimerReset } from "lucide-react";

export default function RightOfReplyPolicyPage() {
  const sections = [
    {
      title: "Our Commitment",
      icon: MessageSquareReply,
      content:
        "Fiscal Fusion recognizes that individuals, organizations, and public bodies mentioned in our reporting may wish to respond to claims, criticism, or disputed information. We consider right-of-reply requests in the interest of fairness, accuracy, and reader trust.",
    },
    {
      title: "When to Request a Reply",
      icon: ClipboardList,
      content:
        "A right-of-reply request may be appropriate when a person or organization is directly named, materially affected by a report, or believes important context was omitted. Requests should identify the article, the disputed point, and the response or clarification being offered.",
    },
    {
      title: "Editorial Review",
      icon: SearchCheck,
      content:
        "Our editorial team reviews requests carefully and may verify supporting information before deciding how to proceed. A response may result in an update, correction, clarification, follow-up article, editor's note, or no change when the original reporting remains supported.",
    },
    {
      title: "Timing",
      icon: TimerReset,
      content:
        "We aim to review right-of-reply requests promptly, especially for developing or high-impact stories. Complex requests may require additional time for verification, context review, and consultation with relevant editors or reporters.",
    },
    {
      title: "How to Contact Us",
      icon: MailCheck,
      content:
        "To submit a right-of-reply request, include the article title or URL, the specific statement or issue, your relationship to the matter, and any supporting documentation. Clear, sourced requests help us assess the issue efficiently.",
      cta: true,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="p-5 md:p-10 border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-1 md:mb-3 text-[#2f2f2f]">
            Right of Reply Policy
          </h2>
          <p className="text-[11px] md:text-[15px] text-[#2f2f2f] leading-[1.3] tracking-tight font-serif">
            How Fiscal Fusion reviews responses, clarifications, and reply
            requests from people or organizations named in our reporting.
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
                    Submit a Reply Request -&gt;
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
