import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/header/header.component.jsx';
import Footer from '../../components/footer/footer.component.jsx';

const MainLayout = () => {
    return (
        <div className="md:mx-[10%] lg:mx-[20%] sm:mx-[5%] mx-2">
            <Header />
            
            <main>
                <Outlet /> 
            </main>
            
            <Footer />
        </div>
    );
};

export default MainLayout;