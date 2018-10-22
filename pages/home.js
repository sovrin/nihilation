import React, {Component} from 'react';
import Button from '../components/Button';
import Page from '../layouts/Main';
import fetch from 'isomorphic-unfetch'

/**
 * User: Oleg Kamlowski <n@sovrin.de>
 * Date: 10.10.2018
 * Time: 21:42
 */
export default class Home extends Component {

    /**
     *
     * @returns {Promise<{data: any}>}
     */
    static async getInitialProps({req}) {
        const res = await fetch(process.env.API_ENDPOINT + '/member');
        const data = await res.json();

        return {
            data,
        };
    }

    /**
     *
     * @param props
     */
    constructor(props) {
        super(props);


    }

    /**
     *
     * @returns {*}
     */
    render() {
        const {data} = this.props;

        return (
            <Page>
                <Button>test</Button>
                <div className="test">{JSON.stringify(data)}</div>
            </Page>
        );
    }
}
