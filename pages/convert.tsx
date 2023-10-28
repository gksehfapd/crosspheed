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
		<div className="flex flex-col">
			<span>{flip ? 'kg to lb' : 'lb to kg'}</span>
			<span>
				<input
					type="number"
					placeholder="lb"
					value={flip ? Math.round(lb / 0.453592) : lb}
					onChange={convertKg}
					id="lb"
					disabled={flip}
				/>
				<label htmlFor="lb">lb</label>
			</span>
			<span>
				<input
					type="number"
					placeholder="kg"
					value={flip ? lb : Math.round(lb * 4.53592) / 10}
					onChange={convertKg}
					id="kg"
					disabled={!flip}
				/>
				<label htmlFor="kg">kg</label>
			</span>
			<button onClick={reset}>Reset</button>
			<button onClick={onFlip}>FLIP</button>
		</div>
	)
}
