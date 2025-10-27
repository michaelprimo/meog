import { notFound } from 'next/navigation';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import Head from 'next/head'; 

const POSTS_DIR = path.join(process.cwd(), 'src', 'app', 'posts', 'markdown');

// Funzione helper per leggere i metadati
function getPostMetadata(slug) {
    try {
        const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContent);
        return data;
    } catch (e) {
        return null;
    }
}

export function generateStaticParams() {
    console.log("Lettura da:", POSTS_DIR);
   
    let files = [];
    try {
        files = fs.readdirSync(POSTS_DIR);
        console.log("File trovati:", files.length);
    } catch (e) {
        console.error("ERRORE in generateStaticParams:", e.message);
        return [];
    }
   
    const params = files
        .filter(file => file.endsWith('.mdx'))
        .map(file => ({
            slug: file.replace(/\.mdx$/, ''),
        }));
   
    console.log("Parametri statici generati:", params);
   
    if (params.length === 0) {
        console.warn("Nessun file .mdx trovato!");
    }
   
    return params;
}

// Genera i metadati dinamicamente per ogni articolo
export async function generateMetadata({ params }) {
    const { slug } = await params;
    const metadata = getPostMetadata(slug);
   
    if (!metadata) {
        return {
            title: 'Articolo non trovato',
        };
    }
    
    return {
        title: metadata.title,
        description: metadata.description,
        keywords: metadata.keywords,
        authors: [{ name: metadata.author }],
        openGraph: {
            type: 'article',
            title: metadata.title,
            description: metadata.description,
            images: metadata.image ? [metadata.image] : [],
            publishedTime: metadata.date,
            authors: [metadata.author],
        },
        twitter: {
            card: 'summary_large_image',
            title: metadata.title,
            description: metadata.description,
            images: metadata.image ? [metadata.image] : [],
        },
    };
}

// Componente Page
export default async function Page({ params }) {
    const { slug } = await params;

    try {
        const { default: Post } = await import(`../../posts/markdown/${slug}.mdx`);
        const metadata = getPostMetadata(slug);
        
        // Creating JSON-LD for the article
        const jsonLdData = {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": metadata.title,
            "description": metadata.description,
            "image": metadata.image || '',
            "author": {
                "@type": "Person",
                "name": metadata.author
            },
            "datePublished": metadata.date,
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://meog.it/posts/${slug}`
            }
        };

        return (
            <>
                <Head>
                    <script type="application/ld+json">
                        {JSON.stringify(jsonLdData)}
                    </script>
                </Head>
                <article id="blog-content" className="border-10 border-(--main-border-color) rounded-lg p-5 mb-5">
                    <Post />
                </article>
            </>
        );
    } catch (e) {
        notFound();
    }
}

export const dynamicParams = false;
