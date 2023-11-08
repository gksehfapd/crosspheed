import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

const UseRefEx = () => {
	// const input = useRef<any>(null)
	// const [value, setValue] = useState<number | string>(0)

	// const handleClick = () => {
	// 	if (input.current) {
	// 		input.current.value = ''
	// 		setValue('')
	// 	}
	// }
	// return (
	// 	<div>
	// 		<p>현재 value는 {value} 입니다.</p>
	// 		<input
	// 			type="text"
	// 			ref={input}
	// 			onChange={() => {
	// 				setValue(input.current?.value)
	// 				console.log(input.current.value)
	// 			}}
	// 		/>

	// 		<button type="button" onClick={handleClick}>
	// 			Click to Reset
	// 		</button>
	// 	</div>
	// )
	const inputRef = useRef<HTMLInputElement | null>(null)

	const { register } = useForm({
		defaultValues: {
			inputValue: 0
		}
	})
	const { ref, ...rest } = register('inputValue')

	useEffect(() => {
		if (inputRef.current !== null) {
			console.log('inputRef : ', inputRef.current.valueOf)
		}
	}, [inputRef])

	return (
		<div>
			<button onClick={() => console.log(inputRef.current?.value)}>1</button>
			<br />
			<input
				type="number"
				{...rest}
				ref={(e) => {
					ref(e)
					inputRef.current = e
				}}
			/>
		</div>
	)
}

export default UseRefEx
