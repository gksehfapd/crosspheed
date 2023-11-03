import { useEffect, useState } from 'react'

interface CountdownProps {
	children: React.ReactNode
}

export default function Countdown({ children }: CountdownProps) {
	const [count, setCount] = useState(10)
	const [isCountdown, setIsCountdown] = useState(false)
	const [isStart, setIsStart] = useState(false)
	const onClick = () => {
		setIsCountdown((prev) => !prev)
	}

	useEffect(() => {
		if (isCountdown) {
			const timer = setInterval(() => {
				if (count > 0) {
					setCount((prev) => prev - 1)
				} else if (count <= 0) {
					setIsStart(true)
					setCount(0)
				}
			}, 1000)

			return () => {
				clearInterval(timer)
			}
		} else if (!isCountdown) {
			setIsStart(false)
			setCount(10)
		}
	}, [isCountdown, count])

	return (
		<div className="w-full h-full flex flex-col py-4 justify-between items-center">
			<div></div>
			<span className="text-red-500 font-['DIGI'] w-full h-20 flex justify-center items-center align-middle text-6xl">
				{isStart ? children : count}
			</span>
			<div className="w-full text-right">
				<button
					onClick={onClick}
					className="p-2 rounded-full mr-4 hover:bg-slate-300 active:bg-slate-400"
				>
					{isCountdown ? (
						<span className="material-symbols-outlined flex items-center justify-center">
							pause
						</span>
					) : (
						<span className="material-symbols-outlined flex items-center justify-center">
							play_arrow
						</span>
					)}
				</button>
			</div>
		</div>
	)
}
