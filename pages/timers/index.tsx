import Layout from '@/components/layout'
import TimerBanner from '@/components/timer-banner'
import crossfit01 from '@/public/crossfit01.jpg'
import crossfit02 from '@/public/crossfit02.jpg'
import crossfit03 from '@/public/crossfit03.jpg'
import crossfit04 from '@/public/crossfit04.jpg'
import crossfit05 from '@/public/crossfit05.jpg'
import crossfit06 from '@/public/crossfit06.jpg'
//TODO: AWS사용해서 src로 바꾸기

export default function Timers() {
	return (
		<Layout title="TIMERS">
			<div className="flex flex-col items-center justify-center">
				<TimerBanner title="FOR TIME" imageName={crossfit01} />
				<TimerBanner title="AMRAP" imageName={crossfit02} />
				<TimerBanner title="EMOM" imageName={crossfit03} />
				<TimerBanner title="TABATA" imageName={crossfit04} />
				<TimerBanner title="CLOCK" imageName={crossfit05} />
				<TimerBanner title="VIDEO" imageName={crossfit06} />
			</div>
		</Layout>
	)
}
