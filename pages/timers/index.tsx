import Layout from '@/components/layout'
import Timer from '@/components/timer'
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
				<Timer title="FOR TIME" imageName={crossfit01} />
				<Timer title="AMRAP" imageName={crossfit02} />
				<Timer title="EMOM" imageName={crossfit03} />
				<Timer title="TABATA" imageName={crossfit04} />
				<Timer title="CLOCK" imageName={crossfit05} />
				<Timer title="VIDEO" imageName={crossfit06} />
			</div>
		</Layout>
	)
}
