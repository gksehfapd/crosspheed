import Padstart from '@/components/padstart'
import { setAmrapMinState, setAmrapSecState, setState } from '@/libs/client/atoms'
import { cls } from '@/libs/client/utils'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRecoilState, useSetRecoilState } from 'recoil'

export default function AmrapForm() {
	const setStateFn = useSetRecoilState(setState)
	const setFortimeMinFn = useSetRecoilState(setAmrapMinState)
	const setFortimeSecFn = useSetRecoilState(setAmrapSecState)

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm()

	const onSubmit = (data: any) => {
		console.log(data)
		setStateFn(true)
		setFortimeMinFn(+data.setMinutes)
		setFortimeSecFn(+data.setSeconds)
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

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="font-['DIGI'] flex flex-col justify-between items-center w-full h-full py-4"
		>
			<div></div>
			<div className="flex">
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
								defaultChecked
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
					<div className="w-16 text-center h-26 flex flex-col justify-center items-center relative">
						<input
							type="number"
							className="w-16 text-center"
							id="setMinutes"
							{...register('setMinutes', {
								required: true,
								maxLength: 2,
								min: { value: 0, message: '0 - 99 ONLY' },
								max: { value: 99, message: '0 - 99 ONLY' }
							})}
							placeholder="00"
							required
						/>
						<span className="text-sm text-gray-500 absolute top-16">
							{errors?.setMinutes?.message}
						</span>
					</div>

					<Padstart text=":" narrow />

					<div className="w-16 text-center h-26 flex flex-col justify-center items-center relative">
						<input
							type="number"
							className="w-16 text-center"
							id="setSeconds"
							{...register('setSeconds', {
								required: true,
								maxLength: 2,
								min: { value: 0, message: '0 - 59 ONLY' },
								max: { value: 59, message: '0 - 59 ONLY' }
							})}
							placeholder="00"
							required
						/>
						<span className="text-sm text-gray-500 absolute top-16">
							{errors?.setSeconds?.message}
						</span>
					</div>
				</div>
			</div>
			<div className="w-full text-right">
				<button
					type="submit"
					className="p-2 rounded-full mr-4 hover:bg-slate-300 active:bg-slate-400"
				>
					<span className="material-symbols-outlined flex items-center justify-center">
						play_arrow
					</span>
				</button>
			</div>
		</form>
	)
}
