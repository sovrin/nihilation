import React, {Component} from 'react';
import Nav from './Nav';
import Link from './Link';
import Icon from './Icon';
import {cc} from 'lib/utils';

/**
 * User: Oleg Kamlowski <n@sovrin.de>
 * Date: 14.11.2018
 * Time: 21:06
 */
export default class Social extends Component {

	static Links = {
		FACEBOOK: 'https://www.facebook.com/nihilationmetal/',
		SOUNDCLOUD: 'https://soundcloud.com/nihilationmetal',
		YOUTUBE: 'https://www.youtube.com/channel/UCaJ-xCWh1EnSbSRuTsj0w_A',
	};

	state = {
		links: Social.Links,
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
				key={entry}
				href={Social.Links[entry]}
			>
				<Icon
					className={cc({['icon-' + entry]: (entry)})}
				/>
			</Link>
		);

		const children = Object
			.keys(links)
			.map(link)
		;

		return (
			<Nav>
				{children}
			</Nav>
		);
	}
}
