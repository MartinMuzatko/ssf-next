import type { ReactElement } from 'react'
import { useState } from 'react'
import { Container, Avatar, Menu, Divider } from '@mantine/core'
import Link from 'next/link'
import Image from 'next/image'
import { FiChevronDown } from 'react-icons/fi'
import logo from '../public/logo.png'

interface LayoutProps {
	children: ReactElement
}

export default ({ children }: LayoutProps) => {
	const [opened, setOpened] = useState(false)
	const UserButton = () => <div className="p-4 flex items-center hover:bg-yellow-400">
		<Avatar radius="xl" color="yellow" size="md" className="mr-4" />
		<FiChevronDown />
		Misan
	</div>
	const UserMenu = () => <Menu control={<UserButton />} controlRefProp="ref">
		<Menu.Label>Profil</Menu.Label>
		<Menu.Item icon={<FiChevronDown />}>Settings</Menu.Item>
		<Menu.Item icon={<FiChevronDown />}>Messages</Menu.Item>
		<Menu.Item icon={<FiChevronDown />}>Gallery</Menu.Item>
		<Menu.Item
			icon={<FiChevronDown />}
			rightSection="mau"
		>
			Search
		</Menu.Item>

		<Divider />

		<Menu.Label>Danger zone</Menu.Label>
		<Menu.Item icon={<FiChevronDown />}>Transfer my data</Menu.Item>,
		<Menu.Item color="red" icon={<FiChevronDown />}>Delete my account</Menu.Item>
	</Menu>

	const Login = () => <Link href="/login">
		<a className="p-4 flex items-center hover:bg-yellow-400">
			<Avatar radius="xl" color="yellow" size="md" className="mr-4" />
			Login
		</a>
	</Link>
	return <>
		<Container padding={0} size="xl" className="md:px-8">
			<div className="flex justify-end">
				<div className="flex items-stretch border-b border-black">
					<Link href="/"><a className="flex items-center px-8 hover:bg-yellow-400">Home</a></Link>
					<Link href="/events"><a className="flex items-center px-8 hover:bg-yellow-400">Events</a></Link>
					<Link href="/verein"><a className="flex items-center px-8 hover:bg-yellow-400">Verein</a></Link>
					<Link href="/users"><a className="flex items-center px-8 hover:bg-yellow-400">User</a></Link>
					{true ? <UserMenu /> : <Login />}
				</div>
			</div>
		</Container>
		<Container padding={0} size="xl" className="md:px-8">
			<div className="text-5xl">
				<Image src={logo.src} height={logo.height} width={logo.width} className="leading-none" />
				Südstaaten Furs e.V.
			</div>
		</Container>
		<Container padding={0} size="xl" className="md:px-8">
			<div className="bg-black p-1" />
			<div className="bg-yellow-400 p-1" />
		</Container>
		{children}
	</>
}
