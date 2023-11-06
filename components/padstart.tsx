import { cls } from '@/libs/client/utils'

interface PadstartProps {
	text: number | string
	textColor?: string
	narrow?: boolean
}

export default function Padstart({ text, textColor, narrow }: PadstartProps) {
	return (
		<span
			className={cls(
				textColor ? textColor : '',
				narrow
					? 'w-12 h-20 flex justify-center items-center'
					: 'w-20 h-20 flex justify-center items-center'
			)}
		>
			{typeof text === 'number' ? String(text).padStart(2, '0') : text}
		</span>
	)
}
