import React from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';

/**
 * User: Oleg Kamlowski <n@sovrin.de>
 * Date: 10.10.2018
 * Time: 20:36
 */
export default ({children}) => (
	<>
		<div className="page">
			<Header/>
			{children}
			<Footer/>
		</div>
	</>
);
