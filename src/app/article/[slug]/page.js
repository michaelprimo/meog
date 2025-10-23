import { notFound } from 'next/navigation';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

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

// Genera i parametri statici
export function generateStaticParams() {
    console.log("Lettura da:", POSTS_DIR);
    
    let files = [];
    try {
        files = fs.readdirSync(POSTS_DIR);
        console.log("File trovati:", files.length);
    } catch (e) {
        console.error("ERRORE in generateStaticParams:", e.message);
        throw new Error("Impossibile trovare la directory dei post.");
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
    const { slug } = params;
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
    const { slug } = params;
    
    try {
        const { default: Post } = await import(`../../posts/markdown/${slug}.mdx`);
        const metadata = getPostMetadata(slug);
        
        return (
            <article id="blog-content" className="border-10 border-(--main-border-color) rounded-lg p-5 mb-5">
                {/* Header dell'articolo con metadati 
                {metadata && (
                    <header className="mb-8">
                        <h1 className="text-4xl font-bold mb-2">{metadata.title}</h1>
                        <div className="text-gray-600 text-sm mb-4">
                            <time dateTime={metadata.date}>
                                {new Date(metadata.date).toLocaleDateString('it-IT', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </time>
                            {metadata.author && <span> • {metadata.author}</span>}
                        </div>
                        {metadata.description && (
                            <p className="text-lg text-gray-700 italic">{metadata.description}</p>
                        )}
                    </header>
                )}*/}
                
                <Post />
            </article>
        );
    } catch (e) {
        console.error("Errore caricamento post:", e);
        return notFound();
    }
}

export const dynamicParams = false;