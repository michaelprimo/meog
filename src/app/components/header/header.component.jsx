// Header.js
'use client'; 

import React from 'react';
import Image from "next/image";
import Link from 'next/link'; // Importa il componente Link
import { usePathname } from 'next/navigation'; // Importa l'hook usePathname

const Header = () => {
    // 1. Ottieni il percorso attuale
    const pathname = usePathname();
    
    // 2. Determina se siamo sulla homepage
    // La homepage ha pathname === '/'
    const isHome = pathname === '/';
    
    return (
        <header className="mt-5">
            <Image src="/meog_logo.webp" alt="Profile" width={240} height={100} /> 
            <h1 id="main-title">A metablog which grows with you</h1>
            {!isHome && (
                <div className="return-home-link">
                    <Link href="/">
                        Back to Home
                    </Link>
                </div>
            )}
        </header>
    );
}; 

export default Header;