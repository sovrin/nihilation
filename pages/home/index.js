import React, {Component} from 'react';
import styled from 'styled-components';
import {cc} from 'lib/utils';

const Section = styled.section`

`;

const Logo = styled.div`

`;

const Background = styled.div`

`;


/**
 * User: Oleg Kamlowski <n@sovrin.de>
 * Date: 14.11.2018
 * Time: 21:25
 */
export default class Index extends Component {

	/**
	 *
	 * @returns {*}
	 */
	render() {
		const {children} = this.props;

		return (
			<Section>
				<Logo/>
				<div>{children}</div>
				<Background/>
			</Section>
		);
	}
}
