interface TimerProps {
	title: string
}

export default function Timer({ title }: TimerProps) {
	return (
		<div className="bg-blue-200 w-full flex justify-center items-center h-40 cursor-pointer mb-5 font-semibold text-2xl">
			{title}
		</div>
	)
}
