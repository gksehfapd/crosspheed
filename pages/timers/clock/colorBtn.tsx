type BtnColor = 'bg-red-500' | 'bg-green-500' | 'bg-blue-500' | 'bg-black'

interface ButtonProps {
	btnColor: BtnColor
	[key: string]: any
}

export default function ColorBtn({ onClick, btnColor }: ButtonProps) {
	return (
		<div className="w-5 h-5 flex justify-center items-center" onClick={onClick}>
			<div
				className={`${btnColor} w-4 h-4 rounded-full hover:cursor-pointer hover:w-5 hover:h-5`}
			/>
		</div>
	)
}
