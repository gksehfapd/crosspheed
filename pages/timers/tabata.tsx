import Countdown from '@/components/countdown'
import Layout from '@/components/layout'
import Padstart from '@/components/padstart'
import { countDownState } from '@/libs/client/atoms'
import { cls } from '@/libs/client/utils'

import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'

export default function Tavata() {
	const isRunning = useRecoilValue(countDownState)
	const [isWork, setIsWork] = useState(true)

	const [countWorkSec, setCountWorkSec] = useState(20)
	const [countRestSec, setCountRestSec] = useState(10)
	const [countRound, setCountRound] = useState(1)

	useEffect(() => {
		if (isRunning) {
			if (countWorkSec > 0) {
				const timer = setInterval(() => {
					setCountWorkSec((prev) => prev - 1)
				}, 1000)

				return () => {
					clearInterval(timer)
				}
			} else if (countWorkSec <= 0) {
				setIsWork(false)

				if (countRestSec > 0) {
					const timer = setInterval(() => {
						setCountRestSec((prev) => prev - 1)
					}, 1000)

					return () => {
						clearInterval(timer)
					}
				} else if (countRestSec <= 0) {
					setCountRound((prev) => prev + 1)
					setCountWorkSec(20)
					setCountRestSec(10)
					setIsWork(true)
				}
			}
		} else if (!isRunning) {
			//여기 먼저 실행 됨
			setCountWorkSec(20)
			setCountRestSec(10)
			setCountRound(1)
			setIsWork(true)
		}
	}, [countWorkSec, countRestSec, countRound, isRunning])

	return (
		<Layout title="TABATA" canGoBack isCenter>
			<Countdown>
				<div className="flex flex-col">
					<div className="flex relative">
						<Padstart text={countRound} tailwindCss="text-blue-500" />
						<Padstart text="00" />
						<Padstart text=":" narrow />
						<Padstart text={isWork ? countWorkSec : countRestSec} />
						<div className="text-3xl absolute -bottom-8 right-4 text-green-500 space-x-3">
							<span className={cls(isWork ? '' : 'opacity-0')}>H1</span>
							<span className={cls(isWork ? 'opacity-0' : '')}>H2</span>
						</div>
					</div>
				</div>
			</Countdown>
		</Layout>
	)
}
