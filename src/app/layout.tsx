import 'bootstrap-icons/font/bootstrap-icons.css'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import WordSearch from '@/components/WordSearch'
import Link from 'next/link'
import SessionProvider from '@/components/ProvidersWrapper'
import { redirect } from 'next/navigation'
import ThemeToggle from '../components/ThemeToggle'
import Header from '../components/Header'
import { cookies } from 'next/dist/client/components/headers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}
export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const cookieStore = cookies()
	const theme = cookieStore.get('theme')
	return (
		<html
			lang='en'
			className={theme?.value ?? ''}>
			<body
				className={` ${inter.className} bg-slate-200 dark:bg-gray-950 text-slate-700 overflow-x-hidden dark:text-slate-300 min-h-screen`}>
				<SessionProvider>
					<main className=''>{children}</main>
				</SessionProvider>
			</body>
		</html>
	)
}
