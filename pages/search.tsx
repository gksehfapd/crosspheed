import Layout from '@/components/layout'
import Convert from '@/components/convert'
import Head from 'next/head'
import SearchBar from '@/components/searchbar'

export default function Search() {
	return (
		<Layout title="Search">
			<Head>
				<title>Home</title>
			</Head>
			<SearchBar />
			<Convert />
		</Layout>
	)
}
