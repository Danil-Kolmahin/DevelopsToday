import React, { useCallback, useState } from 'react'
import DeleteIco from '../../assets/icons/DeleteIco'
import EditIco from '../../assets/icons/EditIco'
import { postsAPI } from '../../DAL/API'
import Header from '../../assets/Header'
import AddCommentForm from './__forms__/AddCommentForm'
import UpdatePostForm from './__forms__/UpdatePostForm'
import {
	Center, CommentButton, Icon, Row, Comment
} from '../../assets/styles/main'
import { useRe } from '../../tools/CustomHooks'

const Post = ({ post }) => {
	const { title, body, comments, id } = post
	const [isEditModeOn, setEditMode] = useState(false)
	const [isCommentingOn, setCommentingMode] = useState(false)
	const { redirect } = useRe()

	const deletePost = useCallback(async () => {
		await postsAPI.deletePost(id)
		await redirect('/posts')
	}, [])

	return <>
		<Header />
		<h1>Post</h1>

		{
			isEditModeOn ?
				<UpdatePostForm
					id={id} title={title} body={body} setEditMode={setEditMode}
				/> :
				<>
					<Row>
						<h2>{title || 'Empty title'}</h2>
						<Icon onClick={() => setEditMode(true)}><EditIco /></Icon>
						<Icon onClick={deletePost}><DeleteIco /></Icon>
					</Row>
					<h4>{body || 'Empty body'}</h4>
				</>
		}

		{
			isCommentingOn ?
				<AddCommentForm
					postId={id} setCommentingMode={setCommentingMode}
				/> :
				<Center>
					<CommentButton onClick={() => setCommentingMode(true)}>
						Comment
					</CommentButton>
				</Center>
		}

		{comments.map(({ id, body }) => (
			<Comment key={id}>
				{body || 'Empty comment'}
			</Comment>
		))}
	</>
}

export const getServerSideProps = async (context) => {
	const post = await postsAPI.getPost(context.query.id)
	return { props: { post } }
}

export default Post