import Padstart from '@/components/padstart'
import {
	setRestMinState,
	setRestSecState,
	setState,
	setWorkMinState,
	setWorkRoundState,
	setWorkSecState
} from '@/libs/client/atoms'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSetRecoilState } from 'recoil'

interface WNRForm {
	setWorkRound: string
	setWorkMinutes: string
	setWorkSeconds: string
	setRestMinutes: string
	setRestSeconds: string
}

export default function WNRForm() {
	const setStateFn = useSetRecoilState(setState)
	const setWorkMinFn = useSetRecoilState(setWorkMinState)
	const setWorkSecFn = useSetRecoilState(setWorkSecState)
	const setRestMinFn = useSetRecoilState(setRestMinState)
	const setRestSecFn = useSetRecoilState(setRestSecState)
	const setWorkRoundFn = useSetRecoilState(setWorkRoundState)

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm<WNRForm>()

	const onValid = (validForm: WNRForm) => {
		console.log(validForm)
		setStateFn(true)
		setWorkMinFn(+validForm.setWorkMinutes)
		setWorkSecFn(+validForm.setWorkSeconds)
		setRestMinFn(+validForm.setRestMinutes)
		setRestSecFn(+validForm.setRestSeconds)
		setWorkRoundFn(+validForm.setWorkRound)
	}

	return (
		<form
			onSubmit={handleSubmit(onValid)}
			className="font-['DIGI'] flex flex-col justify-between items-center w-full h-full py-4"
		>
			<div></div>
			<div>
				<div className="flex text-red-500">
					<div className="w-8 h-20 text-2xl flex flex-col justify-center items-center mr-8">
						WORK
					</div>

					<div className="flex text-6xl justify-center items-center">
						<div className="w-16 text-center h-26 flex flex-col justify-center items-center relative">
							<input
								type="number"
								className="w-16 text-center"
								id="setWorkMinutes"
								{...register('setWorkMinutes', {
									required: true,
									maxLength: 2,
									min: { value: 0, message: '0 - 99 ONLY' },
									max: { value: 99, message: '0 - 99 ONLY' }
								})}
								placeholder="00"
								required
							/>
							<span className="text-sm text-gray-500 absolute top-16">
								{errors?.setWorkMinutes?.message}
							</span>
						</div>

						<Padstart text=":" narrow />

						<div className="w-16 text-center h-26 flex flex-col justify-center items-center relative">
							<input
								type="number"
								className="w-16 text-center"
								id="setWorkSeconds"
								{...register('setWorkSeconds', {
									required: true,
									maxLength: 2,
									min: { value: 0, message: '0 - 59 ONLY' },
									max: { value: 59, message: '0 - 59 ONLY' }
								})}
								placeholder="00"
								required
							/>
							<span className="text-sm text-gray-500 absolute top-16">
								{errors?.setWorkSeconds?.message}
							</span>
						</div>
					</div>
				</div>
				<div className="flex text-green-500">
					<div className="w-8 h-20 text-2xl flex flex-col justify-center items-center mr-8">
						REST
					</div>

					<div className="flex text-6xl justify-center items-center">
						<div className="w-16 text-center h-26 flex flex-col justify-center items-center relative">
							<input
								type="number"
								className="w-16 text-center"
								id="setRestMinutes"
								{...register('setRestMinutes', {
									required: true,
									maxLength: 2,
									min: { value: 0, message: '0 - 99 ONLY' },
									max: { value: 99, message: '0 - 99 ONLY' }
								})}
								placeholder="00"
								required
							/>
							<span className="text-sm text-gray-500 absolute top-16">
								{errors?.setRestMinutes?.message}
							</span>
						</div>

						<Padstart text=":" narrow />

						<div className="w-16 text-center h-26 flex flex-col justify-center items-center relative">
							<input
								type="number"
								className="w-16 text-center"
								id="setRestSeconds"
								{...register('setRestSeconds', {
									required: true,
									maxLength: 2,
									min: { value: 0, message: '0 - 59 ONLY' },
									max: { value: 59, message: '0 - 59 ONLY' }
								})}
								placeholder="00"
								required
							/>
							<span className="text-sm text-gray-500 absolute top-16">
								{errors?.setRestSeconds?.message}
							</span>
						</div>
					</div>
				</div>
				<div className="flex text-blue-500">
					<div className="w-8 h-20 text-2xl flex flex-col justify-center items-center mr-8">
						RUND
					</div>

					<div className="flex text-6xl justify-center items-center w-44 text-center h-26 flex-col relative">
						<input
							type="number"
							className="w-16 text-center"
							id="setWorkRound"
							{...register('setWorkRound', {
								required: true,
								maxLength: 2,
								min: { value: 0, message: '0 - 99 ONLY' },
								max: { value: 99, message: '0 - 99 ONLY' }
							})}
							placeholder="00"
							required
						/>
						<span className="text-sm text-gray-500 absolute top-16">
							{errors?.setWorkRound?.message}
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
