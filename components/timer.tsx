import Image from 'next/image'
import Link from 'next/link'

interface TimerProps {
	title: string
	imageName: any
	//TODO: AWS사용해서 src로 바꾸기
}

export default function TimerBanner({ title, imageName }: TimerProps) {
	return (
		<Link
			href={`/timers/${title === 'FOR TIME' ? 'fortime' : title.toLowerCase()}`}
			className="relative bg-blue-200 w-full flex justify-center items-center h-40 cursor-pointer mb-5 font-semibold text-2xl"
		>
			<h1 className="z-10 text-white">{title}</h1>

			<Image fill src={imageName} alt="" className="absolute h-40 w-full grayscale" />
		</Link>
	)
}
