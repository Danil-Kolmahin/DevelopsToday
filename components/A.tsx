import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

export const ALink = styled.a`
  color: black;
  cursor: pointer;
`

type PropsType = {
	href: string
}

const A: React.FC<PropsType> = (props) => (
	<Link href={props.href}>
		<ALink {...props}>{props.children}</ALink>
	</Link>
)

export default A