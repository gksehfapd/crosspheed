import Layout from '@/components/layout'
import { cls } from '@/libs/client/utils'
import { useState, useEffect } from 'react'

export default function Clock() {
	const [time, setTime] = useState('00:00:00')

	const [timeColor, setTimeColor] = useState<'red' | 'green' | 'blue' | 'black'>('red')

	const currentTime = () => {
		const date = new Date()
		const hour = String(date.getHours()).padStart(2, '0')
		const minute = String(date.getMinutes()).padStart(2, '0')
		const second = String(date.getSeconds()).padStart(2, '0')
		setTime(`${hour} : ${minute} : ${second}`)
	}

	const now = () => {
		setInterval(currentTime, 1000)
	}

	const changeBlueColor = () => {
		setTimeColor('blue')
	}

	now()

	useEffect(() => {
		currentTime()
	}, [])

	return (
		<Layout title="CLOCK" canGoBack isCenter>
			<div className="flex bg-red-200 w-full h-full">
				<span
					className={cls(
						timeColor === 'black'
							? 'text-black text-6xl'
							: `text-${timeColor}-500 text-6xl`
					)}
				>
					{time}
				</span>
				<span
					className={cls(
						timeColor === 'black'
							? 'text-black text-6xl'
							: `text-${timeColor}-500 text-6xl`
					)}
				>
					{time}
				</span>
				<span
					className={cls(
						timeColor === 'black'
							? 'text-black text-6xl'
							: `text-${timeColor}-500 text-6xl`
					)}
				>
					{time}
				</span>
			</div>
		</Layout>
	)
}
