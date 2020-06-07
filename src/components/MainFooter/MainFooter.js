import React from 'react';

import footerstyles from './MainFooter.module.scss';

const MainFooter = () => {


    return(
        <footer className={footerstyles["main-footer"]}>
            <div className="footer__copyright">&copy; 2019</div>
            <div className="footer__signature">Made by allen</div>
        </footer>
    )
}

export default MainFooter;