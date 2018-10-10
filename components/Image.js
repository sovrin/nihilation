import React, {Component} from 'react';
import PropTypes from 'prop-types';

const src = require.context('../static/images', true);

/**
 * User: Oleg Kamlowski <n@sovrin.de>
 * Date: 10.10.2018
 * Time: 20:42
 */
export default class Image extends Component {

    static propTypes = {
        file: PropTypes.string.isRequired,
    };

    static File = {
        N: 'n.svg',
    };

    /**
     *
     * @returns {*}
     */
    render() {
        const {file, className} = this.props;

        return (
            <img src={src(`./${file}`)} className={className}/>
        );
    }
}
