import React from 'react'
import Head from 'next/head'

const DEFAULT_DESCRIPTION = 'Meta description content goes here.'

const Meta = ({ title = 'Title', description = '' }) => (
	<Head>
		<title>{title}</title>
		<meta name='description' content={DEFAULT_DESCRIPTION + description} />
	</Head>
)

export default Meta