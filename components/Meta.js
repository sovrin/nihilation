import React from 'react';
import Head from 'next/head';
import {META} from 'config';

/**
 * User: Oleg Kamlowski <n@sovrin.de>
 * Date: 10.10.2018
 * Time: 20:31
 */
export default () => (
	<Head>
		<meta charSet="utf-8"/>
		<meta name="description" content=""/>
		<meta content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" name="viewport"/>

		<meta property="og:site_name" content={META.SITE}/>
		<meta property="og:image" content={META.IMAGE}/>
		<meta property="og:description" content={META.DESCRIPTION}/>
		<meta property="og:url" content={META.URL}/>
		<meta property="og:type" content={META.TYPE}/>

		<link rel="shortcut icon" href="/static/images/favicon.png"/>
		<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Lora"/>
	</Head>
);
