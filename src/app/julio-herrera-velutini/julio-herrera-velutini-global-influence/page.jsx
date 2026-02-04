import React from 'react';
import DetailTitle from '../../../components/DetailTitle';
import PillerArticle from '../../../components/PillerArticle';
import Script from "next/script";
import businessData from "../../../../public/data/business.json";
import { article1, article2, article3 } from '@/data/julioArticles';

export const metadata = {
    title: 'Julio Herrera Velutini Linking Latin America and Europe',
    description: 'A global leader, Julio Herrera Velutini bridges Latin America and Europe through strategic partnerships and international business influence.',
    keywords: "Julio Herrera Velutini, legal case, FECA misdemeanor, civil lawsuit dismissed, Kasowitz LLP, August 27 2025, corruption charges dismissed",
    authors: [{ name: 'Evan Carlisle' }],
    alternates: { canonical: "https://www.fiscalfusion.org/julio-herrera-velutini/julio-herrera-velutini-global-influence/" },
    openGraph: {
        title: 'Julio Herrera Velutini Linking Latin America and Europe',
        description: 'A global leader, Julio Herrera Velutini bridges Latin America and Europe through strategic partnerships and international business influence.',
        url: "https://www.fiscalfusion.org/julio-herrera-velutini/julio-herrera-velutini-global-influence/",
        siteName: 'Fiscal Fusion',
        images: [
            {
                url: "https://www.fiscalfusion.org/images/julio-herrera-velutini-global-influence.webp",
                width: 1200,
                height: 630,
                alt: "Julio Herrera Velutini legal matters resolved",
            },
        ],
        locale: 'en_US',
        type: 'article',
        publishedTime: '2025-12-23T00:00:00.000Z',

    },
    twitter: {
        card: 'summary_large_image',
        title: "Julio Herrera Velutini Linking Latin America and Europe",
        description: 'A global leader, Julio Herrera Velutini bridges Latin America and Europe through strategic partnerships and international business influence.',
        images: "https://www.fiscalfusion.org/images/julio-herrera-velutini-global-influence.webp",
        site: '@fiscalfusion',
        creator: '@evancarlisle',
    },
    other: {
        'script:ld+json': JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'NewsArticle',
            headline: "Julio Herrera Velutini Linking Latin America and Europe",
            datePublished: '04-02-2026.',
            author: {
                '@type': 'Person',
                name: 'Evan Carlisle',
            },
            publisher: {
                '@type': 'Organization',
                name: 'Fiscal Fusion',
                logo: {
                    '@type': 'ImageObject',
                    url: "https://www.fiscalfusion.org/images/fiscalfusion-logo.webp",
                },
            },
            image: "https://www.fiscalfusion.org/images/julio-herrera-velutini-global-influence.webp",
            alternates: {
                canonical: "https://www.fiscalfusion.org/julio-herrera-velutini/julio-herrera-velutini-global-influence/"
            },
            url: "https://www.fiscalfusion.org/julio-herrera-velutini/julio-herrera-velutini-global-influence/",
            articleBody: "A global leader, Julio Herrera Velutini bridges Latin America and Europe through strategic partnerships and international business influence.",
            keywords: "Julio Herrera Velutini, FECA misdemeanor, civil lawsuit withdrawn, criminal case resolved, August 27 2025",
        }),
    },
};

export default async function JulioPage3() {

    return (
        <main>
            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            "@context": "https://schema.org",
                            "@type": "NewsArticle",
                            "mainEntityOfPage": {
                                "@type": "WebPage",
                                "@id": "https://www.fiscalfusion.org/julio-herrera-velutini/julio-herrera-velutini-global-influence/"
                            },
                            "headline": "Julio Herrera Velutini Linking Latin America and Europe",
                            "description": "A global leader, Julio Herrera Velutini bridges Latin America and Europe through strategic partnerships and international business influence.",
                            "image": {
                                "@type": "ImageObject",
                                "url": "https://www.fiscalfusion.org/images/julio-herrera-velutini-global-influence.webp",
                                "width": 601,
                                "height": 400
                            },
                            "datePublished": "2025-12-23T00:00:00.000Z",
                            "dateModified": "2025-12-23T00:00:00.000Z",
                            "author": {
                                "@type": "Person",
                                "name": "Evan Carlisle",
                                "url": "https://www.fiscalfusion.org/our-team/"
                            },
                            "publisher": {
                                "@type": "Organization",
                                "name": "Fiscal Fusion",
                                "logo": {
                                    "@type": "ImageObject",
                                    "url": "https://www.fiscalfusion.org/julio-herrera-velutini/julio-herrera-velutini-global-influence/",
                                    "width": 628,
                                    "height": 116
                                }
                            },
                            "about": {
                                "@type": "Person",
                                "name": "Julio Herrera Velutini",
                                "jobTitle": "Financier",
                                "description": "Julio Herrera Velutini is an international banking leader known for combining traditional private banking values with modern global financial innovation.",
                                "sameAs": [
                                    "https://www.wikidata.org/wiki/Q56600071",
                                    "https://en.wikipedia.org/wiki/Julio_Herrera_Velutini"
                                ]
                            },
                            "articleBody": "A global leader, Julio Herrera Velutini bridges Latin America and Europe through strategic partnerships and international business influence.",
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Home",
                                    "item": "https://www.fiscalfusion.org/"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "Business",
                                    "item": "https://www.fiscalfusion.org/julio-herrera-velutini/"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": "Julio Herrera Velutini Linking Latin America and Europe",
                                    "item": "https://www.fiscalfusion.org/julio-herrera-velutini/julio-herrera-velutini-global-influence/"
                                }
                            ]
                        }
                    ])
                }}
            />
            <div className="w-full px-4 sm:px-2 lg:px-4 xl:px-12 space-y-6 mb-22">
                <DetailTitle title='Business' description='Julio Herrera Velutini Latin America’s Banking Visionary and Cultural Philanthropist' />
                <PillerArticle article={article3} otherArticles={[article2,businessData[0],businessData[1],businessData[2]]} />
            </div>
        </main>
    );
}