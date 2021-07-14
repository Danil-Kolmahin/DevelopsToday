import React from 'react'
import Meta from './Meta'
import A from '../components/A'
import { Row } from './styles/main'

const Header = () => (
	<>
		<Meta />
		<Row>
			<A href={'/'}>Main</A>
			<A href={'/posts'}>Posts</A>
			<A href={'/posts/new'}>New post</A>
		</Row>
	</>
)

export default Header