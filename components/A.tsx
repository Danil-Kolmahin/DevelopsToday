import React, { ReactElement } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

export const ALink = styled.a`
  color: black;
  cursor: pointer;
`

interface PropsType {
	href: string,
	children: React.ReactChildren | string
}

const A = (props: PropsType): ReactElement => (
	<Link href={props.href}>
		<ALink {...props}>{props.children}</ALink>
	</Link>
)

export default A