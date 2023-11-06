import { cls } from '@/libs/client/utils'
import Link from 'next/link'
import { useRouter } from 'next/router'
import SearchBar from '../pages/search/searchbar'

interface LayoutProps {
	title?: string
	canGoBack?: boolean
	hasTabBar?: boolean
	children: React.ReactNode
	search?: boolean
	isCenter?: boolean
}

export default function Layout({
	title,
	canGoBack,
	hasTabBar,
	children,
	search,
	isCenter
}: LayoutProps) {
	const router = useRouter()
	const onClick = () => {
		router.back()
	}
	return (
		<div>
			<div className="z-50 bg-white w-full h-12 max-w-xl justify-center text-lg px-10 font-bold fixed text-gray-800 border-b top-0 flex items-center">
				{canGoBack ? (
					<button onClick={onClick} className="absolute left-4">
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M15 19l-7-7 7-7"
							></path>
						</svg>
					</button>
				) : null}
				{title ? (
					<span
						className={
							(cls(canGoBack ? 'mx-auto' : '', ''), cls(search ? 'w-full' : ''))
						}
					>
						{title === 'Search' ? <SearchBar /> : title}
					</span>
				) : null}
			</div>

			<div
				className={cls(
					isCenter
						? 'h-screen max-w-xl w-full fixed flex justify-center items-center pt-12 pb-20'
						: 'pt-16 pb-20',
					'p-4'
				)}
			>
				{children}
			</div>

			<nav className="bg-white max-w-xl text-gray-700 border-t fixed bottom-0 w-full px-10 pb-5 pt-3 flex justify-between text-xs">
				<Link
					href="/"
					className={cls(
						'flex flex-col items-center space-y-2 ',
						router.pathname === '/'
							? 'text-orange-500'
							: 'hover:text-gray-500 transition-colors'
					)}
				>
					<span className="material-symbols-outlined">home</span>
					<span>HOME</span>
				</Link>
				<Link
					href="/search"
					className={cls(
						'flex flex-col items-center space-y-2 ',
						router.pathname === '/search'
							? 'text-orange-500'
							: 'hover:text-gray-500 transition-colors'
					)}
				>
					<span className="material-symbols-outlined">search</span>

					<span>SEARCH</span>
				</Link>
				<Link
					href="/timers"
					className={cls(
						'flex flex-col items-center space-y-2 ',
						router.pathname.includes('/timers')
							? 'text-orange-500'
							: 'hover:text-gray-500 transition-colors'
					)}
				>
					<span className="material-symbols-outlined">timer</span>
					<span>TIMERS</span>
				</Link>

				<Link
					href="/wod"
					className={cls(
						'flex flex-col items-center space-y-2 ',
						router.pathname === '/wod'
							? 'text-orange-500'
							: 'hover:text-gray-500 transition-colors'
					)}
				>
					<span className="material-symbols-outlined">exercise</span>
					<span>WOD</span>
				</Link>
				<Link
					href="/profile"
					className={cls(
						'flex flex-col items-center space-y-2 ',
						router.pathname === '/profile'
							? 'text-orange-500'
							: 'hover:text-gray-500 transition-colors'
					)}
				>
					<span className="material-symbols-outlined">account_circle</span>
					<span>PROFILE</span>
				</Link>
			</nav>
		</div>
	)
}
