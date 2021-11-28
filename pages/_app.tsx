import { AppProps } from 'next/app'
import Head from 'next/head'
import { MantineProvider, NormalizeCSS, GlobalStyles } from '@mantine/core'
import { NotificationsProvider } from '@mantine/notifications'
import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import favicon from '../public/favicon.png'

export default function App(props: AppProps) {
	const { Component, pageProps } = props

	return (
		<>
			<Head>
				<title>Südstaatenfurs</title>
				<link rel="icon" href={favicon.src} />
				<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
			</Head>

			<MantineProvider theme={{
				colorScheme: 'light',
			}}>
				<NormalizeCSS />
				<GlobalStyles />
				<NotificationsProvider>
					<Component {...pageProps} />
				</NotificationsProvider>
			</MantineProvider>
		</>
	);
}
