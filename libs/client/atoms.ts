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
	key: 'setAmrapMinState',
	default: 0
})

export const setAmrapSecState = atom({
	key: 'setAmrapSecState',
	default: 0
})

export const setAmrapUpDownState = atom({
	key: 'setAmrapUpDownState',
	default: 'up'
})

export const setEmomMinState = atom({
	key: 'setEmomMinState',
	default: 1
})

export const setEmomRoundState = atom({
	key: 'setEmomRoundState',
	default: 1
})
