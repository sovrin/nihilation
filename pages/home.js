import React, {Component} from 'react';
import Button from '../components/Button';
import Page from '../layouts/Main';
import Model from '../lib/Model';

import Member from '../models/Member';
import Event from '../models/Event';

/**
 * User: Oleg Kamlowski <n@sovrin.de>
 * Date: 10.10.2018
 * Time: 21:42
 */
export default class Home extends Component {

    /**
     *
     * @param props
     */
    constructor(props) {
        super(props);

        const model = new Model();
        const test = model.fetch()
            // .then(wat => {
            //         const t = wat.map(({}) => {
            //             console.info(a);
            //             // return Member.crea   te(fields);
            //             return Event.create(fields);
            //         });
            //     },
            // );

    }

    /**
     *
     * @returns {*}
     */
    render() {
        return (
            <Page>
                <Button>test</Button>
            </Page>
        );
    }
}
