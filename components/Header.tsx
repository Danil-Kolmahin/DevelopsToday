import React, { ReactElement } from 'react'
import Meta from './Meta'
import A from './A'
import { Row } from '../assets/styles/common'

interface PropsType {
	title?: string,
	description?: string
}

const Header = ({ title, description }: PropsType): ReactElement => (
	<>
		<Meta title={title} description={description} />
		<Row>
			<A href={'/'}>Main</A>
			<A href={'/posts'}>Posts</A>
			<A href={'/posts/new'}>New post</A>
		</Row>
	</>
)

export default Header
