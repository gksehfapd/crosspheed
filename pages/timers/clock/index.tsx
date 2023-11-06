import ColorBtn from '@/pages/timers/clock/colorBtn'
import Layout from '@/components/layout'
import { cls } from '@/libs/client/utils'
import { useEffect, useState } from 'react'

type TimeColor = 'text-red-500' | 'text-green-500' | 'text-blue-500' | 'text-black'

export default function Clock() {
	const [timeColor, setTimeColor] = useState<TimeColor>('text-red-500')

	const changeRedColor = () => {
		setTimeColor('text-red-500')
	}
	const changeGreenColor = () => {
		setTimeColor('text-green-500')
	}
	const changeBlueColor = () => {
		setTimeColor('text-blue-500')
	}
	const changeBlackColor = () => {
		setTimeColor('text-black')
	}

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
		<Layout title="CLOCK" canGoBack isCenter>
			<div className="flex flex-col justify-between items-center w-full h-full">
				<div></div>

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

				<div className="flex w-full justify-between pb-5">
					<div />
					<div />
					<div className="flex justify-around items-center h-8 w-32">
						<ColorBtn onClick={changeRedColor} btnColor="bg-red-500" />
						<ColorBtn onClick={changeGreenColor} btnColor="bg-green-500" />
						<ColorBtn onClick={changeBlueColor} btnColor="bg-blue-500" />
						<ColorBtn onClick={changeBlackColor} btnColor="bg-black" />
					</div>
				</div>
			</div>
		</Layout>
	)
}
