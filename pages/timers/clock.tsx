import ClockText from '@/components/clock-text'
import Layout from '@/components/layout'
import { cls } from '@/libs/client/utils'
import { useState, useEffect } from 'react'

export default function Clock() {
	const [timeColor, setTimeColor] = useState<
		'text-red-500' | 'text-green-500' | 'text-blue-500' | 'text-black'
	>('text-red-500')

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

	return (
		<Layout title="CLOCK" canGoBack isCenter>
			<div className="flex flex-col justify-between items-center w-full h-full">
				<div></div>
				<ClockText timeColor={timeColor} />
				<div className="flex w-full justify-between pb-5">
					<div />
					<div />
					<div className="flex justify-around items-center h-8 w-32">
						<div
							className="w-5 h-5 flex justify-center items-center"
							onClick={changeRedColor}
						>
							<div className="w-4 h-4 rounded-full hover:cursor-pointer hover:w-5 hover:h-5 bg-red-500" />
						</div>
						<div
							className="w-5 h-5 flex justify-center items-center"
							onClick={changeGreenColor}
						>
							<div className="w-4 h-4 rounded-full hover:cursor-pointer hover:w-5 hover:h-5 bg-green-500" />
						</div>
						<div
							className="w-5 h-5 flex justify-center items-center"
							onClick={changeBlueColor}
						>
							<div className="w-4 h-4 rounded-full hover:cursor-pointer hover:w-5 hover:h-5 bg-blue-500" />
						</div>
						<div
							className="w-5 h-5 flex justify-center items-center"
							onClick={changeBlackColor}
						>
							<div className="w-4 h-4 rounded-full hover:cursor-pointer hover:w-5 hover:h-5 bg-black" />
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}
