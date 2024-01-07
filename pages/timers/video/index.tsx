import ColorBtn from '@/components/colorBtn'
import Layout from '@/components/layout'
import { cls } from '@/libs/client/utils'
import { useEffect, useState } from 'react'
import Padstart from '@/components/padstart'
import VideoRecorder from './videoRecorder'

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

	const [timeHour, setHourTime] = useState(0)
	const [timeMinute, setMinuteTime] = useState(0)
	const [timeSecond, setSecondTime] = useState(0)

	const currentTime = () => {
		const date = new Date()
		const hour = date.getHours()
		const minute = date.getMinutes()
		const second = date.getSeconds()
		setHourTime(hour)
		setMinuteTime(minute)
		setSecondTime(second)
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
				<div>
					<VideoRecorder />
				</div>

				{/* <span
					className={cls(
						timeColor,
						"font-['DIGI'] w-full h-20 flex justify-center items-center align-middle text-6xl"
					)}
				>
					<Padstart text={timeHour} />
					<Padstart text=":" narrow />
					<Padstart text={timeMinute} />
					<Padstart text=":" narrow />
					<Padstart text={timeSecond} />
				</span> */}

				<div className="flex w-full justify-between pb-5">
					{/* <div />
					<div />
					<div className="flex justify-around items-center h-8 w-32">
						<ColorBtn onClick={changeRedColor} btnColor="bg-red-500" />
						<ColorBtn onClick={changeGreenColor} btnColor="bg-green-500" />
						<ColorBtn onClick={changeBlueColor} btnColor="bg-blue-500" />
						<ColorBtn onClick={changeBlackColor} btnColor="bg-black" />
					</div> */}
				</div>
			</div>
		</Layout>
	)
}
