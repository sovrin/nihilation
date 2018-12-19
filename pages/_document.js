import React from 'react';
import Document, {Head, Main, NextScript} from 'next/document';
import {ServerStyleSheet} from 'styled-components';
import Meta from 'components/Meta';

import 'normalize.css';
import 'styles/style.less';

/**
 * User: Oleg Kamlowski <n@sovrin.de>
 * Date: 10.10.2018
 * Time: 21:08
 */
export default class extends Document {

	/**
	 *
	 * @param renderPage
	 * @returns {{styleTags: React.ReactElement<{}>[]}}
	 */
	static getInitialProps({renderPage}) {
		const sheet = new ServerStyleSheet();
		const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
		const styleTags = sheet.getStyleElement();

		return {...page, styleTags};
	}

	/**
	 *
	 * @returns {*}
	 */
	render() {
		const {styleTags} = this.props;

		return (
			<html>
				<Head>
					<Meta/>
					{styleTags}
				</Head>
				<body>
					<Main/>
					<NextScript/>
				</body>
			</html>
		);
	}
}
