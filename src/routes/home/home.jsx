import React from 'react';
import PostsSection from '../../components/PostsSection/PostsSection.jsx'; 
import SeoHelmet from '../../components/SeoHelmet/SeoHelmet.jsx';


const Home = () => {
    return (
        <>
        <SeoHelmet 
                title="Meog: the metablog which grows with you." 
                description="Scopri i post..." 
                slug="/" // Indica la home
            />
        <PostsSection />
        </>
        
    );
};

export default Home;