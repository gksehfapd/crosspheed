import { cls } from '@/libs/client/utils'
import { useEffect, useState } from 'react'

export default function ClockText({ timeColor }: any) {
	const [timeHour, setHourTime] = useState('00')
	const [timeMinute, setMinuteTime] = useState('00')
	const [timeSecond, setSecondTime] = useState('00')

	const currentTime = () => {
		const date = new Date()
		const hour = String(date.getHours()).padStart(2, '0')
		const minute = String(date.getMinutes()).padStart(2, '0')
		const second = String(date.getSeconds()).padStart(2, '0')
		setHourTime(`${hour}`)
		setMinuteTime(`${minute}`)
		setSecondTime(`${second}`)
	}

	const now = () => {
		setInterval(currentTime, 1000)
	}
	now()

	useEffect(() => {
		currentTime()
	}, [])

	return (
		<span
			className={cls(
				timeColor,
				"font-['DIGI'] w-full h-20 flex justify-center items-center align-middle text-6xl"
			)}
		>
			<span className="w-20 h-20 flex justify-center items-center">{timeHour}</span>
			<span className="w-12 h-20 flex justify-center items-center">:</span>
			<span className="w-20 h-20 flex justify-center items-center">{timeMinute}</span>
			<span className="w-12 h-20 flex justify-center items-center">:</span>
			<span className="w-20 h-20 flex justify-center items-center">{timeSecond}</span>
		</span>
	)
}
