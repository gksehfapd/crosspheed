import Countdown from '@/components/countdown'
import Layout from '@/components/layout'
import Padstart from '@/components/padstart'
import UpDownInput from '@/components/updown-input'
import { countDownState } from '@/libs/client/atoms'
import { cls } from '@/libs/client/utils'

import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRecoilValue } from 'recoil'

export default function ForTime() {
	const { register, handleSubmit, watch } = useForm()
	const isRunning = useRecoilValue(countDownState)

	const [isSet, setIsSet] = useState(false)
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

	const onSubmit = (data: any) => {
		console.log(data)
	}

	const watchUpDown = watch('fortimeUpDown')
	const [isUp, setIsUp] = useState(true)

	useEffect(() => {
		if (watchUpDown === 'down') {
			setIsUp(false)
		} else if (watchUpDown === 'up') {
			setIsUp(true)
		} else {
			return
		}
	}, [watchUpDown])

	const watchMinDigits = watch('minDigits')

	useEffect(() => {
		console.log(watchMinDigits)
	}, [watchMinDigits])

	return (
		<Layout title="FOR TIME" canGoBack isCenter>
			{isSet ? (
				<Countdown>
					<Padstart text={countMin} />
					<Padstart text=":" narrow />
					<Padstart text={countSec} />
				</Countdown>
			) : (
				<div>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="font-['DIGI'] flex justify-between items-center"
					>
						<div className="w-8 h-20 text-2xl flex flex-col justify-center items-center mr-3">
							<label htmlFor="field-up">
								<div
									className={cls(
										isUp ? 'text-green-500' : '',
										'hover:cursor-pointer h-6 flex justify-center items-center'
									)}
								>
									<input
										{...register('fortimeUpDown')}
										type="radio"
										value="up"
										id="field-up"
										className="appearance-none"
									/>
									UP
								</div>
							</label>
							<label htmlFor="field-down">
								<div
									className={cls(
										isUp ? '' : 'text-green-500',
										'hover:cursor-pointer rotate-180 h-6 flex justify-center items-center'
									)}
								>
									<input
										{...register('fortimeUpDown')}
										type="radio"
										value="down"
										id="field-down"
										className="appearance-none"
									/>
									UP
								</div>
							</label>
						</div>
						<div className="flex text-6xl text-red-500 justify-center items-center">
							<UpDownInput name="minDigits" register={register('minDigits')} />
							<UpDownInput name="minPlace" register={register('minPlace')} />

							<Padstart text=":" narrow />
							<UpDownInput name="secDigits" register={register('secDigits')} />
							<UpDownInput name="secPlace" register={register('secPlace')} />
						</div>

						<button type="submit">Send</button>
					</form>
				</div>
			)}
		</Layout>
	)
}
