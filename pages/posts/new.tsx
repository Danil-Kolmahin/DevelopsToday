import React, { ReactElement, useCallback } from 'react'
import { postsAPI } from '../../DAL/API'
import { Formik, ErrorMessage } from 'formik'
import Header from '../../components/Header'
import { useRouter } from 'next/router'
import { FormCard, Input } from '../../assets/styles/forms'
import { BlackButton } from '../../assets/styles/common'

const New = (): ReactElement => {
	const router = useRouter()

	const createNewPost = useCallback(async (data, { setSubmitting }) => {
		await postsAPI.createPost(data)
		setSubmitting(false)
		await router.push('/posts')
	}, [])

	const validate = useCallback(values => {
		const errors: { body?, title? } = {}
		if (!values.title) errors.title = 'Required'
		if (!values.body) errors.body = 'Required'
		return errors
	}, [])

	return <>
		<Header title='New post' />
		<h1>Create new post</h1>
		<Formik
			initialValues={{ title: '', body: '' }}
			validate={validate} onSubmit={createNewPost}
		>
			{({ isSubmitting }) => (
				<FormCard>
					<Input type='text' name='title' />
					<ErrorMessage name='title' component='div' />
					<Input type='text' name='body' />
					<ErrorMessage name='body' component='div' />
					<BlackButton type='submit' disabled={isSubmitting}>
						Submit
					</BlackButton>
				</FormCard>
			)}
		</Formik>
	</>
}

export default New