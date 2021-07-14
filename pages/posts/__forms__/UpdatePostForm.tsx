import React, { ReactElement, useCallback } from 'react'
import { postsAPI } from '../../../DAL/API'
import { ErrorMessage, Formik } from 'formik'
import ConfirmIco from '../../../assets/icons/ConfirmIco'
import CancelIco from '../../../assets/icons/CancelIco'
import { useRe } from '../../../tools/CustomHooks'
import { FormCard, Input } from '../../../assets/styles/forms'
import { Icon, Row } from '../../../assets/styles/common'

interface PropsType {
	title: string,
	body: string,
	id: number,
	setEditMode: React.Dispatch<boolean>,
}

const AddCommentForm = (
	{ title, body, id, setEditMode }: PropsType
): ReactElement => {
	const { reload } = useRe()

	const validate = useCallback(values => {
		const errors: { body?, title? } = {}
		if (!values.title) errors.title = 'Required'
		if (!values.body) errors.body = 'Required'
		return errors
	}, [])

	const updatePost = useCallback(async (data, { setSubmitting }) => {
		await postsAPI.updatePost(id, data)
		setSubmitting(false)
		setEditMode(false)
		await reload()
	}, [])

	return (
		<Formik
			initialValues={{ title, body }}
			validate={validate}
			onSubmit={updatePost}
		>
			{({ isSubmitting }) => (
				<FormCard>
					<Row>
						<Input type='text' name='title' />
						<Icon type='submit' disabled={isSubmitting}><ConfirmIco /></Icon>
						<Icon onClick={() => setEditMode(false)}><CancelIco /></Icon>
					</Row>
					<ErrorMessage name='title' component='div' />
					<Input type='text' name='body' />
					<ErrorMessage name='body' component='div' />
				</FormCard>
			)}
		</Formik>
	)
}

export default AddCommentForm