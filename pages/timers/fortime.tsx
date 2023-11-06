import Countdown from '@/components/countdown'
import Layout from '@/components/layout'
import Padstart from '@/components/padstart'
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
				<Padstart text={countMin} />
				<Padstart text=":" narrow />
				<Padstart text={countSec} />
			</Countdown>
		</Layout>
	)
}
