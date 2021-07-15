import React, { ReactElement, useCallback, useState } from 'react'
import { postsAPI } from '../../DAL/API'
import Header from '../../components/Header'
import AddCommentForm from './__forms__/AddCommentForm'
import UpdatePostForm from './__forms__/UpdatePostForm'
import { useRe } from '../../tools/CustomHooks'
import { BlackButton, Center, Row } from '../../assets/styles/common'
import { Comment } from '../../assets/styles/comments'
import { GetServerSidePropsContext } from 'next'
import { AxiosResponse } from 'axios'
import IconButton from '../../assets/icons/IconButton'

interface PropsType {
	post: {
		title: string,
		body: string,
		comments: {
			id: number,
			body: string
		}[],
		id: number
	}
}

const Post = ({ post }: PropsType): ReactElement => {
	const { title, body, comments, id } = post
	const [isEditModeOn, setEditMode] = useState(false)
	const [isCommentingOn, setCommentingMode] = useState(false)
	const { redirect } = useRe()

	const deletePost = useCallback(async () => {
		await postsAPI.deletePost(id)
		await redirect('/posts')
	}, [])

	return <>
		<Header title={'Post #' + id} />
		<h1>{'Post #' + id}</h1>

		{
			isEditModeOn ?
				<UpdatePostForm
					id={id} title={title} body={body} setEditMode={setEditMode}
				/> :
				<>
					<Row>
						<h2>{title || 'Empty title'}</h2>
						<IconButton onClick={() => setEditMode(true)} iconName='edit' />
						<IconButton onClick={deletePost} iconName='delete' />
					</Row>
					<span>{body || 'Empty body'}</span>
				</>
		}

		{
			isCommentingOn ?
				<AddCommentForm
					postId={id} setCommentingMode={setCommentingMode}
				/> :
				<Center>
					<BlackButton onClick={() => setCommentingMode(true)}>
						Comment
					</BlackButton>
				</Center>
		}

		{comments.map(({ id, body }) => (
			<Comment key={id}>
				{body || 'Empty comment'}
			</Comment>
		))}
	</>
}

interface propsType {
	props: {
		post: AxiosResponse<PropsType>
	}
}

export const getServerSideProps = async (
	context: GetServerSidePropsContext
): Promise<propsType> => {
	const post = await postsAPI.getPost(
		Number.parseFloat(context.query.id as string)
	)
	return { props: { post } }
}

export default Post
