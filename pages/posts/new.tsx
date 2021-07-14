import React, { useCallback } from 'react'
import { postsAPI } from '../../DAL/API'
import { Formik, Form, ErrorMessage } from 'formik'
import Header from '../../assets/Header'
import { useRouter } from 'next/router'
import { Center, CommentButton, FormCard, Input } from '../../assets/styles/main'

const New = () => {
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
		<Header />
		<h1>Create new post</h1>
		<Formik
			initialValues={{ title: '', body: '' }}
			validate={validate} onSubmit={createNewPost}
		>
			{({ isSubmitting }) => (
				<Form>
					<Center>
						<FormCard>
							<Input type='text' name='title' />
							<ErrorMessage name='title' component='div' />
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
	</>
}

export default New