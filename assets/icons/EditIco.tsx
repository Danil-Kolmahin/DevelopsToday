import React, { ReactElement } from 'react'

interface PropsType {
	width?: number,
	height?: number,
}

const EditIco = (
	{ width = 31.666, height = 31.666, ...props }: PropsType
): ReactElement => {
	return <svg
		width={width}
		height={height}
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 383.947 383.947'
		{...props}
	>
		<path
			d='M0 303.947v80h80l236.053-236.054-80-80zM377.707 56.053L327.893 6.24c-8.32-8.32-21.867-8.32-30.187 0l-39.04 39.04 80 80 39.04-39.04c8.321-8.32 8.321-21.867.001-30.187z' />
	</svg>
}

export default EditIco