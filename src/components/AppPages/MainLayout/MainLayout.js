import React from 'react';

import { TopNav, SideNav, MainFooter, useContext } from '../../';
import AppRoutes from './AppRoutes';
import mainstyles from './MainLayout.module.scss';

const MainLayout = () => {
        
    return(
        <div className={mainstyles['grid-container']}>
            <TopNav />
            <SideNav /> 
            <main className={mainstyles['main']}>
                <AppRoutes />
            </main>
            <MainFooter />
        </div>
    )
    
}

export default MainLayout;



