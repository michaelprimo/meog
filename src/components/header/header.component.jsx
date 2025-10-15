import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Importiamo i componenti necessari
import MeogLogo from '../../assets/meog_logo.webp'; 

const Header = () => {
    
    const location = useLocation();
    
    const isPostPage = location.pathname !== '/'; 

    return (
        <header className="mt-5">
            

            <img src={MeogLogo} alt="Meog logo" width="240" height="100" /> 
            <h1 id="main-title">A metablog which grows with you</h1>
            {isPostPage && (
                <div>
                    <Link to="/">
                        Back to Home
                    </Link>
                </div>
            )}
        </header>
    );
}; 

export default Header;