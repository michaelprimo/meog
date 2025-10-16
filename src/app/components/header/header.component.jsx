'use client'; 

import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 

const Header = () => {
    
    const pathname = usePathname();
    
    const isHome = pathname === '/';
    
    return (
        <header className="mt-5">
            <Image src="/meog_logo.webp" alt="Meog Logo" width={240} height={100} /> 
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