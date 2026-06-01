import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Privacy Policy - Fiscal Fusion",
  description: "Read the Privacy Policy of Fiscal Fusion. Learn how we collect, use, and protect reader data with absolute trust.",
};

const CheckIcon = () => (
  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#faf8f5] border border-neutral-300 text-[#8b6d43] transition-colors group-hover:border-[#8b6d43] mt-0.5">
    <svg
      className="w-3 h-3"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  </span>
);

const MailIcon = () => (
  <svg
    className="w-4.5 h-4.5 text-[#8b6d43] shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
    />
  </svg>
);

const ShieldIcon = () => (
  <svg
    className="w-8 h-8 text-[#8b6d43] mb-3 opacity-90"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
    />
  </svg>
);

export default function PrivacyPolicyPage() {
  const sections = [
    {
      id: "collect",
      num: "01",
      title: "Information We Collect",
      paragraphs: [
        "When you visit our website, basic technical data such as pages viewed, device type, and browser information may be collected automatically. This information helps us understand readership patterns and improve site performance.",
        "If you contact us directly — for tips, corrections, or inquiries — we collect only the information you choose to provide, such as your name and email address.",
        "We do not collect unnecessary personal data, and we do not sell or trade user information."
      ]
    },
    {
      id: "use",
      num: "02",
      title: "How Information Is Used",
      bullets: [
        "To keep the website operating smoothly and securely.",
        "To understand which stories resonate with readers.",
        "To respond to messages, tips, or correction requests.",
        "To provide updates when readers request them."
      ],
      footerText: "We do not use personal data for advertising sales, profiling, or promotional targeting."
    },
    {
      id: "cookies",
      num: "03",
      title: "Cookies and Analytics",
      paragraphs: [
        "We use cookies and analytics tools to understand how readers interact with our content. You may disable cookies in your browser without affecting access to our reporting.",
        "Third-party analytics services may process anonymized data under their own privacy policies."
      ]
    },
    {
      id: "rights",
      num: "04",
      title: "Your Rights and Choices",
      paragraphs: [
        "Depending on your jurisdiction, you may have rights to access, correct, or request deletion of personal data. Requests can be submitted using the contact below."
      ],
      contactEmail: "editorial@fiscalfusion.org"
    },
    {
      id: "protection",
      num: "05",
      title: "Data Protection",
      paragraphs: [
        "We take reasonable technical and organizational measures to protect information from unauthorized access. Because we limit the data we collect, we also limit exposure and risk."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#2f2f2f] font-serif relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e1da_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#ebdcb9]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#8b6d43]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 py-12 md:py-24 relative z-10">

        {/* Editorial Masthead style Header */}
        <header className="border-b border-[#2f2f2f]/10 pb-8 md:pb-12 mb-12 md:mb-20 text-center lg:text-left">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-6">
            <div>

              <h1 className="text-4xl md:text-6xl font-light font-serif tracking-tight text-[#1a1a1a] leading-none mb-4">
                Privacy Policy
              </h1>
              <p className="text-xs md:text-sm font-sans tracking-wide text-neutral-500 uppercase">
                Fiscal Fusion Editorial Board
              </p>
            </div>
            <div className="flex flex-col items-center lg:items-end font-sans">
              <span className="text-[11px] text-neutral-400 uppercase tracking-widest">Last Updated</span>
              <span className="text-sm font-medium text-[#2f2f2f]">May 25, 2026</span>
            </div>
          </div>
        </header>

        {/* Core Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left Column: Navigation and Badges */}
          <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-28 h-fit self-start order-2 lg:order-1">

            {/* Table of Contents */}
            <div className="bg-white/60 backdrop-blur-md rounded-2xl border border-neutral-200/50 p-6 md:p-8 shadow-sm">
              <h3 className="text-xs font-sans tracking-[0.2em] text-[#8b6d43] uppercase font-bold mb-6 pb-2 border-b border-neutral-200/60">
                Document Contents
              </h3>
              <nav className="space-y-4">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="group flex items-center gap-3 text-xs md:text-[13px] font-sans tracking-wide text-neutral-600 hover:text-[#1a1a1a] transition-all duration-200"
                  >
                    <span className="font-serif text-[10px] text-neutral-400 group-hover:text-[#8b6d43] transition-colors">
                      {section.num}
                    </span>
                    <span className="border-b border-transparent group-hover:border-neutral-400 group-hover:translate-x-1 transition-all">
                      {section.title}
                    </span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Editorial Trust Panel */}
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2c2c2c] text-[#faf8f5] rounded-2xl p-6 md:p-8 shadow-lg relative overflow-hidden group">
              <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-white/5 rounded-full blur-xl group-hover:scale-125 transition-transform duration-700" />
              <ShieldIcon />
              <h4 className="text-md font-serif font-semibold tracking-wide text-white mb-2">
                Our Commitment to Trust
              </h4>
              <p className="text-[11px] md:text-xs font-sans text-neutral-300 leading-relaxed tracking-wide">
                Fiscal Fusion is built on independent reporting. We believe privacy is fundamental to media integrity. That is why we maintain strict privacy boundaries, collect only essential details, and never share or sell reader data.
              </p>
            </div>

          </aside>

          {/* Right Column: Content Body */}
          <main className="lg:col-span-8 space-y-12 md:space-y-16 order-1 lg:order-2">

            {/* Intro Lead */}
            <div className="relative">
              <span className="absolute -left-4 top-0 w-1 h-full bg-[#8b6d43]/40 rounded-full" />
              <p className="text-lg md:text-xl leading-relaxed tracking-tight text-[#2f2f2f] font-serif font-light pl-4 md:pl-6 italic">
                Fiscal Fusion values reader trust. We collect only limited information necessary to operate our newsroom, communicate with readers, and improve our journalism. This policy explains what we collect, why we collect it, and how we protect it.
              </p>
            </div>

            {/* Document Sections */}
            <div className="space-y-12 md:space-y-16">
              {sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="group relative bg-white/40 hover:bg-white/80 backdrop-blur-sm rounded-2xl border border-neutral-200/30 hover:border-neutral-200/80 p-6 md:p-8 transition-all duration-300 shadow-sm hover:shadow-md scroll-mt-28"
                >
                  {/* Subtle Corner Numbering */}
                  <span className="absolute right-6 top-6 font-serif text-[10px] md:text-xs tracking-wider text-neutral-300 group-hover:text-[#8b6d43]/50 transition-colors">
                    {section.num}
                  </span>

                  <h2 className="text-xl md:text-2xl font-serif font-medium text-[#1a1a1a] mb-6 pb-2 border-b border-[#2f2f2f]/10 tracking-tight">
                    {section.title}
                  </h2>

                  {/* Section Paragraphs */}
                  {section.paragraphs && (
                    <div className="space-y-4 text-sm md:text-[15px] leading-relaxed tracking-wide text-[#3a3a3a]">
                      {section.paragraphs.map((p, index) => (
                        <p key={index}>{p}</p>
                      ))}
                    </div>
                  )}

                  {/* Section Bullets (for "How Information Is Used") */}
                  {section.bullets && (
                    <div className="space-y-6">
                      <ul className="space-y-4 text-sm md:text-[15px] leading-relaxed tracking-wide text-[#3a3a3a]">
                        {section.bullets.map((bullet, index) => (
                          <li key={index} className="flex items-start gap-4 group/item">
                            <CheckIcon />
                            <span className="pt-0.5 group-hover/item:text-[#1a1a1a] transition-colors">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                      {section.footerText && (
                        <p className="text-xs md:text-sm font-sans tracking-wide text-[#8b6d43] bg-[#faf8f5] border border-neutral-200/50 rounded-xl p-4 mt-6 leading-relaxed font-semibold">
                          {section.footerText}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Contact Block (for "Your Rights and Choices") */}
                  {section.contactEmail && (
                    <div className="mt-6 pt-4 border-t border-neutral-200/50">
                      <div className="inline-flex items-center gap-3 bg-white hover:bg-[#faf8f5] border border-neutral-200/80 rounded-xl px-4 py-3 shadow-sm hover:shadow transition-all duration-300 group/btn">
                        <MailIcon />
                        <Link
                          href={`mailto:${section.contactEmail}`}
                          className="text-xs md:text-sm font-sans tracking-widest uppercase font-semibold text-[#2f2f2f] hover:text-[#8b6d43] transition-colors"
                        >
                          {section.contactEmail}
                        </Link>
                      </div>
                    </div>
                  )}

                </section>
              ))}
            </div>

          </main>

        </div>

      </div>
    </div>
  );
}
