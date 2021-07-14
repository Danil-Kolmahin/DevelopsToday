import React from 'react'
import Header from '../assets/Header'
import { postsAPI } from '../DAL/API'
import { BigButton, GridTwo, PostBody, PostTitle } from '../assets/styles/main'
import { Post } from '../assets/styles/main'

const Posts = ({ posts }) => (
	<>
		<Header />
		<h1>Posts</h1>
		<BigButton href={'/posts/new'}>Create new post</BigButton>
		<GridTwo>
			{posts.map(({ id, title, body }, i) => (
					<Post key={id} href={'/posts/' + id}
								row={i + 1} col={i % 2 + 1} span={2}
					>
						<PostTitle>{title || 'Empty title'}</PostTitle>
						<PostBody>{body || 'Empty body'}</PostBody>
					</Post>
				)
			)}
		</GridTwo>
	</>
)


export async function getStaticProps() {
	const posts = await postsAPI.getAllPosts()
	return { props: { posts } }
}

export default Posts
