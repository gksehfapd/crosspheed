import { cls } from '@/libs/client/utils'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface LayoutProps {
	title?: string
	canGoBack?: boolean
	hasTabBar?: boolean
	children: React.ReactNode
}

export default function Layout({ title, canGoBack, hasTabBar, children }: LayoutProps) {
	const router = useRouter()
	const onClick = () => {
		router.back()
	}
	return (
		<div>
			<div className="bg-white w-full h-12 max-w-xl justify-center text-lg px-10 font-medium  fixed text-gray-800 border-b top-0  flex items-center">
				{title ? (
					<span className={cls(canGoBack ? 'mx-auto' : '', '')}>{title}</span>
				) : null}
			</div>
			<div className="pt-12 pb-24">
				<div className="p-4">{children}</div>
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
					href="/timer"
					className={cls(
						'flex flex-col items-center space-y-2 ',
						router.pathname === '/timer'
							? 'text-orange-500'
							: 'hover:text-gray-500 transition-colors'
					)}
				>
					<span className="material-symbols-outlined">timer</span>
					<span>TIMER</span>
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
