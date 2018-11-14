import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Link from './Link';
import Nav from './Nav';
import {constants} from 'lib/utils';

/**
 * User: Oleg Kamlowski <n@sovrin.de>
 * Date: 23.10.2018
 * Time: 22:59
 */
export default class Navigation extends Component {

	static propTypes = {
		links: PropTypes.array
	};

	static defaultProps = {
		links: []
	};

	static Links = {
		HOME: 'home',
		BAND: 'band',
		EVENTS: 'events',
		NEWS: 'news',
		MUSIC: 'music',
		PHOTOS: 'photos',
		MERCH: 'merch',
		CONTACT: 'contact'
	};

	state = {
		enabled: true,
		docked: false,
		fixed: false,
		active: Navigation.Links.HOME,
		links: constants(Navigation.Links),
		closed: [
			Navigation.Links.MERCH,
			Navigation.Links.PHOTOS,
		]
	};

	/**
	 *
	 * @returns {*}
	 */
	render() {
		const {state} = this;
		const {links} = state;

		const link = (entry) => (
			<Link
				href={`#${entry}`}
				key={entry}
				children={entry}
			/>
		);

		const children = links.map(link);

		return (
			<Nav
				id={'navigation'}
			>
				{children}
			</Nav>
		);
	}
}
