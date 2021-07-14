import React, { ReactElement } from 'react'
import Head from 'next/head'

const DEFAULT_DESCRIPTION = 'Meta description content goes here.'

interface PropsType {
	title: string,
	description: string
}

const Meta = (
	{ title = 'Title', description = '' }: PropsType
): ReactElement => (
	<Head>
		<title>{title}</title>
		<meta name='description' content={DEFAULT_DESCRIPTION + description} />
	</Head>
)

export default Meta