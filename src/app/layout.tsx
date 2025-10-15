import type { Metadata } from 'next';

// 1. Configurazione dei Metadati (Title, Description, Canonical)
// QUESTA E' LA TUA NUOVA <HEAD>
export const metadata: Metadata = {
  // Il <title> HTML viene generato automaticamente da questo campo.
  title: 'Meog: the metablog which grows with you.', 
  description: 'Meog: the metablog which grows with you. Discover posts about coding, ideas, and the journey of building this metablog step by step.',
  // Metadati aggiuntivi (come i canonical tag)
  alternates: {
    canonical: 'https://meog.it/', // Next.js genera il tag <link rel="canonical" ...>
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* 3. Qui va il contenuto del Body. Tutto ciò che è qui dentro 
             finisce dentro il tag <body> generato da Next.js. */}
      <body>
        
        {/* 4. Il tuo div radice è implicito, il "children" è dove Next.js 
               renderizza tutte le tue pagine (home, post, ecc.). */}
        {children}
        
      </body>
    </html>
  );
}