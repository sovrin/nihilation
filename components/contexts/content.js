import React, {Component, createContext} from 'react';

export const Context = createContext();

/**
 * User: Oleg Kamlowski <n@sovrin.de>
 * Date: 10.10.2018
 * Time: 21:56
 */
export class Provider extends Component {

    state = {
        test: 1
    };



    /**
     *
     * @returns {*}
     */
    render() {
        const {state, props} = this;
        const {children} = props;

        return (
            <Context value={state}>
                {children}
            </Context>
        );
    }
}
