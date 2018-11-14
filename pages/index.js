import React, {Component} from 'react';
import connect from 'components/Connected';
import Page from 'layouts/Main';
import Model from 'models/Member';
import Band from './band';
import Home from './home';

/**
 * User: Oleg Kamlowski <n@sovrin.de>
 * Date: 10.10.2018
 * Time: 21:42
 */
class Index extends Component {

	static propTypes = {

	};

	static defaultProps = {

	};

	/**
	 *
	 * @returns {*}
	 */
	render() {
		const {band, data} = this.props;

		console.info(this.props);

		return (
			<Page>
				<Home>test</Home>
				<Band>test</Band>
				<div className="test">{JSON.stringify(this.props)}</div>
			</Page>
		);
	}
}

export default connect(Index, Model);
