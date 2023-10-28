import { searchState } from '@/libs/client/atoms'
import { cls } from '@/libs/client/utils'
import { useState } from 'react'
import { useSetRecoilState } from 'recoil'

export default function SearchBar() {
	const setterFn = useSetRecoilState(searchState)
	const [search, setSearch] = useState('')
	const [focused, setFocused] = useState(false)

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value)
		setterFn(event.target.value)
	}

	const onFocus = () => {
		setFocused(true)
	}

	const cancle = () => {
		setFocused(false)
		setSearch('')
		setterFn('')
	}

	const test = () => {
		setFocused((prev) => !prev)
	}

	return (
		<div className="flex items-center">
			<span className="material-symbols-outlined fixed ml-1" onClick={test}>
				search
			</span>
			<input
				type="text"
				placeholder="Search"
				value={search}
				onChange={onChange}
				className={cls(
					focused ? 'bg-slate-200' : 'bg-slate-100',
					' w-full py-1 pl-8 rounded-lg outline-none'
				)}
				onFocus={onFocus}
			/>
			{focused ? (
				<button
					className="text-xs p-2 animate-fade-left animate-duration-200"
					onClick={cancle}
				>
					Cancle
				</button>
			) : null}
		</div>
	)
}
