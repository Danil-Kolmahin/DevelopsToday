import React from 'react'
import Meta from './Meta'
import A from './A'
import { Row } from '../assets/styles/common'

const Header = (props) => (
	<>
		<Meta title={props.title} description={props.description} />
		<Row>
			<A href={'/'}>Main</A>
			<A href={'/posts'}>Posts</A>
			<A href={'/posts/new'}>New post</A>
		</Row>
	</>
)

export default Header