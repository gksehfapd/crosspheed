import Layout from '@/components/layout'

export default function ForTime() {
	const [timeMinute, setMinuteTime] = useState('00')
	const [timeSecond, setSecondTime] = useState('00')
	return (
		<Layout title="FOR TIME" canGoBack isCenter>
			<div className="bg-red-200 w-full h-full flex flex-col justify-between items-center">
				<div>1</div>
				<span className="font-['DIGI'] w-full h-20 flex justify-center items-center align-middle text-6xl">
					<span className="w-20 h-20 flex justify-center items-center">{timeMinute}</span>
					<span className="w-12 h-20 flex justify-center items-center">:</span>
					<span className="w-20 h-20 flex justify-center items-center">{timeSecond}</span>
				</span>
				<div>3</div>
			</div>
		</Layout>
	)
}
