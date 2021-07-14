import axios from 'axios'

const baseURL = 'https://simple-blog-api.crew.red/'

const OPTIONS = { baseURL }

const METHODS = ['GET', 'POST', 'PUT', 'DELETE']

const instance = new Proxy(axios.create(OPTIONS), {
	get: (target, prop) => {
		if (
			typeof prop === 'symbol'
			||
			!METHODS.some(method => method === prop.toUpperCase())
		) return target[prop]
		else return (...args) => target[prop](...args).then(r => r.data)
	}
})

export type post = {
	title: string,
	body: string,
}

export type comment = {
	postId: number,
	body: string,
}

export const postsAPI = {
	getAllPosts: () => instance.get('posts'),
	getPost: (postId) => instance.get(`posts/${postId}?_embed=comments`),
	createPost: (post: post) => instance.post('posts', post),
	updatePost: (postId, post: post) => instance.put(`posts/${postId}`, post),
	deletePost: (postId) => instance.delete(`posts/${postId}`),
	createComment: (comment: comment) => instance.post('comments', comment)
}
