import Countdown from '@/components/countdown'
import Layout from '@/components/layout'
import Padstart from '@/components/padstart'
import {
	countDownState,
	setAmrapMinState,
	setAmrapSecState,
	setAmrapUpDownState,
	setState
} from '@/libs/client/atoms'
import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import AmrapForm from '@/components/amrapForm'

export default function ForTime() {
	const isRunning = useRecoilValue(countDownState)
	const isSet = useRecoilValue(setState)

	const useAmrapMin = useRecoilValue(setAmrapMinState)
	const useAmrapSec = useRecoilValue(setAmrapSecState)
	const useAmrapUpDown = useRecoilValue(setAmrapUpDownState)

	const [countSec, setCountSec] = useState(0)
	const [countMin, setCountMin] = useState(0)

	useEffect(() => {
		if (isRunning) {
			if (useAmrapUpDown === 'up') {
				if (countMin < useAmrapMin) {
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
				} else if (countMin === useAmrapMin) {
					if (countSec < useAmrapSec) {
						const timer = setInterval(() => {
							setCountSec((prev) => prev + 1)
						}, 1000)
						return () => {
							clearInterval(timer)
						}
					} else if (countSec === useAmrapSec) {
						console.log('끝!')
					}
				}
			}
		} else if (!isRunning) {
			setCountSec(0)
			setCountMin(0)
		}
	}, [countSec, countMin, isRunning])

	return (
		<Layout title="AMRAP" canGoBack isCenter>
			{isSet ? (
				<Countdown>
					<Padstart text={useAmrapUpDown} textColor="text-green-500" />
					<Padstart text={countMin} />
					<Padstart text=":" narrow />
					<Padstart text={countSec} />
				</Countdown>
			) : (
				<AmrapForm />
			)}
		</Layout>
	)
}
