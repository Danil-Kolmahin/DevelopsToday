import { useRouter } from 'next/router'

interface useReType {
	reload: () => void,
	redirect: (path: string) => void,
}

export const useRe = (): useReType => {
	const router = useRouter()
	return {
		reload: async () => {
			await router.replace(router.asPath)
		},
		redirect: async (path) => {
			await router.push(path)
		}
	}
}
