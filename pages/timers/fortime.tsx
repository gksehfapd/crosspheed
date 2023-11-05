import Countdown from '@/components/countdown'
import Layout from '@/components/layout'
import { countDownState } from '@/libs/client/atoms'

import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'

export default function ForTime() {
	const isRunning = useRecoilValue(countDownState)

	const [countSec, setCountSec] = useState(0)
	const [countMin, setCountMin] = useState(0)

	useEffect(() => {
		if (isRunning) {
			if (countSec < 60) {
				const timer = setInterval(() => {
					setCountSec((prev) => prev + 1)
				}, 1000)

				return () => {
					clearInterval(timer)
				}
			} else if (countSec >= 60) {
				setCountMin((prev) => prev + 1)
				setCountSec(0)
				const timer = setInterval(() => {
					setCountSec((prev) => prev + 1)
				}, 1000)

				return () => {
					clearInterval(timer)
				}
			}
		} else if (!isRunning) {
			setCountSec(0)
			setCountMin(0)
		}
	}, [countSec, countMin, isRunning])

	return (
		<Layout title="FOR TIME" canGoBack isCenter>
			<Countdown>
				<span className="w-20 h-20 flex justify-center items-center">
					{String(countMin).padStart(2, '0')}
				</span>
				<span className="w-12 h-20 flex justify-center items-center">:</span>
				<span className="w-20 h-20 flex justify-center items-center">
					{String(countSec).padStart(2, '0')}
				</span>
			</Countdown>
		</Layout>
	)
}
