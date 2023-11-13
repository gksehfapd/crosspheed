import { setEmomMinState, setEmomRoundState, setState } from '@/libs/client/atoms'
import { useForm } from 'react-hook-form'
import { useSetRecoilState } from 'recoil'

export default function EmomForm() {
	const setStateFn = useSetRecoilState(setState)
	const setEmomMinFn = useSetRecoilState(setEmomMinState)
	const setEmomRoundFn = useSetRecoilState(setEmomRoundState)

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm()

	const onValid = (validForm: any) => {
		console.log(validForm)
		setStateFn(true)
		setEmomMinFn(+validForm.setEmom)
		setEmomRoundFn(+validForm.setRound)
	}
	return (
		<form
			onSubmit={handleSubmit(onValid)}
			className="font-['DIGI'] flex flex-col justify-between items-center w-full h-full py-4"
		>
			<div></div>
			<div className="flex flex-col text-3xl justify-center items-center relative">
				<span className="text-red-500 pr-3 mr-2">
					<label htmlFor="setEMOM">
						E
						<input
							{...register('setEmom', {
								required: true,
								maxLength: 1,
								min: { value: 1, message: '1-9 ONLY' },
								max: { value: 9, message: '1-9 ONLY' }
							})}
							type="number"
							placeholder="1"
							id="setEMOM"
							defaultValue={1}
							className="text-right pr-2 w-9 text-4xl"
						/>
						MOM
					</label>
					<span className="absolute text-sm text-center text-gray-500 ml-1 w-10">
						{errors?.setEmom?.message}
					</span>
				</span>
				<span className="text-blue-500 pl-4 relative">
					<span className="absolute text-sm text-center text-gray-500 w-8 -left-6">
						{errors?.setRound?.message}
					</span>
					<label htmlFor="setRound">
						<input
							{...register('setRound', {
								required: true,
								maxLength: 2,
								min: { value: 1, message: '1-99 ONLY' },
								max: { value: 99, message: '1-99 ONLY' }
							})}
							type="number"
							placeholder="1"
							id="setRound"
							className="text-right pr-2 w-12 text-4xl"
						/>
						ROUND
					</label>
				</span>
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
