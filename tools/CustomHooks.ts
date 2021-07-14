import { useRouter } from 'next/router'

export const useRe = () => {
	const router = useRouter()
	return {
		reload: async () => await router.replace(router.asPath),
		redirect: async (path) => await router.push(path)
	}
}
