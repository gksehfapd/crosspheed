import Countdown from '@/components/countdown'
import Layout from '@/components/layout'
import Padstart from '@/components/padstart'
import { countDownState, setEmomMinState, setEmomRoundState, setState } from '@/libs/client/atoms'
import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import EmomForm from '@/components/emomForm'

export default function Emom() {
	const isRunning = useRecoilValue(countDownState)
	const isSet = useRecoilValue(setState)

	const useEmomMin = useRecoilValue(setEmomMinState)
	const useRound = useRecoilValue(setEmomRoundState)

	const [countSec, setCountSec] = useState(0)
	const [countMin, setCountMin] = useState(0)
	const [countRound, setCountRound] = useState(1)

	useEffect(() => {
		if (isRunning) {
			if (countRound <= useRound) {
				if (countMin < useEmomMin) {
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
				} else if (countMin >= useEmomMin) {
					setCountMin(0)
					setCountSec(0)
					setCountRound((prev) => prev + 1)
					const timer = setInterval(() => {
						setCountSec((prev) => prev + 1)
					}, 1000)
					return () => {
						clearInterval(timer)
					}
				}
			} else if (countRound > useRound) {
				console.log('끝')
			}
		} else if (!isRunning) {
			setCountSec(0)
			setCountMin(0)
			setCountRound(1)
		}
	}, [countSec, countMin, countRound, isRunning])

	return (
		<Layout title="EMOM" canGoBack isCenter>
			{isSet ? (
				<Countdown>
					<div className="flex flex-col">
						<div className="flex relative">
							<Padstart text={countRound} tailwindCss="text-blue-500" />
							<Padstart text={countMin} />
							<Padstart text=":" narrow />
							<Padstart text={countSec} />
							<div className="text-2xl absolute -bottom-8 right-3 text-green-500 space-x-3 flex flex-col justify-center items-end top-24">
								<span>E {useEmomMin} MOM</span>
								<span>{useRound} ROUND</span>
							</div>
						</div>
					</div>
				</Countdown>
			) : (
				<EmomForm />
			)}
		</Layout>
	)
}
