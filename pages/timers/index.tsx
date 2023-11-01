import Layout from '@/components/layout'
import Timer from '@/components/timer'

export default function Timers() {
	return (
		<Layout title="TIMERS">
			<div className="flex flex-col items-center justify-center">
				<Timer title="FOR TIME" />
				<Timer title="AMRAP" />
				<Timer title="EMOM" />
				<Timer title="TABATA" />
				<Timer title="CLOCK" />
				<Timer title="VIDEO" />
			</div>
		</Layout>
	)
}
