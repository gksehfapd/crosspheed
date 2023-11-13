import Padstart from '@/components/padstart'
import {
	setAmrapMinState,
	setAmrapSecState,
	setAmrapUpDownState,
	setState
} from '@/libs/client/atoms'
import { cls } from '@/libs/client/utils'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSetRecoilState } from 'recoil'

interface AmrapForm {
	amrapUpDown: 'up' | 'down'
	setMinutes: string
	setSeconds: string
}

export default function AmrapForm() {
	const setStateFn = useSetRecoilState(setState)
	const setAmrapMinFn = useSetRecoilState(setAmrapMinState)
	const setAmrapSecFn = useSetRecoilState(setAmrapSecState)
	const setAmrapUpDownFn = useSetRecoilState(setAmrapUpDownState)

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm<AmrapForm>()

	const onValid = (validForm: AmrapForm) => {
		console.log(validForm)
		setStateFn(true)
		setAmrapMinFn(+validForm.setMinutes)
		setAmrapSecFn(+validForm.setSeconds)
		setAmrapUpDownFn(validForm.amrapUpDown)
	}

	const watchUpDown = watch('amrapUpDown')
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
			onSubmit={handleSubmit(onValid)}
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
								{...register('amrapUpDown')}
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
								{...register('amrapUpDown')}
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
