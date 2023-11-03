import Countdown from '@/components/countdown'
import Layout from '@/components/layout'
import { useEffect, useState } from 'react'

export default function ForTime() {
	const [timeMinute, setMinuteTime] = useState('00')
	const [timeSecond, setSecondTime] = useState('00')

	return (
		<Layout title="FOR TIME" canGoBack isCenter>
			<Countdown>
				<span className="w-20 h-20 flex justify-center items-center">{timeMinute}</span>
				<span className="w-12 h-20 flex justify-center items-center">:</span>
				<span className="w-20 h-20 flex justify-center items-center">{timeSecond}</span>
			</Countdown>
		</Layout>
	)
}
