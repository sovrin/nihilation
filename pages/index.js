import React from 'react';
import Page from 'layouts/Main';
import Image from 'components/Image';
import Button from 'components/Button';

/**
 * User: Oleg Kamlowski <n@sovrin.de>
 * Date: 10.10.2018
 * Time: 20:35
 */
export default () => (
    <Page>
        <Image file={Image.File.N} className="n"/>
        <Button>test</Button>
    </Page>
)
