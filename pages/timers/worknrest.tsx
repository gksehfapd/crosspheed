import Countdown from '@/components/countdown'
import Layout from '@/components/layout'
import Padstart from '@/components/padstart'
import {
	countDownState,
	setEmomRoundState,
	setRestMinState,
	setRestSecState,
	setState,
	setWorkMinState,
	setWorkRoundState,
	setWorkSecState
} from '@/libs/client/atoms'
import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import WorkNRestForm from '@/components/worknrestForm'
import { cls } from '@/libs/client/utils'

export default function Emom() {
	const isRunning = useRecoilValue(countDownState)
	const isSet = useRecoilValue(setState)

	const useWNRWorkMin = useRecoilValue(setWorkMinState)
	const useWNRWorkSec = useRecoilValue(setWorkSecState)
	const useWNRRestMin = useRecoilValue(setRestMinState)
	const useWNRRestSec = useRecoilValue(setRestSecState)
	const useRound = useRecoilValue(setWorkRoundState)

	const [countWorkSec, setCountWorkSec] = useState(0)
	const [countWorkMin, setCountWorkMin] = useState(0)
	const [countRestSec, setCountRestSec] = useState(0)
	const [countRestMin, setCountRestMin] = useState(0)
	const [countRound, setCountRound] = useState(1)

	const [isWork, setIsWork] = useState(true)

	useEffect(() => {
		if (isRunning) {
			if (countRound <= useRound) {
				if (isWork) {
					if (countWorkMin > 0) {
						if (countWorkSec > 0) {
							const timer = setInterval(() => {
								setCountWorkSec((prev) => prev - 1)
							}, 1000)
							return () => {
								clearInterval(timer)
							}
						} else if (countWorkSec == 0) {
							const timer = setInterval(() => {
								setCountWorkMin((prev) => prev - 1)
								setCountWorkSec(59)
							}, 1000)
							return () => {
								clearInterval(timer)
							}
						}
					} else if (countWorkMin === 0) {
						if (countWorkSec > 0) {
							const timer = setInterval(() => {
								setCountWorkSec((prev) => prev - 1)
							}, 1000)
							return () => {
								clearInterval(timer)
							}
						} else if (countWorkSec == 0) {
							setIsWork(false)
							setCountWorkSec(useWNRWorkSec)
							setCountWorkMin(useWNRWorkMin)
						}
					}
				}
				if (!isWork) {
					if (countRestMin > 0) {
						if (countRestSec > 0) {
							const timer = setInterval(() => {
								setCountRestSec((prev) => prev - 1)
							}, 1000)
							return () => {
								clearInterval(timer)
							}
						} else if (countRestSec == 0) {
							const timer = setInterval(() => {
								setCountRestMin((prev) => prev - 1)
								setCountRestSec(59)
							}, 1000)
							return () => {
								clearInterval(timer)
							}
						}
					} else if (countRestMin === 0) {
						if (countRestSec > 0) {
							const timer = setInterval(() => {
								setCountRestSec((prev) => prev - 1)
							}, 1000)
							return () => {
								clearInterval(timer)
							}
						} else if (countRestSec == 0) {
							setIsWork(true)
							setCountRestSec(useWNRRestSec)
							setCountRestMin(useWNRRestMin)
							setCountRound((prev) => prev + 1)
						}
					}
				}
			} else if (countRound > useRound) {
				console.log('끝')
			}
		} else if (!isRunning) {
			setCountWorkSec(useWNRWorkSec)
			setCountWorkMin(useWNRWorkMin)
			setCountRestSec(useWNRRestSec)
			setCountRestMin(useWNRRestMin)
			setCountRound(0)
			setIsWork(true)
			console.log(
				'!isRunning after : ',
				useWNRWorkMin,
				useWNRWorkSec,
				useWNRRestMin,
				useWNRRestSec,
				countRound
			)
		}
	}, [countWorkSec, countWorkMin, countRestSec, countRestMin, countRound, isRunning])

	return (
		<Layout title="WORK & REST" canGoBack isCenter>
			{isSet ? (
				<Countdown>
					<div className="flex flex-col">
						<div className="flex relative">
							<Padstart text={countRound} tailwindCss="text-blue-500" />
							<Padstart text={isWork ? countWorkMin : countRestMin} />
							<Padstart text=":" narrow />
							<Padstart text={isWork ? countWorkSec : countRestSec} />
							<div className="text-3xl absolute -bottom-8 right-4 text-green-500 space-x-3">
								<span className={cls(isWork ? '' : 'opacity-0')}>H1</span>
								<span className={cls(isWork ? 'opacity-0' : '')}>H2</span>
							</div>
							<div className="text-xl absolute -bottom-7 left-6 text-green-500 space-x-3">
								<span>/ {useRound}</span>
							</div>
						</div>
					</div>
				</Countdown>
			) : (
				<WorkNRestForm />
			)}
		</Layout>
	)
}
