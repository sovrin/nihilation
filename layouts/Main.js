import React from 'react';

import Meta from 'components/Meta';
import Header from 'components/Header';
import Footer from 'components/Footer';

import 'normalize.css/normalize.css';
import '../styles/style.less';

/**
 * User: Oleg Kamlowski <n@sovrin.de>
 * Date: 10.10.2018
 * Time: 20:36
 */
export default ({children}) => (
    <div className="page">
        <div className="container">
            <Meta/>
            <Header/>
            {children}
            <Footer/>
        </div>
    </div>
);
