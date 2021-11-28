import { Container } from '@mantine/core'
import Layout from '../components/Layout'

export default () => {
	const a = 3
	return <>
		<Layout>
			<Container padding={0} size="xl" className="md:px-8 pt-8">
				<div className="p-4 bg-yellow-400">
					mau
				</div>
			</Container>
		</Layout>
	</>
}
