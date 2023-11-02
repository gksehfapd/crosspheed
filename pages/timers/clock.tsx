import Layout from '@/components/layout'
import { useState, useEffect } from 'react'

export default function Clock() {
	const [time, setTime] = useState('00:00:00')

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

	now()

	useEffect(() => {
		currentTime()
	}, [])

	return (
		<Layout title="CLOCK" canGoBack>
			<span className="text-red-500">{time}</span>
		</Layout>
	)
}
