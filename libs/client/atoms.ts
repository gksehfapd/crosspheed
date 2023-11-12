import { atom } from 'recoil'

export const searchState = atom({
	key: 'searchState',
	default: ''
})

export const countDownState = atom({
	key: 'countDownState',
	default: false
})

export const setState = atom({
	key: 'setState',
	default: false
})

export const setAmrapMinState = atom({
	key: 'setAmrapMin',
	default: 0
})

export const setAmrapSecState = atom({
	key: 'setAmrapSec',
	default: 0
})

export const setAmrapUpDownState = atom({
	key: 'setAmrapUpDown',
	default: 'up'
})
