import React from 'react'
import Header from '../components/Header'
import { postsAPI } from '../DAL/API'
import {
	GridTemplate, Post, PostBody, PostTitle, CreatePostBtn
} from '../assets/styles/posts'

const POSTS_NUM = 2

const Posts = ({ posts }) => (
	<>
		<Header />
		<h1>Posts</h1>
		<CreatePostBtn href={'/posts/new'}>Create new post</CreatePostBtn>
		<GridTemplate>
			{posts.map(({ id, title, body }, i) => (
					<Post key={id} href={'/posts/' + id}
								row={i + 1} col={i % POSTS_NUM + 1} span={POSTS_NUM}
					>
						<PostTitle>{title || 'Empty title'}</PostTitle>
						<PostBody>{body || 'Empty body'}</PostBody>
					</Post>
				)
			)}
		</GridTemplate>
	</>
)


export async function getServerSideProps() {
	const posts = await postsAPI.getAllPosts()
	return { props: { posts } }
}

export default Posts
