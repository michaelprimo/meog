//src/app/page.js . We have the homepage code here.
import PostsSection from "./components/PostsSection/PostsSection";
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Meog",
  "description": "A metablog which grows with you",
  "url": "https://meog.it",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://meog.it/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  },
  "image": "https://meog.it/meog_logo.webp", 
  "keywords": "blog, metablog, articles, community",
  "sameAs": [
    "https://www.michaelprimo.it",
    "https://www.linkedin.com/in/misticalinteractive/"
  ]
}

export default function Home() {
  return (
    <div className="">
      <PostsSection />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </div>
  );
}
