// src/pages/BlogPost.jsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

// AGGIORNAMENTO: Sostituito { as: 'raw', eager: true } con la nuova sintassi 'query'
const markdownFiles = import.meta.glob('/src/posts/markdown/*.md', { 
    query: '?raw', 
    eager: true, 
    import: 'default' 
});

function BlogPost() {
    const { postSlug } = useParams();
    
    const [markdown, setMarkdown] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(false);
        setMarkdown(null); 

        // Costruisce la chiave ESATTA che Vite ha usato per l'oggetto
        const fileKey = `/src/posts/markdown/${postSlug}.md`; 
        
        // Controlla se il contenuto è già stato caricato
        const postContent = markdownFiles[fileKey];

        if (postContent) {
            // Successo: Contenuto trovato istantaneamente!
            // Con 'import: default', postContent è il contenuto RAW della stringa.
            setMarkdown(postContent);
            setLoading(false);
        } else {
            console.error(`Post non trovato nella cache locale: ${fileKey}`);
            setError(true);
            setLoading(false);
        }

    }, [postSlug]);

    // --- Rendering Condizionale ---

    if (loading) {
        return <p className="text-center mt-8">Loading...</p>;
    }

    if (error || !markdown) {
        return (
            <div className="text-center mt-8">
                <h2 className="text-xl">
                    404 | Post "{postSlug}" not found.
                </h2>
            </div>
        );
    }

    // Se tutto va bene, renderizza il Markdown
    return (
        <article id="blog-content" className='border-10 border-(--main-border-color) rounded-lg p-5 mb-5'>
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
    );
}

export default BlogPost;