import React, {Component} from 'react';
import unfetch from 'isomorphic-unfetch';

const {ENDPOINTS: {API}} = require('../config');

/**
 * User: Oleg Kamlowski <n@sovrin.de>
 * Date: 14.11.2018
 * Time: 21:55
 */
export default (Page, Model) => {

	/**
	 *
	 */
	return class extends Component {

		/**
		 *
		 * @param req
		 * @returns {Promise<{model: *}>}
		 */
		static async getInitialProps({req}) {
			const baseUrl = (req && API) || '';
			const endpoint = [baseUrl, Model.name]
				.join('/')
			;

			const res = await unfetch(endpoint);
			const json = await res.json();
			const map = ({fields}) => (Model.create(fields));

			return {
				model: json.map(map),
			};
		}

		/**
		 *
		 * @returns {*}
		 */
		render() {
			return (
				<Page
					{...this.props}
				/>
			);
		}
	};
};
