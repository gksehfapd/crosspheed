import Layout from '@/components/layout'
import { searchState } from '@/libs/client/atoms'
import Head from 'next/head'
import { useRecoilValue } from 'recoil'

export default function Search() {
	const searchValue = useRecoilValue(searchState)

	return (
		<Layout title="Search" search>
			<Head>
				<title>Home</title>
			</Head>

			<h1>{searchValue}</h1>
		</Layout>
	)
}
