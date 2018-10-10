import React from 'react'
import Document, {Head, Main, NextScript} from 'next/document'

/**
 *
 */
export default class MyDocument extends Document {
    /**
     *
     * @param renderPage
     * @returns {{html: *, head: *, errorHtml: *, chunks: *}}
     */
    static getInitialProps({renderPage}) {
        const {html, head, errorHtml, chunks} = renderPage();

        return {html, head, errorHtml, chunks}
    }

    /**
     *
     * @returns {*}
     */
    render() {
        const {customValue} = this.props;

        return (
            <html>
                <Head>
                    <link rel="stylesheet" href="/_next/static/style.css"/>
                </Head>
                <body>
                    {customValue}
                    <Main/>
                    <NextScript/>
                </body>
            </html>
        )
    }
}