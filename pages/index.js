import React, {Component} from 'react';
import Button from '../components/Button';
import Page from '../layouts/Main';
import unfetch from 'isomorphic-unfetch'

/**
 * User: Oleg Kamlowski <n@sovrin.de>
 * Date: 10.10.2018
 * Time: 21:42
 */
export default class Index extends Component {

    /**
     *
     * @returns {Promise<{data: any}>}
     */
    static async getInitialProps({req}) {
        const models = ['member', 'band', 'news', 'event'];
        const state = {};

        for (const model of models) {
            const endpoint = [process.env.API_ENDPOINT, model].join('/');
            const res = await unfetch(endpoint);

            state[model] = await res.json();
        }

        console.info(state);

        return state;
    }

    /**
     *
     * @param props
     */
    constructor(props) {
        super(props);

        console.info(this.state);
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
