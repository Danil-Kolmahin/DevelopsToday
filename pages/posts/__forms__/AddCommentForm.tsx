import React, { ReactElement, useCallback } from 'react'
import { postsAPI } from '../../../DAL/API'
import { ErrorMessage, Formik } from 'formik'
import { useRe } from '../../../tools/CustomHooks'
import { FormCard, Input } from '../../../assets/styles/forms'
import { BlackButton } from '../../../assets/styles/common'

interface PropsType {
	postId: number,
	setCommentingMode: React.Dispatch<boolean>,
}

const AddCommentForm = (
	{ setCommentingMode, postId }: PropsType
): ReactElement => {
	const { reload } = useRe()

	const validate = useCallback(values => {
		const errors: { body? } = {}
		if (!values.body) errors.body = 'Required'
		return errors
	}, [])

	const createComment = useCallback(async (
		{ body }, { setSubmitting }
	) => {
		await postsAPI.createComment({ postId, body })
		setSubmitting(false)
		setCommentingMode(false)
		await reload()
	}, [])

	return (
		<Formik
			initialValues={{ body: '' }}
			validate={validate}
			onSubmit={createComment}
		>
			{({ isSubmitting }) => (
				<FormCard>
					<Input type='text' name='body' />
					<ErrorMessage name='body' component='div' />
					<BlackButton type='submit' disabled={isSubmitting}>
						Submit
					</BlackButton>
				</FormCard>
			)}
		</Formik>
	)
}

export default AddCommentForm
