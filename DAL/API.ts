import axios, { AxiosResponse } from 'axios'

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
	getAllPosts: (): Promise<AxiosResponse> => instance.get('posts'),
	getPost: (postId: number): Promise<AxiosResponse> => instance.get(`posts/${postId}?_embed=comments`),
	createPost: (post: post): Promise<AxiosResponse> => instance.post('posts', post),
	updatePost: (postId: number, post: post): Promise<AxiosResponse> => instance.put(`posts/${postId}`, post),
	deletePost: (postId: number): Promise<AxiosResponse> => instance.delete(`posts/${postId}`),
	createComment: (comment: comment): Promise<AxiosResponse> => instance.post('comments', comment)
}
