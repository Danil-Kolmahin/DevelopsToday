import React, { useCallback } from 'react'
import { postsAPI } from '../../../DAL/API'
import { ErrorMessage, Form, Formik } from 'formik'
import {
	Center, CommentButton, FormCard, Input
} from '../../../assets/styles/main'
import { useRe } from '../../../tools/CustomHooks'

const AddCommentForm = ({ setCommentingMode, postId }) => {
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
				<Form>
					<Center>
						<FormCard>
							<Input type='text' name='body' />
							<ErrorMessage name='body' component='div' />
							<CommentButton type='submit' disabled={isSubmitting}>
								Submit
							</CommentButton>
						</FormCard>
					</Center>
				</Form>
			)}
		</Formik>
	)
}

export default AddCommentForm