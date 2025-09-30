// src/components/SeoHelmet.jsx (Crea questo file)
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SeoHelmet = ({ title, description, slug }) => {

    const canonicalUrl = `https://meog.it/${slug}`;
    const imageUrl = "https://www.meog.it/img/meog_logo_metatag.webp";
    
    const isHome = slug === '/' || slug === 'home';
    const finalTitle = isHome ? "Meog: the metablog which grows with you." : `${title} | Meog`;

    return (
        <Helmet>
            {/* Primary Tags */}
            <title>{finalTitle}</title>
            <meta name="title" content={finalTitle} />
            <meta name="description" content={description} />
            <link rel="canonical" href={canonicalUrl} />
            <meta name="theme-color" content="#120142" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="article" />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={finalTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={imageUrl} />

            {/* X (Twitter) */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={canonicalUrl} />
            <meta property="twitter:title" content={finalTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={imageUrl} />

            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            
        </Helmet>
    );
};

export default SeoHelmet;