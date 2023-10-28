import { useState } from 'react'

export default function Convert() {
	const [lb, setLb] = useState(0)
	const [flip, setFlip] = useState(false)

	const convertKg = (event: React.ChangeEvent<HTMLInputElement>) => {
		setLb(Number(event.target.value))
	}

	const reset = () => {
		setLb(0)
	}

	const onFlip = () => {
		reset()
		setFlip((prev) => !prev)
	}

	return (
		<div className="flex flex-col items-center text-lg bg-slate-100 p-3 rounded-xl space-y-2">
			<div className="flex flex-col space-y-2">
				<span>
					<input
						className="w-12 px-1"
						type="number"
						placeholder="lb"
						value={flip ? Math.round(lb / 0.453592) : lb}
						onChange={convertKg}
						id="lb"
						disabled={flip}
					/>
					<label htmlFor="lb"> lb</label>
				</span>
				<span>
					<input
						className="w-12 px-1"
						type="number"
						placeholder="kg"
						value={flip ? lb : Math.round(lb * 4.53592) / 10}
						onChange={convertKg}
						id="kg"
						disabled={!flip}
					/>
					<label htmlFor="kg"> kg</label>
				</span>
			</div>
			<button
				onClick={reset}
				className="px-2 py-0.5 bg-slate-200 rounded-lg hover:bg-slate-300 active:bg-slate-400"
			>
				Reset
			</button>
			<button
				onClick={onFlip}
				className="px-2 py-0.5 bg-slate-200 rounded-lg hover:bg-slate-300 active:bg-slate-400"
			>
				lb {flip ? <span>&larr;</span> : <span>&rarr;</span>} kg
			</button>
		</div>
	)
}
