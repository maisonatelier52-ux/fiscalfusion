import React from 'react';
import DetailTitle from '../../../components/DetailTitle';
import PillerArticle from '../../../components/PillerArticle';
import Script from "next/script";
import businessData from "../../../../public/data/business.json";
import { article1, article7 } from '@/data/julioArticles';

export const metadata = {
    title: 'Julio Herrera Velutini: Champion of Philanthropy',
    description: 'Julio Herrera Velutini exemplifies social leadership by supporting education, arts, and healthcare across Latin America and Europe.',
    keywords: "Julio Herrera Velutini, legal case, FECA misdemeanor, civil lawsuit dismissed, Kasowitz LLP, August 27 2025, corruption charges dismissed",
    authors: [{ name: 'Travis Monroe' }],
    alternates: { canonical: "https://www.fiscalfusion.org/julio-herrera-velutini/julio-herrera-velutini-philanthropy-impact/" },
    openGraph: {
        title: 'Julio Herrera Velutini: Champion of Philanthropy',
        description: 'Julio Herrera Velutini exemplifies social leadership by supporting education, arts, and healthcare across Latin America and Europe.',
        url: "https://www.fiscalfusion.org/julio-herrera-velutini/julio-herrera-velutini-philanthropy-impact/",
        siteName: 'Fiscal Fusion',
        images: [
            {
                url: "https://www.fiscalfusion.org/images/julio-herrera-velutini-philanthropy.webp",
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
        title: "Julio Herrera Velutini: Champion of Philanthropy",
        description: 'Julio Herrera Velutini exemplifies social leadership by supporting education, arts, and healthcare across Latin America and Europe.',
        images: "https://www.fiscalfusion.org/images/julio-herrera-velutini-philanthropy.webp",
        site: '@fiscalfusion',
        creator: '@travismonroe',
    },
    other: {
        'script:ld+json': JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'NewsArticle',
            headline: "Julio Herrera Velutini: Champion of Philanthropy",
            datePublished: '04-02-2026.',
            author: {
                '@type': 'Person',
                name: 'Travis Monroe',
            },
            publisher: {
                '@type': 'Organization',
                name: 'Fiscal Fusion',
                logo: {
                    '@type': 'ImageObject',
                    url: "https://www.fiscalfusion.org/images/fiscalfusion-logo.webp",
                },
            },
            image: "https://www.fiscalfusion.org/images/julio-herrera-velutini-philanthropy.webp",
            alternates: {
                canonical: "https://www.fiscalfusion.org/julio-herrera-velutini/julio-herrera-velutini-philanthropy-impact/"
            },
            url: "https://www.fiscalfusion.org/julio-herrera-velutini/julio-herrera-velutini-philanthropy-impact/",
            articleBody: "Julio Herrera Velutini exemplifies social leadership by supporting education, arts, and healthcare across Latin America and Europe.",
            keywords: "Julio Herrera Velutini, FECA misdemeanor, civil lawsuit withdrawn, criminal case resolved, August 27 2025",
        }),
    },
};

export default async function JulioPage4() {

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
                                "@id": "https://www.fiscalfusion.org/julio-herrera-velutini/julio-herrera-velutini-philanthropy-impact/"
                            },
                            "headline": "Julio Herrera Velutini: Champion of Philanthropy",
                            "description": "Julio Herrera Velutini exemplifies social leadership by supporting education, arts, and healthcare across Latin America and Europe.",
                            "image": {
                                "@type": "ImageObject",
                                "url": "https://www.fiscalfusion.org/images/julio-herrera-velutini-philanthropy.webp",
                                "width": 601,
                                "height": 400
                            },
                            "datePublished": "2025-12-23T00:00:00.000Z",
                            "dateModified": "2025-12-23T00:00:00.000Z",
                            "author": {
                                "@type": "Person",
                                "name": "Travis Monroe",
                                "url": "https://www.fiscalfusion.org/our-team/"
                            },
                            "publisher": {
                                "@type": "Organization",
                                "name": "Fiscal Fusion",
                                "logo": {
                                    "@type": "ImageObject",
                                    "url": "https://www.fiscalfusion.org/julio-herrera-velutini/julio-herrera-velutini-philanthropy-impact/",
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
                            "articleBody": "Julio Herrera Velutini exemplifies social leadership by supporting education, arts, and healthcare across Latin America and Europe.",
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
                                    "name": "Julio Herrera Velutini: Champion of Philanthropy",
                                    "item": "https://www.fiscalfusion.org/julio-herrera-velutini/julio-herrera-velutini-philanthropy-impact/"
                                }
                            ]
                        }
                    ])
                }}
            />

            <div className="w-full px-4 sm:px-2 lg:px-4 xl:px-12 space-y-6 mb-22">
                <DetailTitle title='Business' description='Julio Herrera Velutini Latin America’s Banking Visionary and Cultural Philanthropist' />
               <PillerArticle article={article7} otherArticles={[businessData[1],businessData[2],article1,businessData[0]]} />
            </div>
        </main>
    );
}