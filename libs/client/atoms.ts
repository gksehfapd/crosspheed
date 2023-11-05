import { atom } from 'recoil'

export const searchState = atom({
	key: 'searchState',
	default: ''
})

export const countDownState = atom({
	key: 'countDownState',
	default: false
})
