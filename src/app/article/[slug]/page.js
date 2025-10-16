import { notFound } from 'next/navigation';
import path from 'path';
import fs from 'fs';

// **********************************************
// 1. Logica SSG Stabile per la Build (DA MANTENERE)
// **********************************************
const POSTS_DIR = path.join(process.cwd(), 'src', 'app', 'posts', 'markdown');

export function generateStaticParams() {
    // ⚠️ STAMPA DI DEBUG
    console.log("Tentativo di lettura da:", POSTS_DIR); 

    let files = [];
    try {
        files = fs.readdirSync(POSTS_DIR);
        // ⚠️ STAMPA DI DEBUG
        console.log("File trovati:", files.length, "file(s)");
    } catch (e) {
        // 🛑 NON RESTITUIRE SOLO [], LANCIA L'ERRORE PER VEDERLO
        console.error("ERRORE CRITICO in generateStaticParams. Il percorso non è valido:", e.message);
        throw new Error("Impossibile trovare la directory dei post. Controllare il percorso POSTS_DIR.");
    }
    
    // ... la mappatura
    const params = files
        .filter(file => file.endsWith('.mdx'))
        .map(file => ({
            slug: file.replace(/\.mdx$/, ''),
        }));
        
    // ⚠️ STAMPA DI DEBUG
    console.log("Parametri statici generati:", params);

    // Se params è vuoto E non è un errore di percorso, assicurati di avere file .mdx
    if (params.length === 0) {
         console.warn("Attenzione: nessun file .mdx trovato. Se stai usando output:export, devi avere almeno un file.");
    }
    
    return params;
}

// **********************************************
// 2. Componente Page (Torna all'importazione DIRETTA, ma solo con il slug statico)
// **********************************************
export default async function Page({ params }) {
    const slug = params.slug;

    // Next.js ora sa che 'slug' è uno dei parametri statici
    // (generati da generateStaticParams).
    // Quando la route viene visitata, l'importazione statica è consentita.
    
    try {
        // L'importazione deve essere risolvibile staticamente,
        // ma in fase di esecuzione Next.js la gestisce per te.
        // Utilizza il percorso relativo all'importazione MDX che avevi:
        const { default: Post } = await import(`../../posts/markdown/${slug}.mdx`);
        
        return (
            <article id="blog-content" className="border-10 border-(--main-border-color) rounded-lg p-5 mb-5">
                <Post />
            </article>
        );

    } catch (e) {
        // Se il file non esiste (anche se SSG è passato), mostriamo 404
        return notFound();
    }
}

export const dynamicParams = false;

// Nota: La funzione getPostData non è più necessaria qui.